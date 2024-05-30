// src/hooks/GetGenre.ts
import { ref } from "vue";
import axios from "axios";

export function useGetGenre() {
  const genre_data = ref([]);
  const isLoading = ref(false);

  const GetGenre = async (platform, genre, sort_by) => {
    isLoading.value = true;
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_URL}games?platform=${platform}&category=${genre}&sort-by=${sort_by}`,
        {
          headers: {
            "X-RapidAPI-Key":
              "0576e4175fmsh5188713eb875707p1ba512jsn417b11fc2228",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
          }
        }
      );
      genre_data.value = response.data;

    } catch (e) {
      console.error(e);
    } finally {
      isLoading.value = false;
    }
  };

  return { genre_data, isLoading, GetGenre };
}
