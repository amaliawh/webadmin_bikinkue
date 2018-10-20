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
                  <th>Keranjang</th>
                </tr>
                <tr v-for="satuPembeli in pembeli" :key="satuPembeli.id_pembeli">
                  <td>{{ satuPembeli.id_pembeli }}</td>
                  <td>{{ satuPembeli.username_pem }}</td>
                  <td>{{ satuPembeli.nama_pem }}</td>
                  <td>{{ satuPembeli.email_pem }}</td>
                  <td>{{ satuPembeli.notlp_pem }}</td>
                  <td>{{ satuPembeli.jenis_kelamin_pem }}</td>
                  <td> <img :src="satuPembeli.image_pem"> </td>
                  <td>{{ satuPembeli.keranjang }}</td>
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
                  <td> <img :src="satuPenjual.image_pen"> </td>
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
                  <td><button type="submit" class="btn btn-info btn-fill float-right" @click.prevent="showItem(resep)">
          Edit</button><br><br><button type="submit" class="btn btn-danger btn-fill float-right" @click.prevent="deleteResep(resep)">
          Delete</button></td>
                  
                </tr>

              </table>

            </div>
          <!-- </card> -->
        </div>
        <!-- <div> -->
        <!-- <b-modal id="update" ref="modal" size="lg" title="Edit Resep" @ok="editResep(edit)"> 
              <form @submit.prevent ="editResep(edit)" style="padding:20px">
                <div class="form-group">
                    <label for="nama_resep">Nama Resep:</label>
                    <input type="text" class="form-control" id="nama_resep" v-model="edit.nama_resep">
                </div>
                <div class="form-group">
                    <label for="alat">Alat:</label>
                    <input type="text" class="form-control" id="alat" v-model="edit.alat">
                </div>
                <div class="form-group">
                    <label for="bahan">Bahan:</label>
                    <input type="text" class="form-control" id="bahan" v-model="edit.bahan">
                </div>
                <div class="form-group">
                    <label for="cara">Cara Memasak:</label>
                    <input type="text" class="form-control" id="cara" v-model="edit.cara">
                </div>
                <div class="form-group">
                    <label for="porsi">Porsi:</label>
                    <input type="number" class="form-control" id="porsi" v-model="edit.porsi">
                </div>
                <div class="form-group">
                    <label for="durasi">Durasi:</label>
                    <input type="time" class="form-control" id="durasi" v-model="edit.durasi">
                </div>
                <div class="form-group">
                    <label for="img_resep">Image Resep:</label>
                    <b-form-file id="img_resep" :plain="true" v-model="edit.image_resep" @change="onFileSelected"/>
                </div> 
              </form> 
            </b-modal>
          </div> -->

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
                <!-- <tr v-for="satuTransaksi in transaksi" :key="satuTransaksi.id_">
                  <td>{{ satuResep.id_resep }}</td>
                  <td>{{ satuResep.nama_resep }}</td>
                  <td>{{ satuResep.alat }}</td>
                  <td>{{ satuResep.bahan }}</td>
                  <td>{{ satuResep.cara }}</td>
                  <td>{{ satuResep.porsi }}</td>
                  <td>{{ satuResep.durasi }}</td>
                  <td> <img :src="satuResep.image_resep" width="100" height="100"> </td>  
                </tr> -->

              </table>
            </div>
          <!-- </card> -->
        </div>

      </div>
    </div>
  </div>
</template>
<script>
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
        update: false,
        edit: null,
      }
    },
    mounted() {
      this.getPembeli();
      this.getPenjual();
      this.getResep();
    },
    methods: {
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
      showItem(resep) { 
            this.update = true; 
            this.$axios.get('https://bikinkue.herokuapp.com/api/resep' + resep.id_resep) 
            .then(res => {  
                this.edit = res.data.data; 
                console.log(res.data.data); 
            }) 
            .catch(function(error) {
              console.log("Error: ", error);
            }); 
    },
  }
}
</script>
