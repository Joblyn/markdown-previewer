import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Editor from './Components /Editor';
import Previewer from './Components /Previewer';

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
      text: initialState,
      isEditorOn: true,
      EditorActive: true,
      PreviewerActive: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.clickHandlerForEditor = this.clickHandlerForEditor.bind(this);
    this.clickHandlerForPreviewer = this.clickHandlerForPreviewer.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    })
  }

  clickHandlerForEditor = () => {
    this.setState({
      isEditorOn: true,
      EditorActive: true,
      PreviewerActive: false
    })
  }

  clickHandlerForPreviewer = () => {
    this.setState({
      isEditorOn: false,
      EditorActive: false,
      PreviewerActive: true
    })
  }

  render() {
    const { EditorActive, PreviewerActive, text, isEditorOn } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          Markdown Previewer
        </header>

        <div className="cont-parent">
          <div className="buttons-container d-flex justify-content-center">
            <div className={`buttons ${EditorActive ? 'active' : ''}`} onClick={this.clickHandlerForEditor}>Editor</div>
            <div className={`buttons ${PreviewerActive ? 'active' : ''}`} onClick={this.clickHandlerForPreviewer}>Preview</div>
          </div>

          <div className="cont">
            {isEditorOn 
              ? <Editor text={text} handleChange={this.handleChange} /> 
              : <Previewer text={text} />
            }
          </div>
        </div>
        <footer>
          Dev'd by Joblyn
        </footer>
      </div>
    )
  }
}

export default App;
