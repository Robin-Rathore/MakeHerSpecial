import React, { useEffect, useState } from 'react';
import "./ProductDetails.scss";
import img from "../assets/img/product1.jpg";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import data from "./data";
import { addToCart } from "../redux/features/cartSlice";


// DATA NEEDED
// 0. ID
// 1. Image
// 2. Name
// 3. Price both discounted and real and percentage of discount
// 4. Description
// 5. colour
// 6. Catogery

const ProductDetails = () => {
    // Data Collections
    const params = useParams();
    const id = params.id;
    const idAsInteger = parseInt(id);
    const product = data.find(item => item.id === idAsInteger);
    const img0 = product.img[0].image;
    const img1 = product.img[1].image1;
    const img2 = product.img[2].image2;
    const img3 = product.img[2].image2;
    const name = product.name;
    const category = product.category;
    const color = product.colour;
    const price = product.price;
    const oldPrice = product.oldprice;
    const discount = product.discount;
    const description = product.description;


    const dispatch = useDispatch();
    const addProductToCart = () => {
        const payload = {
            idAsInteger,
            img: product.img[0].image,
            name,
            price: parseFloat(price),
            quantity: 1,
            // description,
        };
    
        dispatch(addToCart(payload));
        console.log("Payload : ", payload);
        toast.success("Added to Cart successfully");
        };



    const [imgId, setImgId] = useState(0);

    useEffect(() => {
        const slideImage = () => {
            const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
            document.querySelector('.img-showcase').style.transform = `translateX(${-imgId * displayWidth}px)`;
        };

        slideImage();

        const imgs = document.querySelectorAll('.img-select a');
        imgs.forEach((imgItem) => {
            imgItem.addEventListener('click', (event) => {
                event.preventDefault();
                setImgId(parseInt(imgItem.dataset.id));
            });
        });

        window.addEventListener('resize', slideImage);

        return () => {
            imgs.forEach((imgItem) => {
                imgItem.removeEventListener('click', () => {
                    setImgId(parseInt(imgItem.dataset.id));
                });
            });
            window.removeEventListener('resize', slideImage);
        };
    }, [imgId]);



    return (
        <div style={{backgroundColor: "#fff4e6", height:"100vh"}}>
        <div className="card-wrapper">
            <div style={{backgroundColor: "#fff4e6"}} className="card">
                {/* card left */}
                <div className="product-imgs">
                    <div className="img-display">
                        <div className="img-showcase">
                            <img src={img0} alt="shoe image" />
                            <img src={img1} alt="shoe image" />
                            <img src={img2} alt="shoe image" />
                            <img src={img3} alt="shoe image" />
                        </div>
                    </div>
                    <div className="img-select">
                        <div className="img-item">
                            <a href="#" data-id="0">
                                <img src={img0} alt="shoe image" />
                            </a>
                        </div>
                        <div className="img-item">
                            <a href="#" data-id="1">
                                <img src={img1} alt="shoe image" />
                            </a>
                        </div>
                        <div className="img-item">
                            <a href="#" data-id="2">
                                <img src={img2} alt="shoe image" />
                            </a>
                        </div>
                        <div className="img-item">
                            <a href="#" data-id="3">
                                <img src={img3} alt="shoe image" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* card right */}
                <div className="product-content">
                    <h2 className="product-title">{name}</h2>
                    <a href="#" className="product-link">Book A Call To Our Store</a>
                    <div className="product-rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <span>4.7(81)</span>
                    </div>

                    <div className="product-price">
                        <p className="last-price">Old Price: <span>{oldPrice}</span></p>
                        <p className="new-price">New Price: <span>{price} ({discount})</span></p>
                    </div>

                    <div className="product-detail">
                        <h2>about this item: </h2>
                        <p>{description}</p>
                        {/* <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt fugit voluptatum et ex, vitae repellendus? Assumenda odio cum molestiae eveniet? orem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p> */}
                        <ul>
                            <li>Color: <span>{color}</span></li>
                            <li>Available: <span>in stock</span></li>
                            <li>Category: <span>{category}</span></li>
                            <li>Shipping Area: <span>All over the world</span></li>
                            <li>Shipping Fee: <span>Free</span></li>
                        </ul>
                    </div>

                    <div className="purchase-info">
                        {/* <input type="number" min="0" value="0" /> */}
                        <button style={{background:"#256eff"}} onClick={addProductToCart} type="button" className="btn">
                            Add to Cart <i className="fas fa-shopping-cart"></i>
                        </button>
                        <Link to={`/payment-page/${id}`}>
                            <button type="button" className="btn">
                            Buy Now
                            </button>
                        </Link>
                    </div>

                    <div className="social-links">
                        <p>Share At: </p>
                        <a href="#">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                        <a href="#">
                            <i className="fab fa-pinterest"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default ProductDetails;
