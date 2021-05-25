import { Get } from "../../components/config/apiServices";
import { SORT_DATE } from "./types";

import {
  START_FETCH_TEMPLATES,
  SET_TEMPLATES_DATA,
  TEMPLATES_FETCH_FAILED,
  SEARCH_TEMPLATES,
  SORT_CATEGORY,
  SORT_ALPHABET,
} from "./types";
// https://cors-anywhere.herokuapp.com/
let url = `https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates`;

export const getTemplates = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: START_FETCH_TEMPLATES });
      const response = await Get(url);
      const { status } = response;
      let payload = {};
      if (status === 200) {
        payload.templates = response.data;
        dispatch({ type: SET_TEMPLATES_DATA, payload });
      } else {
        payload.errorMsg = "failed to fetch data";
        dispatch({ type: SET_TEMPLATES_DATA, payload });
      }
    } catch (error) {
      dispatch({
        type: TEMPLATES_FETCH_FAILED,
        payload: { errorMsg: error.message },
      });
    }
  };
};

export const handleSearchTemplates = (searchValue) => {
  return (dispatch) => {
    dispatch({
      type: SEARCH_TEMPLATES,
      payload: { searchValue },
    });
  };
};
export const handleSortCategory = (activeCategory) => {
  return (dispatch) => {
    dispatch({
      type: SORT_CATEGORY,
      payload: { activeCategory },
    });
  };
};

  export const handleSortAlphabet = (activeOrder) => {
    return (dispatch) => {
      dispatch({
        type: SORT_ALPHABET,
        payload: { activeOrder },
      });
    };
  };
  export const handleSortDate = (activeDate) => {
    return (dispatch) => {
      dispatch({
        type: SORT_DATE,
        payload: { activeDate },
      });
    };
  };
  