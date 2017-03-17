import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import reducers from './reducers/index';

// Componenti e container da indirizzare
import App from './components/App';
import FormDatiUtente from './containers/form_datiutente';
import FormDatiPolizza from './containers/form_datipolizza';
import NoMatch from './components/nomatch';

import './styles/index.css';

const store = createStore(reducers);
console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <Router>
            {/* Contenitore con header e footer */}
            <App>
                 {/* Renderizza il primo path che matcha.
                 Se non trova nessuno dei due -> NoMatch (404) */}
                <Switch>
                    <Route exact path="/" component={FormDatiUtente} />
                    <Route exact path="/step2" component={FormDatiPolizza} />
                    <Route component={NoMatch} />
                </Switch>
            </App>
        </Router>
    </Provider>,
    document.getElementById('root')
);
