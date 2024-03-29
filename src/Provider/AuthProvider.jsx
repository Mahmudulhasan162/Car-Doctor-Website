import { createContext, useEffect, useState } from "react"; 
import { getAuth, createUserWithEmailAndPassword, 
onAuthStateChanged,signInWithEmailAndPassword,signOut, GoogleAuthProvider, 
signInWithPopup } from "firebase/auth"; 
import app from "../Firebase/firebase.config";
 
 
export const AuthContext= createContext(null); 
const auth = getAuth(app); 
const provider = new GoogleAuthProvider(); 
 
const AuthProvider = ({children}) => { 
    const [user, setUser] = useState(); 
    const [loading, setLoading] = useState(true); 
 
    const googleLogIn= () => { 
        setLoading(true); 
        return signInWithPopup(auth, provider) 
    } 
    const Register = (email, password) => { 
        setLoading(true); 
        return createUserWithEmailAndPassword(auth,email, password) 
    } 
    const Login = (email, password) => { 
        setLoading(true); 
        return signInWithEmailAndPassword(auth,email, password) 
    } 
    const Logout = () =>{ 
        setLoading(true); 
        return signOut(auth) 
    } 
    useEffect(()=>{ 
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{ 
            setUser(currentUser); 
            setLoading(false) 
        }); 
            return ()=>{ 
                return unSubscribe() 
            }; 
    },[]); 
 
    const authInfo = { 
        googleLogIn, 
        Register, 
        Login, 
        user, 
        Logout, 
        loading, 
    }; 
    return ( 
        <div> 
            <AuthContext.Provider value={authInfo}> 
 
            { 
                children 
            } 
            </AuthContext.Provider> 
        </div> 
    ); 
}; 
 
export default AuthProvider; 