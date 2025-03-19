import { ref } from "vue";
import axios from "axios";

import { defineStore  } from "pinia"
import type { Game } from "@/types/Game";

export const useGetIdHeroes = defineStore("useGetIdHeroes", () => {

  const get_id = ref<Game[]>([]);
  const isLoading = ref(false)
  const GetId = async (id: Game) => {
    try {
      isLoading.value = true
      const response = await axios.get(
        `${import.meta.env.VITE_URL}game?id=${id}`,
        {
          headers: {
            "X-RapidAPI-Key":
              "0576e4175fmsh5188713eb875707p1ba512jsn417b11fc2228",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
          }
        }
      );
      get_id.value = response.data;
      console.log(response.data); 
      isLoading.value = false
    } catch (e) {

        console.log(e);
        isLoading.value = false
    }
  };


  return { get_id, GetId, isLoading  };

  
})