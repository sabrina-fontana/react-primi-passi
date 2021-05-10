import React from 'react';

function getDate(hours) {
    // n ore * n secondi * n millisecondi
    let time = Date.now() + hours*3600*1000;
    let date = new Date(time);
    return date.toLocaleDateString('it-IT') + ' ' + date.toLocaleTimeString('it-IT');
}  

function clock(props) {
    return <p>Timezone {props.timezone}: {getDate(props.timezone)}</p>;
}

export default clock;