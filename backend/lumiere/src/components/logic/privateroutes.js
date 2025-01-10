// import { Children } from "react";
// import { AuthContext } from "./context";
// import { useNavigate } from "react-router-dom";


// const PrivRoute = ({children})=> {
//     const {isAuth, loading} = AuthContext();
//     const nav = useNavigate()

//     if (loading){
//         return <h1>Loading</h1>
//     }

//     if (isAuth){
//         return children
//     } else {
//         nav('/signOn')
//     }
// }



// const DynamicAppView = ({children})=> {
//     const {isAuth, loading} = AuthContext();
//     const nav = useNavigate()

//     if (loading){
//         return children
//     }

//     if (isAuth){
//         return children
//     } else {
//         return children
//     }
// }




// export default PrivRoute;