import { useState } from "react";
import axios from "axios";
const Signup = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [username, setUsername] = useState();

    const singup = async () => {
        try {
            const response = await axios.post("/api/auth/signup", {
                email,
                password,
                username,
            });
            console.log(response.data);
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <div className='flex flex-col'>
            <input
                placeholder='UserName'
                type='text'
                onChange={(e) => {
                    setUsername(e.target.value);
                }}
            />
            <input
                placeholder='Email'
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            />
            <input
                placeholder='Password'
                type='password'
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            />
            <button onClick={singup}>Sign Up</button>
        </div>
    );
};

export default Signup;
