import React from "react";
import Button from "react-bootstrap/Button";
import { Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const Search = ({ search, setSearch, handleSearch }) => {
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <Form.Control
          type="search"
          name="search"
          placeholder="What do you want to search?"
          className="border-info"
          aria-label="Search"
          style={{
            width: "300px",
          }}
          value={search}
          onChange={handleChange}
        />
        <Button variant="info" type="submit">
          <FaSearch />
        </Button>
      </InputGroup>
    </Form>
  );
};

export default Search;
