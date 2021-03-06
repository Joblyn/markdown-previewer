import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Editor = ({ text, handleChange }) => {
  return (
    <div className="col-lg-12 col-md-12 col-sm-12 my-col mt-2 editor-div">
      <textarea value={text} onChange={handleChange} className="form-control" id="editor" />
    </div>
  )
} 

export default Editor;