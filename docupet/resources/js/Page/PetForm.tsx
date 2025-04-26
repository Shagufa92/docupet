import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BreedSelector } from '../Component/BreedSelector';
import { DobSelector } from '../Component/Dob';
import { usePetContext } from '../Contexts/PetContext';
import { postPet } from '../Api/PostPet';
import { PetNameInput } from '../Component/PetNameInput';
import { PetType } from '../Component/PetType';
import { PetAge } from '../Component/PetAge';
import { PetGender } from '../Component/PetGender';

export default function PetForm() {

  const {petData, setPetData, mixBreed, setMixBreed, setBreedList } = usePetContext();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await postPet(petData, mixBreed);
    if(response.success){
      setPetData({name: '', age: '', dob: '', gender: 'Male', pet_type_id: '', breed_id: ''});
      setMixBreed('');
      setBreedList([]);
      navigate('/');

    } else {
      console.error('Error creating pet');
      alert('Something went wrong');
    }
  };

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-12 col-md-8 offset-md-2">
          <h2 className="text-center mb-4">Create a New Pet</h2>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="row">
              <PetNameInput />
              <PetType  />
              <BreedSelector />
              <PetAge />
              <DobSelector />
              <PetGender />
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
