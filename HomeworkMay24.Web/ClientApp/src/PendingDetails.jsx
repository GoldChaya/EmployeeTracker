import { useCandidateCount } from "./CandidateCountContext";
import { useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const PendingDetails = () => { 
    
    const [candidateToView, setCandidateToView] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: '',
    status: ''
});

const { updateCandidateCounts } = useCandidateCount();
const {id} = useParams();

useEffect(() => {
    const GetCandidate = async () => {
        const { data } = await axios.get(`/api/candidate/getbyid?id=${id}`);
        setCandidateToView(data);
    }

    GetCandidate();

}, []);

const onButtonClick = async (status) => {
    await axios.post('/api/candidate/updateCandidateStatus', { id, status });
    await updateCandidateCounts();
}

return (
    <div className="row">
        <div className="col-md-6 offset-md-3">
            <div className="card card-body bg-light">
                <h4>Name: {candidateToView.firstName} {candidateToView.lastName}</h4>
                <h4>Email: {candidateToView.email}</h4>
                <h4>Phone: {candidateToView.phone}</h4>
                <h4>Status: {candidateToView.status}</h4>
                <h4>Notes:</h4>
                <p>{candidateToView.notes}</p>
                {candidateToView.status === 'Pending' && <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button onClick={() => onButtonClick('Hired')} className="btn btn-primary me-md-2 col-3">Confirm</button>
                    <button  onClick={() => onButtonClick('Declined')} className="btn btn-danger col-3">Refuse</button>
                </div>}
            </div>
        </div>
    </div>
)

}
export default PendingDetails;