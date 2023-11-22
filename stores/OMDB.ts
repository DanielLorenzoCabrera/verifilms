import { defineStore } from "pinia";
import type { OMDB_Media, Search } from "~/types/Media";

interface MediaStore {
  filmsAndSeries: Array<OMDB_Media>;
  mediaSelected: OMDB_Media | null;
  search: Search;
}

export const useOMDBStore = defineStore("Media", {
  state: () =>
    ({
      filmsAndSeries: [],
      mediaSelected: null,
      search: {
        title: "",
        page: 1,
      },
    } as MediaStore),
  actions: {
    async searchMedia(search: String): Promise<void> {
      const { data, error } = await useOMDBAPI({ params: { s: search } });
      const { Search } = data.value;
      this.filmsAndSeries = Search;
    },
    setFilmsAndSeries(filmsAndSeries: Array<OMDB_Media>): void {
      this.filmsAndSeries = [...filmsAndSeries];
    },
  },
});
