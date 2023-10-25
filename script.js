const form = document.getElementById("register");

const firebaseConfig = {
  apiKey: "AIzaSyC_TejMlrQBiwVlYpzQAq3hgjPkNh_Tiek",
  authDomain: "wajehney-form.firebaseapp.com",
  databaseURL: "https://wajehney-form-default-rtdb.firebaseio.com",
  projectId: "wajehney-form",
  storageBucket: "wajehney-form.appspot.com",
  messagingSenderId: "382360142227",
  appId: "1:382360142227:web:100b7458b09aa8bea2a866",
  measurementId: "G-D7ZPF9RCT8",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  const university = document.getElementById("university").value;
  const college = document.getElementById("college").value;
  const department = document.getElementById("department").value;
  const governorate = document.getElementById("governorate").value;
  const phone = document.getElementById("phone").value;
  const roadMapInterest = document.getElementById("road-map-interest").checked;

  // Create an object to store in the database
  const userData = {
    firstName,
    lastName,
    email,
    university,
    college,
    department,
    governorate,
    phone,
    roadMapInterest,
  };

  // Push data to the Firebase Realtime Database
  database.ref("messages").push(userData);

  // Clear the input fields
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  university.value = "";
  college.value = "";
  department.value = "";
  governorate.value = "";
  phone.value = "";
  roadMapInterest.checked = false;

  // Optionally, you can redirect the user to a thank you page or show a success message
  // window.location.href = "thank-you.html";
});
