import React from 'react';

// in the past, createClass() was available via the default React library
import createClass from 'create-react-class';
React.createClass = createClass;

/* only state */

// var App = React.createClass({
//   getInitialState: function() {
//     return {
//       value: '',
//     };
//   },

//   onChange: function(event) {
//     this.setState({ value: event.target.value });
//   },

//   render: function() {
//     return (
//       <div>
//         <h1>Hello React "createClass" Component!</h1>

//         <input
//           value={this.state.value}
//           type="text"
//           onChange={this.onChange}
//         />

//         <p>{this.state.value}</p>
//       </div>
//     );
//   },
// });

/* state + side effect with local storage */

var App = React.createClass({
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
