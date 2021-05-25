import { SORT_ALPHABET } from "../actions/types";
import {
  START_FETCH_TEMPLATES,
  SET_TEMPLATES_DATA,
  TEMPLATES_FETCH_FAILED,
  SEARCH_TEMPLATES,
  SORT_CATEGORY,
} from "../actions/types";

const INTIAL_STATE = {
  allTemplates: [],
  data: [],
  error: false,
  loading: false,
  errorMessage: "",
  searchValue: "",
  search: true,
  totalPages: 1,
  currentPage: 1,
  pageLength: 50,
};

export default (state = INTIAL_STATE, actions) => {
  switch (actions.type) {
    case START_FETCH_TEMPLATES:
      return { ...state, loading: true };
    case SET_TEMPLATES_DATA:
      let data = actions.payload.templates;
      return {
        ...state,
        error: false,
        loading: false,
        errorMessage: "",
        allTemplates: data,
        totalPages: Math.ceil(data.length / state.pageLength),
        data: paginate(data, state.currentPage, state.pageLength),
      };
    case TEMPLATES_FETCH_FAILED:
      return {
        ...state,
        error: true,
        errorMessage: actions.payload.errorMsg,
        loading: false,
      };
    case SEARCH_TEMPLATES:
      const { searchValue } = actions.payload;
      let searchData =
        searchValue === ""
          ? state.allTemplates
          : state.allTemplates.filter(({ name }) => name.includes(searchValue));
      return {
        ...state,
        search: true,
        currentPage: 1,
        searchValue: searchValue,
        data: paginate(searchData, 1, state.pageLength),
      };
    case SORT_CATEGORY:
      const { activeCategory } = actions.payload;
      let sortData =
        activeCategory === "All"
          ? state.allTemplates
          : state.allTemplates.filter(({ category }) =>
              category.includes(activeCategory)
            );
      return {
        ...state,
        search: false,
        currentPage: 1,
        searchValue: "",
        activeCategory: activeCategory,
        data: paginate(sortData, 1, state.pageLength),
      };
    case SORT_ALPHABET:
      const { activeOrder } = actions.payload;
      let sortAlphabet =
        activeOrder === "default"
          ? state.allTemplates
          : activeOrder === "asc"
          ?  [...state.allTemplates].sort((a, b) => a.name.localeCompare(b.name))
          : activeOrder === "desc"
          ? [...state.allTemplates].sort((a, b) => b.name.localeCompare(a.name))
          : null;
      return {
        ...state,
        search: false,
        currentPage: 1,
        searchValue: "",
        activeOrder: activeOrder,
        data: paginate(sortAlphabet, 1, state.pageLength),
      };

    default:
      return { ...state };
  }
};

function paginate(arr, currentPage, pagelength) {
  return arr.slice((currentPage - 1) * pagelength, pagelength * currentPage);
}

