<template>
  <div>
    <div class="landing row d-flex justify-content-center">
      <nav class="navbar navbar-expand-lg">
        <div id="navbarSupportedContent">
          <form @submit.prevent="getFormValues">
            <div class="row">
              <label for="countryName" class="col-sm-5 col-form-label">Search Country Info: </label>
              <div class="col-sm-5">
                <input type="text" v-model="name" class="form-control" id="countryName" placeholder="Input country name">
              </div>
              <button @click.prevent="getFormValues()" class="col-sm-2 btn btn-primary">Search</button>
            </div>
          </form>
        </div>
      </nav>
    </div>
    <br>
    <div class="row d-flex justify-content-center">
      <div class="card" style="width: 35rem;">
        <img :src="info.flag" class="card-img-top" style="border:1px solid black"/>
        <div class="card-body">
          <h5 class="card-title">Country Name: {{info.name}}</h5> <br>
          <h6 class="card-subtitle mb-2 text-muted">Capital: {{info.capital}}</h6>
          <h6 class="card-subtitle mb-2 text-muted">Region: {{info.region}}</h6>
          <h6 class="card-subtitle mb-2 text-muted">SubRegion: {{info.subregion}}</h6>
          <h6 class="card-subtitle mb-2 text-muted">Population: {{info.population}}</h6>
          <h6 class="card-subtitle mb-2 text-muted">Demonym: {{info.demonym}}</h6>
          <h6 class="card-subtitle mb-2 text-muted">Nativ Name: {{info.nativeName}}</h6>
          <h6 class="card-subtitle mb-2 text-muted">Area: {{info.area}}</h6>
          <h6 class="card-subtitle mb-2 text-muted">Gini: {{info.gini}}</h6>
          <h6 class="card-subtitle mb-2 text-muted">Numeric Code: {{info.numericCode}}</h6>
          <h6 class="card-subtitle mb-2 text-muted">Cioc: {{info.cioc}}</h6>
          <span class="card-subtitle mb-2 text-muted">Calling Codes: </span>
            <span class="card-subtitle mb-2 text-muted" v-for="item in info.callingCodes" v-bind:key="item.id">
              +{{ item }}
            </span>
          <br><br>
          <h6 class="card-subtitle mb-2 text-muted">CURRENCIES </h6>
          <div v-for="item in info.currencies" v-bind:key="item.id" class="card-subtitle mb-2 text-muted">
            Code: {{ item.code }} <br>
            Symbol: {{item.symbol}} <br>
            Name: {{item.name}}
          </div>
          <br>
          <h6 class="card-subtitle mb-2 text-muted">Alpha2Code: {{info.alpha2Code}}</h6>
          <h6 class="card-subtitle mb-2 text-muted">Alpha3Code: {{info.alpha3Code}}</h6>
          <span class="card-subtitle mb-2 text-muted">Top Level Domain: </span>
            <span class="card-subtitle mb-2 text-muted" v-for="item in info.topLevelDomain" v-bind:key="item.id">
              {{ item }}
            </span>
          <br><br>
          <h6 class="card-subtitle mb-2 text-muted" style="text-decoration: underline;">TIME ZONES</h6>
            <div class="card-subtitle mb-2 text-muted" v-for="item in info.timezones" v-bind:key="item.id">
              {{ item }}
            </div>
          <br>
          <h6 class="card-subtitle mb-2 text-muted" style="text-decoration: underline;">BORDERS</h6>
            <div class="card-subtitle mb-2 text-muted" v-for="item in info.borders" v-bind:key="item.id">
              {{ item }}
            </div>
          <br>
          <h6 class="card-subtitle mb-2 text-muted" style="text-decoration: underline;">LANGUAGES</h6>
            <div class="card-subtitle mb-2 text-muted" v-for="item in info.languages" v-bind:key="item.id">
              iso639_1: {{ item.iso639_1 }} <br>
              iso639_2: {{item.iso639_2}} <br>
              Name: {{item.name}} <br>
              Native Name: {{item.nativeName}} <br>
            </div>
          <br>
          <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Landing',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    getFormValues () {
      this.$store.dispatch('loadInfo', this.name)
    }
  },
  computed: mapState([
    'info'
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
