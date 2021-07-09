import React from 'react'
import {
    BrowserRouter as Router,
    Route, useHistory, useParams
} from "react-router-dom";
import Main from './components/Main'
import CreateUV from './components/CreateUV'
import UngVien from './components/UngVien'
import KQ from './components/KQUngVien'

export default function Navigation() {
    return (
        <Router>
            <Route exact path='/' component={Main} />
            <Route path='/create-uv' component={CreateUV} />
            <Route path='/edit/:id' component={CreateUV} />
            <Route path='/show-uv/:id' component={UngVien} />
            <Route path='/ket-qua' component={KQ} />
        </Router>
    )
}
