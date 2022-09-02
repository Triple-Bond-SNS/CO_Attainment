import React,{useState} from 'react'
import "./POs.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
const POs = () => {
  const [isActive, setIsActive] = useState(true);
  return (
    <div className='home'>
      <Sidebar />
      <div className="home-container">
        <Navbar />
        <div className="items">
          <div className="sub-title">
            <p className='page-title'>Program Outcomes</p>
            <i className="fa-solid fa-book icon"></i> Formal Language and automata theory [CS2101]
          </div>
        </div>
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">CO</th>
              <th scope="col">PO1</th>
              <th scope="col">PO2</th>
              <th scope="col">PO3</th>
              <th scope="col">PO4</th>
              <th scope="col">PO5</th>
              <th scope="col">PO6</th>
              <th scope="col">PO7</th>
              <th scope="col">PO8</th>
              <th scope="col">PO9</th>
              <th scope="col">PO10</th>
              <th scope="col">PO11</th>
              <th scope="col">PO12</th>
              <th scope="col">PSO1</th>
              <th scope="col">PSO2</th>
              <th scope="col">PSO3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td ><input className='Check' type="checkbox" /></td>
              <td >CO1</td>
              <td ><select className='option' name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td ><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
            </tr>
            <tr>
              <td><input className='Check' type="checkbox" /></td>
              <td>CO2</td>
              <td><select className='option' name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
            </tr>
            <tr>
              <td><input className='Check' type="checkbox" /></td>
              <td>CO3</td>
              <td><select className='option' name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
            </tr>
            <tr>
              <td><input className='Check' type="checkbox" /></td>
              <td>CO4</td>
              <td><select className='option' name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
            </tr>
            <tr>
              <td><input className='Check' type="checkbox" /></td>
              <td>CO5</td>
              <td><select className='option' name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
            </tr>
            <tr>
              <td><input className='Check' type="checkbox" /></td>
              <td>CO6</td>
              <td><select className='option' name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
              <td><select name="options" id="options">
                <option selected >-</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
              </select></td>
            </tr>
          </tbody>
        </table>
        <div className='save-button'>
          <button className={isActive ? 'new-button' : 'active'} onClick={() => {
          setIsActive(current => !current) }}>
            {isActive ? 'Save Changes' : 'Changes Saved ✔'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default POs