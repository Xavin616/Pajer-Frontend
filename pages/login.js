import { useState, useEffect } from 'react';
import styles from '../styles/Login.module.css';
import { useLoginUserMutation } from '../lib/userSlice';
import { useRouter } from 'next/router'

function Login() {
    const router = useRouter()
    const [loginUser, {data, isLoading, error}] = useLoginUserMutation()
    const [formData, setFormData] = useState({
        password: "",
        username: "",
        //email: "",
        //remeber to add re-password
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        await loginUser(formData)
    }

    useEffect(() => {
        if (data && data.auth_token) {
            console.log(data);
            localStorage.setItem('login', 
                JSON.stringify({
                    isAuthenticated: true,
                    auth_token: data.auth_token,
                }))
            router.push("/reader")
        }

    }, [data, isLoading, router]);



    return(
        <div>
            <form onSubmit={handleSubmit} action="post">
                <label htmlFor="username">
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Username"
                        value={formData.username}
                        onChange={(e) => setFormData({ ...formData, username: e.target.value})}
                    />
                </label>
                <label htmlFor="password">
                    <input 
                        type="text" 
                        name="password" 
                        placeholder="Password" 
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value})}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default Login;
