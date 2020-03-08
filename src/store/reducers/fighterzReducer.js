import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
   fighterz: [],
   editedPersonnage: {}
}

const addPersonnage = (state, action) => {
    let updatedState = {...state};
    updatedState.editedPersonnage = action.personnage;
    return updatedState;
}

const initFighterz = ( state, action ) => {
    let updatedState = {...state};
    updatedState.fighterz = action.fighterz;
    return updatedState;
};

const getPersonnage = (state, action) => {
    let updatedState = {...state};
    updatedState.editedPersonnage = action.personnage;
    return updatedState;
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_FIGHTERZ: return addPersonnage( state, action );
        case actionTypes.GET_FIGHTERZ_BY_ID: return getPersonnage( state, action );
        // case actionTypes.REMOVE_FIGHTERZ: return removeIngredient(state, action);
        case actionTypes.INIT_FIGHTERZ: return initFighterz(state, action);    
        // case actionTypes.FETCH_FIGHTERZ_FAILED: return fetchIngredientsFailed(state, action);
        default: return state;
    }
};

export default reducer;