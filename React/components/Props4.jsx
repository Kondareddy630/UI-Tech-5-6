import React from 'react'

function Props4({myemployees}) {


  return (
    <div>

        <table className='table table-bordered table-striped shadow'>

            <thead className='table-dark'>
                <tr>
                    <th>Empno</th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Salary</th>
                </tr>

            </thead>

            <tbody>
                {
                   myemployees.map((e)=>
                    <tr>
                        <td>{e.empno}</td>
                        <td>{e.name}</td>
                        <td>{e.job}</td>
                        <td>{e.salary}</td>
                    </tr>
                )
                }

            </tbody>


        </table>


    </div>
  )
}

export default Props4