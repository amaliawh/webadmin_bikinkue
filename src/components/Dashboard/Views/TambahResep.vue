<template>
    <form role="form" style="padding:20px">
    <div class="form-group">
        <label for="nama_resep">Nama Resep:</label>
        <input type="text" v-model="nama_resep" class="form-control" id="nama_resep">
    </div>
    <div class="form-group">
        <label for="alat">Alat:</label>
        <input type="text" v-model="alat" class="form-control" id="alat">
    </div>
    <div class="form-group">
        <label for="bahan">Bahan:</label>
        <input type="text" v-model="bahan" class="form-control" id="bahan">
    </div>
    <div class="form-group">
        <label for="cara">Cara Memasak:</label>
        <input type="text" v-model="cara" class="form-control" id="cara">
    </div>
    <div class="form-group">
        <label for="porsi">Porsi:</label>
        <input type="text" v-model="porsi" class="form-control" id="porsi">
    </div>
    <div class="form-group">
        <label for="durasi">Durasi:</label>
        <input type="text" v-model="durasi" class="form-control" id="durasi">
    </div>
    <div class="form-group">
        <label for="img_resep">Image Resep:</label>
        <input type="file" id="image_resep" @change="onFileSelected">
    </div>
    <input type="button" @click="addResep" class="btn btn-default" value="Add">
    <!-- <button @click="addResep"  class="btn btn-default">Simpan</button> -->
    <input type="button" @click="resetForm" class="btn btn-default" value="Batal">
    </form>
</template>

<script>
import axios from 'axios'
export default {
    data() {
      return {
        errors: [],
        selectedFile: null,
        nama_resep: null,
        alat: null,
        bahan: null,
        cara: null,
        porsi: null,
        durasi: null,
      }
    },
    mounted() {
      
    },
    methods: {
        onFileSelected(event) {
            this.selectedFile = event.target.files[0]
        },
        addResep() {
            console.log("tes");
            const rs = new FormData();
            rs.append('image_resep', this.selectedFile, this.selectedFile.name);
            rs.append('nama_resep', this.nama_resep);
            rs.append('alat', this.alat);
            rs.append('bahan', this.bahan);
            rs.append('cara', this.cara);
            rs.append('porsi', this.porsi);
            rs.append('durasi', this.durasi);
            axios.post('https://bikinkue.herokuapp.com/api/resep', rs)
            .then( res => {
                this.resep = res.data.data;
                console.log("Data response: ", res.data.data);
            })
            .catch(function(error) {
                console.log("Error: ", error);
            })
        },
        resetForm() {
            this.nama_resep = this.alat = this.bahan = 
            this.cara = this.porsi = this.durasi = this.image_resep='';
        }
    }
}
 </script>


    
