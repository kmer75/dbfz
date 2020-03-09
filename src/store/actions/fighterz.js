import * as actionTypes from './actionTypes';
import axios from 'axios';
import {fighterzRef} from '../../components/Firebase/firebase.js';

const initFighterz = (fighterz) => {
    return {type: actionTypes.INIT_FIGHTERZ, fighterz};
}

const getPersonnage = (personnage) => {
    return {type: actionTypes.GET_FIGHTERZ_BY_ID, personnage}
}

export const addFighterz = (fighterzPersonnage) => {
    return dispatch => {
        fighterzRef().push(fighterzPersonnage)//.set()
        .then(snapshot => {
            const key = snapshot.key;
            fighterzPersonnage['id'] = key;
            dispatch({type: actionTypes.ADD_FIGHTERZ, personnage: fighterzPersonnage});
            return fighterzPersonnage;
        }).catch(err => {console.log("err", err)});
};
};

export const editFighterz = (fighterzPersonnage) => {
    return dispatch => {
        return axios.put( 'https://react-dbfz.firebaseio.com/fighterz.json/' + fighterzPersonnage.id, fighterzPersonnage)
        .then(response => {
            debugger;
            dispatch({type: actionTypes.EDIT_FIGHTERZ, personnage: fighterzPersonnage});
            return response;
        }).catch(err => {console.log("err", err)});
};
};

export const initFighterzList = () => {
    return dispatch => {
        fighterzRef().on("value", snapshot => {
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
        });
    };
};

export const getPersonnageById = (id) => {
    return dispatch => {
        return fighterzRef(id).on("value", snapshot => {
            const currentFighterz = snapshot.val();
            const key = snapshot.key;
            currentFighterz["id"] = key;
            dispatch(getPersonnage(currentFighterz));
        })
    };
}