import React from 'react'
import { Route } from "react-router-dom"
import indexRoutes from "./routes/index.jsx"
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/sass/light-bootstrap-dashboard.css?v=1.1.1"
import "./assets/css/demo.css"
import "./assets/css/pe-icon-7-stroke.css"
import 'assets/styledComponent/global'

class App extends React.Component {
    render() {
        return (
            <div>
                {indexRoutes.map((prop, key) => {
                    return <Route exact={prop.exact} path={prop.path} component={prop.component} key={key} />
                })}
            </div>
        )
    }
}

export default App