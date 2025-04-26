import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
  } from 'react';
  import { getPetType } from '../Api/getPetType';
import { PetType, Breed, PetData } from '../Type/interfaces';
  
  
  type PetContextType = {
    petTypes: PetType[];
    breedsList: Breed[];
    mixBreed: string;
    petData: PetData;
    setPetTypes: React.Dispatch<React.SetStateAction<PetType[]>>;
    setBreedList: React.Dispatch<React.SetStateAction<Breed[]>>;
    setMixBreed: React.Dispatch<React.SetStateAction<string>>;
    setPetData: React.Dispatch<React.SetStateAction<PetData>>;
  };
  
  // Create context
  const PetContext = createContext<PetContextType | undefined>(undefined);
  
  // Create provider as functional component
  export const PetProvider = ({ children }: { children: ReactNode }) => {
    const [petTypes, setPetTypes] = useState<PetType[]>([]);
    const [breedsList, setBreedList] = useState<Breed[]>([]);
    const [mixBreed, setMixBreed] = useState('');
    const [petData, setPetData] = useState<PetData>({
      name: '',
      age: '',
      dob: '',
      gender: 'Male',
      pet_type_id: '',
      breed_id: '',
    });
  
    // Fetch pet types on mount
    useEffect(() => {
      const fetchPetTypes = async () => {
        try {
          const response = await getPetType();
          if (response.success) {
            setPetTypes(response.data.data);
          }
        } catch (error) {
          console.error('Error fetching pet types:', error);
        }
      };
      fetchPetTypes();
    }, []);
  
    return (
      <PetContext.Provider
        value={{
          petTypes,
          breedsList,
          mixBreed,
          petData,
          setPetTypes,
          setBreedList,
          setMixBreed,
          setPetData,
        }}
      >
        {children}
      </PetContext.Provider>
    );
  };
  
  // Hook to use the pet context
  export const usePetContext = (): PetContextType => {
    const context = useContext(PetContext);
    if (!context) {
      throw new Error('usePetContext must be used within a PetProvider');
    }
    return context;
  };
  