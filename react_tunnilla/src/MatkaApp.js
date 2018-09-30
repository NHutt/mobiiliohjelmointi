import React, { Component } from 'react';
// import Matka from './components/Matka';
// JavaScript
import Matkalomake from './components/Matkalomake';
//import Sananlasku from './components/Sananlasku';
//import Saa from './components/Saa';
import Matkalista from './components/Matkalista'; //defaultin import
//import {haeKaikkiMatkat} from './API/MatkaAPI'; // ei-defaultin import, huom {}

//const matkatieto = { otsikko: 'Lomalla', paiva: '15.8.2018', paikka: 'Lohja', saa: 'Sateinen, +19', kuvaus: 'Lomalla Lohjalla' }

/*
const mat = [
  {
    otsikko: 'Lomalla',
    paiva: '15.8.2018',
    paikka: 'Lohja',
    saa: 'Sateinen, +19',
    kuvaus: 'Lomalla Lohjalla'
  },
  {
    otsikko: 'Töissä',
    paiva: '8.1.2019',
    paikka: 'Helsinki',
    saa: 'Pieni lumisade, -1',
    kuvaus: 'Töissä Helsingissä'
  },
  {
    otsikko: 'Lounaalla',
    paiva: '20.1.2019',
    paikka: 'Lohja',
    saa: 'Pilvinen, -7',
    kuvaus: 'Sukuloimassa'
  }
];

*/


class MatkaApp extends Component {

  constructor(props) {
    super(props);
    this.state = {matkat: []};
  }

  //Pyytää kannasta hakua

  componentDidMount = () => {

    //haeKaikkiMatkat(this.kasitteleVastaus);

  }

  //Käsittelee saadun vastauksen

  kasitteleVastaus = (data, status) => {

    if (status !== 503) {
      this.setState({matkat: data});

    }else {

      alert("Listaus ei onnistu");
      // Anna käyttäjälle virheilmoitus laittamalla tilaan sitä varten muuttuja

    }

  }


  render() {
    return (
      <div>
      {/*
        <p>Reactin perusteita</p>
        <Matka matka={ matkatieto }/>

        <Matkalomake />
         }
        <Sananlasku />
        <Saa />

        <Matkalista matkat={this.state.matkat} />
        */ }
        <Matkalomake />
      </div>
    );
  }
}

export default MatkaApp;
