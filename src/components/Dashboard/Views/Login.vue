<template>
    <form role="form" style="padding:20px">
    <div class="form-group">
        <input type="email" v-model="email" class="form-control" placeholder="Username">
    </div>
    <div class="form-group">
        <input type="password" v-model="password" class="form-control" placeholder="password">
    </div>
    <button variant="primary" class="btn btn-default">Masuk</button>
    </form>
</template>

// <script>
// export default {
//     components: {

//     },
//     data() {
//       return {
//         admin: [],
//         update: false,
//         edit: null,
//       }
//     },
//     mounted() {
//       this.getAdmin();
//     },
//     methods: {
//       getAdmin() {
//         axios.get('https://bikinkue.herokuapp.com/api/admin')
//         .then( res => {
//             this.admin = res.data.data;
//             console.log("Data response: ", res.data.data);
//         })
//         .catch(function(error) {
//             console.log("Error: ", error);
//         });
//       },
//     }
// }
// </script>



    
