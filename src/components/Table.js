import  Axios  from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar"
import './table.css';
function Table() {
    const [trans, setTrans] = useState([])
        const [crsum, setCrsum] = useState([])
        const [drsum, setDrsum] = useState([])
      function getData(){
         Axios.get('http://localhost:3001/gettrans').then((response)=>{
            setTrans(response.data.recordset)
         })

         Axios.get('http://localhost:3001/getsumcr').then((response)=>{
            setCrsum(response.data.recordset)
         })
         Axios.get('http://localhost:3001/getsumdr').then((response)=>{
            setDrsum(response.data.recordset)
         })}

         useEffect(getData, [])

        return (
       <div>
       
     {crsum.map((data)=>{
        return (
            <p>Total Credit: {data.TOTAL}</p>
        )
     })}
     {drsum.map((data)=>{
        return (
            <p>Total Debit: {data.TOTAL}</p>
        )
     })}

        <table>
  <tr>
    <th>Amount</th>
    <th>Description</th>
    <th>CR/DR</th>
    
  </tr>
  {trans.map((data)=>{
    return (
        <tr>
    <td>{data.FT_VOUCHER_AMOUNT}</td>
    <td>{data.FT_VOUCHER_REPORT_DESCRIPTION}</td>
    <td>{data.FT_VOUCHER_CR_DR}</td>
  </tr> 
    )
  })}
  
 
</table>
        
    
    
       </div>
        )
};

    



export default Table;