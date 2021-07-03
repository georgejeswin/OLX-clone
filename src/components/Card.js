import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../store/Context";
import { PostContext } from "../store/PostContext";

import "./Card.css";

const Card = () => {
  const { firebase } = useContext(FirebaseContext);
  const { setPostDetails } = useContext(PostContext);
  const [products, setProducts] = useState([]);
  const [fav, setFav] = useState(false);
  const history = useHistory();

  useEffect(() => {
    firebase
      .firestore()
      .collection("products")
      .get()
      .then((snapshot) => {
        const allPost = snapshot.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        console.log(allPost);
        setProducts(allPost);
      });
  }, [firebase]);

  return (
    <>
      {products.map((product) => (
        <div
          className="card"
          key={product.id}
          onClick={() => {
            // console.log("product>>>>", product.id);
            setPostDetails(product);
            history.push(`/product/${product.id}`);
          }}
        >
          <div className="card__top">
            <img src={product.url} alt="" />
          </div>
          <div className="card__top-fas">
            <i
              onClick={() => setFav(true)}
              className={`far fa-heart ${fav ? "card__fav" : ""}`}
            ></i>
          </div>
          <div className="card__bottom">
            <h2>&#8377; {product.price}</h2>
            <p className="card__year mt-2">2020</p>
            <p className="card__model my-1">{product.productName} </p>
            <p className="card__model my-1">{product.category} </p>

            <div className="card__own">
              <small>{product.userName}</small>
              <small>{product.createdAt}</small>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
