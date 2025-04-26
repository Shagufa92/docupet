import React from "react";
import { usePetContext } from "../Contexts/PetContext";


export function PetType() {
  const { petData, setPetData, setBreedList, petTypes} = usePetContext();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedType = petTypes.find(type => type.id == e.target.value);
    setBreedList(selectedType?.breeds ?? []);
    setPetData({ ...petData, pet_type_id: e.target.value });
  };

  return (
    <div className="col-12 mb-3">
      <label htmlFor="pet_type" className="form-label">Pet Type</label>
      <select
        className="form-select"
        id="pet_type"
        value={petData.pet_type_id}
        onChange={handleChange}
        required
      >
        <option value="">Select Pet Type</option>
        {petTypes.map((type) => (
          <option key={type.id} value={type.id}>{type.name}</option>
        ))}
      </select>
    </div>
  );
};
