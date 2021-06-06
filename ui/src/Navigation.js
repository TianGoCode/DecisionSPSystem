import React from 'react'
import {
    BrowserRouter as Router,
    Route, useHistory, useParams
} from "react-router-dom";
import Main from './components/Main'
import CreateUV from './components/CreateUV'

export default function Navigation() {
    return (
        <Router>
            <Route exact path='/' component={Main} />
            <Route  path='/create-uv/:id' component={CreateUV} />
        </Router>
    )
}
