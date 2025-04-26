import React from 'react';
import { usePetContext } from '../Contexts/PetContext';

export function PetGender() {
  const { petData, setPetData } = usePetContext();
    
  return (
    <div className="col-12 mb-3">
      <label className="form-label d-block">Gender</label>
      <div className="btn-group" role="group" aria-label="Gender">
        <input
          type="radio"
          className="btn-check"
          name="gender"
          id="male"
          value="Male"
          autoComplete="off"
          checked={petData.gender === 'Male'}
          onChange={(e) => setPetData({ ...petData, gender: e.target.value })}
        />
      <label className="btn btn-outline-primary" htmlFor="male">Male</label>
        <input
          type="radio"
          className="btn-check"
          name="gender"
          id="female"
          value="Female"
          autoComplete="off"
          checked={petData.gender === 'Female'}
          onChange={(e) => setPetData({ ...petData, gender: e.target.value })}
        />
      <label className="btn btn-outline-primary" htmlFor="female">Female</label>
    </div>
   </div>
  );
};
