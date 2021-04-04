import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import resume from '../pdf/Resume.pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { Document, Page, pdfjs } from "react-pdf";

const Resume = (props) => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


    
    return (
        <div className="row justify-content-center pt-3">
            <div className=" col-sm-12 col-md-10 col-lg-10 col-xl-6 text-xl-right">

            <Document  
                file={resume}
                >
                <Page object-fit="fill"
                pageNumber={1} 
                renderTextLayer={false}>
                </Page>
            </Document>
            </div>
            <div className=" col-sm-12 col-md-10 col-lg-10 col-xl-6 text-xl-left">
            <Document  
                file={resume}
                >
                <Page size="A4"
                pageNumber={2} 
                renderTextLayer={false}>
                </Page>
            </Document>
            </div>
        </div>
    );
}
 
export default Resume;