import React, {useEffect, useState} from "react"
import Axios from 'axios'

const  Header = () => {
  const [datas, setData] = useState([])
  const [docNo, setDocNo] = useState([])
  const [curr, setCurr] = useState([])
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

  
 

 }

 useEffect(getIntData, [])
    
    const da = new
  Date().toLocaleString();
    return (
        
        <div className = "pettycash" >
            <div className = "header_image">
                {/*<img src = {require ('./images.jpg')} alt = "Freedom Blog" />*/}
            </div>
            
            
            

             <h1> PETTY CASH MANAGEMENT   </h1> 
             <p>Date: {d}</p>
            <form classNmae = " drop_down">
            <label>
              Petty cash type:
            <select >
            <option value="">SELECT</option>
          {datas.map((data)=>{
            return(
              <option value={data.FM_ACCOUNT_CODE}>{data.FM_ACCOUNT_NAME}</option>
            )
          })
          }
            </select>
            </label>
           
            
            <label>
          Journel type:
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>
        
        
           

        <label>
          DOC NO:
          <select >
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
          System Voucher:
          <select >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>
       

        <label>
          Currency:
          <select >
          <option value="">SELECT</option>
         {curr.map((data)=>{
          return(
            <option value = {data.FM_CURR_CODE}> {data.FM_CURR_CODE} </option>
          )
         })

         }
         </select>
        </label>
       

        <label>
          Division:
          <select >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>
       
        <br></br>

        <label>
          Payment:
          <select >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>
      

        <label>
          Petty cash Cash Acc:
          <select >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>
    
        

        <label>
          PO no:
          <select >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>
       
        <br></br>


       <button>Submit</button>
        
        

        </form>
            </div>
            
             
        


      
    );
};

export default Header;
    