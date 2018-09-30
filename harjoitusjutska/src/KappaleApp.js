import React, { Component } from 'react';
//import Kappale from './components/Kappale';
import Kappalelomake from './components/Kappalelomake';
import Kappalelista from './components/Kappalelista';

//const kappaletieto = { artisti: 'ONF', kappale: 'Complete', musiikkiArvosana: '10', mvArvosana: '8', koreografiaArvosana: '8', lyriikatArvosana: '9' }

/* const kappaleita = [
  {
    artisti: 'ONF',
    kappale: 'Complete',
    musiikkiArvosana: '10',
    mvArvosana: '8',
    koreografiaArvosana: '8',
    lyriikatArvosana: '9'
  },
  {
    artisti: 'NeonPunch',
    kappale: 'Moonlight',
    musiikkiArvosana: '9',
    mvArvosana: '7',
    koreografiaArvosana: '7',
    lyriikatArvosana: '8'
  },
  {
    artisti: 'Pentagon',
    kappale: 'Shine',
    musiikkiArvosana: '10',
    mvArvosana: '10',
    koreografiaArvosana: '10',
    lyriikatArvosana: '10'
  },
  {
    artisti: 'GFriend',
    kappale: 'Navillera',
    musiikkiArvosana: '10',
    mvArvosana: '8',
    koreografiaArvosana: '9',
    lyriikatArvosana: '10'
  },
  {
    artisti: 'Whee In feat. Sik-K',
    kappale: 'Easy',
    musiikkiArvosana: '9',
    mvArvosana: '9',
    koreografiaArvosana: '8',
    lyriikatArvosana: '10'
  },
  {
    artisti: 'N.Flying',
    kappale: 'Hot Potato',
    musiikkiArvosana: '10',
    mvArvosana: '10',
    koreografiaArvosana: '8',
    lyriikatArvosana: '10'
  },
  {
    artisti: 'Lovelyz',
    kappale: '지금, 우리',
    musiikkiArvosana: '10',
    mvArvosana: '7',
    koreografiaArvosana: '7',
    lyriikatArvosana: '10'
  }
];

*/


class KappaleApp extends Component {

  constructor(props) {
    super(props);
    this.state = {kappaleet: []};
  }

  componentDidMount = () => {

  }

  kasitteleVastaus = (data, status) => {

    if (status !== 503) {
      this.setState({kappaleet: data});

    }else {

      alert("Listaus ei onnistu");

    }

  }

  render() {
    return (
      <div>
      {
        <p>Rautaista K-poppia</p>
      }

        <Kappalelomake />

      </div>
    );
  }
}

export default KappaleApp;
