import {
  TEMP_DATA,
  TEMP_ERROR,
  TEMP_START_LOADING,
  TEMP_STOP_LOADING,
  UPDATE_TEMP_DATA,
} from "../actions/types";

const INTIAL_STATE = {
  templateData: [],
  updateTemplateData :[],
};

export default (state = INTIAL_STATE, actions) => {
  switch (actions.type) {
    case TEMP_START_LOADING:
      return { ...state, loading: true };
    case TEMP_DATA:
      return { ...state, templateData: actions.payload };
      case UPDATE_TEMP_DATA:
        return { ...state, updateTemplateData: actions.payload };
    case TEMP_ERROR:
      return { ...state, error: true, errorMessage: actions.payload };
    case TEMP_STOP_LOADING:
      return { ...state, loading: false };
    case TEMP_START_LOADING:
      return { ...state, loading: true };
    default:
      return { ...state };
  }
};
