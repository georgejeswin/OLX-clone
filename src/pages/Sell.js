import { useContext } from "react";
import { useState } from "react";
import "./Sell.css";
import { FirebaseContext, AuthContext } from "../store/Context";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const Sell = () => {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);
  const [userDetails, setUserDetails] = useState();

  const { setUser } = useContext(AuthContext);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, [firebase, setUser]);

  useEffect(() => {
    if (user) {
      firebase
        .firestore()
        .collection("users")
        .where("id", "==", user?.uid)
        .get()
        .then((res) => {
          res.forEach((doc) => {
            setUserDetails(doc.data());
          });
        });
    }
  }, [userDetails, firebase, user?.uid, user]);

  const [formData, setFormData] = useState({
    productName: "",
    category: "",
    price: "",
    image: null,
  });

  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const date = new Date();
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    firebase
      .storage()
      .ref(`image/${formData.image.name}`)
      .put(formData.image)
      .then(({ ref }) => {
        ref.getDownloadURL().then((url) => {
          // console.log(url);
          firebase.firestore().collection("products").add({
            productName: formData.productName,
            category: formData.category,
            price: formData.price,
            url,
            userId: user.uid,
            userName: user.displayName,
            phone: userDetails.phone,
            createdAt: date.toDateString(),
          });
        });
        setLoading(false);
        history.push("/");
      })
      .catch((err) => {
        alert("Error:", err.message);
        setLoading(false);
        history.push("/sell");
      });
  };

  return (
    <div className="sell">
      {loading ? (
        <img
          src="https://d3w3fvc5chouik.cloudfront.net/js-wsbx-common/v3.3.33/images/websitebox-loader.gif"
          alt=""
          width="250px"
        />
      ) : (
        <form className="sell__form" onSubmit={handleSubmit}>
          <label>Product Name</label>
          <input
            type="text"
            placeholder="product name"
            value={formData.productName}
            required
            onChange={(e) =>
              setFormData({ ...formData, productName: e.target.value })
            }
          />
          <label>Category</label>
          <input
            type="text"
            placeholder="category"
            value={formData.category}
            required
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          />
          <label>Price</label>
          <input
            type="number"
            placeholder="price"
            required
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
          />
          <label>Product Image</label>
          <img
            src={formData.image ? URL.createObjectURL(formData.image) : ""}
            alt="product"
            width="400px"
          />
          <input
            type="file"
            required
            className="sell__image"
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.files[0] })
            }
          />
          <input
            type="submit"
            value="Upload and Submit"
            className="signup__submit"
          />
        </form>
      )}
    </div>
  );
};

export default Sell;
