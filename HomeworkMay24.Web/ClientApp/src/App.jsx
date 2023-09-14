import React, { useState, useContext, createContext, Children } from 'react';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { CandidateCountContextComponent } from './CandidateCountContext';
import AddCandidate from './AddCandidate';
import Pending from './Pending';
import Hired from './Hired';
import Declined from './Decline';
import PendingDetails from './PendingDetails';

const App = () => {

    return (
        <CandidateCountContextComponent>
            <Layout>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/AddCandidate' element={<AddCandidate/>}/>
                    <Route exact path='/Pending' element={<Pending/>}/>
                    <Route exact path='/PendingDetails/:id' element={<PendingDetails/>}/>
                    <Route exact path='/Hired' element={<Hired/>}/>
                    <Route exact path='/Declined' element={<Declined/>}/>
                </Routes>
            </Layout>
        </CandidateCountContextComponent>
    );
};

export default App;