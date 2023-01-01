import React, {useEffect, useState} from "react"
import Axios from 'axios'

const  Header = () => {
  const [datas, setData] = useState([])
  const [docNo, setDocNo] = useState([])
  const [curr, setCurr] = useState([])
  const [jtype, setJtype] = useState([])
  const [ptype, setPtype] = useState([])
  const [iptype, setIptype] = useState("")
  const [ijtype, setIjtype] = useState("")
  const [icurr, setIcurr] = useState("")
  const [mode, setMode] = useState("")
  const [acc, setAcc] = useState("")
  const [sl, setSl] = useState("")
  const [amt, setAmt] = useState("")
  const [bill, setBill] = useState("")
  const [crdr, setCrdr] = useState("")
  const [lamt, setLamt] = useState("")
  const [date, setDate] = useState("")
  const [desc, setDesc] = useState("")
  const [lacc, setLacc] = useState("")
  const [idoc, setIdoc] = useState("")
  const [msg, setMsg] = useState("")

 const d = new Date().toLocaleString();

 function getIntData(){
  Axios.get('http://localhost:3001/d').then((response)=>{
        

 setData(response.data.recordset)
 Axios.get('http://localhost:3001/getIntData').then((response)=>{
  
  setDocNo(response.data.recordset)
})
Axios.get('http://localhost:3001/getCurr').then((response)=>{
  setCurr(response.data.recordset)
})

})

Axios.get('http://localhost:3001/getType').then((response)=>{
  setJtype(response.data.recordset)
})

Axios.get('http://localhost:3001/getpType').then((response)=>{
  setPtype(response.data.recordset)
})



  
 

 }

 useEffect(getIntData, [])

 function myFunction(){
  setDate(d)
  console.log(iptype, ijtype, icurr,mode, acc, sl, amt, bill, crdr, lamt, date, idoc, desc, lacc);
    Axios.post('http://localhost:3001/insertData',{
      iptype : iptype,
      ijtype : ijtype,
      icurr : icurr,
      mode : mode,
      acc : acc,
      sl : sl,
      amt : amt,
      bill : bill,
      crdr : crdr,
      lamt: lamt,
      date : date,
      idoc : idoc,
      desc : desc,
      lacc : lacc,

    
    }).then(setMsg("Data inserted....."))

 }
    
    const da = new
  Date().toLocaleString();
  
    return (
        
        <div className = "pettycash" >
            <div className = "header_image">
                {/*<img src = {require ('./images.jpg')} alt = "Freedom Blog" />*/}
            </div>
            
            
            

             <h1> PETTY CASH MANAGEMENT   </h1> 
             <p>Date: {d}</p>
            
            <label>
              Petty cash type:
            <select onChange={(e)=>{
              setIptype(e.target.value)
            }} >
            <option value="">SELECT</option>
          {ptype.map((data)=>{
            return(
              <option value={data.FT_LEDGER_TYPE}>{data.FT_LEDGER_TYPE}</option>
            )
          })
          }
            </select>
            </label>
           
            
            <label>
          Journel type:
          <select onChange={(e)=>{
            setIjtype(e.target.value)
          }}>
            <option value="1">SELECT</option>
            {jtype.map((data)=>{
              return (
                <option value={data.FT_VOUCHER_CODE}>{data.FT_VOUCHER_CODE}</option>
              )
            })}
            
          </select>
        </label>
        
        
           

        <label>
          DOC NO:
          <select onChange={(e)=>{
            setIdoc(e.target.value)
          }} >
          <option value="">SELECT</option>
         {docNo.map((data)=>{
          return(
            <option value = {data.NEWDOC}>{data.NEWDOC}</option>
          )
         })}
          </select>
        </label>
       
        <br></br>

       
       

        <label>
          Currency:
          <select onChange={(e)=>{
            setIcurr(e.target.value)
          }} >
          <option value="">SELECT</option>
         {curr.map((data)=>{
          return(
            <option value = {data.FM_CURR_CODE}> {data.FM_CURR_CODE} </option>
          )
         })

         }
         </select>
        </label>
       

        
       
        <br></br>

        <label>
          Payment:
          <select onChange={(e)=>{
            setMode(e.target.value)
          }} >
            <option value="1">SELECT</option>
            <option value="CASH">CASH</option>
            
          </select>
        </label>
      

        <label>
          Petty cash Cash Acc:
          <select onChange={(e)=>{
            setAcc(e.target.value)
          }} >
            <option value="1">SELECT</option>
            {datas.map((data)=>{
            return(
              <option value={data.FM_ACCOUNT_CODE}>{data.FM_ACCOUNT_NAME}</option>
            )
          })
          }
          </select>
        </label>
    
        

        
       
        <br></br>

        <input onChange={(e)=>{
          setSl(e.target.value)
        }} type="text" placeholder="SL NO"></input>
        <input  type="text" placeholder="Ledger"></input>
        <input onChange={(e)=>{
          setAmt(e.target.value)
        }} type="number" placeholder="Debit Amount"></input>
        
        <input onChange={(e)=>{
          setBill(e.target.value)
        }} type="text" placeholder="Bill"></input>

        <input onChange={(e)=>{
             setDesc(e.target.value)
        }} type="text" placeholder="Description"></input>

        <hr></hr>

        <label>Dr/Cr</label>
        <select onChange={(e)=>{
          setCrdr(e.target.value)
        }} >
        <option value="CR">Cr</option>
        <option value="DR">Dr</option>
        </select>

        <label>Ledger</label>
        <select onChange={(e)=>{
            setLacc(e.target.value)
          }} >
            <option value="1">SELECT</option>
            {datas.map((data)=>{
            return(
              <option value={data.FM_ACCOUNT_CODE}>{data.FM_ACCOUNT_NAME}</option>
            )
          })
          }
          </select>
        <label>Amount</label>
        <input onChange={(e)=>{
          setLamt(e.target.value)
        }}  type="number" placeholder="Amount"></input>
        


       <button onClick={myFunction}>Submit</button>
        
        <hr></hr>

        <p>{msg}</p>

        
            </div>
            
             
        


      
    );
};

export default Header;
    