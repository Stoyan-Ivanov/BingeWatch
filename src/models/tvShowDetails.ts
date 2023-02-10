import type TVShowActor from "./tvShowActor";

/**
 * 📃 Model representing a wrapper around the TV show details (cast, seasons, etc.)
 */
export interface TVShowDetails {
  cast: TVShowActor[],
  seasonsCount: number
}