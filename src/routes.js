import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

import List from './pages/main'
import AddForm from './pages/addForm'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={List} />
            <Route path="/AddForm/" component={AddForm} />
        </Switch>
    </BrowserRouter>
)

export default Routes

