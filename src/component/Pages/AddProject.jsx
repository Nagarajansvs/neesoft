import React from "react";
import { Table } from "react-bootstrap-icons";
function AddProject() {
  return (
    <>
      <div className="mt-2">
        <div className="container-fluid">
          <div className="row mt-2">
            <div className="col-sm-12">
              <h6 className="m-0 p-0">Add Project</h6>
            </div>
          </div>
          {/* Title End */}
          <div className="row mb-2">
            <div className="col-sm-12">
              <div className="">
                {/* Start */}
                <div className="form-group row mt-2">
                  <div className="col-sm-12">
                    <div className="box_card"></div>
                  </div>
                </div>
                {/* End */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProject;
