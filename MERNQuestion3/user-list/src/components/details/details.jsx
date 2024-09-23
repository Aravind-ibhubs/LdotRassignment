import React,{useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import './details.css';

function Details() {
    const [loading, setLoading] = useState(false);
    const [userList, setList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        fetchData();
        setLoading(false);
    }, [])

    const fetchData = async() => {
        try {
        const apiCalling = await axios.get('http://localhost:9000/users/getAll');
        setList(apiCalling.data);
        } catch(err) {
        console.log(err.message);
        }
    }

    return (
        <div className="App">
          {loading ? <h1>Loading...</h1> : (
            <table>
              <caption>Employees List</caption>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
              </tr>
              {userList.map((eachUser) => (
                <tr key={eachUser.id}>
                  <td>{eachUser.name}</td>
                  <td>{eachUser.email}</td>
                  <td>{eachUser.age}</td>
                </tr>
              ))}
            </table>
          )}
          <button onClick={() => navigate("/add")} className="table-container-button">Create new user</button>
        </div>
      );
}

export default Details;
