export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  description: string;
  ingredients: string[];
  shades: Shade[];
  category: string;
  isBestSeller: boolean;
  isNew: boolean;
  stock: number;
}

export interface Shade {
  id: string;
  name: string;
  color: string;
  image: string;
}

export interface CartItem {
  product: Product;
  shade: Shade;
  quantity: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
}
