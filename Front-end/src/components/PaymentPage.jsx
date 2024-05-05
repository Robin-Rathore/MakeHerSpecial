import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
const PaymentPage = ({onClick}) => {
  const params = useParams();
  const id = params.id;
  console.log("Id : ", id);
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_nl4f4rj",
        "template_aqaysbg",
        formRef.current,
        "KZxXoNcMQKQANc1w7"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
      toast.success("Ordered Sucessfully, we are directing to the itmes");
  };

    const isMobile = window.innerWidth <= 480;
  return (
    <div
      style={{
        backgroundColor: "#fff4e6",
        width: "100%",
        height: "100%",
      }}
    >
        <style>{`
                        .two_item {
                        display: flex;
                        flex-direction: row;
                        }
                        @media (max-width: 480px) {
                        .two_item {
                            display: flex;
                            flex-direction: column;
                            width: 120%;
                        }
                        }
                    `}</style>
      <div style={{ padding: "16px 30px", backgroundColor: "#ffd699", borderRadius:"0 0px 20px 20px" }}>
        <div className="containe" style={{ maxWidth: "1140px" }}>
          <h2
            style={{
              fontSize: "26px",
              fontFamily: "Roboto,Arial,sans-serif !important",
              color: "#996300",
              fontWeight: "600",
              lineHeight: "1.6",
            }}
          >
            Address
          </h2>
        </div>
      </div>
      <br />
      <div className="conta" style={{}}>
        <div className="row" style={{ display: "flex", flexWrap: "wrap", justifyContent:"center",alignItems:"center" }}>
          <div
            className="col-md-8 offset-md-2"
            style={{ flex: "0 0 auto", width: "66.66" }}
          >
            <div
              className="row mb-50"
              style={{ marginBottom: "15px !important" }}
            >
              <div
                className="col-lg-12 col-md-12"
                style={{ flex: "0 0 auto", width: "100%" }}
              >
                <form ref={formRef} onClick={onClick} onSubmit={handleSubmit} className="field_form shipping_calculator" method="POST">
                  <div
                    className="form-row row"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection:"column",
                    }}
                  >
                    <div className="two_item">
                    <div
                      className="form-group col-lg-6 "
                      style={{ margin: "1rem" }}
                    >
                      <input
                        style={{
                          backgroundColor: "#fff",
                          borderRadius: "7px",
                          outline: "none",
                          height: "55px",
                          boxShadow: "none",
                          paddingLeft: "20px",
                          fontSize: "13px",
                          color: "#1a1a1a",
                          width: "100%",
                          "::placeholder": { color: "black" },
                        }}
                        type="text"
                        name="from_name"
                        placeholder="Full Name"
                        required="required"
                        // style={{ "::placeholder": { color: "#808080" } }}
                      />
                    </div>
                    <div
                      className="form-group col-lg-6"
                      style={{ margin: "1rem" }}
                    >
                      <input
                        style={{
                          backgroundColor: "#fff",
                          borderRadius: "7px",
                          outline: "none",
                          
                          height: "55px",
                          boxShadow: "none",
                          paddingLeft: "20px",
                          fontSize: "13px",
                          color: "#1a1a1a",
                          width: "100%",
                        }}
                        type="text"
                        name="mobile"
                        placeholder="Mobile Number"
                        required="required"
                      />
                    </div>
                    </div>
                    <div className="two_item">
                    <div
                      className="form-group col-lg-6"
                      style={{ margin: "1rem" }}
                    >
                      <input
                        style={{
                          backgroundColor: "#fff",
                          borderRadius: "7px",
                          outline: "none",  
                          height: "55px",
                          boxShadow: "none",
                          paddingLeft: "20px",
                          fontSize: "13px",
                          color: "#1a1a1a",
                          width: "100%",
                        }}
                        type="text"
                        placeholder="Email"
                        name="user_email"
                        required="required"
                      />
                    </div>
                    <div
                      className="form-group col-lg-6"
                      style={{ margin: "1rem" }}
                    >
                      <input
                        style={{
                          backgroundColor: "#fff",
                          borderRadius: "7px",
                          outline: "none",
                          
                          height: "55px",
                          boxShadow: "none",
                          paddingLeft: "20px",
                          fontSize: "13px",
                          color: "#1a1a1a",
                          width: "100%",
                        }}
                        type="text"
                        name="house"
                        placeholder="Flat, House no, Building, Company"
                        required="required"
                      />
                    </div>
                    </div>
                    <div className="two_item" >
                    <div
                      className="form-group col-lg-6"
                      style={{ margin: "1rem" }}
                    >
                      <input
                        style={{
                          backgroundColor: "#fff",
                          borderRadius: "7px",
                          outline: "none",
                          
                          height: "55px",
                          boxShadow: "none",
                          paddingLeft: "20px",
                          fontSize: "13px",
                          color: "#1a1a1a",
                          width: "100%",
                        }}
                        type="text"
                        name="area"
                        placeholder="Area, Colony, Street, Sector, Village"
                        required="required"
                      />
                    </div>
                    <div
                      className="form-group col-lg-6"
                      style={{ margin: "1rem" }}
                    >
                      <input
                        style={{
                          backgroundColor: "#fff",
                          borderRadius: "7px",
                          outline: "none",
                          
                          height: "55px",
                          boxShadow: "none",
                          paddingLeft: "20px",
                          fontSize: "13px",
                          color: "#1a1a1a",
                          width: "100%",
                        }}
                        type="text"
                        name="area2"
                        placeholder="Town / City"
                        required="required"
                      />
                    </div>
                    </div>
                  </div>
                  <br />
                  <br />
                  <div
                    className="form-group col-lg-12"
                    style={{ margin: "1rem" }}
                  >
                    <center>
                      <a
                        style={{
                          display: "inline-block",
                          fontSize: "14px",
                          fontWeight: "700",
                          padding: "12px 13px",
                          borderRadius: "4px",
                          color: "#fff",
                          border: "1px solid #996300",
                          backgroundColor: "#996300",
                          cursor: "pointer",
                          letterSpacing: ".5px",
                        }}
                        className="btn btn-block"
                        href="/"
                      >
                        <button >Get Product :)</button>
                      </a>
                    </center>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <footer class="main" style={{backgroundColor:"#fff4e6", margin:"30px 0 0 20px"}}>
        <div
          className="containe pb-10 wow fadeIn animated animated"
          style={{ visibility: "visible" }}
        >
          <div className="row">
            <div className="col-lg-12">
              <p style={{ fontSize: "18px", color:"#996300" }}>Term &amp; Conditions</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PaymentPage;
