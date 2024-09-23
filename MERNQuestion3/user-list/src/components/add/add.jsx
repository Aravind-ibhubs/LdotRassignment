import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import "./add.css";

const Add = () => {
    const [name,  setName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();

    const navigate = useNavigate();
    const handleAddition = async(e) => {
        e.preventDefault();

        const newUser = {
            name : name,
            email : email,
            age : age
        }

        try {
            const resPost = await fetch("http://localhost:9000/users/newUser", {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify(newUser),
            });

            if (!resPost.ok) {
                throw new Error("Network Error");
            }
        } catch (error) {
            console.log(error);
        }

        setName("");
        setEmail("");
        setAge("");
        navigate("/");
    }

    return (
        <div className="user-container">
            <form className="form-container" onSubmit={(e) => handleAddition(e)}>
                <h3 className="user-heading">Add your user</h3>
                <div className="form-input-container">
                    <label>Name :</label>
                    <input 
                        type="text" 
                        placeholder="Pls enter name" 
                        value={name} 
                        className="form-container-input" 
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-input-container">
                    <label>Email :</label>
                    <input 
                        type="email" 
                        placeholder="Pls enter email" 
                        value={email} 
                        className="form-container-input" 
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-input-container">
                    <label>Age :</label>
                    <input 
                        type="number" 
                        placeholder="Pls enter age" 
                        value={age} 
                        className="form-container-input" 
                        onChange={(e) => setAge(e.target.value)}
                        required
                    />
                </div>
                <input type="submit" className="form-input-submit"/>
            </form>
        </div>
    )
}

export default Add;
