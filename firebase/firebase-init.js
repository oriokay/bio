<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAVIYCjsI3eoYFq9dDGn8nW2WvBQbsb2Mk",
    authDomain: "bioedu-algerie.firebaseapp.com",
    projectId: "bioedu-algerie",
    storageBucket: "bioedu-algerie.firebasestorage.app",
    messagingSenderId: "1023023329302",
    appId: "1:1023023329302:web:bb2d3f3094a8622ad9c537",
    measurementId: "G-566PJHFRX2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
