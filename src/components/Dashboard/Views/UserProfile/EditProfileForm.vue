<template>
  <card>
    <h4 slot="header" class="card-title">Edit Profile</h4>
    <form>
      <div class="row">
        <div class="col-md-5">
          <fg-input type="text"
                    label="Company"
                    :disabled="true"
                    placeholder="Bikin Kue"
                    v-model="user.company">
          </fg-input>
        </div>
        <div class="col-md-3">
          <fg-input type="text"
                    label="Username"
                    placeholder="Bikin Kue"
                    v-model="user.username">
          </fg-input>
        </div>
        <div class="col-md-4">
          <fg-input type="email"
                    label="Username"
                    placeholder="bikinkue@gmail.com"
                    v-model="user.email">
          </fg-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <fg-input type="text"
                    label="First Name"
                    placeholder="Bikin"
                    v-model="user.firstName">
          </fg-input>
        </div>
        <div class="col-md-6">
          <fg-input type="text"
                    label="Last Name"
                    placeholder="Kue"
                    v-model="user.lastName">
          </fg-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <fg-input type="text"
                    label="Address"
                    placeholder="Keputih-Surabaya"
                    v-model="user.address">
          </fg-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <fg-input type="text"
                    label="City"
                    placeholder="Surabaya"
                    v-model="user.city">
          </fg-input>
        </div>
        <div class="col-md-4">
          <fg-input type="text"
                    label="Country"
                    placeholder="Indonesia"
                    v-model="user.country">
          </fg-input>
        </div>
        <div class="col-md-4">
          <fg-input type="number"
                    label="Postal Code"
                    placeholder="ZIP Code"
                    v-model="user.postalCode">
          </fg-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label>About Me</label>
            <textarea rows="5" class="form-control border-input"
                      placeholder="Here can be your description"
                      v-model="user.aboutMe">
              </textarea>
          </div>
        </div>
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-info btn-fill float-right" @click.prevent="updateProfile">
          Update Profile
        </button>
      </div>
      <div class="clearfix"></div>
    </form>
  </card>
</template>
<script>
  import Card from 'src/components/UIComponents/Cards/Card.vue'

  export default {
    components: {
      Card
    },
    data () {
      return {
        user: {
          company: 'Bikin Kue',
          username: 'BikinKue',
          email: '',
          firstName: 'Bikin',
          lastName: 'Kue',
          address: 'Surabaya, Indonesia',
          city: 'Surabaya',
          country: 'Indonesia',
          postalCode: '',
          aboutMe: `Bahan kue terpercaya, mudah, murah`
        }
      }
    },
    methods: {
      updateProfile () {
        alert('Your data: ' + JSON.stringify(this.user))
      }
    }
  }

</script>
<style>

</style>
