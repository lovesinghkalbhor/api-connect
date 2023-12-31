const express = require("express");
const app = express();
const axios = require("axios");
const router = express.Router();
require("dotenv").config();

// get the url form the .env file
let url = process.env.BASE_URL;

// for getting the org info for logedin user
router.post("/view", async (req, res) => {
  const apiUrl = `${url}/org/view`;
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
    // console.log(data);
    res.send(data);
    // console.log(data);
  } catch (error) {
    // Handle any error during the request
    console.error("Error:", error);
  }
});

// for updating the org info
router.post("/update", async (req, res) => {
  const apiUrl = `${url}/org/update`;
  // an object that contain all the data the is required to api
  const requestBody = {
    ...req.body,
  };

  console.log(
    requestBody,
    "it is hrtetfghfgjghkjhkhjklgkyutyu 1111111111111111111111111111000000000000000000000000"
  );
  // Make the POST request with Axios
  try {
    // console.log("in me update");
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

// get list of userdata of the organization
router.post("/getUsers", async (req, res) => {
  const apiUrl = `${url}/org/getUsers`;
  // an object that contain all the data the is required to api
  const requestBody = {
    session_id: req.body.session_id,
    org_id: req.body.org_id,
  };
  // Make the POST request with Axios
  try {
    const response = await axios.post(apiUrl, requestBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    // JSON.parse(response);
    const data = response.data;
    console.log(data);

    res.send(data);
  } catch (error) {
    // Handle any error during the request
    console.error("Error:", error);
  }
});

// it suspend perticular user
router.post("/suspendUsers", async (req, res) => {
  const apiUrl = `${url}/org/suspendUsers`;
  // an object that contain all the data the is required to api
  const requestBody = {
    session_id: req.body.session_id,
    org_id: req.body.org_id,
    user_id: req.body.user_id,
  };
  // Make the POST request with Axios
  try {
    const response = await axios.post(apiUrl, requestBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    // JSON.parse(response);
    const data = response.data;

    res.send(data);
  } catch (error) {
    // Handle any error during the request
    console.error("Error:", error);
  }
});

// it revoke perticular user
router.post("/revokeUsers", async (req, res) => {
  const apiUrl = `${url}/org/revokeUsers`;
  // an object that contain all the data the is required to api
  const requestBody = {
    session_id: req.body.session_id,
    org_id: req.body.org_id,
    user_id: req.body.user_id,
  };
  // Make the POST request with Axios
  try {
    const response = await axios.post(apiUrl, requestBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    // JSON.parse(response);
    const data = response.data;
    console.log(data);
    res.send(data);
  } catch (error) {
    // Handle any error during the request
    console.error("Error:", error);
  }
});

// search the user from the list of users

router.post("/searchUsers", async (req, res) => {
  const apiUrl = `${url}/org/searchUsers`;
  // an object that contain all the data the is required to api
  const requestBody = {
    session_id: req.body.session_id,
    org_id: req.body.org_id,
    search_array: req.body.search_data,
  };
  // Make the POST request with Axios
  try {
    const response = await axios.post(apiUrl, requestBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    // JSON.parse(response);
    const data = response.data;

    res.send(data);
  } catch (error) {
    // Handle any error during the request
    console.error("Error:", error);
  }
});

// edit the user from the list of users
router.post("/editUsers", async (req, res) => {
  const apiUrl = `${url}/org/editUsers`;
  // an object that contain all the data the is required to api
  const requestBody = {
    session_id: req.body.session_id,
    org_id: req.body.org_id,
    user_id: req.body.user_id,
    edit: req.body.edit_data,
  };
  // Make the POST request with Axios
  try {
    const response = await axios.post(apiUrl, requestBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    // JSON.parse(response);
    const data = response.data;

    res.send(data);
  } catch (error) {
    // Handle any error during the request
    console.error("Error:", error);
  }
});
// add the user
router.post("/addUser", async (req, res) => {
  const apiUrl = `${url}/add/adduser`;
  console.log(apiUrl);
  console.log(req.body);
  // an object that contain all the data the is required to api
  const requestBody = {
    session_id: req.body.session_id,
    org_no: 1,
    // org_no: req.body.org_id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
  };
  // Make the POST request with Axios
  try {
    const response = await axios.post(apiUrl, requestBody, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    // JSON.parse(response);
    const data = response.data;

    res.send(data);
  } catch (error) {
    // Handle any error during the request
    console.error("Error:", error);
  }
});

module.exports = router;
