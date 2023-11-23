export type OMDB_Media = {
  Title: String;
  Year: String;
  Rated?: String;
  Released?: String;
  Runtime?: String;
  Genre?: String;
  Director?: String;
  Writer?: String;
  Actors?: String;
  Plot?: String;
  Language?: String;
  Country?: String;
  Awards?: String;
  Poster?: String;
  Ratings?: Array<Rating>;
  Metascore?: String;
  imdbRating?: String;
  imdbVotes?: String;
  imdbID: String;
  Type: String;
  totalSeasons?: String;
};

type Rating = {
  Source: String;
  Value: String;
};

export type Search = {
  title: String;
  page: Number;
};
