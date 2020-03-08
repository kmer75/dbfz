import React from 'react';

const PersonnageItem = props => {
    const {personnage} = props
    return (
        <tr>
                          <th scope="row">
                            <div className="media align-items-center">
                              <a href="ok" className="avatar avatar-big rounded-circle mr-3">
                                <img alt="" src={personnage.imageUrl1}/>
                              </a>
                              <div className="media-body">
                                <span className="mb-0 text-sm">{personnage.nom}</span>
                              </div>
                            </div>
                          </th>
                          <td>
                            {personnage.race}
                          </td>
                          <td>
                            <span className="badge badge-dot mr-4">
                              <i className="bg-warning"></i> {personnage.niveau}
                            </span>
                          </td>
                          <td>
                            <div className="avatar-group">
                              <a href="ok" className="avatar avatar-big" data-toggle="tooltip" data-original-title="Ryan Tompson">
                                <img alt="" src={personnage.imageUrl1} className="rounded-circle"/>
                              </a>
                              <a href="ok" className="avatar avatar-big" data-toggle="tooltip" data-original-title="Romina Hadid">
                                <img alt="" src={personnage.imageUrl2} className="rounded-circle"/>
                              </a>
                              <a href="ok" className="avatar avatar-big" data-toggle="tooltip" data-original-title="Alexander Smith">
                                <img alt="" src={personnage.imageUrl3} className="rounded-circle"/>
                              </a>
                              <a href="ok" className="avatar avatar-big" data-toggle="tooltip" data-original-title="Jessica Doe">
                                <img alt="" src={personnage.imageUrl4} className="rounded-circle"/>
                              </a>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <span className="mr-2">{personnage.puissance}%</span>
                              <div>
                                <div className="progress">
                                  <div className="progress-bar bg-warning" role="progressbar" aria-valuenow={personnage.puisance} aria-valuemin="0" aria-valuemax="100" style={{"width": personnage.puissance + "%"}}></div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="text-right">
                          <button type="button" className="btn btn-outline-primary">Editer</button>
                          <button type="button" className="btn btn-outline-danger">Supprimer</button>
                          </td>
                        </tr>
    )
}

export default PersonnageItem;