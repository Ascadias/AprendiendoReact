import React, {Component} from 'react';
import logo from '../assets/images/logo.png';

class Logo extends Component {

    render() {
        return (
            <React.Fragment>
                <div>
                    <img src={logo} alt="Logo de Ascadias" title="Ascadias"></img>
                </div>
            </React.Fragment>
        )
    }
}

export default Logo;