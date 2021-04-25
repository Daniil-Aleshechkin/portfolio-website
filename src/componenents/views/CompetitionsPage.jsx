import React, { Component } from "react";

import battleSnakeImg from "./images/Saskactchewan--Tile.png";
import IQMetrixsImg from "./images/lMvdzmhd.jpg";
import CCard from "@coreui/react/es/card/CCard";
import CCardTitle from "@coreui/react/es/card/CCardTitle";
import CCardBody from "@coreui/react/es/card/CCardBody";
import CCardImg from "@coreui/react/es/card/CCardImg";

import CCol from "@coreui/react/es/grid/CCol";
import CRow from "@coreui/react/es/grid/CRow";
import CContainer from "@coreui/react/es/grid/CContainer";
class CompetitionsPage extends Component {
  state = {};
  render() {
    return (
      <CCard className="m-2">
        <CCardTitle>
          <h1 className="text-center mt-2">Competitions</h1>
        </CCardTitle>
        <CCardBody>
          <CContainer>
            <CRow>
              <CCol>
                <CCard>
                  <CCardTitle>
                    <h2 className="text-center mt-2">
                      Battle Snake Saskatchewan
                    </h2>
                  </CCardTitle>
                  <CCardBody>
                    <CCardImg fluidGrow src={battleSnakeImg} />
                    https://play.battlesnake.com/competitions/saskatchewan-2020/
                    <div className="d-flex">
                      <h3>Position</h3>{" "}
                      <h3 className="ml-auto text-danger">1st</h3>
                    </div>
                    <h3>Description</h3>
                    <p>
                      The competition was done online in the battlesnake
                      website. Each team competed in different divesions divided
                      by experience level. The goal of the competition was to
                      create a RESTful webserver that would play a snake game
                      against other snakes. The last snake alive wins. The
                      qualifers were a week long. It consistated of playing
                      games every 10 minutes giving each snake a rating based on
                      their win rate. The final four of each division from the
                      finals battled live on their twich{" "}
                      <a className="link" href="">
                        here
                      </a>
                    </p>
                    <h3>Skills used</h3>
                    <ul>
                      <li>AWS hosting</li>
                      <li>Node-express backend</li>
                      <li>A* Path finding algorythym</li>
                      <li>KD-Tree data structure</li>
                      <li>Team management</li>
                    </ul>
                    <h3>Solution</h3>
                    <p>
                      My solution was named "Steve". I made this in a team of
                      two. We wanted to make an aggressive snake which maximized
                      food eaten. We decided on using A* as the path finding
                      algorthym. I made the snake prioritize groups of food by
                      moving the positions of food into a KD-Tree data
                      structure. Steve would then compute the length of the
                      nearest food for each food. Then for each food, he would
                      sum the distance of that food and the nearest food, and
                      choose the smallest sum. We also wanted to include a
                      defensive mode where it chases it's tail but this was
                      ineffective when testing
                    </p>
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol>
                <CCard>
                  <CCardTitle>
                    <h2 className="text-center mt-2">IQmetrix Hackathon</h2>
                  </CCardTitle>
                  <CCardBody>
                    <CCardImg fluidGrow src={IQMetrixsImg} />
                    https://technationcanada.ca/en/events/iqmetrix-hackathon/
                    <div className="d-flex">
                      <h3>Position</h3>{" "}
                      <h3 className="ml-auto text-warning">3rd</h3>
                    </div>
                    <h3>Description</h3>
                    <p>
                      The competition was done online in the battlesnake
                      website. Each team competed in different divesions divided
                      by experience level. The goal of the competition was to
                      create a RESTful webserver that would play a snake game
                      against other snakes. The last snake alive wins. The
                      qualifers were a week long. It consistated of playing
                      games every 10 minutes giving each snake a rating based on
                      their win rate. The final four of each division from the
                      finals battled live on their twich{" "}
                      <a className="link" href="">
                        here
                      </a>
                    </p>
                    <h3>Skills used</h3>
                    <ul>
                      <li>AWS hosting</li>
                      <li>Node-express backend</li>
                      <li>A* Path finding algorythym</li>
                      <li>KD-Tree data structure</li>
                      <li>Team management</li>
                    </ul>
                    <h3>Solution</h3>
                    <p>
                      My solution was named "Steve". I made this in a team of
                      two. We wanted to make an aggressive snake which maximized
                      food eaten. We decided on using A* as the path finding
                      algorthym. I made the snake prioritize groups of food by
                      moving the positions of food into a KD-Tree data
                      structure. Steve would then compute the length of the
                      nearest food for each food. Then for each food, he would
                      sum the distance of that food and the nearest food, and
                      choose the smallest sum. We also wanted to include a
                      defensive mode where it chases it's tail but this was
                      ineffective when testing
                    </p>
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
          </CContainer>
        </CCardBody>
      </CCard>
    );
  }
}

export default CompetitionsPage;
