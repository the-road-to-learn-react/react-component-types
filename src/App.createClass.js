import React from 'react';

// only in the past, createClass() was available via React library
import createClass from 'create-react-class';

var App = createClass({
  getInitialState: function() {
    return {
      value: localStorage.getItem('myValueInLocalStorage') || '',
    };
  },

  componentDidUpdate: function() {
    localStorage.setItem('myValueInLocalStorage', this.state.value);
  },

  onChange: function(event) {
    this.setState({ value: event.target.value });
  },

  render: function() {
    return (
      <div>
        <h1>Hello React "createClass" Component!</h1>

        <input
          value={this.state.value}
          type="text"
          onChange={this.onChange}
        />

        <p>{this.state.value}</p>
      </div>
    );
  },
});

export default App;
