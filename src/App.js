import React, {userState} from "react";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";
import LoginForm from "./components/LoginForm";

function App() {
  const adminUser = {
    email : "admin@admin.com",
    password : "admin123"
  }

  const [user, setUser] = userState({name: "", email: ""});
  const [error, setError] = userState("");

  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password ==admintUser.password){
      console.log("Logged in");
      setUser({
        name : details.name,
        email : details.email
      })
    } else {
      console.log("Details do not match")
    }
  }

  const Logout = () => {
    console.log("Logout");
  }


  return (
    <div className="App">
      {(user.email != "") ? (
        <div className = "Welcome">
          <h2> Welcome, <span>{user.name}</span></h2>
          <button>Logout</button>
        </div>

      ): (
        <LoginForm Login = {Login} error={error} />
      )}

    </div>
  );
}

export default App;
