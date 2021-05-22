import { Get } from "../../components/config/apiServices";
import { UPDATE_TEMP_DATA } from "./types";

import {
  TEMP_DATA,
  TEMP_ERROR,
  TEMP_START_LOADING,
  TEMP_STOP_LOADING,
} from "./types";
// let cors = `https://cors-anywhere.herokuapp.com/`;
let url = `https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates`;

export const getTemplates = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: TEMP_START_LOADING, payload: null });
      dispatch({ type: TEMP_DATA, payload: null });
      dispatch({ type: TEMP_ERROR, payload: null });
      dispatch({ type: TEMP_STOP_LOADING, payload: null });
      const response = await Get(url);
      dispatch({ type: TEMP_START_LOADING, payload: null });
      const { status } = response;
      if (status === 200) {
        dispatch({ type: TEMP_DATA, payload: response });
        dispatch({ type: TEMP_STOP_LOADING, payload: false });
        console.log("indexDataByKey", indexDataByKey(response.data, "name"));
      }
    } catch (error) {
      dispatch({ type: TEMP_ERROR, payload: error });
      dispatch({ type: TEMP_STOP_LOADING, payload: false });
    }
  };
};

const indexDataByKey = (data, key) => {
  data = data || [];
  console.log("indexed data", data);
  return data.reduce((output, curr) => {
    const indexKey = curr[key];
    if (!output[indexKey]) output[indexKey] = [];
    output[key].push(curr);
    return output;
  }, {});
};

export const updateTemplates = (data) => {
    return { type: UPDATE_TEMP_DATA, payload: data };
};
