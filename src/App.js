import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import Header from "./components/Header";
import Search from "./components/Search";
import Movie from "./components/Movie";
import "./styles/Movie.css";
import { Container, Row } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

const initialState = {
  movies: [],
  loading: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_SUCCESS":
      return {
        ...state,
        movies: action.payload,
        loading: false,
        error: null,
      };
    case "SEARCH_ERROR":
      return {
        ...state,
        movies: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    try {
      let apiURL = "";

      if (search) {
        apiURL = `https://www.omdbapi.com/?s=${search}&apikey=356407cc`;
      } else {
        apiURL = `https://www.omdbapi.com/?s=man&apikey=356407cc`;
      }

      const response = await axios.get(apiURL);

      const data = response.data;

      if (data.Search) {
        dispatch({ type: "SEARCH_SUCCESS", payload: data.Search });
      } else {
        dispatch({ type: "SEARCH_ERROR", payload: "No results found..." });
      }
    } catch (error) {
      dispatch({ type: "SEARCH_ERROR", payload: "Error fetching data" });
      toast.error("Error fetching data", { autoClose: 2000 });
    }
  };

  useEffect(() => {
    handleSearch();
  }, [search]);

  return (
    <>
      <div className="navbar">
        <Container>
          <Header title="Movie App" />
          <Search
            search={search}
            setSearch={setSearch}
            handleSearch={handleSearch}
          />
        </Container>
      </div>
      <div className="app">
        <Container>
          <Row>
            <h3 className="text-center fw-bold mt-3">Movie List</h3>
            {state.loading ? (
              <h4 className="fw-bold">Loading...</h4>
            ) : state.error ? (
              <h4 className="fw-bold">{state.error}</h4>
            ) : (
              state.movies.map((movie) => (
                <Movie key={movie.imdbID} movie={movie} />
              ))
            )}
          </Row>
        </Container>
      </div>
      <ToastContainer theme="colored" />
    </>
  );
};

export default App;
