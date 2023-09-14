import React, { useState } from "react";
import { useCandidateCount } from "./CandidateCountContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddCandidate = () => {

    const [candidate, setCandidate] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        notes: ''
    });

    const onTextChange = e => {
        const copy = {...candidate};
        copy[e.target.name] = e.target.value;
        setCandidate(copy);
    }

    const { refreshData } = useCandidateCount();

    const navigate = useNavigate();

    const onFormSubmit = async e => {
        e.preventDefault();
        await axios.post('/api/candidate/addcandidate', candidate);
        await refreshData();
        navigate('/home');
    }

    return (
        <div className="row" style={{ marginTop: 20 }}>
            <div className="col-md-6 offset-md-3">
                <div className="card card-body bg-light">
                    <h4>Add Candidate</h4>
                    <form onSubmit={onFormSubmit}>
                        <input
                            onChange={onTextChange}
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            className="form-control"
                        />
                        <br />
                        <input
                            onChange={onTextChange}
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            className="form-control"
                        />
                        <br />
                        <input
                            onChange={onTextChange}
                            type="text"
                            name="email"
                            placeholder="Email"
                            className="form-control"
                        />
                        <br />
                        <input
                            onChange={onTextChange}
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            className="form-control"
                        />
                        <br />
                        <textarea
                            onChange={onTextChange}
                            rows={5}
                            className="form-control"
                            name="notes"
                            placeholder="Notes"
                        />
                        <br />
                        <button className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AddCandidate;