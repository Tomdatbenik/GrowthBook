/**
 * Configuration for the options passed to the app.use() call
 */
export type GrowthBookVuePluginConfig = {
  /**
   * The endpoint that your features are hosted on. Get this from the Environments -> SDK Endpoints section
   */
  featuresEndpoint: string;

  /**
   * Allows you to use the Chrome DevTools Extension to test/debug.
   * Learn more: https://docs.growthbook.io/tools/chrome-extension
   */
  enableDevMode: boolean;
};
