import _ from 'underscore';

// Esta función crea un nuevo deck

/**
 * 
 * @param {array<String>} tiposDeCartas 
 * @param {array<String>} tiposEspeciales 
 * @returns {array<String>}
 */

export const crearDeck = (tiposDeCartas, tiposEspeciales) => {


    if ( !tiposDeCartas || tiposDeCartas.length === 0) 
        throw new Error('TipodeCarta es Obligatorio como un arreglo de string');

    if ( !tiposEspeciales || tiposEspeciales.length === 0) 
        throw new Error('TiposEspeciales es Obligatorio como un arreglo de string');



    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}