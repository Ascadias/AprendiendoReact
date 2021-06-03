import React, {Component} from 'react';

class Nav extends Component {

    render() {
        return (
            <React.Fragment>
                <div>
                    <ul>
                        <li>
                            <a
                                href="#home"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                Inicio
                            </a>
                        </li> 
                        <li>
                        <a
                                href="#aboutMe"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                Sobre mi
                            </a>
                        </li>
                        <li>
                        <a
                                href="#skills"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                Habilidades
                            </a>
                        </li>
                        <li>
                        <a
                                href="#tools"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                Herramientas
                            </a>
                        </li>
                        <li>
                        <a
                                href="#contact"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}

export default Nav;