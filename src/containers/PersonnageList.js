import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/fighterz.js';
import axios from 'axios';

class PersonnageList extends Component {

  componentDidMount() {
    this.props.onFighterzInit();
  }
    render() {
      return (
        //    Dark table
          <div className="row mt-5">
            <div className="col">
              <div className="card bg-default shadow">
                <div className="card-header bg-transparent border-0">
                  <h3 className="text-white mb-0">Card tables</h3>
                </div>
                <div className="table-responsive">
                  <table className="table align-items-center table-dark table-flush">
                    <thead className="thead-dark">
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
                      {this.props.fighterz.map(f => {
                        return (

                          <tr key={f.id}>
                          <th scope="row">
                            <div className="media align-items-center">
                              <a href="ok" className="avatar rounded-circle mr-3">
                                <img alt="" src={f.imageUrl1}/>
                              </a>
                              <div className="media-body">
                                <span className="mb-0 text-sm">{f.nom}</span>
                              </div>
                            </div>
                          </th>
                          <td>
                            {f.race}
                          </td>
                          <td>
                            <span className="badge badge-dot mr-4">
                              <i className="bg-warning"></i> {f.niveau}
                            </span>
                          </td>
                          <td>
                            <div className="avatar-group">
                              <a href="ok" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Ryan Tompson">
                                <img alt="" src={f.imageUrl1} className="rounded-circle"/>
                              </a>
                              <a href="ok" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Romina Hadid">
                                <img alt="" src={f.imageUrl2} className="rounded-circle"/>
                              </a>
                              <a href="ok" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Alexander Smith">
                                <img alt="" src={f.imageUrl3} className="rounded-circle"/>
                              </a>
                              <a href="ok" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Jessica Doe">
                                <img alt="" src="../assets/img/theme/team-4-800x800.jpg" className="rounded-circle"/>
                              </a>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <span className="mr-2">{f.puissance}%</span>
                              <div>
                                <div className="progress">
                                  <div className="progress-bar bg-warning" role="progressbar" aria-valuenow={f.puisance} aria-valuemin="0" aria-valuemax="100" style={{"width": f.puissance + "%"}}></div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="text-right">
                          <button type="button" className="btn btn-outline-primary">Primary</button>
                          </td>
                        </tr>
                        
                        );
                      })}
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
      fighterz: state.fighterz,
  };
}

const mapDispatchToProps = dispatch => {
  return {
      onFighterzInit: () => dispatch(actions.initFighterzList())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonnageList);