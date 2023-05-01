import { Typography } from "@mui/material";
import React, { useState } from 'react';
import pdfFile from './Tyler_Wulff_Assignment_2.pdf'

//document help https://stackoverflow.com/questions/35517245/error-missing-class-properties-transform
//and https://stackoverflow.com/questions/47225553/load-more-than-1-pdf-pages-in-react-pdf
const Project = () => {
    const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function loadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <h1>Project Deliverables</h1>
      <div style={{alignItems: 'center'}}>
        {/* <Document file={pdfFile} onLoadSuccess={loadSuccess} style={{}}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map(page => (
                <Page pageNumber={page}/>
            ))}
        </Document> */}
        </div>
    </div>
  );
  

};
  
export default Project;