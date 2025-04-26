import { data } from "react-router-dom";
import { ApiResponse, PetData } from "../Type/interfaces";


export async function postPet(petData: PetData, mixBreed: string): Promise<ApiResponse>{

    const csrfToken = document.querySelector("meta[name='csrf-token']")?.getAttribute('content');

    if(mixBreed){
        const breedResult = await fetch('/api/breed', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
               'X-CSRF-TOKEN': csrfToken || ''
            },
            credentials: 'same-origin',
            body: JSON.stringify({
                pet_type_id: petData.pet_type_id,
                name: mixBreed,
                is_dangerous: false
            })
          });
        if (breedResult.ok) {
            const breedData = await breedResult.json(); 
            petData = {...petData, breed_id: breedData.data.id }
        }else {
            return {
                success: false,
                data: null
            }
        }
    }

    const result = await fetch('/api/pets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
           'X-CSRF-TOKEN': csrfToken || ''
        },
        credentials: 'same-origin',
        body: JSON.stringify(petData)
      });

    if (result.ok) {
        const data = await result.json();
        return {
            success: true,
            data: data
        }
    } else {
        return {
            success: false,
            data: null
        }
    }
}