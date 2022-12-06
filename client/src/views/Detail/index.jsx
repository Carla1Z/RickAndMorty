import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import CharacterDetail from "../../components/CharacterDetail";
import { getDetail } from "../../redux/actions";

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const characterDetail = useSelector((state) => state.detail);
  console.log(characterDetail);

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  return (
    <div>
      <Link to="/">
        <button>Volver</button>
      </Link>
      <h1>Ruta de detalle</h1>
      <CharacterDetail characterDetail={characterDetail} />
    </div>
  );
}

export default Detail;
