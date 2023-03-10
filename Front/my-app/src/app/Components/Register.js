// REGISTER PAGE!

import React, { useState } from 'react'
import { RegisterAsync, selectRegister } from "../Slicers/registerSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './FooterComponents/Footer';


const Register = () => {
    // Declaring variables of the User
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const navigate = useNavigate();

    const notify = () => {
        if (first_name === '') {
            toast.error('Please fill the first Name field.', {
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
            });
        }
        else if (last_name === "") {
            toast.error('Please fill the last name field.', {
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
            });
        }
        else if (username === '') {
            toast.error('Please fill the username field.', {
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
            });
        }
        else if (password === '') {
            toast.error('Please fill the password field.', {
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
            });
        }
        else if (email === '') {
            toast.error('Please fill the email field.', {
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
            });
        }

    }

    const FinalRegister = async () => {
        if (username !== '' && password !== '' && email !== '' & first_name !== '' && last_name !== '') {
            dispatch(RegisterAsync({ "username": username, "password": password, "email": email, "first_name": first_name, "last_name": last_name }))
                .then(x => {
                    // get the response from backend if the username is already taken and notify the user:
                    if (x.payload.taken === "true") {
                        toast.error('Username is already taken, try again.', {
                            position: "bottom-left",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: false,
                            progress: undefined,
                            theme: "colored",
                        });
                    } else {
                        toast.success('Welcome! Signed up.', {
                            position: "bottom-right",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: false,
                            progress: undefined,
                            theme: "colored",
                        });
                        navigate("/products");
                    }
                })
        }
    }

    return (
        <div style={{ zIndex: "1" }} class="header">
            <div style={{ height: "75px" }} class="inner-header flex">
                <div style={{ width: "520px", height: "550px", backgroundColor: "gainsboro", margin: "auto", marginTop: "2.5%", padding: "20px", borderRadius: "25px" }}>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", rowGap: "15px" }}>
                        <h1 class="animate__animated animate__zoomIn" style={{ width: "100%", fontSize: "70px", color: "black", fontFamily: "monospace" }}>Register</h1>
                        <input required class="animate__animated animate__zoomInDown" style={{ width: "60%", borderRadius: "10px", margin: "auto", fontSize: "17px", color: "black", blockSize: "50px" }} placeholder='First name' value={first_name} onChange={(e) => setFirstName(e.target.value)} />
                        <input required class="animate__animated animate__zoomInDown" style={{ width: "60%", borderRadius: "10px", margin: "auto", fontSize: "17px", color: "black", blockSize: "50px" }} placeholder='Last name' value={last_name} onChange={(e) => setLastName(e.target.value)} />
                        <input required class="animate__animated animate__zoomInDown" style={{ width: "60%", borderRadius: "10px", margin: "auto", fontSize: "17px", color: "black", blockSize: "50px" }} placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                        <input required class="animate__animated animate__zoomInDown" style={{ width: "60%", borderRadius: "10px", margin: "auto", fontSize: "17px", color: "black", blockSize: "50px" }} type={'password'} placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <input required class="animate__animated animate__zoomInDown" style={{ width: "60%", borderRadius: "10px", margin: "auto", fontSize: "17px", color: "black", blockSize: "50px" }} type={'email'} placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <button class="animate__animated animate__zoomInDown" style={{ width: "25%", borderRadius: "5px", margin: "auto", fontSize: "17px", color: "white", blockSize: "50px", backgroundColor: "dodgerblue" }} type="button"
                            onClick={() => { FinalRegister(); notify() }}

                        >
                            <lord-icon
                                src="https://cdn.lordicon.com/egiwmiit.json"
                                trigger="hover"
                                colors="primary:#ffffff">
                            </lord-icon>
                        </button>
                        <div>
                            <Link to="/login"><p class="animate__animated animate__bounceInUp" style={{ fontSize: "20px" }}>Already have an account?, Click Here!</p></Link>
                        </div>
                        <Outlet />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Register