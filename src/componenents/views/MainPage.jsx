import React, { Component } from "react";

import "./MainPage.css";

import background from "./images/pexels-antonio-batinić-4164418.jpg";

import CJumbotron from "@coreui/react/es/jumbotron/CJumbotron";

import CCard from "@coreui/react/es/card/CCard";
import CCardBody from "@coreui/react/es/card/CCardBody";
import CCardHeader from "@coreui/react/es/card/CCardHeader";
import CContainer from "@coreui/react/es/grid/CContainer";
import CRow from "@coreui/react/es/grid/CRow";
import CCol from "@coreui/react/es/grid/CCol";
class MainPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="background">
          <CContainer className="h-100" fluid>
            <CRow className="align-items-center h-100">
              <CJumbotron
                borderColor="white"
                color="dark"
                className="ml-4 mb-0 mt-4"
              >
                <h1 className="display-2">Daniil</h1>
                <h1 className="display-3">Aleshechkin</h1>
                <h1 className="display-4">Software engineer</h1>
              </CJumbotron>
            </CRow>
          </CContainer>
        </div>
      </React.Fragment>
    );
  }
}

export default MainPage;
