import { defineStore } from "pinia";
import type { OMDB_Media, Search } from "~/types/Film";

interface FilmStore {
  filmsAndSeries: Array<OMDB_Media>;
  mediaSelected: OMDB_Media | null;
  search: Search;
}

export const useFilmStore = defineStore("Film", {
  state: () =>
    ({
      filmsAndSeries: [],
      mediaSelected: null,
      search: {
        title: "",
        page: 1,
      },
    } as FilmStore),
  actions: {
    async searchMedia(): Promise<void> {
    
    },
    setFilmsAndSeries(filmsAndSeries: Array<OMDB_Media>): void {
      this.filmsAndSeries = [...filmsAndSeries];
    },
  },
});
