import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import ReactMarkdown from "react-markdown"; 

const Previewer = ({ text }) => {
  return( 
    <div className="col-lg-12 col-md-12 col-sm-12 my-col mt-4 previewer-div scroll">
      <ReactMarkdown id="preview" className="rounded p-2" source={text} />
    </div>
  )
}

export default Previewer;