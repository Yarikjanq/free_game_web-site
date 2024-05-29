// src/hooks/GetGenre.ts
import { ref } from "vue";
import axios from "axios";

export function useGetGenre() {
  const genre_data = ref([]);
  const isLoading = ref(false);

  const GetGenre = async (genre) => {
    isLoading.value = true;
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_URL}games?category=${genre}`,
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
//PLATFROM
export function useGetPlatform() {
  const plaftorm_data = ref([]);
  const isLoading = ref(false);

  const GetPlatform = async (platform) => {
    isLoading.value = true;
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_URL}games?platform=${platform}`,
        {
          headers: {
            "X-RapidAPI-Key":
              "0576e4175fmsh5188713eb875707p1ba512jsn417b11fc2228",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
          }
        }
      );
      plaftorm_data.value = response.data;

    } catch (e) {
      console.error(e);
    } finally {
      isLoading.value = false;
    }
  };

  return { plaftorm_data, isLoading, GetPlatform };
}
