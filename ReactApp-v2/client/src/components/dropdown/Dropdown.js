import React from 'react'
import './Dropdown.scss'
import axios from "axios"
import FileDownload from 'js-file-download';
function Dropdown() {
  const download = (e) => {
    e.preventDefault()
    axios({
      url: "http://localhost:2710/result",
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      console.log(res);
      FileDownload(res.data, "Result.xlsx");
    })
 }
  return (
    <div className='red'>
        <p type='button' className='drop-item' onClick={(e)=>download(e)}>CO1-Report <i className="fa-solid fa-download down-icon d-ic"></i></p>
        <p type='button' className='drop-item'>CO2-Report <i className="fa-solid fa-download down-icon d-ic"></i></p>
        <p type='button' className='drop-item'>CO3-Report <i className="fa-solid fa-download down-icon d-ic"></i></p>
        <p type='button' className='drop-item'>CO4-Report <i className="fa-solid fa-download down-icon d-ic"></i></p>
        <p type='button' className='drop-item'>CO5-Report <i className="fa-solid fa-download down-icon d-ic"></i></p>
      </div>
  )
}

export default Dropdown