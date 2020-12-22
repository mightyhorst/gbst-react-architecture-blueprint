import React from 'react';

/**
 * @requires vendor 
 */
import SequenceDiagram from 'react-sequence-diagram';

export function ExampleArchitecture() {

    const participant1 = 'A';
    const participant2 = 'B';
    const participants = [
        participant1,
        participant2,
    ];
    const sequences = [
        {
            from: participant1,
            to: participant2,
            msg: 'Cool'
        }
    ];

    let input = participants.map(p=>`participant ${p} \n`).join('');

    input += sequences.map(seq=>{
        let txt = seq.from + (seq.isReverse ? '<--' : '->') + seq.to + ': ' + seq.msg;
        return txt; 
    }).join('\n');
    
    console.log(input);

    const options = {
        theme: 'simple'
    };

    function onError(error) {
        console.log('Architecture error', error);
    }

    return <SequenceDiagram 
        input={input} 
        options={options} 
        onError={onError} 
    />
}
