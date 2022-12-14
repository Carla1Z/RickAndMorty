import {
  CLEAR_DETAIL,
  GET_CHARACTERS,
  GET_EPISODES,
  GET_ID,
  GET_NAME,
  GET_ORDER_ABC,
  POST_CHARACTER,
} from "./type";

const initialState = {
  characters: [],
  allCharacters: [],
  detail: [],
  episodes: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
        allCharacters: action.payload,
      };
    case GET_ID:
      return {
        ...state,
        detail: action.payload,
      };
    case CLEAR_DETAIL:
      return {
        ...state,
        detail: {},
      };
    case GET_NAME:
      return {
        ...state,
        characters: action.payload,
      };
    case GET_ORDER_ABC:
      let sortedCharacters = [...state.characters];
      // console.log(sortedCharacters);
      sortedCharacters =
        action.payload === "asc"
          ? state.characters.sort(function (a, b) {
              if (a.name > b.name) return 1;
              if (a.name < b.name) return -1;
              return 0;
            })
          : state.characters.sort(function (a, b) {
              if (a.name < b.name) return 1;
              if (a.name > b.name) return -1;
              return 0;
            });
      return {
        ...state,
        characters: sortedCharacters,
      };
    case POST_CHARACTER:
      return {
        ...state,
      };
    case GET_EPISODES:
      return {
        ...state,
        episodes: action.payload,
      };
    default:
      return state;
  }
}
