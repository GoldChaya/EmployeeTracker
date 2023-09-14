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
        setCandidateCounts(data);
    }
    useEffect(() => {
        refreshCandidateCounts();
    }, []);

    const value = {
        candidateCounts,
        refreshCandidateCounts
    }
    return (
        <CandidateCountContext.Provider value={value}>
            {children}
        </CandidateCountContext.Provider>
    )
}
const useCandidateCount = () => useContext(CandidateCountContext);


export { useCandidateCount, CandidateCountContextComponent };