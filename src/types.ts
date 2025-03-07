export interface Game {
  id: string;
  slug: string;
  name: string;
  description: string;
  genre: string;
  releaseDate: Date;
  pictureUrl: string;
  ratings: Array<Rating>;
}

export interface Rating {
  id: string;
  gameId: string;
  userId: string;
  rating: number;
  comment?: string;
}
