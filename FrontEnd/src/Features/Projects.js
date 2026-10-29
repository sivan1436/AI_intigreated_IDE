import { api } from '../Utils/axios.js'

export async function CreateProject(name,description) {
    try {
        const { data } = await api.post('/project/',{name,description});
        return data;
    } catch (err) {
        console.error('Failed to fetch current user:', err);
        return { error: 'Internal Server Error' };
    }
}

export async function getProjects() {
    try {
        const { data } = await api.get('/projects');
        return data;
    } catch (err) {
        console.error('Failed to fetch current user:', err);
        return { error: 'Internal Server Error' };
    }
}

import { api } from '../Utils/axios.js'

export async function getProjectById(id) {
    try {
        const { data } = await api.get(`/project/${id}`);
        return data;
    } catch (err) {
        console.error('Failed to fetch current user:', err);
        return { error: 'Internal Server Error' };
    }
}