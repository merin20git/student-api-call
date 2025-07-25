import React, { useEffect, useState } from 'react'
import StudentNavbar from './StudentNavbar'
import axios from 'axios'

const ViewAllStudent = () => {
    const [studentData, changeStudent] = useState(
      {"status":"success","data":[]}
    )
    const fetchDatafromAPI=()=>{
        axios.get("http://18.144.111.41/view_all_students.php").then(
            (response)=>{
                changeStudent(response.data)
            }
        ).catch()

    }

    useEffect(()=>{fetchDatafromAPI()},[])

    return (
        <div>
            <StudentNavbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">name</th>
                                    <th scope="col">college</th>
                                    <th scope="col">roll no</th>
                                    <th scope="col">adm no</th>
                                </tr>
                            </thead>
                            <tbody>
                                {studentData.data.map(
                                    (value,index)=>{
                                        return(
                                        <tr>
                                    <td>{value.name}</td>
                                    <td>{value.college}</td>
                                    <td>{value.roll_number}</td>
                                    <td>{value.admission_number}</td>
                                </tr>
                                 ) }
                                )}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAllStudent