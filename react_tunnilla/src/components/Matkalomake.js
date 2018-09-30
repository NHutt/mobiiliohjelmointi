import React, { Component } from 'react';
import { lisaaMatkaKantaan, haeKaikkiMatkat } from '../API/MatkaAPI';
import Matkalista from '../components/Matkalista';

class Matkalomake extends Component {
 constructor(props) {
     super(props);
     this.muuta = this.muuta.bind(this);
     this.lisaa = this.lisaa.bind(this);
     this.muutaOtsikko = this.muutaOtsikko.bind(this);
     this.state = { otsikko: '', paiva: '', paikka: '', saa: '', kuvaus: '' };
     this.state = {matkat: []};
 }

 muuta (e) {
     this.setState({[e.target.name]: e.target.value});
 }

 muutaOtsikko(e) {
    this.setState ({ otsikko: e.target.value.toUpperCase() })
 }

 lisaa (e) {
    e.preventDefault();
  //  this.setState( { otsikko: '', paiva: '', paikka: '', saa: '', kuvaus: ''} );
    lisaaMatkaKantaan({otsikko: this.state.otsikko, paiva: this.state.paiva, paikka: this.state.paikka, saa: this.state.saa, kuvaus: this.state.kuvaus}, this.kasitteleLisays);
 }

 kasitteleLisays = (status) => {
   if (status !== 503) {
     this.setState( { otsikko: '', paiva: '', paikka: '', saa: '', kuvaus: ''} );
     haeKaikkiMatkat(this.kasitteleHaku);
   }
   else {
     alert('Lisäys ei onnistu');
     // Ilmoita käyttäjälle virheestä lisäämällä  tilaan muuttujan virheilmoitusta varten
   }
 }

componentDidMount = () => {
  haeKaikkiMatkat(this.kasitteleHaku);
}

kasitteleHaku = (data, status) => {
  if (status !== 503) {
   this.setState({matkat: data});
 }
 else {
   alert('Haku ei onnistu')
 }
}

  render() {
    return (
      <div>
        <form>
          <label htmlFor='otsikko' style={styles.labelStyle}>Otsikko</label>
          <input style={styles.inputStyle} type='text' name='otsikko'value={this.state.otsikko} onChange={this.muutaOtsikko} />
          <br />
          <label htmlFor='paikka' style={styles.labelStyle}>Paikka</label>
          <input style={styles.inputStyle} type='text' name='paikka' value={this.state.paikka} onChange={this.muuta} />
          <br />
          <label htmlFor='paiva'style={styles.labelStyle}>Päivä</label>
          <input style={styles.inputStyle}  type='text' name='paiva' value={this.state.paiva} onChange={this.muuta} />
          <br />
          <label htmlFor='saa' style={styles.labelStyle}>Sää</label>
          <input style={styles.inputStyle}  type='text' name='saa' value={this.state.saa} onChange={this.muuta} />
          <br />
          <label  htmlFor='kuvaus' style={styles.labelStyle}>Kuvaus</label>
          <textarea style={styles.inputStyle} rows='4' cols='40' name='kuvaus' value={this.state.kuvaus} onChange={this.muuta}></textarea>
          <br />
          <input type='submit' value='Talleta' onClick={this.lisaa} />
        </form>
        <Matkalista matkat={this.state.matkat} />
      </div>
    );
  }
}

const styles = {
  labelStyle : {
    width: '6em',
    display: 'block',
    float: 'left',
    marginTop: '8px',
  },
  inputStyle: {
    marginTop: '8px',
    border: '1px solid',
    borderRadius: '6px',
  }
}

export default Matkalomake;
