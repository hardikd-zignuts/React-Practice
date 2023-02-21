import React, { useEffect, useReducer } from "react";
import axios from "axios";


const initialValue = {
  loading: true,
  post: {},
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payLoad,
        error: "",
      };

    case "FETCH_FAIL":
      return {
        loading: false,
        post: {},
        error: "Error Retrieving data",
      };

    default:
      return state;
  }
};

const FetchDataUsingReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payLoad: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_FAIL" ,error:error});
      });
  }, []);

  return (
    <>
      <div>
			{state.loading ? 'Loading' : state.post[2].title}
			{state.error ? state.error : null}
		</div>
    </>
  );
};

export default FetchDataUsingReducer;
