import React from 'react';
import { usePetContext } from '../Contexts/PetContext';

export function PetAge() {
  const { petData, setPetData } = usePetContext();
    
  return (
    <div className="col-12 mb-3">
    <label htmlFor="age" className="form-label">Age</label>
    <input
      type="number"
      className="form-control"
      id="age"
      min={1}
      value={petData.age}
      onChange={(e) => setPetData({ ...petData, age: e.target.value })}
      required
    />
  </div>
  );
};
