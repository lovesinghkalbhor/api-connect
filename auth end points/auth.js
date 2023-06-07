const express = require("express");
const app = express();
const axios = require("axios");
require("dotenv").config();
const router = express.Router();
// get the url form the .env file
let url = process.env.BASE_URL;

// login api
router.post("/login", async (req, res) => {
  const apiUrl = `${url}/auth/login`;
  // an object that contain all the data the is required to api
  const requestBody = {
    email: req.body.email,
    password: req.body.password,
  };
  console.log(requestBody.email, requestBody.password);

  // Make the POST request with Axios
  try {
    const response = await axios.post(apiUrl, requestBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = response.data;
    console.log(data);
    res.send(data);
  } catch (error) {
    // Handle any error during the request
    console.error("Error:", error);
  }
});
// 2fa authentication api
router.post("/twofa", async (req, res) => {
  const apiUrl = `${url}/auth/twofa`;
  // an object that contain all the data the is required to api
  const requestBody = {
    session_id: req.body.session_id,
    passcode: req.body.passcode,
  };
  console.log(requestBody, " this is not what you think love");

  // Make the POST request with Axios
  try {
    const response = await axios.post(apiUrl, requestBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = response.data;
    console.log(data);
    res.send(data);
  } catch (error) {
    // Handle any error during the request
    console.error("Error:", error);
  }
});
// reset email send    /reset
router.post("/reset", async (req, res) => {
  const apiUrl = `${url}/auth/reset`;
  console.log("reset called here");

  // an object that contain all the data the is required to api
  const requestBody = {
    email: req.body.email,
  };
  console.log(requestBody.email);

  // Make the POST request with Axios
  try {
    const response = await axios.post(apiUrl, requestBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = response.data;
    console.log(data, "reset");
    res.send(data);
    // console.log(data);
  } catch (error) {
    // Handle any error during the request
    console.error("Error:", error);
  }
});
// reset password   /reset
router.post("/reset2", async (req, res) => {
  const apiUrl = `${url}/auth/reset2`;
  console.log("reset called here");

  // an object that contain all the data the is required to api
  const requestBody = {
    vcode: req.body.vcode,
    vcode2: req.body.vcode2,
    email: req.body.email,
    new_password: req.body.password,
  };
  console.log(requestBody);

  // Make the POST request with Axios
  try {
    const response = await axios.post(apiUrl, requestBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = response.data;
    console.log(data, "reset");
    res.send(data);
    // console.log(data);
  } catch (error) {
    // Handle any error during the request
    console.error("Error:", error);
  }
});

// logout
router.post("/logout", async (req, res) => {
  const apiUrl = `${url}/auth/logout`;

  // an object that contain all the data the is required to api
  const requestBody = {
    session_id: req.body.session_id,
  };

  // Make the POST request with Axios
  try {
    const response = await axios.post(apiUrl, requestBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = response.data;
    console.log(data);
    res.send(data);
    // console.log(data);
  } catch (error) {
    // Handle any error during the request
    console.error("Error:", error);
  }
});

// loguutall
router.post("/logoutall", async (req, res) => {
  const apiUrl = `${url}/auth/logoutall`;

  // an object that contain all the data the is required to api
  const requestBody = {
    email: req.body.email,
    password: req.body.password,
  };

  // Make the POST request with Axios
  try {
    const response = await axios.post(apiUrl, requestBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = response.data;
    console.log(data, "logotu all the data");
    res.send(data);
    // console.log(data);
  } catch (error) {
    // Handle any error during the request
    console.error("Error:", error);
  }
});

// this api is for showing the status if the user session is valid or not
router.post("/status", async (req, res) => {
  const apiUrl = `${url}/auth/status`;

  // an object that contain all the data the is required to api
  const requestBody = {
    session_id: req.body.session_id,
  };
  console.log(requestBody.session_id);

  // Make the POST request with Axios
  try {
    const response = await axios.post(apiUrl, requestBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = response.data;
    console.log(data);
    res.send(data);
    // console.log(data);
  } catch (error) {
    // Handle any error during the request
    console.error("Error:", error);
  }
});

module.exports = router;
