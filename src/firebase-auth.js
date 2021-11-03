import firebase from 'firebase';
import React, {useEffect, useState } from "react";

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
        var docRef = firebase.firestore().collection("usuario").doc(user.uid);
        docRef.get().then((doc) => {
            if (doc.exists)
                setCurrentUser(doc.data());
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
        setPending(false)
        });
    }, []);

    if(pending){
        return <>Carregando...</>
    }

    return (
        <AuthContext.Provider value={{currentUser}}>
        {children}
        </AuthContext.Provider>
    );
};

