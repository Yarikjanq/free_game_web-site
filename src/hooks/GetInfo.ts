import { onMounted, ref } from "vue";
import axios from "axios";
import { defineStore } from "pinia"

export const useGetGames = defineStore("useGetGames", () => {

  const get_info = ref([]);
  const isLoading = ref(true); 
  const GetInfo = async () => {
    try {
        isLoading.value = true
      const response = await axios.get(
        `${import.meta.env.VITE_URL}` + "games",
        {
          headers: {
            "X-RapidAPI-Key":
              "0576e4175fmsh5188713eb875707p1ba512jsn417b11fc2228",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
          }
        }
      );
      get_info.value = response.data;
      console.log(response.data);
        isLoading.value = false
    } catch (e) {

        console.log(e);
        isLoading.value = false;
    }
  };

  onMounted(() => {
    GetInfo()
  })



return {
  GetInfo, 
  get_info,
  isLoading
}


})

