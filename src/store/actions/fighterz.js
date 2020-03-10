import * as actionTypes from './actionTypes';
import axios from 'axios';
import {fighterzRef} from '../../components/Firebase/firebase.js';

const setLoading = (isLoading) => {
    return {type: actionTypes.SET_LOADING, isLoading};
}

const initFighterz = (fighterz) => {
    return {type: actionTypes.INIT_FIGHTERZ, fighterz};
}

const getPersonnage = (personnage) => {
    return {type: actionTypes.GET_FIGHTERZ_BY_ID, personnage}
}

export const addFighterz = (fighterzPersonnage) => 
    (dispatch) => {
        dispatch(setLoading(true))
        return fighterzRef().push(fighterzPersonnage)//.set()
        .then(snapshot => {
            const key = snapshot.key;
            fighterzPersonnage['id'] = key;
            dispatch({type: actionTypes.ADD_FIGHTERZ, personnage: fighterzPersonnage});
            return fighterzPersonnage;
        }).catch(err => {console.log("err", err)})
        .finally(()=> dispatch(setLoading(false)));
};


export const editFighterz = (fighterzPersonnage) => 
     dispatch => {
        dispatch(setLoading(true))
        return fighterzRef(fighterzPersonnage.id).set(fighterzPersonnage)
        .then(response => {
            console.log("edit response; ", response);
            dispatch({type: actionTypes.EDIT_FIGHTERZ, personnage: fighterzPersonnage});
            return response;
        }).catch(err => {console.log("err", err)})
        .finally(()=> dispatch(setLoading(false)));
    };


export const initFighterzList = () => 

    dispatch => {
        dispatch(setLoading(true))
        return fighterzRef().once("value")
        .then((snapshot) => {
            const response = snapshot.val();
            const keys = Object.keys(response);
                let fighterz = [];
                keys.forEach(k => {
                    let currentFighterz = response[k];
                    currentFighterz["id"] = k;
                    fighterz.push(currentFighterz)
                });
               dispatch(initFighterz(fighterz));
               return fighterz;
        })
        .finally(()=> dispatch(setLoading(false)));
    };


export const getPersonnageById = (id) => 
    (dispatch, getState) => {
    dispatch(setLoading(true))
    const storeState = getState();
        return fighterzRef(id).once("value") //once return a promise
        .then((snapshot) => {
            const currentFighterz = snapshot.val();
            const key = snapshot.key;
            currentFighterz["id"] = key;
            dispatch(getPersonnage(currentFighterz));
            return currentFighterz;
        })
        .finally(()=> dispatch(setLoading(false)));
    }