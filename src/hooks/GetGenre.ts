// src/hooks/GetGenre.ts
import {  ref } from "vue";
import axios from "axios";
import { defineStore } from "pinia"
import type { Game } from "@/types/Game";

export const useGetGenre = defineStore("useGetGenre", ()=> {

  const genre_data = ref<Game[]>([]);
  const isLoading = ref(false);

  const GetGenre = async (platform: string, genre: string, sort_by: string) => {
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

  
})
