import React from 'react';


class SearchBar extends React.Component {
  state = {searchTerm: ""};

  onSearchSubmit = (event) => {
    event.preventDefault();
    this.props.searchFunction(this.state.searchTerm);
  }

  onInputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  }
  
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onSearchSubmit}>


          <input 
            type="text" 
            onChange={this.onInputChange} 
            value={this.state.searchTerm}
            placeholder="Search - type in search term and hit 'enter/return'"
          >
          </input>


        </form>
      </div>
    );
  }
}
export default SearchBar;