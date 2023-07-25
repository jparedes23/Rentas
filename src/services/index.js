import axios from 'axios'
const LOGIN = "http://127.0.0.1:8000/api/login/"
const urlUsers ='http://127.0.0.1:8000/api/users'
const UserRegister ='http://127.0.0.1:8000/api/registro/'


export const signIn = async (user) => {

        const response = await fetch (`${LOGIN}`,{
            method:"POST",
            headers:{
                "Content-type": "application/json",
            },
            body: JSON.stringify(user),
        });
        const data = await response.json();
        const status = response.status;
        return { data, status };
};


export const postUser = async (user) =>{
    try {
        const response = await  fetch (`${UserRegister}`,{
            method:"POST",
            headers:{
                "Content-type": "application/json",
            },
            body: JSON.stringify(user),
        });
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error);
    }
};


export const verifyUserExist = async (user) => {
    try {
        const response = await fetch(urlUsers,{
            method:"GET",
            headers:{
                "Content-type": "application/json",
            },
        });
        const data = await response.json();
        const status = response.status;
        return {data, status};
    } catch (error) {
        
    }
}

export const getUsers = async ()=> {

    try {
        const response = await fetch(urlUsers)
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}