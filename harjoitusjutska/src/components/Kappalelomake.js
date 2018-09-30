import React, { Component } from 'react';
import { lisaaKappaleKantaan, haeKaikkiKappaleet } from '../API/KappaleAPI';
import Kappalelista from '../components/Kappalelista';

class Kappalelomake extends Component {
  constructor(props) {
      super(props);
      this.muuta = this.muuta.bind(this);
      this.lisaa = this.lisaa.bind(this);
      this.muutaOtsikko = this.muutaOtsikko.bind(this);
      this.state = { artisti: '', kappale: '', musiikkiArvosana: '', mvArvosana: '', koreografiaArvosana: '', lyriikatArvosana:'' };
      this.state = {kappaleet: []};
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
     lisaaKappaleKantaan({artisti: this.state.artisti, kappale: this.state.kappale, musiikkiArvosana: this.state.musiikkiArvosana,
                          mvArvosana: this.state.mvArvosana, koreografiaArvosana: this.state.koreografiaArvosana,
                          lyriikatArvosana: this.state.lyriikatArvosana}, this.kasitteleLisays);
  }

  kasitteleLisays = (status) => {
    if (status !== 503) {
      this.setState( { artisti: '', kappale: '', musiikkiArvosana: '', mvArvosana: '', koreografiaArvosana: '', lyriikatArvosana:'' } );
      haeKaikkiKappaleet(this.kasitteleHaku);
    }
    else {
      alert('Lisäys ei onnistu');
    }
  }

  componentDidMount = () => {
   haeKaikkiKappaleet(this.kasitteleHaku);
  }

  kasitteleHaku = (data, status) => {
   if (status !== 503) {
    this.setState({kappaleet: data});
  }
  else {
    alert('Haku ei onnistu')
  }
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor='artisti' style={styles.labelStyle}>Artisti</label>
          <input style={styles.inputStyle} type='text' name='artisti'
          value={this.state.artisti} onChange={this.muuta} />
          <br />
          <label htmlFor='kappale' style={styles.labelStyle}>Kappale</label>
          <input style={styles.inputStyle} type='text' name='kappale' value={this.state.kappale} onChange={this.muuta} />
          <br />
          <label htmlFor='musiikkiArvosana'style={styles.labelStyle}>Arvosana musiikille</label>
          <input style={styles.inputStyle}  type='text' name='musiikkiArvosana' value={this.state.musiikkiArvosana} onChange={this.muuta} />
          <br />
          <label htmlFor='mvArvosana' style={styles.labelStyle}>Arvosana musiikkivideolle</label>
          <input style={styles.inputStyle}  type='text' name='mvArvosana' value={this.state.mvArvosana} onChange={this.muuta} />
          <br />
          <label  htmlFor='koreografiaArvosana' style={styles.labelStyle}>Arvosana koreografialle</label>
          <input style={styles.inputStyle}  type='text' name='koreografiaArvosana' value={this.state.koreografiaArvosana} onChange={this.muuta} />
          <br />
          <label  htmlFor='lyriikatArvosana' style={styles.labelStyle}>Arvosana lyriikoille</label>
          <input style={styles.inputStyle}  type='text' name='lyriikatArvosana' value={this.state.lyriikatArvosana} onChange={this.muuta} />
          <br />
          <br />
          <input type='submit' value='Talleta' onClick={this.lisaa} />
        </form>
        <Kappalelista kappaleet={this.state.kappaleet} />
      </div>
    );
  }
}

const styles = {
  labelStyle : {
    width: '6em',
    display: 'block',
    marginTop: '8px',
  },
  inputStyle: {
    marginTop: '8px',
    border: '1px solid',
    borderRadius: '6px',
  }
}

export default Kappalelomake;
