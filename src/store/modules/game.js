// store/modules/games.js
import axios from "axios";

export default {
  state: {
    games: [],
    isLoading: true
  },
  mutations: {
    SET_GAMES(state, games) {
      state.games = games;
    },
    SET_LOADING(state, isLoading) {
      state.isLoading = isLoading;
    }
  },
  actions: {
    async fetchGames({ commit }) {
      try {
        commit("SET_LOADING", true);
        const response = await axios.get(`${import.meta.env.VITE_URL}games`, {
          headers: {
            "X-RapidAPI-Key": "0576e4175fmsh5188713eb875707p1ba512jsn417b11fc2228",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com"
          }
        });

        commit("SET_GAMES", response.data);
        commit("SET_LOADING", false);
      } catch (error) {
        console.error("Error fetching games:", error);
        commit("SET_LOADING", false);
      }
    }
  },
  getters: {
    games(state) {
      return state.games;
    },
    isLoading(state) {
      return state.isLoading;
    }
  }
};
