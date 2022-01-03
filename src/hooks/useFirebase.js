import { useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // google signin section
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    //log out section
    const logOut = () => {
        signOut(auth)
        .then(() => {
            setUser({})
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user)=>{
            if (user) {
                setUser(user);
            }
        });
    },[])
    return {
        user,
        signInUsingGoogle,
        logOut,
    }
}
export default useFirebase;