import { GET_CHARACTERS, GET_ORDER_ABC } from "./type";

const initialState = {
  characters: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTERS:
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
    default:
      return state;
  }
}
