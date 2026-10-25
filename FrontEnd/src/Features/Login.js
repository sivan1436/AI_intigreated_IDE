
import { api } from '../Utils/axios.js'

export async function login(token){
    try{
    const {data} = await api.post("/auth/login", {token})
    return data;
    }
    catch(err){ 
        console.error(err);
        return { error: "Internal Server Error" };
    }
}