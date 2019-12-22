import React, {Component} from 'react';
import TextCounter from './TextCounter';

class App extends Component{

  render() {
    return (
    <div>
      <TextCounter limit={10} />
    </div>
    );
  }
}

//export class
export default App;
