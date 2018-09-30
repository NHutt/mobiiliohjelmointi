import React from 'react';

function Kappale(props) {
  return (
    <p style={ styles.kappaleTyyli }>
      Artisti: { props.kappale.artisti }<br />
      Kappale: { props.kappale.kappale }<br />
      Arvosana musiikille: { props.kappale.musiikkiArvosana }<br />
      Arvosana musiikkivideolle: { props.kappale.mvArvosana }<br />
      Arvosana koreografialle: { props.kappale.koreografiaArvosana }<br />
      Arvosana lyriikoille: { props.kappale.lyriikatArvosana }
    </p>
  )
}

const styles = {
  kappaleTyyli: {
    color: 'red',
    marginTop: '1cm',
    fontFamily: 'Courier New'
  }
}

export default Kappale;
