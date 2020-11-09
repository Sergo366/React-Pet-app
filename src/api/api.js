import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "565e165f-881f-4b0d-a639-bb2e44769ce8"
    },

});

export  const usersAPI = {
    getUsers(currentPage = 1, pageSize= 10) {
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
}

export  const followAPI = {
    postUsers(id) {
        return  instance.post('follow/' + id )
            .then(response => response.data)
    }
}

export  const unfollowAPI = {
    deleteUsers(id) {
        return  instance.delete('follow/' + id )
            .then(response => response.data)
    }
}


