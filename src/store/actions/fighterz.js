import * as actionTypes from './actionTypes';
import axios from 'axios';

const initFighterz = (fighterz) => {
    return {type: actionTypes.INIT_FIGHTERZ, fighterz};
}

const getPersonnage = (personnage) => {
    return {type: actionTypes.GET_FIGHTERZ_BY_ID, personnage}
}

export const addFighterz = (fighterzPersonnage) => {
    return dispatch => {
        axios.post( 'https://react-dbfz.firebaseio.com/fighterz.json', fighterzPersonnage)
        .then(response => {
            fighterzPersonnage['id'] = response.data.name;
            dispatch({type: actionTypes.ADD_FIGHTERZ, personnage: fighterzPersonnage});
            return response;
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
        return axios.get( 'https://react-dbfz.firebaseio.com/fighterz.json' )
            .then( response => {
                const keys = Object.keys(response.data);
                let fighterz = [];
                keys.forEach(k => {
                    let currentFighterz = response.data[k];
                    currentFighterz["id"] = k;
                    fighterz.push(currentFighterz)
                });
               dispatch(initFighterz(fighterz));
               return response;
            } )
            .catch( error => {
                console.error("get init fighterz list", error);
            } );
    };
};

export const getPersonnageById = (id) => {
    return dispatch => {
        return axios.get( 'https://react-dbfz.firebaseio.com/fighterz.json/'+id )
            .then( response => {
                debugger;
               dispatch(getPersonnage(response.data));
            } )
            .catch( error => {
                console.error("get fighterz "+id, error);
            } );
    };
}