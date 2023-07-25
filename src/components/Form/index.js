import { useState, useContext } from 'react';
import { Navigate, Link, useNavigate} from 'react-router-dom';
import {signIn} from "../../services";
import Swal from 'sweetalert2'
import { verifyUserExist } from '../../services';
import { AuthContext } from '../../context/AuthContext';
import "./style.css"



const Form = () => {

        const { authentication, setAuthentication } = useContext(AuthContext);

        const [userCredentials, setUserCredencials] = useState({
            correo: "",
            password:"",
        })

        const navigate = useNavigate();
        const handleInputChange = (e)=> {
            const {name, value } = e.target;

            setUserCredencials({
                ...userCredentials,
                [name]: value,
            });
        };

         const handleSubmit = async (e)=> {
             e.preventDefault();
             const response = await signIn(userCredentials);
             if(response.status === 200) {
                 localStorage.setItem("token", response.data.access);
                 setAuthentication({
                     ...authentication,
                     isAuthenticated: true,
                     successMessage :"Usuario logeado exitosamente",
                 });
               
                 navigate("/home");
             }else{
                 setAuthentication({
                     ...authentication,
                     isAuthenticated:false,
                     isError:true,
                     errorMessage:"credenciales incorrectas",
                 });
                 Swal.fire({
                    title: "Error",
                    text: "credenciales incorrectas",
                    icon: "error"
                 })
             }
         }

      

    return (
        <section className="form-main">
        <div className="form-content">
            <div className="box">

                <h3>Bienvenido</h3>
                    <div className="input-box">
                        <input type="text"placeholder="Email" className="input-control"
                        name="correo"
                        value={userCredentials.correo}
                        onChange={handleInputChange}
                        />

                    </div>
                    <div className="input-box">
                        <input type="password"placeholder="Password" className="input-control"
                        name="password"
                        value={userCredentials.password}
                        onChange={handleInputChange}
                        />

                        <div className="input-link">
                            <a href="recuperar.html" className="gradient-text">Has Olvidado tu Contraseña</a>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>

                    <button type="submit" className="btn">Iniciar Sesiòn</button>
                    </form>

                <p>No tienes una cuenta? <a href="signup.html" className="gradient-text">Crear Cuenta</a></p>
            </div>
        </div>
    </section>
    )
}

export default Form
