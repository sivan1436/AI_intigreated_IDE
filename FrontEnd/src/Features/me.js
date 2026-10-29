
import { api } from '../Utils/axios.js'

export async function Me() {
    try {
        const { data } = await api.get('/me');
        return data;
    } catch (err) {
        console.error('Failed to fetch current user:', err);
        return null;
    }
}