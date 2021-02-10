import React, { Component } from "react";
import axios from "axios";
class Converter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  uploadFile = (e) => {
    let file = e.target.files[0];
    console.log(file);
    console.log("FileName-->"+file.name+ "fileType-->"+file.type);

    if (file) {
      let data = new FormData();
      data.append("file", file);
      axios
        .post(
          "https://docsconverter.demo.thinkfree.com/hermes/convert.hs",
          data
        )
        .then((response) => {
          console.log(response);
        });
    }
  };
  render() {
    return (
      <div>
        <form>
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
                  onChange={this.uploadFile}
                ></input>
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
