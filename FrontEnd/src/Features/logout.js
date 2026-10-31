
import { api } from '../Utils/axios.js'

export async function logOut(){
    try{
    const {data} = await api.post("/auth/logout")
    return data;
    }
    catch(err){ 
        console.error(err);
        return { error: "Internal Server Error" };
    }
}