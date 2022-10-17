import React from 'react';
import  { FaTrash, FaPencilAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import axios from 'axios';

const baseURL = "http://localhost/contacts";
 
export default function List() {
  const [post, setPost] = React.useState(null);

   React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function updatePost() {
    axios
      .put(`${baseURL}/1`, {
        idContact: "11",
        email: "roger@gmail.com"
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  function createPost() {
    axios
      .post(baseURL, {
        title: "Hello World!",
        body: "This is a new post."
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  function deletePost() {
    axios
      .delete(`${baseURL}/1`)
      .then(() => {
        alert("Post deleted!");
        setPost(null)
        return "deleted"
      });
  }

  //if (!post) return "Echec"

    return (
      <div>
          <center>
          <h3> Liste des contacts </h3>
          </center>
          <table style={{ marginLeft: '100px', marginRight: '100px', width:"80%" }}>
    <tr>
    <th>idContact</th>
      <th>firstName</th>
      <th>lastName</th>
      <th>email</th>
      <th>Delete</th>
      <th>Modify</th>
    </tr>
    <button onClick={updatePost}>Update Post</button>
  </table>
  </div>
    );
  }
