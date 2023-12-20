import { createContext, useContext, useState, useEffect } from "react";
import { database } from '../firebaseConfig';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import UserContext from "./userContext";

const ResumeContext = createContext();

const Provider = ({ children }) => {
    const collectionRef = collection(database, 'resumes');
    const { auth } = useContext(UserContext);
    const [resumes, setResumes] = useState([]);
    const [showDownload, setShowDownload] = useState(false);
    const [formData, setFormData] = useState({
        userId: "",
        img: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        workExperience2: [{
            companyName: "",
            role: "",
            timeFrame: "",
            description: ""
        }],
        workExperience1: [{
            companyName: "",
            role: "",
            timeFrame: "",
            description: ""
        }],
        education1: [{
            school: "",
            course: "",
            description: "",
            timeFrame: ""
        }],
        education2: [{
            school: "",
            course: "",
            description: "",
            timeFrame: ""
        }],
        aboutMe: ""

    });

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setFormData({ ...formData, userId: user?.uid })
            }
        });
    }, [])

    const updateNestedField = (e, nestedFieldName) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [nestedFieldName]: prevData[nestedFieldName].map((item, index) => (index === 0 ? { ...item, [name]: value } : item)),
        }));
        console.log(formData);
    };

    const updateFormData = (name, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;

        if (type === 'file') {
            updateFormData(name, URL.createObjectURL(files[0]));
        } else {
            updateFormData(name, value);
        }
    };

    const handleSubmit = () => {
        setShowDownload(true);
        addDoc(collectionRef, formData)
            .then(() => {
                console.log("Data added successfully");
            })
            .catch((err) => {
                console.error("Error adding data to Firestore:", err.message);
            });
    };

    const getDataByUserId = async () => {
        try {
            const userId = auth.currentUser.uid;
            const queryFind = query(collectionRef, where('userId', '==', userId));
            const response = await getDocs(queryFind);
            setResumes(response.docs.map((doc) => doc.data()));

        } catch (err) {
            console.log(err.message);
            return [];
        }
    }

    const getAllResumes = async () => {
        getDocs(collectionRef)
            .then((response) => {
                setResumes(response.docs.map((item) => item.data()));
            })
            .catch((err) => {
                console.log(err.message);
            })
    }

    const shared = { formData, handleChange, handleSubmit, setFormData, updateNestedField, getDataByUserId, resumes, getAllResumes, showDownload, setShowDownload };
    return (
        <ResumeContext.Provider value={shared}>
            {children}
        </ResumeContext.Provider>
    )
}


export { Provider };
export default ResumeContext;