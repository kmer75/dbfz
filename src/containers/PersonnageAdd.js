import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/fighterz.js';

class PersonnageAdd extends Component {

    state = {
        personnage: {nom: "", race: "", niveau: "", puissance: '', 
        imageUrl1: 'https://www.elsetge.cat/myimg/f/124-1246554_more-gohan-wallpapers-ssj2-gohan-kamehameha-gif.jpg', 
        imageUrl2: '',imageUrl3: '',imageUrl4: ''}

    }

    onChangeFieldHandler = (event) => {
        const {value, name} = event.target;
        this.setState((prevState, props) => {
            prevState.personnage[name] = value;
            const updatedObject = prevState.personnage;
            return({
            personnage: {...prevState.personnage, name: value} 
        })
    });
    }

    render() {
        return (
            <div className="col-xl-8 order-xl-1 mt-7">
          <div className="card">
            <div className="card-header">
              <div className="row align-items-center">
                <div className="col-8">
                  <h3 className="mb-0">Ajout un Fighter Z</h3>
                </div>
                <div className="col-4 text-right">
                  <a href="#!" className="btn btn-sm btn-primary">Fight</a>
                </div>
              </div>
            </div>
            <div className="card-body">
              <form>
                <h6 className="heading-small text-muted mb-4">FighterZ information</h6>
                <div className="pl-lg-4">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="form-control-label" htmlFor="nom">Nom</label>
                        <input  onChange={this.onChangeFieldHandler} onChange={this.onChangeFieldHandler} name="nom" type="text" id="nom" className="form-control" placeholder="Nom" value={this.state.personnage.nom}/>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="form-control-label" htmlFor="race">Race</label>
                        <input  onChange={this.onChangeFieldHandler} onChange={this.onChangeFieldHandler}  type="text" name="race" id="race" className="form-control" placeholder="Race"  value={this.state.personnage.race}/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="form-control-label" htmlFor="niveau">Niveau</label>
                        <input  onChange={this.onChangeFieldHandler} type="text" name="niveau" id="niveau" className="form-control" placeholder="Niveau" value="Lucky"  value={this.state.personnage.niveau}/>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="form-control-label" htmlFor="puissance">Puissance</label>
                        <input  onChange={this.onChangeFieldHandler} type="text" name="puissance" id="puissance" className="form-control" placeholder="Puissance" value="Jesse"  value={this.state.personnage.puissance}/>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-4"/>
                <h6 className="heading-small text-muted mb-4">Previews</h6>
                <div className="pl-lg-4">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="form-control-label" htmlFor="imageUrl1">Photo principal</label>
                        <input  onChange={this.onChangeFieldHandler} name="imageUrl1" id="imageUrl1" className="form-control" placeholder="Photo principal" value={this.state.personnage.imageUrl1} type="text"/>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-4"/>
                    <img src={this.state.personnage.imageUrl1} className="avatar avatar-giga" onerror="javascript:this.src='images/default.jpg'"/>
                <hr className="my-4"/>

                          <button onClick={()=> this.props.onAddFighterz(this.state.personnage)} type="button" className="btn btn-outline-secondary">Créer FighterZ</button>
              </form>
            </div>
          </div>
        </div>);
    }
}

  
const mapDispatchToProps = dispatch => {
return {
    onAddFighterz: (personnage) => dispatch(actions.addFighterz(personnage))
}
};

export default connect(null, mapDispatchToProps)(PersonnageAdd);