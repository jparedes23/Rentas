import React from 'react';

const Form = () => {
    return (
        <section className="form-main">
        <div className="form-content">
            
            <div className="box">
                <h3>Bienvenido</h3>  
                <form action="">
                    <div className="input-box">
                        <input type="text"placeholder="Email" className="input-control"/>
                    </div>
                    <div className="input-box">
                        <input type="password"placeholder="Password" className="input-control"/>
                        <div className="input-link">
                            <a href="recuperar.html" className="gradient-text">Has olvidado tu contraseña</a>
                        </div>
                    
                    </div>
                    <button typc="submit" className="btn">Iniciar Sesiòn</button>
                </form>  
                <p>No tienes una cuenta? <a href="signup.html" className="gradient-text">Crear cuenta</a></p>
            </div>
        </div>
    </section>
    );
}

export default Form;
