import * as actionTypes from './actionTypes';
import axios from 'axios';
import {fighterzRef} from '../../components/Firebase/firebase.js';

const setModalConfigHelper = (isOpen, title = '', text = '', isError = false, isCallback = false, callback = null) => {
    const config = {isOpen, title, text, isError, isCallback, callback };
    return config;
}

export const setModalConfig = (config) => {
    return {type: actionTypes.SET_MODAL_CONFIG, config}
}

const setLoading = (isLoading) => {
    return {type: actionTypes.SET_LOADING, isLoading};
}

const initFighterz = (fighterz) => {
    return {type: actionTypes.INIT_FIGHTERZ, fighterz};
}

const getPersonnage = (personnage) => {
    return {type: actionTypes.GET_FIGHTERZ_BY_ID, personnage}
}

export const addFighterz = (fighterzPersonnage, callBack) => 
    (dispatch, getState) => {
        dispatch(setLoading(true))
        return fighterzRef().push(fighterzPersonnage)
        .then(snapshot => {
            const key = snapshot.key;
            fighterzPersonnage['id'] = key;
            const config = setModalConfigHelper(true, "Enregistrement du Fighterz", "L'enregistrement s'est effectué avec succès", false, true, callBack);
            dispatch(setModalConfig(config));
            dispatch({type: actionTypes.ADD_FIGHTERZ, personnage: fighterzPersonnage});
            return fighterzPersonnage;
        })
        .catch((err) => {
            const config = setModalConfigHelper(true, `Enregistrement du Fighterz a échoué`, ` Voici la raison -> ${err.message}`, true);
            dispatch(setModalConfig(config));
            console.err(err);
        })
        .finally(()=> dispatch(setLoading(false)));
};


export const editFighterz = (fighterzPersonnage) => 
     (dispatch, getState) => {
        dispatch(setLoading(true))
        return fighterzRef(fighterzPersonnage.id).set(fighterzPersonnage)
        .then(response => {
            const config = setModalConfigHelper(true, "Enregistrement du Fighterz", "L'enregistrement s'est effectué avec succès");
            dispatch(setModalConfig(config));
            dispatch({type: actionTypes.EDIT_FIGHTERZ, personnage: fighterzPersonnage});
            return response;
        })        
        .catch((err) => {
            const config = setModalConfigHelper(true, `Enregistrement du Fighterz a échoué`, ` Voici la raison -> ${err.message}`, true);
            dispatch(setModalConfig(config));
            console.err(err);
        })
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
        .catch((err) => {
            const config = setModalConfigHelper(true, `Récupération des Fighterz a échoué -> ${err.message}`, "L'enregistrement a échoué. ", true);
            dispatch(setModalConfig(config));
            console.err(err);
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
        .catch((err) => {
            const config = setModalConfigHelper(true, `Récupération du Fighterz a échoué`, `Voici l'erreur -> ${err.message}`, true);
            dispatch(setModalConfig(config));
            console.err(err);
        })
        .finally(()=> dispatch(setLoading(false)));
    }