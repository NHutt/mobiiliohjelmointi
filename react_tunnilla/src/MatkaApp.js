import React, { Component } from 'react';
// import Matka from './components/Matka';
// JavaScript
// import Matkalomake from './components/Matkalomake';
//import Sananlasku from './components/Sananlasku';
//import Saa from './components/Saa';
import Matkalista from './components/Matkalista';

//const matkatieto = { otsikko: 'Lomalla', paiva: '15.8.2018', paikka: 'Lohja', saa: 'Sateinen, +19', kuvaus: 'Lomalla Lohjalla' }

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


class MatkaApp extends Component {
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
        */}

        <Matkalista matkat={mat} />
      </div>
    );
  }
}

export default MatkaApp;
