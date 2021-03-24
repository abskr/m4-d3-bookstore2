import React from "react";
import { Form, Button, FormControl } from "react-bootstrap";

class FilterBookList extends React.Component {
  state = {
    searchField: "",
  };

  render() {
    return (
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          value={this.state.searchField}
          onChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    );
  }
}

export default FilterBookList;
