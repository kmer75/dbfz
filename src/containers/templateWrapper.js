import React from 'react';
import '../assets/img/brand/favicon.png';
import '../assets/css/google-fonts.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/js/plugins/nucleo/css/nucleo.css';
import '../assets/js/plugins/fortawesome/fontawesome-free/css/all.min.css';
import '../assets/css/argon-dashboard.css?v=1.1.1';
import dbfzLogo from '../assets/img/brand/dragon-ball-fighter-z-nintendo-switch.jpg';
import { connect } from 'react-redux';
import Modals from '../components/Modals.js'
import * as actions from '../store/actions/fighterz.js';


const TemplateWraper = props => {

    const close = () => {
        props.setModalConfig({...props.modalConfig, isOpen: false});
    }

    return (
        <div>

<Modals modalConfig={props.modalConfig} closeModal={close}></Modals>
            {props.loading && <div className="lds-dual-ring"></div>}
            <nav className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
                <div className="container-fluid">
                    {/* Toggler */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidenav-collapse-main"
                        aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* Brand  */}
                    <a className="navbar-brand pt-0" href="~/Client">
                        <img src={dbfzLogo} className="navbar-brand-img" alt="..." />
                    </a>
                    {/* Collapse */}
                    <div className="navbar-collapse collapse" id="sidenav-collapse-main">
                        {/* Collapse header  */}
                        <div className="navbar-collapse-header d-md-none">
                            <div className="row">
                                <div className="col-6 collapse-brand">
                                    <a href="~/Client">
                                        <img src={dbfzLogo} alt=""/>
                                    </a>
                                </div>
                                <div className="col-6 collapse-close">
                                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#sidenav-collapse-main"
                                        aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle sidenav">
                                        <span></span>
                                        <span></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Navigation */}
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" href="~/Client/Activite">
                                    <i className="ni ni-calendar-grid-58 text-red"></i> Mon Activité
                        </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="~/Client/Ajouter">
                                    <i className="ni ni-watch-time text-green"></i> Nouvelle course
                        </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="~/Client/profil">
                                    <i className="ni ni-single-02 text-yellow"></i> Mon Profil
                        </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="~/Auth/Logout">
                                    <i className="ni ni-circle-08 text-pink"></i> Se Déconnecter
                        </a>
                            </li>
                        </ul>
                        {/* Divider */}
                        <hr className="my-3"/>
                            {/* Heading  */}
                            <h6 className="navbar-heading text-muted">Documentation</h6>
                            {/* Navigation */}
                            <ul className="navbar-nav mb-md-3">
                                <li className="nav-item">
                                    <a className="nav-link" href="ok">
                                        <i className="ni ni-palette text-blue"></i> A propos
                                    </a>
                                </li>
                            </ul>

            </div>
                    </div>
    </nav>
                <div className="main-content">

                    <div className="container-fluid mt--7">

                        {/* RENDER CHILDREN ICI  */}
                        <div>{props.children}</div>

                        <footer className="footer">
                            <div className="row align-items-center justify-content-xl-between">
                                <div className="col-xl-6">
                                    <div className="copyright text-center text-xl-left text-muted">
                                        &copy;
                            <script>document.write(new Date().getFullYear())</script> - Site propulsé par I2sa - <a href="~/Home/Privacy">Privacy</a>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <ul className="nav nav-footer justify-content-center justify-content-xl-end">
                                        <li className="nav-item">
                                            <a href="https://demos.creative-tim.com/argon-dashboard/index.html" className="nav-link" target="_blank" rel="noopener noreferer">Exemple Dashboard Theme</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="https://demos.creative-tim.com/argon-dashboard-pro/docs/plugins/datatables.html" className="nav-link" target="_blank" rel="noopener noreferer"> Documentation Pro</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="https://demos.creative-tim.com/argon-dashboard/docs/foundation/colors.html#docs" className="nav-link" target="_blank" rel="noopener noreferer">Documentation Theme</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </footer>

                    </div>
                </div>


                
    </div>
            )
        }


        const mapStatetoProps = state => {
            return {
                loading: state.fighterz.isLoading,
                modalConfig: state.fighterz.modalConfig
            };
          }

          const mapDispatchToProps = (dispatch) => {
              return {
                  setModalConfig: (config) => dispatch(actions.setModalConfig(config))
                }
          }
        
export default connect(mapStatetoProps, mapDispatchToProps)(TemplateWraper)