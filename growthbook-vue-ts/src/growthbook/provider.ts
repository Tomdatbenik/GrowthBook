import type { App, InjectionKey } from "vue";
import { FeatureDefinition, GrowthBook } from "@growthbook/growthbook";
import { GrowthBookVuePluginConfig } from "./GrowthBookVuePluginConfig.type";
import { GrowthBookProvider } from "./GrowthBookProvider.type";

export const growthBookKey = Symbol() as InjectionKey<GrowthBookProvider>;

const getFeaturesJson = async (
  featuresEndpoint: string
): Promise<{ features: Record<string, FeatureDefinition> }> => {
  const response = await fetch(featuresEndpoint);
  return await response.json();
};

export const growthBookPlugin = {
  install(
    app: App,
    { featuresEndpoint, enableDevMode = false }: GrowthBookVuePluginConfig
  ) {
    let growthBook: GrowthBook | null = null;

    const init = async (): Promise<GrowthBook | null> => {
      if (growthBook) {
        return growthBook;
      }

      try {
        const json = await getFeaturesJson(featuresEndpoint);

        growthBook = new GrowthBook({
          enableDevMode,
        });

        growthBook.setFeatures(json.features);
      } catch (e) {
        console.error("GrowthBook Vue plugin error", e);
      }

      return growthBook;
    };

    app.provide<GrowthBookProvider>(growthBookKey, {
      init,
    });
  },
};
