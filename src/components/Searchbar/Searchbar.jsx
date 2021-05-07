import { Component } from "react";
// import "./Searchbar.scss";
// import PropTypes from "prop-types";

class Searchbar extends Component {
  state = {
    query: "",
  };

  handleChange = (e) => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: "" });
  };

  render() {
    return (
      <div>
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.handleSubmit}>
            <input
              className="SearchForm-input"
              type="text"
              value={this.state.query}
              onChange={this.handleChange}
              autoComplete="off"
              autoFocus
              placeholder="Search movie"
            />
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>
          </form>
        </header>
      </div>
    );
  }
}

export default Searchbar;
