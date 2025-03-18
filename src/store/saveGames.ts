import { defineStore } from "pinia";
import { onMounted, ref } from "vue";
    export const useSaveGames = defineStore("saveProductStore", () => {
        let savedGames = ref([]);
        const loadSavedGames = () => {
            savedGames.value = JSON.parse(localStorage.getItem("games") || "[]");
          };
          const toggleGames  = (fruit) => {
            savedGames.value = JSON.parse(localStorage.getItem("games") || "[]");
    
            const isFavourite = savedGames.value?.some((item) => item.id === fruit.id);
          
            if (isFavourite) {
                savedGames.value = savedGames.value.filter(
                (item) => item.id !== fruit.id
              );
         
            } else { 
                savedGames.value?.push(fruit);
    
            }
            localStorage.setItem("games", JSON.stringify(savedGames.value));
       
          }
   
          onMounted(() => {
            loadSavedGames()
          })

          return{
            toggleGames,
            savedGames
          }
    })