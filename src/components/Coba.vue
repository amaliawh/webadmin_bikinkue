<template>
    <form>
    <div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" v-model="username_adm" placeholder="Enter Username" name="username_adm" id="username_adm" required>

    <label for="psw"><b>Password</b></label>
    <input type="text" v-model="password_adm" placeholder="Enter Password" name="password_adm" id="password_adm" required>

    <button type="submit" @click="login()">Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember"> Remember me
    </label>
  </div>

  <div class="container" style="background-color:#f1f1f1">
    <button type="button" class="cancelbtn">Cancel</button>
    <span class="psw">Forgot <a href="#">password?</a></span>
  </div>
    </form>
</template>
<script>
import axios from 'axios'
export default {
    data() {
      return {
        username: null,
        password: null,
      }
    },
    mounted() {
      
    },
    methods: {
        login() {
            const rs = new FormData();
            rs.append('username_adm', this.username_adm);
            rs.append('password_adm', this.password_adm);
            axios.post('https://bikinkue.herokuapp.com/api/admin/login', rs)
            .then( res => {
                this.login = res.data;
                console.log("Data response: ", this.login);
            })
            .catch(function(error) {
                console.log("Error: ", error);
            })
        }
    }
}
 </script>
 <style>
    form {
    border: 3px solid #f1f1f1;
}

/* Full-width inputs */
input[type=text] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

/* Set a style for all buttons */
button {
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
}

/* Add a hover effect for buttons */
button:hover {
    opacity: 0.8;
}

/* Extra style for the cancel button (red) */
.cancelbtn {
    width: auto;
    padding: 10px 18px;
    background-color: #f44336;
}

/* Center the avatar image inside this container */

/* Avatar image */

/* Add padding to containers */
.container {
    padding: 16px;
}

/* The "Forgot password" text */
span.password_adm {
    float: right;
    padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
    span.password_adm {
        display: block;
        float: none;
    }
    .cancelbtn {
        width: 100%;
    }
} 
 </style>