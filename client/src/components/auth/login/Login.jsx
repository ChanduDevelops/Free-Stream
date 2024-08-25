import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { useContext } from 'react'
import { AuthContext } from "../AuthProvider";


const Login = () => {
    const auth = getAuth();

    const { setIsLoggedin } = useContext(AuthContext)
    const loginWithGoogle = async () => {
        try {
            const userCred = await signInWithPopup(auth, new GoogleAuthProvider())
            if (userCred) {
                setIsLoggedin(true)
            }
        } catch (e) {
            console.log(e);
        }
    }
    return (<>
        <div className="login-container">
            <form>
                <h1>User Login</h1>
                <div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' required />
                    </div>

                    <div className="relative">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" required />
                    </div>
                    <a href="#">Forgot password?</a>
                    <div><button onClick={loginWithGoogle} className="button">Login</button></div>
                </div>
                <div><button className="button">Login with Google</button></div>
            </form>
        </div>
    </>)
}

export default Login
