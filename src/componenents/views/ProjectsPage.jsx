import React, { Component } from "react";

import CCard from "@coreui/react/es/card/CCard";
import CCardTitle from "@coreui/react/es/card/CCardTitle";
import CCardBody from "@coreui/react/es/card/CCardBody";

import CCol from "@coreui/react/es/grid/CCol";
import CRow from "@coreui/react/es/grid/CRow";
import CContainer from "@coreui/react/es/grid/CContainer";
class ProjectsPage extends Component {
  state = {};
  render() {
    return (
      <CCard className="m-2">
        <CCardTitle>
          <h1 className="text-center mt-2">Projects</h1>
        </CCardTitle>
        <CCardBody>
          <CContainer>
            <CRow>
              <CCol>
                <CCard>
                  <CCardTitle>
                    <h2 className="text-center mt-2">Project 1</h2>
                  </CCardTitle>
                  <CCardBody></CCardBody>
                </CCard>
              </CCol>
              <CCol>
                <CCard>
                  <CCardTitle>
                    <h2 className="text-center mt-2">Project 2</h2>
                  </CCardTitle>
                  <CCardBody></CCardBody>
                </CCard>
              </CCol>
              <CCol>
                <CCard>
                  <CCardTitle>
                    <h2 className="text-center mt-2">Project 3</h2>
                  </CCardTitle>
                  <CCardBody></CCardBody>
                </CCard>
              </CCol>
            </CRow>
          </CContainer>
        </CCardBody>
      </CCard>
    );
  }
}

export default ProjectsPage;
