import axios from 'axios';

const axiosInstance = axios.create({baseURL: "http://localhost:5000"})

const getReservationsAxios = (query) => {
    return axiosInstance.get(`/reservations`,
            { params: query })
}

export { getReservationsAxios }
