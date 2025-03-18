// store/index.js
import { createStore } from "vuex";
import saveGame from "./modules/saveGame";
export default createStore({
  modules: {
    saveGame: saveGame,
  },
});
