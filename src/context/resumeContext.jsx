import { createContext, useContext, useState, useEffect } from "react";
import { database, storage } from '../firebaseConfig';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import UserContext from "./userContext";
import { v4 } from 'uuid';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const ResumeContext = createContext();

const Provider = ({ children }) => {
    const collectionRef = collection(database, 'resumes');
    const { auth } = useContext(UserContext);
    const [resumes, setResumes] = useState([]);
    const [showDownload, setShowDownload] = useState(false);
    const [imageUpload, setImageUpload] = useState(null);

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

    const handleChange = async (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setImageUpload(files[0]);
            updateFormData(name, imageUpload);
        } else {
            updateFormData(name, value);
        }
    };

    const getImgUrl = async () => {
        try {
            if (imageUpload === null) return;

            const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
            await uploadBytes(imageRef, imageUpload);

            const imageUrl = await getDownloadURL(imageRef);
            console.log(imageUrl);
            return imageUrl;
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setShowDownload(true);
        console.log(formData);
        updateFormData('img', await getImgUrl());
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