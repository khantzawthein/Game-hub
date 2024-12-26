import useData from "./useData-DESKTOP-0CFRKIJ";

interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => useData<Genre>('/genres');

export default useGenres;