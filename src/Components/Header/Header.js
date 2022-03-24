import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import { useCallback } from "react";
import { setShadow, setPosition } from "../../redux/Actions/HeaderActions";
import * as Auth from "../../helpers/auths";
import {  useHistory } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import "./_header.scss";
import { Button } from "react-bootstrap";
import AddModal from "../AddModal/AddModal";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/Actions/SigninActions";
import { Redirect, useLocation } from "react-router-dom";
import { SubmitQuestion } from "../../Context/submitAdFormContext";
import Cookies from "js-cookie";

const Header = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [validUser, setValidUser] = useState(false);


  const dispatch = useDispatch();

  const onSetShadow = (data) => {
    dispatch(setShadow(data));
  };

  const onSetposition = (data) => {
    dispatch(setPosition(data));
  };

  const { position, shadow } = useSelector((state) => state.Header);

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    setValidUser(Auth.validAdmin());
    console.log(Auth.validAdmin());
  }, [location]);

  const { success } = useSelector((state) => state.logoutReducer);

  useEffect(() => {
    if (success) {
      Cookies.remove("userToken");
      Cookies.remove("userId");
      setValidUser(Auth.validAdmin());
    }
  }, [success]);

  const handleScroll = useCallback(() => {
    if (window.scrollY < 76) {
      onSetposition("absolute");
      onSetShadow("false");
    }
    // else if (window.scrollY > 76 && window.scrollY < 689) {
    //   onSetShadow("false");
    //   onSetposition("fixed");
    // }
    else if (window.scrollY > 36) {
      onSetShadow("true");
      onSetposition("fixed");
    }
  }, [onSetShadow, onSetposition]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  function openSubmitModal() {
    setShow(true);
  }

  const {loading, add_post} = useSelector(state => state.adsubmitReducers);
  const history = useHistory();

  useEffect(() => {
    if(add_post){
      setShow(false);
      history.push('/myads');
    }
  }, [add_post])

  return (
    <section className="header-div-main" style={{ position: "relative" }}>
      <div
        className={
          shadow === "true"
            ? "header-div header-div--floating"
            : "header-div header-div--hero "
        }
        style={{ position }}
      >
        <Navbar collapseOnSelect expand="md" className="header-div--nav-bar">
          <Navbar.Brand href="/" className="logo-div">
            LOGO
          </Navbar.Brand>

          <div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto nav-elements">
                {!validUser ?
                  <>
                    <Nav.Link href="/login" className="login">
                      Login/Signup
                    </Nav.Link>
                    <Button
                      className="add-submit"
                      disabled
                    >
                      Submit an Add
                    </Button>
                  </> 
                  :
                  <>
                    <Button
                      className="add-submit"
                      onClick={() => openSubmitModal()}
                    >
                      Submit an Add
                    </Button>

                    <NavDropdown
                      title={<CgProfile style={{ fontSize: "large" }} />}
                      id="collasible-nav-dropdown"
                      className='mr-3'
                    >
                      <NavDropdown.Item href={"/profile/" + "2"}>
                        Name
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href='/myads'>
                        Posted Ads
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item onClick={() => handleLogout()}>
                        Logout
                      </NavDropdown.Item>
                      
                    </NavDropdown>
                  </>
                }
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>

        {/* {validUser && show ? (
          <AddModal show={show} setShow={setShow} />
        ) : (
          <Redirect to="/login" />
        )} */}

        {show ? (
          validUser ? (
            <AddModal
              show={show}
              setShow={setShow}
            />
          ) : (
            <Redirect to={{ pathname: "/login", state: { msg: true } }} />
          )
        ) : (
          ""
        )}
      </div>
    </section>
  );
};
// export default connect(mapStateToProps, mapDispatchToProps)(Header);
export default Header;
