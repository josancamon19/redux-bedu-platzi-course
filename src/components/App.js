import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
// import Layout from "./Layout";
import Users from "../pages/Users";
import Layout from "./Layout";
import Publications from "../pages/Publications";

const App = () => (
    <BrowserRouter>
        <Layout>
            <Route exact path='/' component={Users}/>
            <Route exact path='/publications/:key' component={Publications}/>
        </Layout>
    </BrowserRouter>
);

export default App;
