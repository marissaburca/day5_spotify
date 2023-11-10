import { Container, Col, Row } from "react-bootstrap";
import shuffle from "../assets/playerbuttons/shuffle.png"
import repeat from "../assets/playerbuttons/repeat.png"
import play from "../assets/playerbuttons/play.png"
import prev from "../assets/playerbuttons/prev.png"
import next from "../assets/playerbuttons/next.png"

const Player = () => {
  return (
    <Container fluid className=" fixed-bottom bg-container pt-1">
      <Row className=" h-100">
        <Col className="col-lg-10 offset-lg-2">
          <Row className="h-100 flex-column justify-content-center align-items-center">
            <Col className="col-3">
            </Col>
            <Col className="col-6 col-md-4 playerControls">
              <div className="d-flex">
                <a href="#">
                  <img src={shuffle} alt="shuffle" />
                </a>
                <a href="#">
                  <img src={prev} alt="prev" />
                </a>
                <a href="#">
                  <img src={play} alt="play" />
                </a>
                <a href="#">
                  <img src={next} alt="next" />
                </a>
                <a href="#">
                  <img src={repeat} alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </Col>
            <Col className="col-3">
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;
