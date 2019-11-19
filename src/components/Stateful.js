import React, { Component } from 'react';

class Stateful extends Component {
    // Aquí vamos a meter parte de la lógica (ciclo de vida, estados y eventos que vamos a manejar).
    // En el render vamos a tener el HTML que vamos a empujar a nuestra aplicación.

    // Dentro del constructor vamos a inicializar las props con super.
    constructor(props) {
        super(props);

        // Aquí se hace el bind de nuestras acciones o podemos inicializar el estado.
        this.state = {
            hello: 'Hola Marte'
        }
    }
    render() {
        return(
            // Nuestro componente tiene acceso a un cpnstructor.
            // <h1>App de ReactJS</h1>
            <h1>{this.state.hello}</h1>
        )
    }
};

export default Stateful;