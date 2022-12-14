import axios from "axios";
import {
  CLEAR_DETAIL,
  GET_CHARACTERS,
  GET_EPISODES,
  GET_ID,
  GET_NAME,
  GET_ORDER_ABC,
} from "./type";

export function getCharacters() {
  return async (dispatch) => {
    let allCharacters = await axios.get("/characters");
    return dispatch({
      type: GET_CHARACTERS,
      payload: allCharacters.data,
    });
  };
}

export function getDetail(id) {
  return async (dispatch) => {
    let detailCharacter = await axios.get("/characters/" + id);
    return dispatch({
      type: GET_ID,
      payload: detailCharacter.data,
    });
  };
}

export function clearDetail() {
  return {
    type: CLEAR_DETAIL,
  };
}

export function getName(name) {
  return async (dispatch) => {
    let characterName = await axios.get("/characters?name=" + name);
    return dispatch({
      type: GET_NAME,
      payload: characterName.data,
    });
  };
}

export function getOrderAbc(payload) {
  return {
    type: GET_ORDER_ABC,
    payload,
  };
}

export function postCharacter(payload) {
  return async function (dispatch) {
    let character = await axios.post("/characters", payload);
    return character;
  };
}

export function getEpisodes() {
  return async function (dispatch) {
    let episodes = await axios("/episodes");
    return dispatch({
      type: GET_EPISODES,
      payload: episodes.data,
    });
  };
}
