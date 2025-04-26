import { ApiResponse } from "../Type/interfaces";


export async function getBreedByPetType(selectedPetType: string): Promise<ApiResponse>{

    const result = await fetch(`/api/breeds/${selectedPetType}`);
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