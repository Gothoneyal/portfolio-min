import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

//the fire base configuration
const firebaseConfig = {
    apiKey: "AIzaSyB0ie3vwWSsO7yeY9JCE3_H_QlVftn5R70",
    authDomain: "portfolio-min-7e8c1.firebaseapp.com",
    projectId: "portfolio-min-7e8c1",
    storageBucket: "portfolio-min-7e8c1.appspot.com",
    messagingSenderId: "1981291102",
    appId: "1:1981291102:web:f998474d37b23cb32972cf"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage(app);
  const auth = getAuth(app);

  export { db, storage};
  export { auth };