import { Button, Form } from 'react-bootstrap';
function SearchBar(props) {
  return (
    <div className="d-flex justify-content-center m-3">
      <Form.Control type="text" placeholder="search for movie" />
      <Button variant="primary me-2">Search</Button>
      <Button variant="success" onClick={props.onClickRefresh}>
        Refresh
      </Button>
    </div>
  );
}

export default SearchBar;
