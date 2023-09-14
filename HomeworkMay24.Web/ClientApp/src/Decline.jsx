import { useState,useEffect } from "react";
import axios from "axios";

const Declined = () =>{
    
    const [declinedCandidates, setDeclinedCandidates] = useState([]);

    useEffect(() => {
        const loadDeclined = async () => {
            const { data } = await axios.get('/api/candidate/GetByStatus?status=declined');
            setDeclinedCandidates(data);
        } 

        loadDeclined();
    }, []);

    return <table className='table table-hover table-striped table-bordered'>
    <thead>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Email</th>
        </tr>
    </thead>
    <tbody>
        {declinedCandidates.map(c => {
            return <tr key={c.id}>
                <td>{c.firstName}</td>
                <td>{c.lastName}</td>
                <td>{c.phone}</td>
                <td>{c.email}</td>
            </tr>
        })}
    </tbody>
</table>
}
export default Declined;