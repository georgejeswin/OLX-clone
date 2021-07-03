import "./Signup.css";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { FirebaseContext } from "../store/Context";

const Signup = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    phone: "",
    password: "",
  });
  const clearForm = () => {
    setFormData({
      userName: "",
      email: "",
      phone: "",
      password: "",
    });
  };
  const { firebase } = useContext(FirebaseContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(formData.email, formData.password)
      .then((result) => {
        result.user
          .updateProfile({
            displayName: formData.userName,
            phoneNumber: formData.phone,
          })
          .then(() => {
            firebase
              .firestore()
              .collection("users")
              .add({
                id: result.user.uid,
                name: formData.userName,
                email: formData.email,
                phone: formData.phone,
              })
              .then(() => {
                setLoading(false);
                history.push("/login");
              })
              .catch((err) => {
                alert("Error, Please try again", err.message);
                setLoading(false);
              });
          })
          .catch((err) => {
            alert(err.message);
            setLoading(false);
          });
      })
      .catch((err) => {
        alert(
          "Sorry, This email is already registerd, Please try again with another email"
        );
        setLoading(false);
        clearForm();
      });
  };

  return (
    <div className="signup">
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
          <label>Username</label>
          <input
            type="text"
            placeholder="Username"
            required
            value={formData.userName}
            onChange={(e) =>
              setFormData({ ...formData, userName: e.target.value })
            }
          />
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
          <label>Phone</label>
          <input
            type="number"
            placeholder="Phone number"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            autoComplete="false"
            required
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <input type="submit" value="Signup" className="signup__submit" />
          <Link to="/login" className="signup__login">
            Login
          </Link>
        </form>
      )}
    </div>
  );
};

export default Signup;
