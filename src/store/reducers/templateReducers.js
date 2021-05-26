import { SORT_ALPHABET } from "../actions/types";
import {
  START_FETCH_TEMPLATES,
  SET_TEMPLATES_DATA,
  TEMPLATES_FETCH_FAILED,
  SEARCH_TEMPLATES,
  SORT_CATEGORY,
  SORT_DATE,
  PREV_PAGE,
  NEXT_PAGE
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
  pageLength: 15,
  pageData: []
};

export  const reducer = (state = INTIAL_STATE, actions) => {
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
        data: data,
        totalPages: Math.ceil(data.length / state.pageLength),
        pageData: paginate(data, state.currentPage, state.pageLength),
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
        totalPages: Math.ceil(searchData.length / state.pageLength),
        data: searchData,
        pageData: paginate(searchData, 1, state.pageLength),
      };
    case SORT_CATEGORY:
      const { activeCategory } = actions.payload;
      let sortCatData =
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
        data: sortCatData,
        totalPages: Math.ceil(sortCatData.length / state.pageLength),
        activeCategory: activeCategory,
        pageData: paginate(sortCatData, 1, state.pageLength),
      };
    case SORT_ALPHABET:
      const { activeOrder } = actions.payload;
      let sortAlphabetData =
        activeOrder === "default"
          ? state.allTemplates
          : activeOrder === "asc"
          ? [...state.allTemplates].sort((a, b) => a.name.localeCompare(b.name))
          : activeOrder === "desc"
          ? [...state.allTemplates].sort((a, b) => b.name.localeCompare(a.name))
          : null;
          return {
            ...state,
            search: false,
            currentPage: 1,
            searchValue: "",
            data: sortAlphabetData,
            activeOrder: activeOrder,
            pageData: paginate(sortAlphabetData, 1, state.pageLength),
          };
    case SORT_DATE:
      const { activeDate } = actions.payload;
      let sortDateData =
        activeDate === "default"
          ? state.allTemplates
          : activeDate === "asc"
          ? [...state.allTemplates].sort((a, b) =>
              a.created.localeCompare(b.created)
            )
          : activeDate === "desc"
          ? [...state.allTemplates].sort((a, b) =>
              b.created.localeCompare(a.created)
            )
          : null;
      return {
        ...state,
        search: false,
        currentPage: 1 ,
        searchValue: "",
        data: sortDateData,
        activeOrder: activeDate,
        pageData: paginate(sortDateData, 1, state.pageLength),
      };

      case PREV_PAGE:
        let prevPage = state.currentPage - 1
        return {
          ...state,
          currentPage: prevPage,
          pageData: paginate(state.data, prevPage, state.pageLength),
        };
   
      case NEXT_PAGE:
          let nextPage = state.currentPage + 1
        return {
          ...state,
          currentPage: nextPage,
          pageData: paginate(state.data, nextPage, state.pageLength),
        };
      default:
      return { ...state };
  }
};

const paginate = (arr, currentPage, pagelength) => {
  return arr.slice((currentPage - 1) * pagelength, pagelength * currentPage);
};

export default reducer;