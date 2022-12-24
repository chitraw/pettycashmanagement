import React from "react";
import Navbar from "../components/navbar"
import './table.css';
class Table extends React.Component {
    render(){

        return <div> 
            <navbar></navbar>

        <div className="container">
        <h1> Table</h1>
        <table>
            <thead>
            <tr>
                <th>SL NO     </th>
                <th>Discription       </th>
                <th>Amount          </th>
                <th>Credit            </th>
                <th>Dedit          </th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td/>
                    <td/>
                    <td/>
                    <td/>
                </tr>
                <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
            </tbody>
        </table>
    </div>
    </div>
};

    

}

export default Table;