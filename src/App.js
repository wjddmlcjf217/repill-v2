import React from 'react';
import LogIn from './components/LogIn';


import { BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component {
    // patient prescription state management from previous version
    state = { prescription_status: false };

    onPrescriptionOrder = () => {
        this.setState({ prescription_status: true })
    }

    render() {    
        console.log("status at app:", this.state.prescription_status)
        return (
            <div>
                <BrowserRouter>
                    <Route exact path="/"><LogIn prescription_status={this.state.prescription_status} onPrescriptionOrder={this.onPrescriptionOrder}/></Route>                    
                </BrowserRouter>
            </div>
        );
    };
};

export default App;