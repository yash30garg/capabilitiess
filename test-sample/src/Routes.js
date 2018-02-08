import React from 'react';
import About from './About';
import { Route, BrowserRouter , Switch } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';

export default()=>
(
    <BrowserRouter>
    <Switch>
     <Route path="/" component={About}/>
     
</Switch>
    </BrowserRouter>
)
