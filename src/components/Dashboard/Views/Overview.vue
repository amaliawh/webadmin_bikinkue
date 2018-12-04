<template>
  <div class="content">
    <div class="container-fluid">
      <div>
      <apexcharts width="380" type="donut" :options="options" :series="series"></apexcharts>
      </div>

      <div class="row">
        <div class="col-md-8">
          <chart-card :chart-data="lineChart.data"
                      :chart-options="lineChart.options"
                      :responsive-options="lineChart.responsiveOptions">
            <template slot="header">
              <h4 class="card-title">Bikin Kue 2018</h4>
            </template>
            <template slot="footer">
              <div class="legend">
                <i class="fa fa-circle text-info"></i> Transaction
                <p style="font-size:110%;">Jumlah Transaksi: {{ resultCount }}</p>
              </div>
              <hr>
              <div class="stats">
                <i class="fa fa-history"></i> Updated 3 minutes ago
              </div>
            </template>
          </chart-card>
        </div>

      
        <div class="col-md-4">
          <chart-card :chart-data="pieChart.data" chart-type="Pie">
            <template slot="header">
              <h4 class="card-title">Users Statistics</h4>
            </template>
            <template slot="footer">
              <div class="legend">
                <p style="font-size:110%;">Jumlah Pembeli: {{ resultPem }}</p>
                <p style="font-size:110%;">Jumlah Penjual: {{ resultPen }}</p>
                <!-- <i class="fa fa-circle text-warning"></i> Unsubscribe -->
              </div>
              <hr>
              <div class="stats">
                <i class="fa fa-clock-o"></i> Campaign sent 2 days ago
              </div>
            </template>
          </chart-card>
        </div>
      </div>
    

       <!-- <div class="row">
        <div class="col-md-6">
          <chart-card
            :chart-data="barChart.data"
            :chart-options="barChart.options"
            :chart-responsive-options="barChart.responsiveOptions"
            chart-type="Bar">
            <template slot="header">
              <h4 class="card-title">2018 BikinKue</h4> 
            </template>
            <template slot="footer">
              <div class="legend">
                 <i class="fa fa-circle text-info"></i> Tesla Model S 
                <i class="fa fa-circle text-danger"></i> BMW 5 Series
              </div>
              <hr>
              <div class="stats">
                <i class="fa fa-check"></i> Data information certified
              </div>
            </template>
          </chart-card>
        </div>  -->

        <!-- <div class="col-md-6">
          <card>
            <template slot="header">
               <h5 class="title">Tasks</h5>
              <p class="category">Backend development</p> 
            </template>
            <l-table :data="tableData.data"
                     :columns="tableData.columns">
              <template slot="columns"></template>

              <template slot-scope="{row}">
                <td>
                  <Checkbox v-model="row.checked"></Checkbox>
                </td>
                <td>{{row.title}}</td>
                <td class="td-actions text-right">
                  <button type="button" class="btn-simple btn btn-xs btn-info" v-tooltip.top-center="editTooltip">
                    <i class="fa fa-edit"></i>
                  </button>
                  <button type="button" class="btn-simple btn btn-xs btn-danger" v-tooltip.top-center="deleteTooltip">
                    <i class="fa fa-times"></i>
                  </button>
                </td>
              </template>
            </l-table>
            <div class="footer">
              <hr>
              <div class="stats">
                <i class="fa fa-history"></i> Updated 3 minutes ago
              </div>
            </div>
          </card>

        </div> -->
        
        <p style="font-size:120%;">Jumlah Pendapatan : Rp {{ totalItem }}</p>
      </div>
    </div>
</template>
<script>
  import ChartCard from 'src/components/UIComponents/Cards/ChartCard.vue'
  import StatsCard from 'src/components/UIComponents/Cards/StatsCard.vue'
  import Card from 'src/components/UIComponents/Cards/Card.vue'
  import LTable from 'src/components/UIComponents/Table.vue'
  import axios from 'axios'
  import Checkbox from 'src/components/UIComponents/Inputs/Checkbox.vue'

  export default {
    components: {
      Checkbox,
      Card,
      LTable,
      ChartCard,
      StatsCard
    },
    data () {
      return {
        pembeli: [],
        penjual: [],
        responseData: [],
        responsePem: [],
        responsePen: [],
        editTooltip: 'Edit Task',
        deleteTooltip: 'Remove',
        pieChart: {
          data: {
            labels: ['91%', '9%'],
            series: [91, 9]
          }
        },
        lineChart: {
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov','Dec'],
            series: [
              [0, 0, 0, 0, 0, 0, 0, 0, 0 , 0, 0, 13]
            ]
          },
          options: {
            low: 0,
            high: 800,
            showArea: false,
            height: '245px',
            axisX: {
              showGrid: false
            },
            lineSmooth: true,
            showLine: true,
            showPoint: true,
            fullWidth: true,
            chartPadding: {
              right: 50
            }
          },
          responsiveOptions: [
            ['screen and (max-width: 640px)', {
              axisX: {
                labelInterpolationFnc (value) {
                  return value[0]
                }
              }
            }]
          ]
        },
        barChart: {
          // data: {
          //   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          //   series: [
          //     [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
          //     [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
          //   ]
          // },
          options: {
            seriesBarDistance: 10,
            axisX: {
              showGrid: false
            },
            height: '245px'
          },
          responsiveOptions: [
            ['screen and (max-width: 640px)', {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc (value) {
                  return value[0]
                }
              }
            }]
          ]
        },
      }
    },
    methods: {
        getTransaksi() {
            axios.get('https://bikinkue.herokuapp.com/api/detailtransaksi')
            .then(res => {
            this.transaksi = res.data.data // this bit works fine
            this.responseData = res.data.data
            })
            .catch(function(error) {
              console.log("Error: ", error);
            })
        },
        getPembeli() {
            axios.get('https://bikinkue.herokuapp.com/api/pembeli')
            .then(res => {
            this.pembeli = res.data.data // this bit works fine
            this.responsePem = res.data.data
            })
            .catch(function(error) {
              console.log("Error: ", error);
            })
        },
        getPenjual() {
            axios.get('https://bikinkue.herokuapp.com/api/penjual')
            .then(res => {
            this.penjual = res.data.data // this bit works fine
            this.responsePen = res.data.data
            })
            .catch(function(error) {
              console.log("Error: ", error);
            })
        },
    },
    mounted() {
      this.getTransaksi();
      this.getPembeli();
      this.getPenjual();
    },
    computed: {
      resultCount () {
        return this.responseData.length
      },
      resultPem () {
        return this.responsePem.length
      },
      resultPen() {
        return this.responsePen.length
      },
      totalItem() {
        let sum = 0;
        for(let i=0; i<this.transaksi.length; i++) {
          sum += (parseFloat(this.transaksi[i].total_harga_transaksi));
        }
        return sum;
      }
      
    }
    
  //   filters: {
  //       countResults: function(){
  //         return this.responseData.length;
  //   }
  // }
  }
</script>


