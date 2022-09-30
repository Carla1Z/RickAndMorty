import axios from "axios";
import { GET_CHARACTERS, GET_ID, GET_ORDER_ABC } from "./type";

export function getCharacters() {
  return async (dispatch) => {
    let allCharacters = await axios.get("http://localhost:3001/characters");
    return dispatch({
      type: GET_CHARACTERS,
      payload: allCharacters.data,
    });
  };
}

export function getDetail(id) {
  return async (dispatch) => {
    let detailCharacter = await axios.get(
      "http://localhost:3001/characters/" + id
    );
    return dispatch({
      type: GET_ID,
      payload: detailCharacter.data,
    });
  };
}

export function getOrderAbc(payload) {
  return {
    type: GET_ORDER_ABC,
    payload,
  };
}
