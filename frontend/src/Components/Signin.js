import axios from "axios";
import { useState } from "react";

const Signin = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const signin = async () => {
        const response = await axios.post("/api/auth/signin", {
            username,
            password,
        });
        const token = response.data.token;
        localStorage.setItem("token", token);
    };
    return (
        <div className='flex flex-col'>
            <input
                placeholder='Enter your User Name'
                onChange={(e) => {
                    setUsername(e.target.value);
                }}
            />
            <input
                type='password'
                placeholder='Enter password'
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            />
            <button onClick={signin}>Login</button>
        </div>
    );
};

export default Signin;
