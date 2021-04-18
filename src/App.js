import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from "./routes";

import MainSideBar from "./componenents/sidebar/MainSideBar";

import { CContainer, CRow, CCol } from "@coreui/react";

function App() {
  return (
    <Router>
      <CContainer fluid>
        <CRow>
          <MainSideBar />
          <CCol className="p-0">
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                />
              );
            })}
          </CCol>
        </CRow>
      </CContainer>
    </Router>
  );
}

export default App;
