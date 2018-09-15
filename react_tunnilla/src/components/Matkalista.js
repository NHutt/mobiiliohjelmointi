import React from 'react';
import Matka from './Matka';

function Matkalista(props) {

    let matkat = props.matkat.map(function(matka1, index) {

        return(<Matka matka={matka1} index={index} />)

    }

    )

    return (<div>{matkat}</div>)
}

export default Matkalista;
