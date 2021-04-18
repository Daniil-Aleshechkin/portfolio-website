import React, { useState } from "react";

import CSideBar from "@coreui/react/es/template/CSidebar";
import CSideBarClose from "@coreui/react/es/template/CSidebarClose";
import CIcon from "@coreui/icons-react/es/CIcon";

import CNav from "@coreui/react/es/nav/CNav";
import CNavItem from "@coreui/react/es/nav/CNavItem";
import CNavLink from "@coreui/react/es/nav/CNavLink";
import CButton from "@coreui/react/es/button/CButton";

import "./SideBar.css";

const MainSideBar = () => {
  const [collapse, setCollapse] = useState(true);
  const toggle = (e) => {
    setCollapse(!collapse);
    e.preventDefault();
  };
  return (
    <React.Fragment>
      <CSideBar
        id="sidebar"
        size="sm"
        colorScheme="dark"
        fixed={false}
        show={collapse}
      >
        <CNav className={"mt-auto mb-auto"} vertical fill>
          <CNavItem>
            <CNavLink
              href="/"
              className="text-white bg-dark p-2 d-flex align-items-center justify-content-start"
            >
              <CIcon className="m-2 mr-4" name="cil-home" />
              Home
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink
              href="about"
              className="text-white bg-dark p-2 d-flex align-items-center justify-content-start"
            >
              {" "}
              <CIcon className="m-2 mr-4" name="cil-user" />
              About
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink
              href="projects"
              className="text-white bg-dark p-2 d-flex align-items-center justify-content-start"
            >
              <CIcon className="m-2 mr-4" name="cil-code" />
              Projects
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink
              href="competitions"
              className="text-white bg-dark p-2 d-flex align-items-center justify-content-start"
            >
              <CIcon className="m-2 mr-4" name="cil-star" />
              Competitions
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink
              href="contact"
              className="text-white bg-dark p-2 d-flex align-items-center justify-content-start"
            >
              <CIcon className="m-2 mr-4" name="cil-at" />
              Contact
            </CNavLink>
          </CNavItem>
        </CNav>
        <CSideBarClose onClick={toggle} />
      </CSideBar>
      <CButton id="hamburger-btn" color="dark" shape="square" onClick={toggle}>
        <CIcon name="cil-hamburger-menu" />
      </CButton>
    </React.Fragment>
  );
};

export default MainSideBar;
