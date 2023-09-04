import React, { useState, useContext, createContext, Children } from 'react';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { CandidateCountContextComponent } from './CandidateCountContext';

const App = () => {

    return (
        <CandidateCountContextComponent>
            <Layout>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                </Routes>
            </Layout>
        </CandidateCountContextComponent>
    );
};

export default App;