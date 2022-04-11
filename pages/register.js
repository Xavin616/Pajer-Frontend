import { useState, useEffect } from 'react';
import { useLoginUserMutation, useRegisterUserMutation } from '../lib/userSlice';
import { useRouter } from 'next/router'
import { setUser } from '../lib/userReducer';
import { useDispatch } from 'react-redux';
import styles from '../styles/Login.module.css';
import Image from 'next/image';

function Register() {
  const router = useRouter()
  const dispatch = useDispatch()
  const [loginUser, {data, isLoading, error}] = useLoginUserMutation();
  const [registerUser] = useRegisterUserMutation();
  const [formData, setFormData] = useState({
      username: "",
      email: "",
      password: "",
      re_password: "",
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        registerUser(formData)
            .then(() => {
                loginUser({username: formData.username, password: formData.password})
            });
    }

    useEffect(() => {
        if (data && data.auth_token) {
            dispatch(setUser(data))            
            localStorage.setItem('login', 
                JSON.stringify({
                    isAuthenticated: true,
                    auth_token: data.auth_token,
                }))
            router.push("/reader")
        }
    }, [data, isLoading, dispatch, router])

    return (
      <div className={styles.main}>
            <div className={styles.root}>
                <div className={styles.logoholder}>
                    <Image
                        src={'/pajer.png'}
                        alt={'pajer'}
                        height={50}
                        width={198}
                    />
                </div>
                <form onSubmit={handleSubmit} action="post">
                    <div className={styles.formControl}>
                        <label htmlFor="username">
                            Username
                        </label>
                            <input 
                                className={styles.input}
                                type="text" 
                                name="username" 
                                placeholder="Username"
                                value={formData.username}
                                onChange={(e) => setFormData({ ...formData, username: e.target.value})}
                            />
                    </div>
                    <div className={styles.formControl}>
                        <label htmlFor="email">
                            Email
                        </label>
                            <input
                                className={styles.input} 
                                type="email" 
                                name="email" 
                                placeholder="Email" 
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value})}
                            />
                    </div>
                    <div className={styles.formControl}>
                        <label htmlFor="password">
                            Password
                        </label>
                            <input
                                className={styles.input} 
                                type="password" 
                                name="password" 
                                placeholder="Password" 
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value})}
                            />
                    </div>
                    <div className={styles.formControl}>
                        <label htmlFor="re_password">
                            Retype Password
                        </label>
                            <input
                                className={styles.input} 
                                type="password" 
                                name="re_password" 
                                placeholder="Retype Password" 
                                value={formData.re_password}
                                onChange={(e) => setFormData({ ...formData, re_password: e.target.value})}
                            />
                    </div>
                    <button className={styles.button} type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Register;