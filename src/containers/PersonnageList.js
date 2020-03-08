import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/fighterz.js';
import PersonnageItem from '../components/Personnages/PersonnageItem.js'
import { Link } from 'react-router-dom';

class PersonnageList extends Component {

  componentDidMount() {
    this.props.onFighterzInit()
  }
    render() {
      const p = {id: 1,nom:'gohan', niveau: 'ssj2', race:'saiyen', puissance:'90', imageUrl1: ''}
      return (
        //    Dark table
          <div className="row mt-7">
            <div className="col">
              <div className="card shadow">
              <div className="card-header border-0">
              <h3 className="mb-0">Liste des Fighters Z</h3>
            </div>
            <Link to="/add"><button type="button" className="btn btn-outline-success" ><i className="ni ni-fat-add"></i>Ajouter un fighterZ</button></Link>
            <div className="table-responsive">
              <table className="table align-items-center table-flush">
                <thead className="thead-light">
                      <tr>
                        <th scope="col">Nom</th>
                        <th scope="col">Race</th>
                        <th scope="col">Niveau</th>
                        <th scope="col">Preview</th>
                        <th scope="col">Puissance</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.fighterz.map(f => <PersonnageItem personnage={f} key={f.id}></PersonnageItem>)}
                      {/* <PersonnageItem personnage={p} key={1}></PersonnageItem> */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        );
    }
  }

const mapStateToProps = state => {
  return {
      fighterz: state.fighterz.fighterz,
  };
}

const mapDispatchToProps = dispatch => {
  return {
      onFighterzInit: () => dispatch(actions.initFighterzList())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonnageList);