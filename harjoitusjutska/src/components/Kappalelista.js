import React from 'react';
import Kappale from './Kappale';

function Kappalelista(props) {

    let kappaleet = props.kappaleet.map(function(kappale1, index) {

        return(<Kappale kappale={kappale1} index={index} />)

    }

    )

    return (<div>{kappaleet}</div>)
}

export default Kappalelista;
