import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FormDataPolizza extends Component {
    render() {
        return (
            <div>
                <h3>Form: Secondo Step</h3>
                <Link to="/submit">Fai il preventivo</Link>
                <Link to="/">Back</Link>
            </div>
        );
    }
}

export default FormDataPolizza;