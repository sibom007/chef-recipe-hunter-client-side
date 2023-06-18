import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, updateProfile } from "firebase/auth";
import app from "../firebase";





export const Authcontext = createContext(null)
const auth = getAuth(app)

const Authprovider = ({ children }) => {

    const [User, setUser] = useState("");
    const [loading,setloading] = useState(true);



    const regesteruser = (email, password, name) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginuser = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updetprofile = () => {
        setloading(true)
        return updateProfile(auth,currentUser)
    }

    const logout =()=>{
        setloading(true)
        return signOut(auth)
    }

    const googleprovider =new GoogleAuthProvider();
    const gitprovider =new GithubAuthProvider();



    const handlergoogle =()=>{
        signInWithPopup(auth,googleprovider)
        .then()
        .catch()
    }

    const handelergithub =()=>{
        signInWithPopup(auth,gitprovider)
        .then()
        .catch()
    }


    const Authinfo = {
        regesteruser,
        User,
        logout,
        loginuser,
        handlergoogle,
        handelergithub,
        loading,
        updetprofile,
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (LoggedInuser) => {
            setUser(LoggedInuser);
            setloading(false);
        })

        return () => {
            unsubscribe();
        }
    }, [])



    return (

        <Authcontext.Provider value={Authinfo}>
            {children}
        </Authcontext.Provider>


    );
};

export default Authprovider;