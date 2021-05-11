import React from 'react';

// props è solo in lettura
// il component può essere una funzione (più semplice) o una classe (per gestire gli stati)
// FUNCTION*******************************************************************
// function clock(props) {
//     return <p>Timezone {props.timezone}: {getDate(props.timezone)}</p>;
// }
// CLASS*******************************************************************
class Clock extends React.Component {
    // per accedere alle proprietà passate al component
    constructor(props) {
        super(props);
        // oggetto stato inizializzato nel costruttore
        // Ogni volta che si modifica una proprietà viene chiamato il metodo render
        this.state = {
            date: new Date()
        }
    }

    render() {
        // n ore * n secondi * n millisecondi
        let time = this.state.date.getTime() + this.props.timezone*3600*1000;
        let date = new Date(time);
        return <p>Timezone {this.props.timezone}: {date.toLocaleDateString('it-IT')} {date.toLocaleTimeString('it-IT')}</p>;
    }

    tik = () => this.setState({ 
        date: new Date() 
    });

    componentDidMount() {
        this.interval = setInterval(this.tik, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
}

export default Clock;