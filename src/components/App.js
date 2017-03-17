import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
         <div>Header Placeholder</div>
          {this.props.children}
         <div>Footer Placeholder</div>
      </div>
    );
  }
}

export default App;
