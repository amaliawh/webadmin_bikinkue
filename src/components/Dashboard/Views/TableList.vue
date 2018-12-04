<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <!-- <card> -->
            <template slot="header">
              
            </template>
            <div class="table-responsive">
              <h4>Tabel Pembeli</h4> 
              <table class=" table table-hover table-striped">
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Gender</th>
                  <th>Image</th>
                
                </tr>
                <tr v-for="satuPembeli in pembeli" :key="satuPembeli.id_pembeli">
                  <td>{{ satuPembeli.id_pembeli }}</td>
                  <td>{{ satuPembeli.username_pem }}</td>
                  <td>{{ satuPembeli.nama_pem }}</td>
                  <td>{{ satuPembeli.email_pem }}</td>
                  <td>{{ satuPembeli.notlp_pem }}</td>
                  <td>{{ satuPembeli.jenis_kelamin_pem }}</td>
                  <td> <img :src="satuPembeli.image_pem"> </td>
                </tr>

              </table>
            </div>
          <!-- </card> -->
        </div>

        <div class="col-12">
          <!-- <card> -->
            <template slot="header">
            </template>
            <div class="table-responsive">
              <h4>Tabel Penjual</h4>
              <table class=" table table-hover table-striped">
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Gender</th>
                  <th>Image</th>
                  <th>Nama Toko</th>
                </tr>
                <tr v-for="satuPenjual in penjual" :key="satuPenjual.id_penjual">
                  <td>{{ satuPenjual.id_penjual }}</td>
                  <td>{{ satuPenjual.username_pen }}</td>
                  <td>{{ satuPenjual.nama_pen }}</td>
                  <td>{{ satuPenjual.email_pen }}</td>
                  <td>{{ satuPenjual.notlp_pen }}</td>
                  <td>{{ satuPenjual.jenis_kelamin_pen }}</td>
                  <td> <img :src="satuPenjual.image_pen" width="100" height="100"> </td>
                  <td>{{ satuPenjual.nama_toko_pen }}</td>
                </tr>

              </table>
            </div>
          <!-- </card> -->
        </div>

        <div class="col-12">
          <!-- <card> -->
            <template slot="header">
            </template>
            <div class="table-responsive">
              <h4>Tabel Resep</h4>
              <table class=" table table-hover table-striped">
                
                <tr>
                  <th>ID</th>
                  <th>Nama Resep</th>
                  <th>Alat</th>
                  <th>Bahan</th>
                  <th>Cara Memasak</th>
                  <th>Porsi</th>
                  <th>Durasi</th>
                  <th>Image</th>
                  <th>Id Chef</th>
                  <th>Id Kategori Resep</th>
                  <th>Aksi</th>
                </tr>
                <tr v-for="satuResep in resep" :key="satuResep.id_resep">
                  <td>{{ satuResep.id_resep }}</td>
                  <td>{{ satuResep.nama_resep }}</td>
                  <td>{{ satuResep.alat }}</td>
                  <td>{{ satuResep.bahan }}</td>
                  <td>{{ satuResep.cara }}</td>
                  <td>{{ satuResep.porsi }}</td>
                  <td>{{ satuResep.durasi }}</td>
                  <td> <img :src="satuResep.image_resep" width="100" height="100"> </td>
                  <td>{{ satuResep.id_chef }}</td>
                  <td>{{ satuResep.id_kategori_resep }}</td>
                  <td>
                      <button v-b-modal.update class="btn btn-danger btn-fill float-right" @click="showItem(satuResep)">Edit</button>
                      <br>
                      <br>
                      <button @click="deleteResep(satuResep)" class="btn btn-danger btn-fill float-right">Delete</button>
                  </td>
                  
                </tr>

              </table>

             </div>
            <!-- </card>  -->
        </div>  
        <div> 
         <b-modal id="update" ref="modal" size="lg" title="Edit Resep" @ok="editResep(edit)"> 
              <form @submit.prevent ="editResep(edit)" style="padding:20px">
                 <div class="form-group">
                    <label for="nama_resep">Id Resep:</label>
                    <input type="text" class="form-control" :plain="true" id="id_resep" v-model="edit.id_resep">
                </div>
                <div class="form-group">
                    <label for="nama_resep">Nama Resep:</label>
                    <input type="text" class="form-control" :plain="true" id="nama_resep" v-model="edit.nama_resep">
                </div>
                <div class="form-group">
                    <label for="alat">Alat:</label>
                    <input type="text" class="form-control" :plain="true" id="alat" v-model="edit.alat">
                </div>
                <div class="form-group">
                    <label for="bahan">Bahan:</label>
                    <input type="text" class="form-control" :plain="true" id="bahan" v-model="edit.bahan">
                </div>
                <div class="form-group">
                    <label for="cara">Cara Memasak:</label>
                    <input type="text" class="form-control" :plain="true" id="cara" v-model="edit.cara">
                </div>
                <div class="form-group">
                    <label for="porsi">Porsi:</label>
                    <input type="text" class="form-control" :plain="true" id="porsi" v-model="edit.porsi">
                </div>
                <div class="form-group">
                    <label for="durasi">Durasi:</label>
                    <input type="text" class="form-control" :plain="true" id="durasi" v-model="edit.durasi">
                </div>
                <div class="form-group">
                    <label for="img_resep">Image Resep:</label>
                    <b-form-file id="img_resep" :plain="true" v-model="edit.image_resep" @change="onFileSelected"/>
                    <img :src="edit.image_resep" width="100" height="100">
                </div> 
                <div class="form-group">
                    <label for="durasi">Id Chef:</label>
                    <input type="number" class="form-control" :plain="true" id="id_chef" v-model="edit.id_chef">
                </div>
                <div class="form-group">
                    <label for="durasi">Id Kategori Resep:</label>
                    <input type="number" class="form-control" :plain="true" id="id_kategori_resep" v-model="edit.id_kategori_resep">
                </div>
              </form> 
            </b-modal>
         
      </div>

        <div class="col-12">
          <!-- <card> -->
            <template slot="header">
            </template>
            <div class="table-responsive">
              <h4>Tabel Transaksi</h4>
              <table class=" table table-hover table-striped">
                <tr>
                  <th>ID</th>
                  <th>Waktu</th>
                  <th>Status Pembayaran</th>
                  <th>Status Proses</th>
                  <th>Status Pengiriman</th>
                  <th>Status Penerimaan</th>
                  <th>Total</th>
                </tr>
                <tr v-for="satuTransaksi in transaksi" :key="satuTransaksi.id_detail_transaksi">
                  <td>{{ satuTransaksi.id_detail_transaksi }}</td>
                  <td>{{ satuTransaksi.waktu }}</td>
                  <td>{{ satuTransaksi.status_pembayaran }}</td>
                  <td>{{ satuTransaksi.status_proses }}</td>
                  <td>{{ satuTransaksi.status_pengiriman }}</td>
                  <td>{{ satuTransaksi.status_penerimaan }}</td>
                  <td>{{ satuTransaksi.total_harga_transaksi }}</td> 
                </tr>

              </table>
            </div>
          <!-- </card> -->
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import BootstrapVue from 'bootstrap-vue'
  Vue.use(BootstrapVue);
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import bModal from 'bootstrap-vue/es/components/modal/modal'
  import axios from 'axios'
  import LTable from 'src/components/UIComponents/Table.vue'
  import Card from 'src/components/UIComponents/Cards/Card.vue'
  
  export default {
    components: {
      LTable,
      Card
    },
    data() {
      return {
        pembeli: [],
        penjual: [],
        resep: [],
        edit:'',
        transaksi: [],
        // update: false,
        // edit: null,
      }
    },
    mounted() {
      this.getPembeli();
      this.getPenjual();
      this.getResep();
      this.readResep();
      this.getTransaksi();
    },
    methods: {
      onFileSelected(event) {
            this.selectedFile = event.target.files[0]
      },
      getPembeli() {
        axios.get('https://bikinkue.herokuapp.com/api/pembeli')
        .then( res => {
            this.pembeli = res.data.data;
            console.log("Data response: ", res.data.data);
        })
        .catch(function(error) {
            console.log("Error: ", error);
        });
      },
      getPenjual() {
        axios.get('https://bikinkue.herokuapp.com/api/penjual')
        .then( res => {
            this.penjual = res.data.data;
            console.log("Data response: ", res.data.data);
        })
        .catch(function(error) {
            console.log("Error: ", error);
        });
      },
      getResep() {
        axios.get('https://bikinkue.herokuapp.com/api/resep')
        .then( res => {
            this.resep = res.data.data;
            console.log("Data response: ", res.data.data);
        })
        .catch(function(error) {
            console.log("Error: ", error);
        })
      },
      getTransaksi() {
        axios.get('https://bikinkue.herokuapp.com/api/detailtransaksi')
        .then( res => {
            this.transaksi = res.data.data;
            console.log("Data response: ", res.data.data);
        })
        .catch(function(error) {
            console.log("Error: ", error);
        })
        
      },
      readResep() {
        axios.get('https://bikinkue.herokuapp.com/api/resep')
        .then(res=> {
          this.resep = res.data.data;
          console.log("Data response: ", res.data.data);
        })
      },
      showItem(satuResep) { 
            this.edits = true; 
            axios.get('https://bikinkue.herokuapp.com/api/resep/' + satuResep.id_resep) 
            .then(res => {  
                this.edit = res.data.data; 
                console.log(res.data.data); 
            }) 
            .catch(function(error) {
              console.log("Error: ", error);
            }); 
      },
      
    deleteResep(satuResep) {
      if(confirm("Hapus Resep?")) {
        axios.delete('https://bikinkue.herokuapp.com/api/resep/' + satuResep.id_resep, {
                    headers: {
                        Authorization: localStorage.getItem('api_token')
                    }
                })
        .then(res=> {
          let conf = alert("Resep berhasil dihapus");
          this.readResep();
          console.log("Data response: ", res.data.data);
        }).catch(function(error) {
              console.log("Error: ", error);
        });
      }
    },
    handleOk (evt) {
            evt.preventDefault()
            //  if (!this.edit.name) {
            //     alert('Lengkapi data resep anda')
            //  }
            //  else {
                this.editResep(satuResep)
            //  }
        },
    onFileSelected(event) {
            this.selectedFile = event.target.files[0]
        },
    editResep(satuResep) {
            const fd = new FormData();
            fd.append('_method', 'PUT');
            fd.append('id_resep', this.edit.id_resep);
            fd.append('nama_resep', this.edit.nama_resep);
            fd.append('alat', this.edit.alat);
            fd.append('bahan', this.edit.bahan);
            fd.append('cara', this.edit.cara);
            fd.append('porsi', this.edit.porsi);
            fd.append('durasi', this.edit.durasi);
            fd.append('image_resep', this.selectedFile, this.selectedFile.name);
            fd.append('id_chef', this.edit.id_chef);
            fd.append('id_kategori_resep', this.edit.id_kategori_resep);
            axios.post('https://bikinkue.herokuapp.com/api/resep/' + satuResep.id_resep, fd, {
                headers: {
                    'Authorization': localStorage.getItem('api_token'),
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(res => {
                let conf = alert(res.data.data);
                this.readResep();
            }).catch(function(error) {
              console.log("Error: ", error);
        });
        }
  }
}

</script>
