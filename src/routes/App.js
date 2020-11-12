import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from '../components/Layout'

import Login from '../containers/Login'
import Register from '../containers/Register'
import Home from '../containers/Home'
import Player from '../containers/Player'
import Favourites from '../containers/Favourites'

import NotFound from '../containers/NotFound'

const App = () => {
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    {/* Logs into App */}
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />

                    {/* Main Containers */}
                    <Route exact path="/" component={Home} />
                    <Route exact path="/favourites" component={Favourites} />
                    
                    {/* Other routes */}
                    <Route exact path="/player/:id" component={Player} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App