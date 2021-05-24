import { Get } from "../../components/config/apiServices";

import {
  START_FETCH_TEMPLATES,
  SET_TEMPLATES_DATA,
  TEMPLATES_FETCH_FAILED,
  SEARCH_TEMPLATES,
  SORT_CATEGORY,
  SORT_ALPHABET,
} from "./types";

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

export function handleSearchTemplates(searchValue) {
  return (dispatch)=>{
    dispatch({
      type: SEARCH_TEMPLATES,
      payload: { searchValue },
    });
  }
}
export function handleSortCategory(activeCategory) {
    return (dispatch)=>{
      dispatch({
        type: SORT_CATEGORY,
        payload: { activeCategory },
      });
    }
  }

  export function handleSortAlphabet(activeOrder) {
    return (dispatch)=>{
      dispatch({
        type: SORT_ALPHABET,
        payload: { activeOrder },
      });
    }
  }
  

// const sortByTime = ({ target }) => {
//   let newData = [];
//   if (target.value === "asc") {
//     newData = data.sort((x, y) => {
//       return x.created - y.created;
//     });
//     setData(newData);
//   } else if (target.value === "desc") {
//     newData = data.sort((x, y) => {
//       return y.created - x.created;
//     });
//     setData(newData);
//   } else {
//     setData(defaultData);
//   }
//   console.log(data);
// };







// const [searchText, setSearchText] = useState("");
// const [data, setData] = useState([]);
// const [defaultData, setdefaultData] = useState([]);

// const searchName = () => {
//   if (searchText === "") {
//     return data;
//   }
//    let search = data.filter((o) => o["name"].includes(searchText));
//    setData(search);
// };

// const handleSearch = (e) => {
//   setSearchText(e.target.value);
//   searchName();
// };
// const sortCategory = ({ target }) => {
//   if(target.value === 'All') return data
//   let category = data.filter((o) => o["category"].includes(target.value));
//   setData(category)
// };
// const sortName = ({ target }) => {
//   let newData = [];
//   // console.log(target.value, data);
//   if (target.value === "asc") {
//     newData = data.sort((a, b) => {
//       if (a.name.toLowerCase() < b.name.toLowerCase()) {
//         return -1;
//       }
//       if (a.name.toLowerCase() > b.name.toLowerCase()) {
//         return 1;
//       }
//       return 0;
//     });
//     props.updateTemplates(newData);
//     setData(newData);
//   } else if (target.value === "desc") {
//     newData = data.sort((a, b) => {
//       if (a.name.toLowerCase() > b.name.toLowerCase()) {
//         return -1;
//       }
//       if (a.name.toLowerCase() < b.name.toLowerCase()) {
//         return 1;
//       }
//       return 0;
//     });
//     props.updateTemplates(newData);
//     setData(newData);
//   } else {
//     setData(defaultData);
//   }
// };