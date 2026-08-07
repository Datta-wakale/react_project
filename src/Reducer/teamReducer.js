export const initialState = {
    selectedPlayers: []
};

export const teamReducer = (state, action) => {

    switch (action.type) {
        case "ADD_PLAYER":
            const exists = state.selectedPlayers.some(
                player => player.id === action.payload.id
            );

            if (exists) {
                return state;
            }
            return {
                ...state,
                selectedPlayers: [
                    ...state.selectedPlayers,
                    action.payload
                ]
            };

        case "REMOVE_PLAYER":
            return {
                ...state,
                selectedPlayers:
                    state.selectedPlayers.filter(player =>
                        player.id !== action.payload)
            };

        case "CLEAR_TEAM":
            return {
                selectedPlayers: []
            };

        default:
            return state;
    }
};