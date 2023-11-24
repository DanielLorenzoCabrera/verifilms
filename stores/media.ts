import { defineStore } from "pinia";
import type { OMDB_Media, Search } from "~/types/Media";

interface MediaStore {
  filmsAndSeries: Array<OMDB_Media>;
  mediaSelected: OMDB_Media | null;
  search: Search;
  loading: boolean;
}

export const useMediaStore = defineStore("Media", {
  state: () =>
    ({
      filmsAndSeries: [],
      mediaSelected: null,
      search: {
        title: "",
        page: 1,
      },
      loading: false,
    } as MediaStore),
  actions: {
    async searchMediaByTitle(title: String): Promise<void> {
      this.setLoading(true)
      this.setNewSearchTitle(title);
      const Search = await this.getOMDBMedia({s: title})
      this.setFilmsAndSeries(Search);
      this.setLoading(false)
    },
    async getOMDBMedia(params: Object){
      this.setLoading(false)
      const config = useRuntimeConfig();
      const { baseURL, APIKey }: any = config.public;
      const { Search } = await $fetch("/", {
        baseURL,
        params: { apikey: APIKey, ...params },
        server: false,
      });
      this.setLoading(true)
      return Search
    },
    setFilmsAndSeries(filmsAndSeries: Array<OMDB_Media> = []): void {
      this.filmsAndSeries = [...filmsAndSeries];
    },
    setNewSearchTitle(title: String) {
      this.search = { title, page: 1 };
    },
    setSearchPage(page: number) {
      this.search = { ...this.search, page };
    },
    setLoading(loading: boolean) {
      this.loading = loading;
    },
  },
});
