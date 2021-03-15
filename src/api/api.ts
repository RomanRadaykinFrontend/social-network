import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'a5bec311-2107-42d1-af92-021a513f9e33'
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
        return instance.post(`follow/${userId}`)
    },
    unfollowUser(userId: string){
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: string){
        console.warn('Obsolete method. Please profileApi object')
        return profileAPI.getProfile(userId)
    }
}
export const profileAPI = {
    getProfile(userId: string){
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: string){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string){
        return instance.put(`profile/status/`, {status})
    }
}
export const authAPI = {
    me(){
        return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
    },
    login(email: string, password: string, rememberMe = false){
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    loginOut(){
        return instance.delete(`auth/login`)
    },
}

