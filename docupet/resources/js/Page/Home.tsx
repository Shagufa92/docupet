import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {getPets} from '../Api/getPets';

export interface Pets {
    id: number;
    name: string;
    age: string;
    dob: string;
    gender: string;
    pet_type: string;
    breed: string;
    is_dangerous: boolean;
}

export default function Home() {
    const [pets, setPets] = useState<Pets[]>([]);
    const navigate = useNavigate();


    useEffect(() => {

        const fetchPets = async () => {
                try {
                    const response = await getPets();
                    if (response.success) {
                        setPets(response.data.data);
                    }
                } catch (error) {
                  console.error('Error fetching pet types:', error);
                }
              };
              fetchPets();
      }, []);

    return <div className="container mt-5">
    {/* Add Pet Button */}
    <div className="mb-3 text-end">
      <button className="btn btn-primary" onClick={() => navigate('/create')}>
        + Add Pet
      </button>
    </div>

    {/* Pet Table */}
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Breed</th>
          <th>Age</th>
          <th>Date Of Birth</th>
          <th>Gender</th>
          <th>Is dangerious Animal</th>
        </tr>
      </thead>
      <tbody>
        {pets.map((pet) => (
          <tr key={pet.id}>
            <td>{pet.name}</td>
            <td>{pet.pet_type}</td>
            <td>{pet.breed ?? '—'}</td>
            <td>{pet.age}</td>
            <td>{pet.dob ?? 'Not provided'}</td>
            <td>{pet.gender}</td>
            <td>{pet.is_dangerous ? 'Yes': 'No' }</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>


}