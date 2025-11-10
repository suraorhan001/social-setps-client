import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from '../firebase/firebase.config';

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    console.log(user)
    //register
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
     //log In 

     const login =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)

     }
    //log out

    const logOut =()=>{
        return signOut(auth)
    }

    //update user profile

    const updateUser =(updatedData)=>{
      return updateProfile(auth.currentUser,updatedData)
    }
    //Observer
     
    useEffect(()=>{
      const  unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
      })
     return ()=>{
      unsubscribe()
     }   
    },[])
    const authData = {
       user,
       setUser,
       createUser,
       logOut,
       login,
        updateUser
    }


    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider; 