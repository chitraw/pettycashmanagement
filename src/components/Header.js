import React from "react";

const  Header = () => {
    
    
    const d = new
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
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            </select>
            </label>
            <input type="submit" value="Submit" />
            
            <label>
          Journel type:
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
        
           

        <label>
          DOC NO:
          <select >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
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
        <input type="submit" value="Submit" />

        <label>
          Currency:
          <select >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>
        <input type="submit" value="Submit" />

        <label>
          Division:
          <select >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
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
        <input type="submit" value="Submit" />

        <label>
          Petty cash Cash Acc:
          <select >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
        

        <label>
          PO no:
          <select >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
        <br></br>


        
        
        

        </form>
            </div>
            
             
        


      
    );
};

export default Header;
    