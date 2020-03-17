Vue.component('movie-card', {
  props: ['image', 'title'],
  template:`
    <div>
      <img width= 200px v-bind:src="image" v-bind:alt="title"/>
      <h2>{{ title }}</h2>
    </div>
  `
})

new Vue({
  el:'#app2',
  data:{
    movies: [
      {title:'La Vaquilla', image: 'https://4.bp.blogspot.com/-Wx0qufctQZU/XGghOkfj6DI/AAAAAAAAIq8/vHRsN06M3DA8uhmM8wX8qhH09Ujl3lReQCK4BGAYYCw/s1600/La-vaquilla-cartel.jpg'},
      {title:'Yo hice a Roque III', image: 'https://es.web.img3.acsta.net/pictures/15/11/06/08/33/238750.jpg'},
      {title:'El liguero magico', image: 'https://cloud10.todocoleccion.online/cine-peliculas-vhs/tc/2019/03/27/03/106599899_1553653122D37EB4E6.jpg'}

    ],
    message: "Lista de peliculas"
  },
  template:`
  <div>
    <h1>{{ message }}</h1>
    <movie-card v-for="(movie, index) in movies" :key="index"
      v-bind:title= "movie.title"
      v-bind:image= "movie.image"
      ></movie-card>
  </div>
      `,
})
