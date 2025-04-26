export interface ApiResponse {
    success: boolean;
    data: any
}

export type PetType = {
    id: string;
    name: string;
    breeds: Array<Breed>
  };
  
export type Breed = {
    id: string;
    name: string;
    pet_type_id: string;
  };
  
export type PetData = {
    name: string;
    age: string;
    dob: string;
    gender: string;
    pet_type_id: string;
    breed_id: string | null;
  };