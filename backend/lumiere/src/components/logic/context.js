// import React, { createContext, useState, useEffect, useContext } from 'react'
// import { useNavigate } from 'react-router-dom';
// import { isAuthenticated } from '../api';
// import { getUsersInfo } from '../api';

// export const AuthContext = createContext();

// const nav = useNavigate();

// export const AuthProvider = ({children}) => {

//     const [isAuth, setIsAuth] = useState(false);
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
    
//     const get_authenticated_user = async () => {
//         try {
//           const success = await isAuthenticated();
//           setIsAuth(success)
//           const userInfo = await getUsersInfo()
//           setUser(userInfo)
//         }
        
//         catch{
//           setIsAuth(false)
//         }
//         finally{
//             setLoading(false)
//         }
//       }
//     useEffect(() => {
//         get_authenticated_user();
//     }, [window.location.pathname])

//     return (
//         <AuthContext.Provider value={{ loading, isAuth, user}}>
//           {children}
//         </AuthContext.Provider>
//       );
// }





