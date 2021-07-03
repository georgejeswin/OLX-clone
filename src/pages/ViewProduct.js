import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { FirebaseContext } from "../store/Context";
import "./ViewProduct.css";

const ViewProduct = () => {
  const { firebase } = useContext(FirebaseContext);
  const { id } = useParams();

  const [product, setProduct] = useState();

  useEffect(() => {
    firebase
      .firestore()
      .collection("products")
      .doc(id)
      .get()
      .then((snapshot) => {
        setProduct(snapshot.data());
      });
  }, [firebase, id]);

  return (
    <div className="container-fluid">
      <div className="viewproduct row">
        <div className="viewproduct__left">
          <img src={product?.url} alt="" />
        </div>
        <div className="viewproduct__right ">
          <div className="product__top">
            <h2>&#8377; {product?.price}</h2>

            <p className="my-3">
              {product?.productName} <br />
              {product?.category}
            </p>
            <p>{product?.createdAt} </p>
          </div>
          <div className="product__bottom">
            <h3>Seller Details</h3>
            <p className="mt-3">{product?.userName} </p>
            <p className="mb-3">+91 {product?.phone} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
