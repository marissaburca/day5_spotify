import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Col } from "react-bootstrap";
import { getDetailsAction, getLocalAction } from "../redux/actions";

const AlbumCard = (artistName) => {
  const dispatch = useDispatch();
  const album = useSelector((state) => state.static.content);
  console.log(artistName);

  useEffect(() => {
    dispatch(getLocalAction(artistName));
  },[]);

  return (
    <>
      {album.slice(0,4).map((song, i) => {
        return(
        <Col class="col text-center" id={song.id}
        key={i}
        
        >
          <img class="img-fluid" src={song.album.cover_medium} alt="track"
          onClick={() => dispatch(getDetailsAction(song))} />
          <p>
            Track: "
            {song.title.length < 16
              ? `${song.title}`
              : `${song.title.substring(0, 16)}...`}
            "<br />
            Artist: ${song.artist.name}
          </p>
        </Col>);
      })}
    </>
  );
};

export default AlbumCard;
