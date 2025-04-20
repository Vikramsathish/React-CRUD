import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Input, TextField, Card, CardContent } from "@mui/material";

function App() {
  // const [count, setCount] = useState(0)

  const [data, setData] = useState([]);
  const [form, setForm] = useState({ name: "", email: "" });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editIndex !== null) {
      const updatedData = [...data];
      updatedData[editIndex] = form;
      setData(updatedData);
      setEditIndex(null);
    } else {
      setData([...data, form]);
    }
    setForm({ name: "", email: "" });
  };

  const handleEdit = (index) => {
    setForm(data[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  return (
    <>
       <div style={{ padding: "24px", maxWidth: "400px", margin: "0 auto", backgroundColor: "white", borderRadius: "12px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
      <h2 style={{ fontSize: "20px", fontWeight: "bold" ,color: "black"}}>Add/Edit User</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          style={{ border: "1px solid #ccc", padding: "8px", width: "100%" }}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          style={{ border: "1px solid #ccc", padding: "8px", width: "100%" }}
        />
        <button type="submit" style={{ backgroundColor: "#007bff", color: "white", padding: "8px", width: "100%", borderRadius: "4px", border: "none" }}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </form>

      <h2 style={{ fontSize: "20px", fontWeight: "bold", marginTop: "16px",color: "black" }}>User List</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {data.map((item, index) => (
          <li key={index} style={{ display: "flex", color: "black", justifyContent: "space-between", alignItems: "center", padding: "8px", border: "1px solid #ddd", marginTop: "4px" }}>
            <span>{item.name} ({item.email})</span>
            <div>
              <button onClick={() => handleEdit(index)} style={{ backgroundColor: "#ffc107", padding: "4px 8px", marginRight: "4px", border: "none", cursor: "pointer" }}>Edit</button>
              <button onClick={() => handleDelete(index)} style={{ backgroundColor: "#dc3545", color: "white", padding: "4px 8px", border: "none", cursor: "pointer" }}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default App
