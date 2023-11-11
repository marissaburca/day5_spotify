import { Container, Col, Row } from "react-bootstrap";
import shuffle from "../assets/playerbuttons/shuffle.png";
import repeat from "../assets/playerbuttons/repeat.png";
import play from "../assets/playerbuttons/play.png";
import prev from "../assets/playerbuttons/prev.png";
import next from "../assets/playerbuttons/next.png";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Player = () => {

  const song = useSelector((state) => state.details.track);

  return (
    <Container fluid className=" fixed-bottom bg-container pt-1">
      <Row className=" h-100">
        <Col className="col-lg-9 offset-lg-3">
          <Row className="h-100 justify-content-center align-items-center">
            <Col className="col-3 col-md-4 text-white d-flex flex-column justify-content-start align-items-start ps-5">
              <div className="pt-0 mb-0">{song.album?.title}</div>
              <div className="pt-0 mb-0">{song.artist?.name}</div>
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
            <Col className="col-3 col-md-4"></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;
