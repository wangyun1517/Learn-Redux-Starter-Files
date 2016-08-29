// a reducer takes into two things
export default (state = [], action)=> {
    switch (action.type) {
        case 'INCREMENT_LIKES' :
            console.log('INCREMENT_LIKES');
            const i = action.index;
            const currentState = state[i];
            return [...state.slice(0, i),
                {...currentState, likes: currentState.likes + 20},
                ...state.slice(i + 1)];
        default :
            return state;
    }
};