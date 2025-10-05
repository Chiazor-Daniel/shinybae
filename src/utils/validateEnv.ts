// Environment validation utility for Shopify integration
export interface EnvValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  config: {
    storeDomain: string;
    hasPublicToken: boolean;
    country: string;
    language: string;
    useShopifyCheckout: boolean;
  };
}

export const validateEnvironment = (): EnvValidationResult => {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Get environment variables
  const storeDomain = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN;
  const publicToken = import.meta.env.VITE_SHOPIFY_PUBLIC_ACCESS_TOKEN;
  const country = import.meta.env.VITE_SHOPIFY_COUNTRY || 'US';
  const language = import.meta.env.VITE_SHOPIFY_LANGUAGE || 'en';
  const useShopifyCheckout = import.meta.env.VITE_USE_SHOPIFY_CHECKOUT === 'true';

  // Validate store domain
  if (!storeDomain) {
    errors.push('VITE_SHOPIFY_STORE_DOMAIN is required');
  } else if (!storeDomain.includes('.myshopify.com')) {
    errors.push('VITE_SHOPIFY_STORE_DOMAIN must be a valid Shopify domain (e.g., https://your-store.myshopify.com)');
  } else if (!storeDomain.startsWith('https://')) {
    errors.push('VITE_SHOPIFY_STORE_DOMAIN must start with https://');
  }

  // Check public access token
  if (!publicToken) {
    warnings.push('VITE_SHOPIFY_PUBLIC_ACCESS_TOKEN is not set - some features may not work (inventory, metafields)');
  } else if (!publicToken.startsWith('shpat_')) {
    warnings.push('VITE_SHOPIFY_PUBLIC_ACCESS_TOKEN should start with "shpat_" - make sure you copied the public access token, not a private key');
  }

  // Validate country code
  const validCountries = ['US', 'CA', 'GB', 'AU', 'DE', 'FR', 'ES', 'IT', 'JP', 'NL', 'SE', 'DK', 'NO', 'FI'];
  if (country && !validCountries.includes(country.toUpperCase())) {
    warnings.push(`Country code "${country}" might not be supported. Common codes: ${validCountries.slice(0, 5).join(', ')}`);
  }

  // Validate language code
  const validLanguages = ['en', 'fr', 'de', 'es', 'it', 'ja', 'nl', 'sv', 'da', 'no', 'fi'];
  if (language && !validLanguages.includes(language.toLowerCase())) {
    warnings.push(`Language code "${language}" might not be supported. Common codes: ${validLanguages.slice(0, 5).join(', ')}`);
  }

  const config = {
    storeDomain: storeDomain || '',
    hasPublicToken: !!publicToken,
    country: country.toUpperCase(),
    language: language.toLowerCase(),
    useShopifyCheckout,
  };

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    config,
  };
};

export const logEnvironmentStatus = (): void => {
  const result = validateEnvironment();

  console.group('🛍️ Shopify Environment Status');

  if (result.isValid) {
    console.log('✅ Environment configuration is valid!');
  } else {
    console.log('❌ Environment configuration has errors:');
    result.errors.forEach(error => console.error(`  • ${error}`));
  }

  if (result.warnings.length > 0) {
    console.log('⚠️ Warnings:');
    result.warnings.forEach(warning => console.warn(`  • ${warning}`));
  }

  console.log('📋 Current configuration:');
  console.table(result.config);

  console.groupEnd();
};

// Helper function to get a user-friendly setup guide
export const getSetupInstructions = (): string[] => {
  const result = validateEnvironment();
  const instructions: string[] = [];

  if (!result.config.storeDomain) {
    instructions.push('1. Create a .env file in your project root');
    instructions.push('2. Add VITE_SHOPIFY_STORE_DOMAIN=https://your-store.myshopify.com');
  }

  if (!result.config.hasPublicToken) {
    instructions.push('3. Go to your Shopify admin → Apps → Headless');
    instructions.push('4. Create a storefront and copy the public access token');
    instructions.push('5. Add VITE_SHOPIFY_PUBLIC_ACCESS_TOKEN=your-token to .env');
  }

  if (instructions.length === 0) {
    instructions.push('✅ Your Shopify integration is ready to go!');
  }

  return instructions;
};

// Development helper - call this in your app during development
export const showEnvironmentHelp = (): void => {
  const instructions = getSetupInstructions();

  console.group('🚀 Shopify Setup Instructions');
  instructions.forEach(instruction => console.log(instruction));
  console.log('\n📖 For detailed setup guide, see SHOPIFY_SETUP.md');
  console.groupEnd();
};
