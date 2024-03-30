import { getAuth,GoogleAuthProvider,signInWithPopup  } from "firebase/auth";
import app from "../../firebase/fiebase.init";

const Login = () => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();
    const signInWithGooglePopUp = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user,)
            })
        .catch(e => console.log(e))
    }
    return (
        <div>
            <button onClick={signInWithGooglePopUp}>Sign in With Google</button>
        </div>
    )
}
export default Login;