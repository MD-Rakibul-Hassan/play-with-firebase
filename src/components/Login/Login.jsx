import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import app from "../../firebase/fiebase.init";
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app)
    const providerGoogle = new GoogleAuthProvider();
    const providerGithub = new GithubAuthProvider();
    const signInWithGooglePopUp = () => {
        signInWithPopup(auth, providerGoogle)
            .then(result => {
                const loginedUser = result.user;
                console.log(loginedUser);
                setUser(loginedUser)
            })
        .catch(e => console.log(e))
    }
    const signInWithGithub = () => {
        signInWithPopup(auth, providerGithub)
            .then(result => {
                const loginedUser = result.user;
                setUser(loginedUser);
                console.log(loginedUser)
            })
            .catch(e => console.log(e.message))
    }
    const logOut = () => {
        signOut(auth)
            .then(result => setUser(null))
            .catch(e => console.log(e))
    }
    return (
        <div className="my-5">
            {
                user ? 
                    <button
                        onClick={logOut}
                        className="bg-orange-500 px-4 py-2 rounded-xl text-white font-bold"
                    >LogOut</button> : <div>
                        <button onClick={signInWithGooglePopUp}
                            className="bg-lime-600 px-4 py-2 rounded-xl text-white font-bold"
                            >Sign in With Google
                        </button>
                        <button onClick={signInWithGithub}
                            className="bg-lime-600 px-4 py-2 rounded-xl text-white font-bold"
                            >Sign in With Github
                        </button>
                    </div>
            }
            
            
            <div>
                <h1>User Name : {user?.displayName}</h1>
                <h1>User Email : {user?.email}</h1>
                <img src={user?.photoURL} alt="" />
            </div>
        </div>
    )
}
export default Login;