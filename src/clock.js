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
            date: new Date(),
            stopped: false
        }
    }

    render() {
        // n ore * n secondi * n millisecondi
        let time = this.state.date.getTime() + this.props.timezone*3600*1000;
        let date = new Date(time);
        return <div>
            Timezone {this.props.timezone}: {date.toLocaleDateString('it-IT')} {date.toLocaleTimeString('it-IT')}
            <button onClick={this.toggleClock}>{this.state.stopped ? 'Start' : 'Stop'}</button>
        </div>;
    }
    
    tik = () => {
        this.setState({ 
            date: new Date() 
        });
    }
    
    startClock = () => {
        this.interval = setInterval(this.tik, this.props.seconds*1000);
    }

    stopClock = () => {
        clearInterval(this.interval);
    }

    toggleClock = () => {
        this.state.stopped ? this.startClock() : this.stopClock();
        this.setState({
            stopped: !this.state.stopped
        });
    }

    componentDidMount() {
        this.startClock();
    }

    componentWillUnmount() {
        this.stopClock();
    }
}

export default Clock;