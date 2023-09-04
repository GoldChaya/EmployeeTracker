import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';

const CandidateCountContext = React.createContext();
const CandidateCountContextComponent = ({ children }) => {
    const [candidateCounts, setCandidateCounts] = useState(
        {
            pending: 0,
            hired: 0,
            declined: 0
        });
    const refreshCandidateCounts = async () => {
        const { data } = await axios.get('/api/candidate/getcounts');
        console.log(data);
        setCandidateCounts(data);
    }
    useEffect(() => {
        refreshCandidateCounts();
    }, []);

    return (
        <CandidateCountContext.Provider value={{candidateCounts, refreshCandidateCounts}}>
            {children}
        </CandidateCountContext.Provider>
    )
}
const useCandidateCount = () => {
    return useContext(CandidateCountContext);
}

export { useCandidateCount, CandidateCountContextComponent };