// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

export const firebaseConfig = {
    apiKey: "AIzaSyBFKRCRAzBUUw6FVx1C3E07RZqlZFR9xpU",
    authDomain: "sistemagestaojoaozinho.firebaseapp.com",
    projectId: "sistemagestaojoaozinho",
    storageBucket: "sistemagestaojoaozinho.firebasestorage.app",
    messagingSenderId: "288554455931",
    appId: "1:288554455931:web:eeb382d14148bf961123de",
    measurementId: "G-BSQLE6FQEJ"
};

// Inicialize o app apenas uma vez
const app = initializeApp(firebaseConfig);

export { app };
