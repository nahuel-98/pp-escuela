const initialState = {
    valuesNotes: [],
    allNotes:[]
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        // case 'ADD_NOTE':
        //     return {
        //         ...state, valuesNotes: state.valuesNotes.concat(action.payload) 
        //     }
        // case 'GET_NOTES':
        //     return {
        //         ...state, 
        //         allNotes: action.payload
        //       }
        default:
            return state;
    }
}