import React from "react";
import "./filtertask.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";

const FilterTask = ({ setFilter }) => {
    const handleFilter = (filterType) => {
      setFilter(filterType); // This will now correctly update the filter state
    };
  
    return (
      <Dropdown as={ButtonGroup}>
        <Button variant="success">Filter Tasks</Button>
  
        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
  
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleFilter("All")}>ALL</Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilter("Done")}>Done</Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilter("UnDone")}>UnDone</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  };
export default FilterTask;
