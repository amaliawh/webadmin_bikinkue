<template>
<form>
    <div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>

    <button type="submit">Login</button>
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



    
