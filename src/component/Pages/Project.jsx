import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomDateInput from "../CustomDateInput";

function Project() {
  return (
    <>
      <div className="mt-2">
        <div className="container-fluid">
          <div className="row mt-2">
            <div className="col-sm-12">
              <h6>Project List</h6>
            </div>
          </div>
          {/* Title End */}
          <div className="row mb-3">
            <div className="col-sm-12">
              <div className="box_card">
                {/* Start */}
                <div className="form-group row mb-2">
                  <div className="col-sm-12">
                    <div className="main_agent_form">
                      <div className="one">
                        <input
                          type="text"
                          id="txtLoginEmail"
                          className="form-control"
                          placeholder="Search"
                        />
                      </div>
                      <div className="one">
                        <select className="form-select form-control">
                          <option value="0">--Project Type--</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                        </select>
                      </div>
                      <div className="one">
                        <select className="form-select form-control">
                          <option value="0">--Server--</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                        </select>
                      </div>
                      <div className="one">
                        <select className="form-select form-control">
                          <option value="0">--Payment Provider--</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                        </select>
                      </div>
                      <div className="one">
                        <select className="form-select form-control">
                          <option value="0">--Courier Provider--</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                        </select>
                      </div>
                      <div className="one">
                        <select className="form-select form-control">
                          <option value="0">--Status--</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                        </select>
                      </div>
                      <div className="one">
                        <select className="form-select form-control">
                          <option value="0">--Select Year--</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                        </select>
                      </div>

                      <div className="one gap-2">
                        <button className="btn-lg go-btn">Go</button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End */}
                <div className="dropdown-divider"></div>
                {/* Start */}
                <div className="form-group row mt-2">
                  <div className="col-sm-12">
                    <div className="box_card">
                      <div className="table-responsive">
                        <div className="new_table_design table-container">
                          <table className="table table-responsive table-bordered text-left table-hover">
                            <thead className="table-active">
                              <tr>
                                <th>#</th>
                                <th>Project Name</th>
                                <th>Project Type</th>
                                <th>Hosted Server</th>
                                <th>Status</th>
                                <th>Version</th>
                                <th>Project Owner</th>
                                <th>Admin</th>
                                <th>Form UAT Link</th>
                                <th>Form Live Link</th>
                                <th>Admin UAT Link</th>
                                <th>Admin Live Link</th>
                                <th>Design Link</th>
                                <th>Live On</th>
                                <th>Deactivated On</th>
                                <th>VAPT</th>
                                <th>Payment Provider</th>
                                <th>Coruier Provider</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>Institute of French AlgeriaIFAL</td>
                                <td>Appointment</td>
                                <td>Vfsforms</td>
                                <td>UAT</td>
                                <td>V1</td>
                                <td>VFS- Exam Center Allocation</td>
                                <td>undefined</td>
                                <td>
                                  <a
                                    href=""
                                    className="text-decoration-none"
                                    target="_blank"
                                  >
                                    UAT Link
                                  </a>
                                </td>
                                <td>
                                  <a
                                    href=""
                                    className="text-decoration-none"
                                    target="_blank"
                                  >
                                    Production Link
                                  </a>
                                </td>
                                <td>
                                  <a
                                    href=""
                                    className="text-decoration-none"
                                    target="_blank"
                                  >
                                    UAT Admin Link
                                  </a>
                                </td>
                                <td>
                                  <a
                                    href=""
                                    className="text-decoration-none"
                                    target="_blank"
                                  >
                                    Production Admin Link
                                  </a>
                                </td>
                                <td>
                                  <a
                                    href=""
                                    className="text-decoration-none"
                                    target="_blank"
                                  >
                                    Design Link
                                  </a>
                                </td>
                                <td>23-09-2025</td>
                                <td>--</td>
                                <td>--</td>
                                <td>--</td>
                                <td>--</td>
                                <td>
                                  <a
                                    href="javascript:void(0);"
                                    className="text-decoration-none"
                                  >
                                    Edit
                                  </a>{" "}
                                  |{" "}
                                  <a
                                    href="javascript:void(0);"
                                    className="text-decoration-none"
                                  >
                                    View
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
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

export default Project;
