import AlbumCard from "./AlbumCard";
import Player from "./Player";
import { Row, Col } from "react-bootstrap";

const Main = () => {
  return (
    <Col className="col-12 col-md-9 offset-md-3 mainPage">
      <Row>
        <Col className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </Col>
      </Row>
      <Row>
        <Col className="col-10">
          <div id="searchResults" className="d-none">
            <h2>Search Results</h2>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="col-10">
          <div id="rock">
            <h2>Rock Classics</h2>
            <Row
              className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="rockSection"
            >
              <AlbumCard artistName={'rock classic'}/>
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="col-10">
          <div id="pop">
            <h2>Pop Culture</h2>
            <Row
              className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="popSection"
            >
              <AlbumCard artistName={'pop'}/>
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="col-10">
          <div id="hiphop">
            <h2>#HipHop</h2>
            <Row
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="hipHopSection"
            >
              <AlbumCard artistName={'hiphop'}/>
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Player />
      </Row>
    </Col>
  );
};

export default Main;
