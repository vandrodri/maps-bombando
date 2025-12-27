import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, collection, addDoc, query, where, getDocs, orderBy } from "firebase/firestore";

// Configuração placeholder - Altere para suas chaves reais no Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSy-PLACEHOLDER",
  authDomain: "project-placeholder.firebaseapp.com",
  projectId: "project-placeholder",
  storageBucket: "project-placeholder.appspot.com",
  messagingSenderId: "0000000000",
  appId: "1:00000000:web:00000000"
};

let app;
try {
  app = initializeApp(firebaseConfig);
} catch (e) {
  console.warn("Firebase initialization warning (Normal during setup):", e);
  // Garante que o app seja inicializado mesmo com erro para não quebrar referências
  app = initializeApp(firebaseConfig);
}

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

export { signInWithPopup, signOut, onAuthStateChanged, doc, getDoc, setDoc, collection, addDoc, query, where, getDocs, orderBy };

export const ensureUserProfile = async (user: any) => {
  if (!user || !user.uid) return null;
  const userRef = doc(db, "users", user.uid);
  try {
    const userSnap = await getDoc(userRef);
    if (!userSnap.exists()) {
      const initialData = {
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        plan: "free",
        credits: 3, 
        createdAt: new Date().toISOString(),
      };
      await setDoc(userRef, initialData);
      return initialData;
    }
    return userSnap.data();
  } catch (e) {
    console.error("Firestore error:", e);
    // Retorna um perfil fake para permitir que o app mostre a UI mesmo sem DB
    return { plan: "free", credits: 3 }; 
  }
};