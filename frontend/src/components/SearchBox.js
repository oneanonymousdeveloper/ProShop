import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

function SearchBox() {
  const [keyword, setKeyword] = useState("");

  let navigate = useNavigate();
  const location = useLocation();

  const submitHandler = (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams(location.search);
    if (keyword) {
      queryParams.set("keyword", keyword);
      queryParams.set("page", "1"); 
    } else {
      queryParams.delete("keyword");
      queryParams.delete("page");
    }
    navigate(queryParams.toString() ? `/?${queryParams.toString()}` : "/");
  };

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        className="mr-sm-2 ml-sm-5"
      ></Form.Control>

      <Button type="submit" variant="outline-success" className="p-2">
        Submit
      </Button>
    </Form>
  );
}

export default SearchBox;
