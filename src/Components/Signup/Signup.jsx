import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { signupAction } from "../../redux/Actions/SigninActions";
import { Container, Col, Row } from "react-bootstrap";
import RentalHome from '../../Assets/images/RentalHome.jpg'
import cookies from "js-cookie";
import "./_signup.scss";

const LogIn = () => {
  // let history = useHistory()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(signupAction(data));
  };

  const { loading, success, error } = useSelector(
    (state) => state.signinReducer
  );

  if (error) {
    console.log(error);
  }

  // useEffect(() =>{
  //   if(success.token){
  //     cookies.set('token', success.token)
  //   }
  // }, [success])

  return (
    <section id="signup-section" 
    style={{ backgroundImage: `url(${RentalHome})` ,
     backgroundRepeat: 'no-repeat',
     backgroundSize: 'cover',
      width: '100%',
       height: '100vh'}}>
      <section className="signup-form">
        <div className="form-info">
          <h2>sign up</h2>

          <h5>Its quick and easy.</h5>
          <form onSubmit={handleSubmit(onSubmit)}>
          <input
              className="form-input"
              {...register("email", { required: true })}
              // onChange={(e) => setUser(e.target.value)}
              placeholder="User name"
            />

            <input
              className="form-input"
              {...register("email", { required: true })}
              // onChange={(e) => setUser(e.target.value)}
              placeholder="Mobile number or Email"
            />

            <input
              className="form-input"
              placeholder="New Password*"
              {...register("password", { required: true })}
              // onChange={(e) => setPass(e.target.value)}
            />

            {error && "invalid email or password"}


            {(errors.email || errors.password) && console.log(errors.email)}
            <input className="button log" type="submit" value="Sign Up" />
          </form>

          <span className="line">or</span>
          <Link className="button sign" to="/logIn">
            Log In
          </Link>
        </div>
      </section>

      {/* <Footers /> */}
    </section>
  );
};

export default LogIn;
