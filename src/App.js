import React from 'react'
import { Route } from "react-router-dom"
import indexRoutes from "./routes/index.jsx"
import adminRoute from "./routes/admin.jsx"
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/sass/light-bootstrap-dashboard.css?v=1.1.1"
import "./assets/css/demo.css"
import "./assets/css/pe-icon-7-stroke.css"
import 'assets/styledComponent/global'
import LoginPage from './views/Pages/LoginPage'
import CallCenter from "containers/CallCenter/CallCenter.jsx"

import * as firebase from 'firebase'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            pages: true
        };
    }
    authListener() {
        firebase.auth().onAuthStateChanged((user) => {
            console.log(user);
            if (user) {
                this.setState({ user });
                // localStorage.setItem('user', user.uid);
            } else {
                this.setState({ user: null });
                // localStorage.removeItem('user');
            }
        });
    }
    componentDidMount() {
        this.authListener();
    }
    render() {
        if (this.state.user) {
            return (
                <div>
                    {adminRoute.map((prop, key) => {
                        return <Route exact={prop.exact} path={prop.path} component={prop.component} key={key} />
                    })}
                </div>
            )
        }
        else {
            return (
                <div>
                    {indexRoutes.map((prop, key) => {
                        return <Route exact={prop.exact} path={prop.path} component={prop.component} key={key} />
                    })
                    }
                </div>
            )
        }
    }
}

export default App