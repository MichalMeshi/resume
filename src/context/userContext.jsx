import { createContext, useContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDocs, query, where } from "firebase/firestore";
import { UserCollection } from "../firebaseConfig";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [auth, setAuth] = useState(getAuth());
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUserData(user);
        });
        return () => unsubscribe();
    }, [auth]);


    const getUserRoleByEmail = async () => {
        const q = query(UserCollection, where("email", "==", userData.email));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.size > 0) {
            return (querySnapshot.docs[0].data().role);
        }
    }
    const shared = { auth, userData, setUserData, getUserRoleByEmail };

    return (
        <UserContext.Provider value={shared}>
            {children}
        </UserContext.Provider>
    );
};

export { UserProvider };
export default UserContext;
