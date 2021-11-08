import axios from 'axios';

const axiosInstance = axios.create({baseURL: "http://localhost:5000"})

const getPlacesAxios = (query) => {
    return axiosInstance.get(`/places`,
            { params: query })
}

export { getPlacesAxios }
