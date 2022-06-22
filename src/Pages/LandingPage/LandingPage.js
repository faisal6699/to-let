import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setPropertyType,
  setSearchField,
  setLocation,
  setBath,
  setBed,
  setLowerLimit,
  setUpperLimit,
} from "../../redux/Actions/LandingPageActions";
import Hero from "../../Components/Hero/Hero";
import SearchBox from "../../Components/SearchBox/SearchBox";
import Catagory from "../../Components/Catagory/Catagory";
import PopularSearch from "../../Components/PopularSearch/PopularSearch";
import CardAds from "../../Components/CardAds/CardAds";
import Parallax from "../../Components/Parallax/Parallax";
import { addDetails } from "../../Assets/data/data";
// import Footer from "../Components/Footer/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";
import SearchBox2 from "../../Components/SearchBox/SearchBox2";
import Catagory2 from "../../Components/Catagory/Catagory2";
import PopularSearch2 from "../../Components/PopularSearch/PopularSearch2";
import AdCarousel from "../../Components/AdCarousel/AdCarousel";

const mapStateToProps = (state) => {
  console.log(state.Search);
  return {
    searchField: state.Search.searchField,
    catagory: state.Search.catagory,
    location: state.Search.location,
    lower_limit: state.Search.lower_limit,
    upper_limit: state.Search.upper_limit,
    priceUpdate: state.Search.priceUpdate,
    bed: state.Search.bed,
    bath: state.Search.bath,
  };
};



const mapDispatchToProps = (dispatch) => {
  return {
    onSetSearch: (event) => {
      dispatch(setSearchField(event.target.value));
    },
    onSetCatagory: (text) => {
      dispatch(setPropertyType(text));
    },

    onSetLocation: (text) => {
      dispatch(setLocation(text));
    },

    onSetBed: (text) => {
      dispatch(setBed(text));
    },

    onSetBath: (text) => {
      dispatch(setBath(text));
    },

    onSetLowerLimit: (text) => {
      dispatch(setLowerLimit(text));
    },
    onSetUpperLimit: (text) => {
      // console.log(text)
      dispatch(setUpperLimit(text));
    },
  };
};

class LandingPage extends Component {



  render() {
    const {
      onSetSearch,
      onSetCatagory,
      onSetLocation,
      onSetLowerLimit,
      onSetUpperLimit,
      onSetBed,
      onSetBath,
      searchField
    } = this.props;


    return (
      <>
        <div>
          <Parallax>
            <Hero max="true">
              <div style={{ width: "70%", marginTop: '15%' }}>
                <SearchBox2 />
              </div>
            </Hero>
          </Parallax>
          <Catagory2 setCatagory={onSetCatagory} />
          <PopularSearch2 />
          <AdCarousel />
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);