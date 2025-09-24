import React from "react";
import { Table } from "react-bootstrap-icons";
function ProjectLabel() {
  return (
    <>
      <div className="mt-2">
        <div className="container-fluid">
          <div className="row mt-2">
            <div className="col-sm-12">
              <h6 className="m-0 p-0">Project Label</h6>
            </div>
          </div>
          {/* Title End */}
          <div className="row mb-2">
            <div className="col-sm-12">
              <div className="">
                {/* Start */}
                <div className="form-group row mt-2">
                  <div className="col-sm-12">
                    <div className="box_card">
                      <div className="table-responsive">
                        <div className="table-container">
                          <table className="table table-bordered">
                            <thead className="table-active">
                              <tr>
                                <th>Project Name</th>
                                <th>Submission</th>
                                <th>Mail Queue</th>
                                <th>SF Cases</th>
                                <th>Mioot Cases</th>
                                <th>Label</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td
                                  rowSpan="3"
                                  className="text-center align-middle"
                                >
                                  Project Name
                                </td>
                                <td>
                                  <div className="slot_badge_icon">
                                    <span className="bg-secondary">100</span>
                                  </div>
                                </td>
                                <td>
                                  <div className="slot_badge_icon">
                                    <span className="bg-warning">100</span>
                                  </div>
                                </td>
                                <td>
                                  <div className="slot_badge_icon">
                                    <span className="bg-success">50</span>
                                  </div>
                                </td>
                                <td>
                                  <div className="slot_badge_icon">
                                    <span className="bg-danger">45</span>
                                  </div>
                                </td>
                                <td>
                                  <div className="slot_badge_icon">
                                    <span className="bg-secondary">100</span>
                                    <span className="bg-success">50</span>
                                    <span className="bg-danger">45</span>
                                    <span className="bg-warning">5</span>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>24/09/2025</td>
                                <td>24/09/2025</td>
                                <td>24/09/2025</td>
                                <td>24/09/2025</td>
                                <td>24/09/2025</td>
                              </tr>
                              <tr>
                                <td>24/09/2025</td>
                                <td>24/09/2025</td>
                                <td>24/09/2025</td>
                                <td>24/09/2025</td>
                                <td>24/09/2025</td>
                              </tr>

                              <tr>
                                <td
                                  rowSpan="3"
                                  className="text-center align-middle"
                                >
                                  Project Name
                                </td>
                                <td>
                                  <div className="slot_badge_icon">
                                    <span className="bg-secondary">100</span>
                                  </div>
                                </td>
                                <td>
                                  <div className="slot_badge_icon">
                                    <span className="bg-warning">100</span>
                                  </div>
                                </td>
                                <td>
                                  <div className="slot_badge_icon">
                                    <span className="bg-success">50</span>
                                  </div>
                                </td>
                                <td>
                                  <div className="slot_badge_icon">
                                    <span className="bg-danger">45</span>
                                  </div>
                                </td>
                                <td>
                                  <div className="slot_badge_icon">
                                    <span className="bg-secondary">100</span>
                                    <span className="bg-success">50</span>
                                    <span className="bg-danger">45</span>
                                    <span className="bg-warning">5</span>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>24/09/2025</td>
                                <td>24/09/2025</td>
                                <td>24/09/2025</td>
                                <td>24/09/2025</td>
                                <td>24/09/2025</td>
                              </tr>
                              <tr>
                                <td>24/09/2025</td>
                                <td>24/09/2025</td>
                                <td>24/09/2025</td>
                                <td>24/09/2025</td>
                                <td>24/09/2025</td>
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

export default ProjectLabel;
