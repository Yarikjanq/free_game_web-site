import { onMounted, ref } from "vue";
import axios from "axios";

export function GetPopular() {
  const get_popular = ref([]);
  const isLoading = ref(true); 
  const GetPopular = async () => {
    try {
        isLoading.value = true
      const response = await axios.get(
        `${import.meta.env.VITE_URL}` + "games?sort-by=relevance",
        {
          headers: {
            "X-RapidAPI-Key":
              "0576e4175fmsh5188713eb875707p1ba512jsn417b11fc2228",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
          }
        }
      );
      get_popular.value = response.data;
      console.log(response.data);
        isLoading.value = false
    } catch (e) {

        console.log(e);
        isLoading.value = false;
    }
  };

  onMounted(GetPopular);
  return { get_popular, isLoading  };
}
