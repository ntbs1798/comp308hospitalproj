import { useEffect } from "react";
import "../../App.css";
import { useLocation, useNavigate } from "react-router";

const PatientClinicalData = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    console.log("data", props.clinicalData);
    console.log("id", props.id);
  }, []);

  const onAddNewClick = () => {
    navigate("/addPatientClinicalData", { state: { _id: location.state._id } });
  };

  const checkRiskRate = (data) => {
    navigate("/riskRateResult", { state: { data: data, _id: props.id } });
  };

  return (
    <div className="card-clinical" style={{ minWidth: "1000px" }}>
      <div className="row justify-content-center">
        <h2>
          Patients <span className="text-primary">Clinical Data</span>
        </h2>
      </div>
      <div className="row justify-content-end text-right">
        <div className="col-3 text-right">
          <button className="btn btn-primary" onClick={onAddNewClick}>
            Add New Clinical Data
          </button>
        </div>
      </div>
      {props.clinicalData && props.clinicalData.length !== 0 ? (
        <div className="row justify-content-center row-padding">
          <table className="table table-bordered table-responsive">
            <thead>
              <tr>
                <th>Age</th>
                <th>Sex</th>
                <th>CP</th>
                <th>trestbps</th>
                <th>chol</th>
                <th>fbs</th>
                <th>restecg</th>
                <th>thalach</th>
                <th>exang</th>
                <th>oldpeak</th>
                <th>slope</th>
                <th>ca</th>
                <th>thal</th>
                <th>Created On</th>
                <th>Check Risk</th>
              </tr>
            </thead>
            <tbody>
              {props.clinicalData.map((data, idx) => (
                <tr key={idx}>
                  <td>{data.age}</td>
                  <td>{data.sex}</td>
                  <td>{data.cp}</td>
                  <td>{data.trestbps}</td>
                  <td>{data.chol}</td>
                  <td>{data.fbs}</td>
                  <td>{data.restecg}</td>
                  <td>{data.thalach}</td>
                  <td>{data.exang}</td>
                  <td>{data.oldpeak}</td>
                  <td>{data.slope}</td>
                  <td>{data.ca}</td>
                  <td>{data.thal}</td>
                  <td>{new Date(Number(data.createdOn)).toDateString()}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        checkRiskRate(data);
                      }}
                    >
                      Check Risk
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="row justify-content-center">
          <h4>No Data Present</h4>
        </div>
      )}
    </div>
  );
};

export default PatientClinicalData;
