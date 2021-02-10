import React, { Component } from "react";
import axios from "axios";
class Converter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ignorecache: true,
      viewtype: "hview",
      responsetype: "html",
      inputfile: "",
      filter: "doc-pdf"
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
  handleSubmit = (event) => {
      //console.log(this.state);
    event.preventDefault();
    console.log("handle submit");
    axios('https://docsconverter.demo.thinkfree.com/hermes/convert.hs', {
        method: 'post',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        body: {
          ignorecache: this.state.ignorecache,
          viewtype: this.state.viewtype,
          responsetype: this.state.responsetype,
          inputfile: this.state.inputfile,
          filter: this.state.filter,
          attachment: document.querySelector('#customFile')
        }
      })
      .then((response) => {
        //document.getElementsByTagName('body')[0].innerHTML(response.getElementsByTagName('a')[0]);
        console.log(response);
      }).catch((err)=>{
          console.log(err);
      });
  };
  render() {
    return (
      <div>
        <form encType="multipart/form-data">
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
              /*     onChange={this.uploadFile(this.value)} */
                ></input>
                <input type="submit" onClick={this.handleSubmit}></input>
              </div>
            </div>
          </div>
        </form>
        <details className="h6 pt-4">
          <summary>File Formats</summary>
          <p> Supported formats: Word, PowerPoint, Excel</p>
        </details>
      </div>
    );
  }
}

export default Converter;
