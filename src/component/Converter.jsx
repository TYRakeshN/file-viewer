import React, { Component } from "react";
/* import axios from "axios"; */
import image from './data/TyImg.png';
import pdf from './data/Typdf.pdf';
import Doc from './data/Tydoc.docx';
import FileViewer from 'react-file-viewer';
class Converter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /* ignorecache: true,
      viewtype: "hview",
      responsetype: "html",
      inputfile: "",
      filter: "doc-pdf", */
      fileUploaded:false,
      showImage:false,
      showPdf:false,
      showDoc:false

    };
  }

  /* uploadFile = (value) => {
    //console.log("FileName-->" + file.name + "fileType-->" + file.type);
    console.log("handle fileupload");
    console.log("Value-->" + value);
    if (value) {
      axios
        .post({
          url: "https://docsconverter.demo.thinkfree.com/hermes/convert.hs",
          data: {
            ignorecache: this.state.ignorecache,
            viewtype: this.state.viewtype,
            responsetype: this.state.responsetype,
            inputfile: this.state.inputfile,
            filter: this.state.filter,
            attachment: value,
          },
        })
        .then((response) => {
          console.log(response);
        });
    }
  }; */
/*   handleSubmit = (event) => {
    //console.log(this.state);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    };
    event.preventDefault();
    console.log("handle submit");
    axios.post("https://docsconverter.demo.thinkfree.com/hermes/convert.hs", config, {
        ignorecache: this.state.ignorecache,
        viewtype: this.state.viewtype,
        responsetype: this.state.responsetype,
        inputfile: this.state.inputfile,
        filter: this.state.filter,
        attachment: document.querySelector("#customFile"),
      })
      .then((response) => {
        //document.getElementsByTagName('body')[0].innerHTML(response.getElementsByTagName('a')[0]);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }; */
  fileChange=()=>{
    this.setState({fileUploaded:true})
  }
  showFileLoaded=()=>{
    if(this.state.fileUploaded){
        this.setState({showDoc:true});
        this.setState({showImage:false});
        this.setState({showPdf:false})
          }else{
              alert("pls upload file");
          }
  }
  convertToPdf=()=>{
      if(this.state.fileUploaded){
    this.setState({showPdf:true});
    this.setState({showImage:false});
    this.setState({showDoc:false});
      }else{
          alert("pls upload file");
      }
  }
  convertToImage=()=>{
    if(this.state.fileUploaded){
   this.setState({showImage:true});
   this.setState({showPdf:false});
   this.setState({showDoc:false});
}else{
    alert("pls upload file");
}
  }
  convertToText=()=>{

  }
  render() {
    return (
        <>
      <div>
        <form encType="multipart/form-data" >
          <div className="col-auto align-items-center">
            <div className="col-sm-10">
              <div className="form-group col-md-3 mb-2">
                <label className="h4" htmlFor="customFile">
                  Try Demonstration |
                </label>
              </div>
              <div className="form-group col-md-3 mb-2">
                <input name="ignorecache" type="hidden" value="true"></input>
                <input name="viewtype" type="hidden" value="hview"></input>
                <input name="responsetype" type="hidden" value="html"></input>
                <input name="inputfile" type="hidden" value=""></input>
                <input
                  id="filter_app"
                  name="filter"
                  type="hidden"
                  value="doc-pdf"
                ></input>
                <input
                  accept="application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/ms-excel,
					         application/ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.presentation,
					         application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                  type="file"
                  className="form-control-file h5"
                  id="customFile"
                  name="attachment"
                  onChange={this.fileChange}
                  /*     onChange={this.uploadFile(this.value)} */
                ></input>
              {/*   <input type="submit"></input> */}
              </div>
              <input className="p-1  h5" type="button" value="View Uploaded" onClick={this.showFileLoaded}></input> 
              <input className="p-1 pr-2 ml-5  h5"  type="button" value="PDF" onClick={this.convertToPdf}></input>
              <input className="p-1 ml-5  mr-2 m-1 h5"  type="button" value="IMAGE" onClick={this.convertToImage}></input>
              
             
            </div>
          </div>
        </form>
        <details className="h6 pt-4">
          <summary>File Formats</summary>
          <p> Supported formats: Word, PowerPoint, Excel</p>
        </details>
      </div>
      <hr></hr>
      <div id="show-view" className="container" >
      { this.state.showImage 
        ? 
        <>
        <a href={image} className="ml-2" download>
         <i className="h4">Download File</i></a>
        <FileViewer
        fileType='png'
        filePath={image}
        /> 
        </>
        : null}
        { this.state.showPdf 
            ? 
            <>
            <a href={pdf} className="ml-2" download>
            <i className="h4">Download File</i></a>
            <FileViewer
            fileType='pdf'
            filePath={pdf}
            />
           
            </>
            : null}
            { this.state.showDoc 
                ? 
                
                
                <FileViewer
                fileType='docx'
                filePath={Doc}
                /> 
                
               
                : null}

      </div>
      </>
    );
  }
}

export default Converter;
