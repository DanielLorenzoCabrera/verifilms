import { defineStore } from "pinia";
import type { OMDB_Media, Search } from "~/types/Media";

interface MediaStore {
  filmsAndSeries: Array<OMDB_Media>;
  totalPages: number;
  mediaSelected: OMDB_Media | undefined;
  search: Search;
  loading: boolean;
}

export const useMediaStore = defineStore("Media", {
  state: () =>
    ({
      filmsAndSeries: [],
      totalPages: 1,
      mediaSelected: undefined,
      search: {
        title: "",
        page: 1,
      },
      loading: false,
    } as MediaStore),
  actions: {
    async searchMediaByTitle(title: String, page: number = 1): Promise<void> {
      this.setLoading(true);
      this.setSearch({ title, page });
      const { Search, totalResults } = await this.getOMDBMedia({
        s: title,
        page,
      });
      this.setFilmsAndSeries(Search);
      this.setTotalPages(totalResults, 10);
      this.setLoading(false);
    },
    async searchMediaById(id: string) {
      this.setLoading(true);
      const media = await this.getOMDBMedia({
        i: id,
      });
      this.setMediaSelected(media as OMDB_Media)
      this.setLoading(false);
    },
    async getOMDBMedia(params: Object) {
      this.setLoading(false);
      const config = useRuntimeConfig();
      const { baseURL, APIKey }: any = config.public;
      const response = await $fetch("/", {
        baseURL,
        params: { apikey: APIKey, ...params },
        server: false,
      });
      this.setLoading(true);
      return response;
    },
    setFilmsAndSeries(filmsAndSeries: Array<OMDB_Media> = []): void {
      this.filmsAndSeries = [...filmsAndSeries];
    },
    setSearch(search: Search) {
      this.search = { ...search };
    },
    setLoading(loading: boolean) {
      this.loading = loading;
    },
    setTotalPages(totalResults: number, resultsPerPage: number) {
      this.totalPages = Math.round(totalResults / resultsPerPage);
    },
    setMediaSelected(media: OMDB_Media) {
      this.mediaSelected = media;
    },
  },
});
