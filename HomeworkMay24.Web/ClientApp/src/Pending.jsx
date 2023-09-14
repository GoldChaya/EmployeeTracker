import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Pending = () =>{
    
    const [pendingCandidates, setPendingCandidates] = useState([]);

    useEffect(() => {
        const loadPending = async () => {
            const { data } = await axios.get('/api/candidate/GetByStatus?status=pending');
            setPendingCandidates(data);
        } 

        loadPending();
    }, []);

    return <table className='table table-hover table-striped table-bordered'>
    <thead>
        <tr>
            <th></th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Email</th>
        </tr>
    </thead>
    <tbody>
        {pendingCandidates.map(c => {
            return <tr key={c.id}>
                <td>
                    <Link to={`/pendingdetails/${c.id}`}>View Details</Link>
                </td>
                <td>{c.firstName}</td>
                <td>{c.lastName}</td>
                <td>{c.phone}</td>
                <td>{c.email}</td>
            </tr>
        })}
    </tbody>
</table>
}
export default Pending;