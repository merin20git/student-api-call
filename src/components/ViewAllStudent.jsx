import React, { useState } from 'react'
import StudentNavbar from './StudentNavbar'

const ViewAllStudent = () => {
    const [studentData, changeStudent] = useState(
        [
            { "id": "1", "name": "John Doe", "roll_number": "R123", "admission_number": "A456", "college": "ABC College" },
             { "id": "2", "name": "Rahul R", "roll_number": "1203", "admission_number": "A67456", "college": "ABC College" }, 
             { "id": "3", "name": "Manu K", "roll_number": "35", "admission_number": "9792", "college": "SREE BUDHA COLLEGE " },
              { "id": "4", "name": "Navaneeth", "roll_number": "24", "admission_number": "8268", "college": "SBC" },
               { "id": "5", "name": "Madhav", "roll_number": "34524", "admission_number": "C342356", "college": "SBCE" },
                { "id": "6", "name": "nabeel", "roll_number": "23", "admission_number": "23cs", "college": "sbce" },
                 { "id": "7", "name": "Vineeth Sreenivasan", "roll_number": "78", "admission_number": "R5626", "college": "Nirmala College" },
                  { "id": "8", "name": "Mehthab N M", "roll_number": "35", "admission_number": "N869", "college": "Nirmala College of Arts & Science" },
                   { "id": "9", "name": "Aneez", "roll_number": "2", "admission_number": "8268", "college": "Nirmala College of Arts & Science" }, 
                   { "id": "10", "name": "Devadath Pb", "roll_number": "24", "admission_number": "4568", "college": "Nirmala Collage of Arts & Science" }, 
                   { "id": "11", "name": "Aromal A S", "roll_number": "18", "admission_number": "12356", "college": "Nirmala Collage of Arts & Science" }
        ]
    )
    return (
        <div>
            <StudentNavbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">id</th>                                   
                                    <th scope="col">name</th>
                                    <th scope="col">college</th>
                                    <th scope="col">roll no</th>
                                    <th scope="col">adm no</th>
                                </tr>
                            </thead>
                            <tbody>
                                {studentData.map(
                                    (value,index)=>{
                                        return(
                                        <tr>
                                    <td>{value.id}</td>
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