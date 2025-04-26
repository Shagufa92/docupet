import React from 'react';
import { usePetContext } from '../Contexts/PetContext';

export function PetNameInput(){
  const { petData, setPetData } = usePetContext();

  return (
        <div className="col-12 mb-3">
          <label htmlFor="name" className="form-label">Pet Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={petData.name}
            onChange={(e) => setPetData({ ...petData, name: e.target.value })}
            required
          />
      </div>
  );
};