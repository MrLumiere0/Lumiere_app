import axios from "axios"
import { pass } from "three/src/nodes/TSL.js"

const LOGIN_URL = "http://127.0.0.1:8000/register"
const URL = "http://127.0.0.1:8000/token"
const REFRESH = 'http://127.0.0.1:8000/token/refresh'
const ARTICLES = 'http://127.0.0.1:8000/getUserArticles'
const LOGOUT = 'http://127.0.0.1:8000/logout'
const CURRUSERINFOR = 'http://127.0.0.1:8000/getUserInfo'
const AUTHENTICATION = 'http://127.0.0.1:8000/isauthenticated'
// const DELETEARTICLE = 'http://127.0.0.1:8000/delArticle'



export const login = async(username, password) => {
    const response = await axios.post(URL,
        {username:username, password:password},
            {withCredentials: false}
    )
    return response.data  
}

export const logout = async() => {
    try {
        const response = await axios.post(LOGOUT,{},
                {withCredentials: true}
        )
        return response.data
    }   
    catch(error) {
            return false
    }   
}

export  function register(firstName, lastName,role, email, phoneNum  ){
    const response =  axios.post(LOGIN_URL,
        {username:email, first_Name:firstName, last_Name:lastName,role:role, 
            phone:phoneNum},
            {withCredentials: false}
    )

    return response
    
}
export const refreshToken = async () => {
    try {
        await axios.post(REFRESH, {}, {withCredentials: true})
        return true
    }   
    catch(error) {
            return false
    }   

}


export const getArticles = async() => {
  
    try{
        const response = await axios.get(ARTICLES,
            {withCredentials: true} )

        return response.data
    }

    catch(error){
        return callRefresh(error,axios.get(ARTICLES,
            {withCredentials: true}))
    }   
}

export const getUsersInfo = async() => {
  
    try{
        const response = await axios.get(CURRUSERINFOR,
            {withCredentials: true} )

        return response.data
    }

    catch(error){
        console.log("error", error)
    }   
}



export const callRefresh = async (error, func) => {
    if(error.response && error.response.status ===401){
        const tokenRefreshed = await refreshToken();

        if (tokenRefreshed){
            const retryResponse = await func()
            return retryResponse.data
        }
    }
}

export const isAuthenticated = async () => {
    try{
         await axios.get(AUTHENTICATION,{},
            {withCredentials: true} )

        return true
    }
    catch(error){
        return false;
    }   
}


// export function delArticles (artId) {

//         const response =  axios.delete(DELETEARTICLE,
//             {headline:artId},
//                 {withCredentials: true}
//         )
//         return response.data
    
        
    
// } 