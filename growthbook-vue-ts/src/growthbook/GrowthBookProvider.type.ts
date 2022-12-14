import { GrowthBook } from "@growthbook/growthbook";

/**
 * The provided GrowthBook would be null in the event that the API call to the features endpoint fails.
 */
export type GrowthBookProvider = {
  init: () => Promise<GrowthBook | null>;
};
