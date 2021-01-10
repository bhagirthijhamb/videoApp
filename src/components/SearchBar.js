import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' }
  onInputChange = (e) => {
    this.setState({ term: e.target.value })
  }
  onFormSubmit = (e) => {
    e.preventDefault();
    // TODO: Make sure we call callback that we get from the parent component
    this.props.onTermSubmit(this.state.term)
  }
  render(){
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            {/* make it a controlled component by hookig it up to the component state so that we can can store the datat of search term inside the React component and not inside the DOM */}
            <input type="text" value={this.state.term} onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;