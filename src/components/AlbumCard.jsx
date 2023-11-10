import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Col } from "react-bootstrap";
import { getLocalShownAction } from "../redux/actions";

const AlbumCard = (artistName) => {
  const dispatch = useDispatch();
  const album = useSelector((state) => state.album);
  console.log(artistName);

  useEffect(() => {
    dispatch(getLocalShownAction(artistName));
  },[]);

  return (
    <>
      {album.map((song) => {
        <Col class="col text-center" id={song.id}>
          <img class="img-fluid" src={song.album.cover_medium} alt="track" />
          <p>
            Track: "
            {song.title.length < 16
              ? `${song.title}`
              : `${song.title.substring(0, 16)}...`}
            "<br />
            Artist: ${song.artist.name}
          </p>
        </Col>;
      })}
    </>
  );
};

export default AlbumCard;
