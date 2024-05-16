// store/index.js
import { createStore } from "vuex";
import gamesModule from "./modules/game";

export default createStore({
  modules: {
    games: gamesModule
  }
});
