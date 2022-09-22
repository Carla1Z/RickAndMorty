import axios from "axios";
import { GET_CHARACTERS } from "./type";

export function getCharacters() {
  return async (dispatch) => {
    let allCharacters = await axios.get("http://localhost:3001/characters");
    return dispatch({
      type: GET_CHARACTERS,
      payload: allCharacters.data,
    });
  };
}
