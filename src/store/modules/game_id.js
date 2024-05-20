// store/modules/games.js
import axios from "axios";

export default {
  state: {
    game_id: [],
    isLoading_id: true
  },
  mutations: {
    SET_GAMES_ID(state, game_id) {
      state.game_id = game_id;
    },
    SET_LOADING_ID(state, isLoading_id) {
      state.isLoading_id = isLoading_id;
    }
  },
  actions: {
    async fetchGameById({ commit }, id) {
      try {
        commit("SET_LOADING_ID", true);
        const response = await axios.get(`${import.meta.env.VITE_URL}game?id=${id}`,{
          headers: {
            "X-RapidAPI-Key": "0576e4175fmsh5188713eb875707p1ba512jsn417b11fc2228",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com"
          }
        });
            console.log(response.data);
        commit("SET_GAMES_ID", response.data);
        commit("SET_LOADING_ID", false);
      } catch (error) {
        console.error("Error fetching games:", error);
        commit("SET_LOADING_ID", false);
      }
    }
  },
  getters: {
    game_id(state) {
      return state.game_id;
    },
    isLoading_id(state) {
      return state.isLoading_id;
    }
  }
};
