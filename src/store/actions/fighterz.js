import * as actionTypes from './actionTypes';
import axios from 'axios';

const initFighterz = (fighterz) => {
    return {type: actionTypes.INIT_FIGHTERZ, fighterz};
}

export const addFighterz = (fighterzPersonnage) => {
    return dispatch => {
        axios.post( 'https://react-dbfz.firebaseio.com/fighterz.json', fighterzPersonnage)
        .then(response => {
            fighterzPersonnage['id'] = response.data.name;
            dispatch({type: actionTypes.ADD_FIGHTERZ, personnage: fighterzPersonnage});
        }).catch(err => {console.log("err", err)});
};
};

export const editFighterz = (fighterzPersonnage) => {
    return dispatch => {
        dispatch ({type: actionTypes.ADD_FIGHTERZ, personnage: fighterzPersonnage});
    }
};

export const initFighterzList = () => {
    return dispatch => {
        // axios.post( 'https://react-dbfz.firebaseio.com/fighterz.json', {nom: "vegeta", race: "Saiyen", niveau: "SSJ1", 
        // imageUrl1: "https://www.jeuxactu.com/datas/jeux/d/r/dragon-ball-z-kakarot/vn/dragon-ball-z-kakarot-5db7fe89e18fc.jpg", 
        // imageUrl2: "https://cdn.shopify.com/s/files/1/0039/8668/6063/products/tableau-dragon-ball-vegeta-4263059095663_2048x.jpg?v=1561547677", } )
        // .then(response => {
        //     console.log("post", response);
        // }).catch(err => {console.log("err", err)});
        
        axios.get( 'https://react-dbfz.firebaseio.com/fighterz.json' )
            .then( response => {
                const keys = Object.keys(response.data);
                let fighterz = [];
                keys.forEach(k => {
                    let currentFighterz = response.data[k];
                    currentFighterz["id"] = k;
                    console.log("currentFighterz", currentFighterz)
                    fighterz.push(currentFighterz)
                });
               dispatch(initFighterz(fighterz));
            } )
            .catch( error => {
                console.error("get init fighterz list", error);
            } );
    };
};