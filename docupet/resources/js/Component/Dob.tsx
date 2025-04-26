import React, { useState, useEffect } from 'react';
import { usePetContext } from '../Contexts/PetContext';
import {isValidDate} from '../Utils/isValidDate';

const months = [
    { id: '01', name: "January" },
    { id: '02', name: "February" },
    { id: '03', name: "March" },
    { id: '04', name: "April" },
    { id: '05', name: "May" },
    { id: '06', name: "June" },
    { id: '07', name: "July" },
    { id: '08', name: "August" },
    { id: '09', name: "September" },
    { id: '10', name: "October" },
    { id: '11', name: "November" },
    { id: '12', name: "December" }
  ];

export function DobSelector() {
    const {petData, setPetData } = usePetContext();
    const [dob, setDob] = useState('no');
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [dobError, setDobError] = useState(false);

    useEffect(() => {
        if(day !== '' && month !== '' && year !== ''){
            const dateStr = `${year}-${month}-${day}`; 
            if(isValidDate(dateStr)) {
                setPetData({ ...petData, dob: dateStr });
                setDobError(false);
            } else {
                setDobError(true);
            }
        }

    }, [day, month, year]);

    return (
        <>
            <div className="col-12 mb-3">
                <label className="form-label d-block">DOB</label>
                <div className="btn-group" role="group" aria-label="dob">
                    <input
                        type="radio"
                        className="btn-check"
                        name="dob"
                        id="yes"
                        value="yes"
                        autoComplete="off"
                        checked={dob === 'yes'}
                        onChange={(e) => setDob(e.target.value)}
                    />
                    <label className="btn btn-outline-primary" htmlFor="yes">Yes</label>

                    <input
                        type="radio"
                        className="btn-check"
                        name="dob"
                        id="no"
                        value="no"
                        autoComplete="off"
                        checked={dob === 'no'}
                        onChange={(e) => setDob(e.target.value)}
                    />
                    <label className="btn btn-outline-primary" htmlFor="no">No</label>
                </div>
            </div>


            {dob === 'yes' ? 
            <>
                <div className="row mb-3">
                    
                    <div className="col-md-4">
                        <label htmlFor="dob" className="form-label">Month</label>
                        <select
                            className="form-select"
                            id="month"
                            value={month}
                            onChange={(e) => {setMonth(e.target.value)}}
                            required
                        >
                        <option value="">Select the month</option>
                            {months.map((month) => (
                                <option key={month.id} value={month.id}>{month.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-4">
                    <label htmlFor="dob" className="form-label">Day</label>
                    <input
                        className="form-control"
                        id="day"
                        type="number"
                        value={day}
                        min="1" 
                        max="31"
                        onChange={(e) => setDay(e.target.value)}
                        required/>
                    </div>
                    <div className="col-md-4">
                    <label htmlFor="dob" className="form-label">Year</label>
                    <input
                        className="form-control"
                        id="year"
                        type="number"
                        value={year}
                        min="1900" 
                        max={new Date().getFullYear()}
                        onChange={(e) => setYear(e.target.value)}
                        required
                    />
                    </div>
            </div>
            {dobError && <div className="alert alert-danger">Please enter a valid date.</div>}
            </>
            : null
            }
        </>
    )
}
