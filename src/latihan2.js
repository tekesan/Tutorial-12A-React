import React from 'react';
import ReactDOM from 'react-dom';

const fiftyFifty = Math.random() < 0.5;

// New component class starts here:
class TonightsPlan extends React.Component {
    render() {
        let msg;

        if (fiftyFifty) {
            msg = <h1>Tonight I am going to study APAP!</h1>;
        } else {
            msg = <h1>Tonight I'm going to bed yeah!</h1>;
        }

        return msg;
    }
}

ReactDOM.render(
    <TonightsPlan/>,
    document.getElementById('root')
);