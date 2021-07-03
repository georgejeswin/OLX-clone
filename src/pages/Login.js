import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FirebaseContext } from "../store/Context";

const Login = () => {
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(formData.email, formData.password)
      .then(() => {
        setLoading(false);
        history.push("/");
      })
      .catch((err) => {
        alert(err.message);
        setLoading(false);
      });
  };

  return (
    <div className="login">
      {loading ? (
        <img
          src="https://d3w3fvc5chouik.cloudfront.net/js-wsbx-common/v3.3.33/images/websitebox-loader.gif"
          alt=""
          width="250px"
        />
      ) : (
        <form className="signup__form" onSubmit={handleSubmit}>
          <div className="signup__logo">
            <img
              src="https://logodownload.org/wp-content/uploads/2016/10/olx-logo-13.png"
              height="70px"
              width="150px"
              alt=""
            />
          </div>

          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            required
            value={formData.password}
            autoComplete="false"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <input type="submit" value="Login" className="signup__submit" />
          <Link to="/signup" className="signup__login">
            Signup
          </Link>
        </form>
      )}
    </div>
  );
};

export default Login;
