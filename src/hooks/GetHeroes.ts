import { onMounted, ref } from "vue";
import axios from "axios";

export function GetId() {
  const get_id = ref([]);

  const GetId = async (id) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_URL} + game?id=${id}`,
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

    } catch (e) {

        console.log(e);
 
    }
  };

  onMounted(GetId);
  return { get_id  };
}
