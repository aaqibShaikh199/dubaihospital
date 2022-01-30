import React, { useState, useEffect, useContext } from "react";
import { Table } from "react-bootstrap";
import moment from "moment"
import "./excel.css"
import axios from "axios";
import Loading from "../components/Loading/Loading";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

function Test() {
  const [doctor, setDoctor] = useState("");
  const [patient, setPatient] = useState("");
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const getroom = async () => {
      setloading(true);
      const res = await axios.get(
        "https://doctorappapi.herokuapp.com/api/doctor"
      );
      setDoctor(res.data);

      const respo = await axios.get(
        "https://doctorappapi.herokuapp.com/api/patient"
      );
      setPatient(respo.data);
      console.log(respo.data);

      setloading(false);
    };
    getroom();
  }, []);

  return (
    <div
      className="alldatabase"
      id="userreg"
      style={{ marginTop: "50px", padding: "50px" }}
    >
      {loading ? (
        <Loading />
      ) : (
        <div>
          <ReactHTMLTableToExcel
            id="test-table-xls-button"
            className="download-table-xls-button"
            table="table-to-xls"
            filename="tablexls"
            sheet="tablexls"
            buttonText="Download as XLS"
          />
          <table id="table-to-xls">
            <tr>
            <th>Sr No.</th>
                    <th>Patient name</th>
                    <th>Age</th>
                    <th>Phone</th>
                    <th>Doctor</th>
                    <th>Date</th>
                    <th>Slot</th>
                    <th>Department</th>
                    <th>Message</th>
                    <th>Email</th>
                    <th>Booked at</th>
            </tr>
            {
                    patient.map((data,index)=>(
                            <tr key={data._id}>
                                <td>{++index}</td>
                                <td>{data.name}</td>
                                <td>{data.age}</td>
                                
                                <td>{data.phone}</td>
                                <td>{data.doctorname}</td>
                                <td>{data.date}</td>
                                <td>{data.slot}</td>
                                <td>{data.departmentname}</td>
                                
                                
                                <td>{data.message}</td>
                                <td>{data.email}</td>
                                <td>{moment(data.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</td>
                                
                            </tr>
                        ))
                    }
          </table>
        </div>
      )}
    </div>
  );
}

export default Test;
