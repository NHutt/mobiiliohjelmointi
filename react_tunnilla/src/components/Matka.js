import React from 'react';

function Matka(props) {
  return (
    <p style={ styles.matkaTyyli }>
      Otsikko: { props.matka.otsikko }<br />
      Päivä: { props.matka.paiva }<br />
      Paikka: { props.matka.paikka }<br />
      Sää: { props.matka.saa }<br />
      Kuvaus: { props.matka.kuvaus }
    </p>
  )
}

const styles = {
  matkaTyyli: {
    color: 'blue',
    marginTop: '1cm'
  }
}

export default Matka;
