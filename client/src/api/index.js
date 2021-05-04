import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
})

export const fetchMovies = () => API.get('/movies');

export const createMovie = (newMovie) => API.post('/movies', newMovie);

export const updateMovie = (id, updatedMovie) => API.patch(`/movies/${id}`, updatedMovie);

export const deleteMovie = (id) => API.delete(`/movies/${id}`);


export const signin = (data) => API.post('/admin/login', data);
