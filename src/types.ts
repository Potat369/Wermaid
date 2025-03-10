export interface Game {
  id: string;
  slug: string;
  name: string;
  description: string;
  genres: string[];
  links: string[];
  releaseDate: string;
  pictureUrl: string;
  ratings: Rating[];
}

export interface Rating {
  id: string;
  gameId: string;
  userId: string;
  rating: number;
  comment?: string;
}
