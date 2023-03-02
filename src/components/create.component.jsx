import './style/comment.css'
import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Banner from './banner.component'


export default class Create extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault();
        const inputField = document.getElementById('comment-input');
        if (inputField.value == '') {
            console.log("Input field is empty")
            return;
        }
        const inputValue = inputField.value;
        const data = { 
            "picture": "none",
            "username": "User",
            "content": inputValue,
            "date": new Date() 
        };

        axios.post("http://localhost:27017/posts/add", data)
          .then(response => {
            console.log(response)
            location.reload();
          })
          .catch(error => {
            console.log(error)
          });
      }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='comment-wrapper'>
                <div className='user'>
                    <a className='profile-pic' href='#'><img src='src/Assets/profilepic.jpg'/></a>
                    <span className='username'>{/* TODO: Person username*/}@User</span>
                </div>
                <div className="comment">
                    <input type="text" id="comment-input" className="input-comment" placeholder="This is your comment"></input>
                </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

