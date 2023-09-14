import { useState,useEffect } from "react";
import axios from "axios";

const Hired = () =>{
    
    const [hiredCandidates, setHiredCandidates] = useState([]);

    useEffect(() => {
        const loadHired = async () => {
            const { data } = await axios.get('/api/candidate/GetByStatus?status=hired');
            setHiredCandidates(data);
        } 

        loadHired();
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
        {hiredCandidates.map(c => {
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
export default Hired;