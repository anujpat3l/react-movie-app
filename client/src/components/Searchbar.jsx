import { Button, Form } from 'react-bootstrap';

function SearchBar({ setSearchText, onClickRefresh }) {
  return (
    <div className="d-flex justify-content-center m-3">
      <Form.Control
        type="text"
        placeholder="search for movie"
        onChange={(event) => setSearchText(event.target.value)}
      />
      <Button variant="primary me-2" onClick={onClickRefresh}>
        Search
      </Button>
      <Button variant="success" onClick={onClickRefresh}>
        Refresh
      </Button>
    </div>
  );
}

export default SearchBar;
