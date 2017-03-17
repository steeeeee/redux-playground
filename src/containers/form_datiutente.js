import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm } from 'redux-form';

class FormDatiUtente extends Component {
    render() {
        return (
            <div>
                <h3>Form: Primo Step</h3>
                <form>
                
                </form>
                <Link to="/step2">Vai allo step 2</Link>
            </div>
        );
    }
}


export default reduxForm({
    form: 'Casomai',
    fields: [ nome ]
}, null, null)(FormDatiUtente);