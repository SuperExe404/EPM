const firebaseConfig = {
    apiKey: "AIzaSyDW9E0YqPXVWFTiMUXdICD-gpplSiH4Zzo",
    authDomain: "componentes5c-efe70.firebaseapp.com",
    projectId: "componentes5c-efe70",
    storageBucket: "componentes5c-efe70.appspot.com",
    databaseURL: "https://componentes5c-efe70-default-rtdb.firebaseio.com",
    messagingSenderId: "982802152666",
    appId: "1:982802152666:web:d4e8db22603a298a2779e3"
};
firebase.initializeApp(firebaseConfig);

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = loginForm['email'].value;
    const password = loginForm['password'].value;

    firebase.auth().singInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        const user = userCredential.user;

    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMesage = error.errorMesage;
        console.error('Error al iniciar sesion:', errorCode, errorMesage);
    });
});