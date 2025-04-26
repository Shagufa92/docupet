import { ApiResponse } from "../Type/interfaces";


export async function getPetType(): Promise<ApiResponse>{

    const result = await fetch('/api/petTypes');
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