import axios from "axios";
import { useState } from "react";

const RegisterPage = () => {
    const [message, setMessage] = useState("");

    const onSubmit = async (ev)=> {
        ev.preventDefault();
        const [username, password] = [ev.target[0].value, ev.target[1].value];
        const response = await axios.post("/api/register", {
            username,
            password
        });
        // Aca obtenes la respuesta y accionas en base a eso
        console.log(response.data);
        setMessage(response.data.message)
    }

    return (
        <div id="registerPage">
            <h1>Registro</h1>
            <form onSubmit={onSubmit}>
                <label>Nombre de usuario</label>
                <input type="text" placeholder="e.g. Jorge" name="username" maxLength="20" minLength="5" required />
                <label>Contraseña</label>
                <input type="password" placeholder="e.g. jorge1999" name="password" maxLength="20" minLength="8" required />
                <button>Enviar</button>
            </form>
            <h1>{message}</h1>
        </div>
    )
}

export default RegisterPage