// store/index.js
import { createStore } from "vuex";
import gamesModule from "./modules/game";
import game_idModule from "./modules/game_id"
import saveGame from "./modules/saveGame";
export default createStore({
  modules: {
    games: gamesModule,
    game_id:game_idModule,
    saveGame:saveGame
  }
});
