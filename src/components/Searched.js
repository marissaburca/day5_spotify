import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { Col } from "react-bootstrap";
import { useEffect } from "react";
import { getDetailsAction } from "../redux/actions";
import { getSearchedAction } from "../redux/actions";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { addToFavoritesAction } from "../redux/actions";
import { removeFromFavoritesAction } from "../redux/actions";
import { useState } from "react";

const Searched = () => {
  const find = useSelector((state) => state.searched.search);
  const found = useSelector((state) => state.found.tracks);
  console.log(found);
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    dispatch(getSearchedAction(find));
  });

  return (
    <>
      {found.slice(0, 8).map((one) => {
        return (
          <Col
            class="d-flex flex-column justify-content-center mb-4"
            key={one.id}
          >
            <img
              class="img-fluid"
              src={one.album.cover_medium}
              alt="track"
              onClick={() => dispatch(getDetailsAction(one))}
            />
            <div
              className="d-flex align-items-center "
              style={{ width: "200px" }}
            >
              <div className="text-start" style={{ width: "160px" }}>
                <p>
                  Track: "
                  {one.album.title.length < 10
                    ? `${one.album.title}`
                    : `${one.album.title.substring(0, 10)}...`}
                  "<br />
                  Artist: {one.artist.name}
                </p>
              </div>
              <div className="text-center fs-5">
                <BsHeart
                  onClick={() => {
                    dispatch(addToFavoritesAction(one));
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

export default Searched;
