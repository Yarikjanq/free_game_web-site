export default {
    state: {
        save_game: [],
        is_saved: false
    },
    mutations: {
        ADD_GAME(state, game) {
            state.save_game.push(game);
        },
        REMOVE_GAME(state, gameId) {
            state.save_game = state.save_game.filter(savedGame => savedGame.id !== gameId);
        }
    },
    actions: {
        toggleGame({ commit, state }, game) {
            const existingGame = state.save_game.find(savedGame => savedGame.id === game.id);
            if (existingGame) {
                commit('REMOVE_GAME', game.id);
            } else {
                commit('ADD_GAME', game);
            }
        }
    },
    getters: {
        save_game(state) {
            return state.save_game;
        },
        isGameSaved: (state) => (gameId) => {
            return state.save_game.some(savedGame => savedGame.id === gameId);
        }
    }
}
