import React, { useState } from 'react';
import { usePetContext } from '../Contexts/PetContext';
import { Breed } from '../Type/interfaces';

export function BreedSelector() {
  const { breedsList, setPetData, petData, mixBreed, setMixBreed } = usePetContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(breedsList);
  const [breedOption, setBreedOption] = useState('');
   
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    const filteredResults = breedsList.filter(breed =>
      breed.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const handleSelect = (selectedBreed: Breed) => {
    setSearchTerm(selectedBreed.name);
    setPetData({ ...petData, breed_id: selectedBreed.id });
    setSearchResults([]);
  };

  return (
    <>
        <div className="col-12 mb-3">
        <label htmlFor="age" className="form-label">Choose a Breed</label>
        <input
            type="text"
            id="search"
            className="form-control"
            placeholder="Search breed..."
            value={searchTerm}
            onChange={handleSearch}
            onBlur={() => {setTimeout(() => setSearchResults([]), 100);}}
            />
        <ul className="list-group">
            {searchResults.map((breed, index) => (
            <li
                key={index}
                className="list-group-item"
                style={{ cursor: 'pointer' }} 
                onClick={() => handleSelect(breed)}
            >
                {breed.name}
            </li>
            ))}
        </ul>
        </div>
        <div className="mb-3">
            <div className="form-check form-check-inline">
                <input
                    className="form-check-input"
                    type="radio"
                    name="breedOption"
                    id="dontKnow"
                    value="dont_know"
                    checked={breedOption === 'dont_know'}
                    onChange={(e) => { setBreedOption('dont_know'); setPetData({ ...petData, breed_id: null })}}
                />
                <label className="form-check-label" htmlFor="dontKnow">
                I don't know
                </label>
            </div>
            <div className="form-check form-check-inline">
                <input
                    className="form-check-input"
                    type="radio"
                    name="breedOption"
                    id="itsMix"
                    value="its_a_mix"
                    checked={breedOption === 'its_a_mix'}
                    onChange={(e) => setBreedOption('its_a_mix')}
                />
                <label className="form-check-label" htmlFor="itsMix">
                It's a mix
                </label>
            </div>

            {breedOption === 'its_a_mix' && (
                <div className="mt-3">
                <label htmlFor="customBreed" className="form-label">
                    Specify the mix
                </label>
                <input
                    type="text"
                    id="customBreed"
                    className="form-control"
                    value={mixBreed}
                    onChange={(e) => setMixBreed(e.target.value)}
                    placeholder="E.g., Lab + Poodle"
                />
                </div>
            )}
        </div>
    </>
  );
};
