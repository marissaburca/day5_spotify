import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { getDetailsAction, getLocalAction } from "../redux/actions";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { addToFavoritesAction } from "../redux/actions";
import { removeFromFavoritesAction } from "../redux/actions";

const AlbumCard = (artistName) => {
  const dispatch = useDispatch();
  const album = useSelector((state) => state.static.content);
  
  console.log(artistName);
  console.log(album);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    dispatch(getLocalAction(artistName));
  }, []);

  return (
    <>
      {album.slice(0, 8).map((song) => {
        return (
          <Col class="d-flex flex-column mb-4 ps-4 align-items-center" key={song.id}>
            <img
              class="img-fluid"
              src={song.album.cover_medium}
              alt="track"
              onClick={() => dispatch(getDetailsAction(song))}
            />
            <div
              className="d-flex align-items-center"
              style={{ width: "200px" }}
            >
              <div className="text-start" style={{ width: "160px" }}>
                <p>
                  Track: "
                  {song.album.title.length < 10
                    ? `${song.album.title}`
                    : `${song.album.title.substring(0, 10)}...`}
                  "<br />
                  Artist: {song.artist.name}
                </p>
              </div>
              <div className="text-center fs-5">
                {/* devo riuscire  a mappare i preferiti per rimuoverli dalla lista
                tutt'ora quando agg i pref mi seleziona tutti gli elementi*/}
                <BsHeart
                  onClick={() => {
                    dispatch(addToFavoritesAction(song));
                    setIsFavorite(true);
                  }}
                  className={isFavorite ? "d-none" : ""}
                />
                <BsHeartFill
                  className={isFavorite ? "" : "d-none"}
                  onClick={() => {
                    dispatch(removeFromFavoritesAction());
                    setIsFavorite(false);
                  }}
                />
              </div>
            </div>
          </Col>
        );
      })}
    </>
  );
};

export default AlbumCard;
