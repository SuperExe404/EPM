import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCM97wZhXnR2lNTaSfE4rE8dENW4PfADb4",
  authDomain: "ejemploi-96a5e.firebaseapp.com",
  databaseURL: "https://ejemploi-96a5e-default-rtdb.firebaseio.com",
  projectId: "ejemploi-96a5e",
  storageBucket: "ejemploi-96a5e.appspot.com",
  messagingSenderId: "254034689587",
  appId: "1:254034689587:web:2daf890f68476a4e05ad46"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = loginForm['email'].value;
    const password = loginForm['password'].value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('Inicio de sesión exitoso:', user);
        // Aquí puedes redirigir al usuario a otra página, mostrar un mensaje de éxito, etc.
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error al iniciar sesión:', errorCode, errorMessage);
        // Aquí puedes mostrar un mensaje de error al usuario, cambiar el color del formulario, etc.
    }
});


// Referencia al formulario de registro
const signupForm = document.getElementById('signupForm');

// Manejar el evento submit del formulario
signupForm.addEventListener('submit', async (e) => {
  e.preventDefault(); // Evitar que el formulario se envíe automáticamente

  // Obtener valores de correo electrónico y contraseña
  const email = signupForm['email'].value;
  const password = signupForm['password'].value;

  try {
    // Crear nuevo usuario con correo electrónico y contraseña
    const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;
    console.log('Registro exitoso:', user);
    // Aquí puedes redirigir al usuario a otra página, mostrar un mensaje de éxito, etc.
  } catch (error) {
    // Error al registrarse
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('Error al registrarse:', errorCode, errorMessage);
    // Aquí puedes mostrar un mensaje de error al usuario, cambiar el color del formulario, etc.
  }
});
