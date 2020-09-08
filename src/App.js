import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Editor from './Components /Editor';
import Previewer from './Components /Previewer';
// import $ from "jquery";

const initialState = `
  This is a paragraph

  **This is bolded text**

  > Block Quotes!

  # Heading 1
  ## Heading 2

  - list item 1
  - list item 2

  [Visit my Website](https://joblyn.com)

  This is a inline \`<div></div>\`

  This is a block of code: 

  \`\`\`
    let x = 1;
    let y = 2;
    let z= x + y;
  \`\`\`

  ![React](https://goo.gl/Umyytc)
  `;

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      text: initialState
    }
    this.handleChange = this.handleChange.bind(this);
    this.clickHandlerForPreviewer = this.clickHandlerForPreviewer.bind(this);
    this.clickHandlerForEditor = this.clickHandlerForEditor.bind(this);  
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  clickHandlerForEditor = () => {
    
  }

  clickHandlerForPreviewer = () => {

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          Markdown Previewer
        </header>

        {/* Buttons on mobile */}
        <div className="buttons-container d-flex justify-content-center show-on-mobile">
          <Button className="buttons" onClick={this.clickHandlerForEditor}>Editor</Button>
          <Button className="buttons" onClick={this.clickHandlerForPreviewer}>Preview</Button>
        </div>
        {/* ...end... */}

        <div className="row">
          <Editor text={this.state.text} handleChange={this.handleChange} />
          <Previewer text={this.state.text} />
        </div>

        <footer>
          Dev'd by Joblyn 
        </footer>
      </div>
    )
  }
}

export default App;
