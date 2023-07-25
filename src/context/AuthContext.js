import { createContext, useState } from "react";
import { getUsers } from "../services";

export const AuthContext = createContext();

export const AuthProvider = (props) =>{

    const { children } = props;

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user"))??{}
    );


    const [authentication, setAuthentication] = useState({
        isAuthenticated: false,
        isLoading: false,
        isError: false,
        errorMessage:"",
        successMessage:"",
        user:{}
    })

     async function isAuth(correo, password){
        const usersDB = await getUsers();
        const user = usersDB.find(
            (userDb) => userDb.correo === correo && userDb.password === password);
        return Object.entries(user).length !== 0;
    }


    return(
        <AuthContext.Provider
        value={{
            authentication,
            setAuthentication,
        }}
        >
            {children}
        </AuthContext.Provider>
    )

}