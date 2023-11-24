
export const useOMDBAPI = async (
  opts: any = {}
): Promise<any> => {
  const config = useRuntimeConfig();
  const {baseURL, APIKey}: any = config.public;
  const { params }: any = opts;
  const { data, error } = await useFetch("/", {
    baseURL,
    params: { apikey: APIKey, ...params },
    server: false,
  });
  return { data, error };
};
