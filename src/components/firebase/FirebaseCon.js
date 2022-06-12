import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  addDoc,
  getDocs,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBthQ4xIR1Uf1XMIsb8aRQiZfP-teqnRIo",
  authDomain: "ecommerce-coderhouse-rea-9360a.firebaseapp.com",
  projectId: "ecommerce-coderhouse-rea-9360a",
  storageBucket: "ecommerce-coderhouse-rea-9360a.appspot.com",
  messagingSenderId: "678358033680",
  appId: "1:678358033680:web:b4b050d049971ebb62b195",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// get item by id
const getItemsById = async (id) => {
  const docRef = doc(collection(db, "items"), id);
  const docSnap = await getDoc(docRef);
  const item = { ...docSnap.data(), id: docRef.id };
  return item;
};

//get order db
const getOrders = async () => {
  const docRef = collection(db, "orders");
  const docSnap = await getDocs(docRef);
  let listObj = docSnap.docs.map((i) => {
    const Obj = { ...i.data(), id: i.id };
    return Obj;
  });
  return listObj;
};

//add order id
const addOrder = async (order) => {
  const docSnap = await addDoc(collection(db, "orders"), order);
  return docSnap.id;
};

export { db, getItemsById, addOrder, getOrders };
