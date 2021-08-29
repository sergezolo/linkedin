import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Login.css';
import { auth } from '../firebase';
import { login } from '../features/userSlice';

function Login() {

    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then((userAuth) => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profilePic: userAuth.user.photoUrl,
            }))
        }).catch((error) => alert(error));
    };

    const register = () => {
        if (!name) {
            return alert('Please enter a full name!')
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoUrl: profilePic,
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePic,
                }))
            })
        }).catch((error) => alert(error));
    };

    return (
        <div className="login">
            <img
                src="http://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"
                alt="LinkedIn Logo"
            />
            <form>
                <input type="text" placeholder="Full Name (required if registering)" value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="text" placeholder="Profile picture URL (optional)" value={profilePic} onChange={(e) => setProfilePic(e.target.value)}/>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not a member?
                <span className="login-register" onClick={register}> Register Now</span>
            </p>


        </div>
    )
}

export default Login;