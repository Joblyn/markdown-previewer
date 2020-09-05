import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactMarkdown from "react-markdown";

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
  }
  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    const { text } = this.state;
    // const markdown = marked(text, { breaks:true });

    return (
      <div className="App">
        <header className="App-header">
          Markdown Previewer
        </header>
        <div className="container-fluid display-flex justify-content-center">
          <div className="col mt-4 editor-div">
            <h5>Editor</h5>
            <textarea value={text} onChange={this.handleChange} className="form-control" id="editor" />
          </div>
          <div className="col mt-4">
            <h5>Previewer</h5>
            <ReactMarkdown id="preview" className="rounded p-2" source={text} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
