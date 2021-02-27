import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '5d8331af-03ac-4492-952f-4f4866536655'
    }
})

export const userAPI = {
    getUser(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    followUser(userId: string){
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    unfollowUser(userId: string){
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    getProfile(userId: string){
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    }
}
export const authAPI = {
    me(){
        return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
    }
}

