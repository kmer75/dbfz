import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
   fighterz: [],
   editedPersonnage: {},
   isLoading: false
}

const addPersonnage = (state, action) => {
    let updatedState = {...state};
    updatedState.editedPersonnage = action.personnage;
    updatedState.fighterz.push(action.personnage);
    return updatedState;
}

const editPersonnage = (state, action) => {
    let updatedState = {...state};
    const index = updatedState.fighterz.findIndex(x => x.id === action.personnage.id);
    updatedState.fighterz[index] = action.personnage;
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

const setLoading = (state, action) => {
    let updatedState = {...state};
    updatedState.isLoading = action.isLoading;
    return updatedState;
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_FIGHTERZ: return addPersonnage( state, action );
        case actionTypes.EDIT_FIGHTERZ: return editPersonnage( state, action );
        case actionTypes.GET_FIGHTERZ_BY_ID: return getPersonnage( state, action );
        // case actionTypes.REMOVE_FIGHTERZ: return removeIngredient(state, action);
        case actionTypes.INIT_FIGHTERZ: return initFighterz(state, action);    
        // case actionTypes.FETCH_FIGHTERZ_FAILED: return fetchIngredientsFailed(state, action);
        case actionTypes.SET_LOADING: return setLoading(state, action);
        
        default: return state;
    }
};

export default reducer;