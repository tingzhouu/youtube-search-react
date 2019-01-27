import React from 'react';


class SearchBar extends React.Component {
  state = {searchTerm: ""};

  onSearchSubmit = (event) => {
    event.preventDefault();
    this.props.searchFunction(this.state.searchTerm);
  }

  onInputChange = (event) => {
    this.setState({searchTerm: event.target.value});
  }
  
  render() {
    return (
      <div className="ui segment container">
        <form className="ui form" onSubmit={this.onSearchSubmit}>
          <label>Video Search</label>
          <input type="text" name="target" onChange={this.onInputChange} value={this.state.searchTerm}></input>
        </form>
      </div>
    );
  }
}
export default SearchBar;