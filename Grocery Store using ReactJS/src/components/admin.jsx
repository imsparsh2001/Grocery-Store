import React, { useEffect, useState } from "react";
import "../styles/index.css";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  var formData = {
    username: "",
    password: "",
    remember: false,
  };

  const [storedData, setStoredData] = useState({ username: "", password: "", remember: false });
  var isLoggedIn = false;
  useEffect(() => {
    // Retrieve data from localStorage
    let dataFromLocalStorage = JSON.parse(localStorage.getItem("formData"));

    // Update state with the retrieved data
    if (dataFromLocalStorage) {
      setStoredData(dataFromLocalStorage);
      formData = {
        username: storedData.username,
        password: storedData.password,
        remember: storedData.remember,
      };
    }
  }, []); 

  let ip1 = React.useRef();
  let ip2 = React.useRef();
  let ip3 = React.useRef();

  useEffect(() => {
    // Update the checked attribute of the checkbox
    if (ip3.current) {
      ip3.current.checked = storedData.remember;
    }
  }, [storedData.remember]);

  const handleSubmitClick = (evt) => {
    if (ip1.current.value && ip2.current.value) {
      if (ip1.current.value === "admin@admin.in" && ip2.current.value === "admin") {
        if (ip3.current.checked) {
          formData = {
            username: ip1.current.value,
            password: ip2.current.value,
            remember: ip3.current.checked,
          };
          setStoredData(formData);
          isLoggedIn = true;
          localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
          console.log(isLoggedIn);
          localStorage.setItem("formData", JSON.stringify(formData));
          navigate("/orderdata");
        } else {
          formData = {
            username: "",
            password: "",
            remember: false,
          };
          isLoggedIn = true;
          localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
          navigate("/orderdata");
          localStorage.setItem("formData", JSON.stringify(formData));
        }
      } else {
        evt.preventDefault();
        alert("Invalid Login Details");
      }
    } else {
      alert("Fill login details");
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-img">
        <img src="Images/picture1.png" alt="" />
      </div>

      <div className="signin-form">
        <div>
          <h2>Sign in</h2>
          <p>Welcome back to FreshCart! Enter your email to get Started.</p>
          <form action="#">
          <input
            ref={ip1}
            required
            className="input-bar"
            type="email"
            placeholder="Email"
            id="admin-email"
            defaultValue={storedData.username}
          />
          <br />
          <input
            ref={ip2}
            required
            className="input-bar"
            type="password"
            placeholder="••••••"
            id="admin-password"
            defaultValue={storedData.password}
          />
          <br />
          <input
            ref={ip3}
            type="checkbox"
            id="remember-me"
            name="remember-me"
          />
          &nbsp;
          <label htmlFor="remember-me">Remember Me</label>
          <br />
          <button
            type="Submit"
            className="signin-btn"
            onClick={handleSubmitClick}
          >
            <strong>Sign In</strong>
          </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Admin;

