import React, { Component } from 'react';
import Allfiles from "./components/allfiles"
import Search from "./components/search/search"

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <React.Fragment>
        <Allfiles/>
      </React.Fragment>
     );
  }
}
 
export default App;
