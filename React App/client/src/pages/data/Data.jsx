import React, { useState } from 'react'
import "./Data.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import axios from "axios";
import Progress1 from '../../components/progress_bar/Progress1';
import FileDownload from "js-file-download";
const Data = () => 
{
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [isActive, setIsActive] = useState(true);


    const download1 = (e) => {
        e.preventDefault()
        axios({
          url: "http://localhost:2710/template1",
          method: "GET",
          responseType: "blob",
        }).then((res) => {
          console.log(res);
          FileDownload(res.data, "Template1.xlsx");
        })
     }

     const download2 = (e) => {
        e.preventDefault()
        axios({
          url: "http://localhost:2710/template2",
          method: "GET",
          responseType: "blob",
        }).then((res) => {
          console.log(res);
          FileDownload(res.data, "Template2.xlsx");
        })
     }

     const download3 = (e) => {
        e.preventDefault()
        axios({
          url: "http://localhost:2710/template3",
          method: "GET",
          responseType: "blob",
        }).then((res) => {
          console.log(res);
          FileDownload(res.data, "Template3.xlsx");
        })
     }
    const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };

    const uploadFile1 = async () => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);
        axios.post("http://localhost:2710/uploads", formData, {
            headers: { 'Content-Type': 'miltipart/form-data' },
            onUploadProgress: progressEvent => {
                if (file && !checked1) {
                    setUploadPercentage(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)));
                    setTimeout(() => setUploadPercentage(0), 2500);
                    setChecked1(old => !old);
                    alert("Confirm Upload : File Name-"+fileName+" ?"); 
                }
            }
        })
            .then(res => { // then print response status
                alert("File not selected");
                if (res.data.success === 1) {
                    console.log("File uploaded successfully");
                }

            })
    }
    function SaveAlert(){
         if(checked1 || checked2 | checked3){
             alert("Confirm: Save Changes ?");
         }

     }


     const uploadFile2 = async () => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);
        axios.post("http://localhost:2710/uploads", formData, {
            headers: { 'Content-Type': 'miltipart/form-data' },
            onUploadProgress: progressEvent => {
                if (file && !checked2) {
                    setUploadPercentage(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)));
                    setTimeout(() => setUploadPercentage(0), 2500);
                    setChecked2(old => !old);
                    alert("Confirm Upload : File Name-"+fileName+" ?"); 
                }
            }
        })
            .then(res => { // then print response status
                alert("File not selected");
                if (res.data.success === 1) {
                    console.log("File uploaded successfully");
                }

            })
    }


     const uploadFile3 = async () => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);
        axios.post("http://localhost:2710/uploads", formData, {
            headers: { 'Content-Type': 'miltipart/form-data' },
            onUploadProgress: progressEvent => {
                if (file && !checked3) {
                    setUploadPercentage(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)));
                    setTimeout(() => setUploadPercentage(0), 2500);
                    setChecked3(old => !old);
                    alert("Confirm Upload : File Name-"+fileName+" ?"); 
                }
            }
        })
            .then(res => { // then print response status
                alert("File not selected");
                if (res.data.success === 1) {
                    console.log("File uploaded successfully");
                }

            })
    }

    const changeBtn= event => {
        if(checked1 || checked2 || checked3){
            setIsActive(current => !current);
        }
      };

    return (
        <div className='home'>
            <Sidebar />
            <div className="home-container">
                <Navbar />
                <div className="items">
                    <div className="sub-title">
                        <p className='page-title'>Assesment Data</p>
                        <i className="fa-solid fa-book icon"></i> Formal Language and automata theory [CS2101]
                    </div>
                    <div className='tab'>
                        <table className="table table-striped">
                            <thead className="thead-dark">
                                <tr>
                                    <th className='Check'>Ch</th>
                                    <th className='Sr'>SR NO</th>
                                    <th className='AT'>Assesment Tool</th>
                                    <th className='data'>Add Data</th>
                                    <th className='Template'>Template</th>
                                    <th className='activity'>Activity</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input className='checkbox' type="checkbox" onChange={e => {}} checked={checked1}/></td>
                                    <td>1</td>
                                    <td>Multiple Choice Questions</td>
                                    <td><input type='file' onChange={saveFile} accept=".xlsx"></input></td>
                                    <td><button className='d-btn' onClick={(e)=>download1(e)}>Download <i className="fa-solid fa-download down-icon"></i></button></td>
                                    <td><button className='Savebtn' onClick={
                                       ()=>{
                                        uploadFile1();
                                       } }>Upload</button></td>
                                </tr>
                                <tr>
                                <td><input className='checkbox' type="checkbox" onChange={e => {}} checked={checked2}/></td>
                                    <td>2</td>
                                    <td>Theory Assignment</td>
                                    <td><input type='file' onChange={saveFile} accept=".xlsx"></input></td>
                                    <td><button className='d-btn' onClick={(e)=>download2(e)} >Download <i className="fa-solid fa-download down-icon"></i></button></td>
                                    <td><button className='Savebtn' onClick={
                                       ()=>{
                                        uploadFile2();
                                       } }>Upload</button></td>
                                </tr>
                                <tr>
                                <td><input className='checkbox' type="checkbox" onChange={e => {}} checked={checked3}/></td>
                                    <td>3</td>
                                    <td>Mid Term Exam</td>
                                    <td><input type='file' onChange={saveFile} accept=".xlsx"></input></td>
                                    <td><button className='d-btn' onClick={(e)=>download3(e)}>Download <i className="fa-solid fa-download down-icon"></i></button></td>
                                    <td><button className='Savebtn' onClick={
                                       ()=>{
                                        uploadFile3();
                                       } }>Upload</button></td>
                                </tr>
                                <tr>
                                <td><input className='checkbox' type="checkbox"/></td>
                                    <td>4</td>
                                    <td>End Term Exam</td>
                                    <td><input type='file' onChange={saveFile} accept=".xlsx"></input></td>
                                    <td><button className='d-btn'>Download <i className="fa-solid fa-download down-icon"></i></button></td>
                                    <td><button className='Savebtn'>Upload</button></td>
                                </tr>
                                <tr>
                                <td><input className='checkbox' type="checkbox"/></td>
                                    <td>5</td>
                                    <td>Oral examination</td>
                                    <td><input type='file' onChange={saveFile} accept=".xlsx"></input></td>
                                    <td><button className='d-btn'>Download <i className="fa-solid fa-download down-icon"></i></button></td>
                                    <td><button className='Savebtn'>Upload</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <Progress1 percentage={uploadPercentage} />
                    <div className='save-button'>
                        <button className= {isActive ? 'new-button' : 'active'} onClick={()=>{
                            SaveAlert();
                            changeBtn();
                        }}>
                            {isActive? 'Save Changes' : 'Changes Saved ✔'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Data;