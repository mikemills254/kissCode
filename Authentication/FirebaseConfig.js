  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCkXDb7bh2H_M2gOmR9ILFJttu99WAWO40",
    authDomain: "procheser.firebaseapp.com",
    projectId: "procheser",
    storageBucket: "procheser.appspot.com",
    messagingSenderId: "7437008876",
    appId: "1:7437008876:web:2ae4bdc4f1d5eb09378ac9",
    measurementId: "G-FGTH8G1QTF"
};

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);