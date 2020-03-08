import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = []

const addIngredient = (state, action) => {
    debugger
    let newState = [...state.fighterz]
    newState.push(action.personnage);
    return newState;
}

const initFighterz = ( state, action ) => {
    return action.fighterz;
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_FIGHTERZ: return addIngredient( state, action );
        // case actionTypes.REMOVE_FIGHTERZ: return removeIngredient(state, action);
        case actionTypes.INIT_FIGHTERZ: return initFighterz(state, action);    
        // case actionTypes.FETCH_FIGHTERZ_FAILED: return fetchIngredientsFailed(state, action);
        default: return state;
    }
};

export default reducer;