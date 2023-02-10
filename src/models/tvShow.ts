import type Image from "@/models/image";

/**
 * 📃 Model representing a single TV show
 */
export default interface TVShow {
  id: number;
  name: string;
  summary: string;
  premiered: string;
  genres: string[];
  averageRuntimeMinutes: number;
  averageRating: number;
  officialWebsite: string;
  image: Image
}