import React,{useState, useEffect} from "react";
import axios from 'axios';
import './App.css';

function details() {
    const [loading, setLoading] = useState(false);
    const [userList, setList] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetchData();
        setLoading(false);
    }, [])

    const fetchData = async() => {
        try {
        const apiCalling = await axios.get('http://localhost:9000/users/getByEmail');
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
        </div>
      );
}

export default details;
