new Vue({
  el:'#app',
  // template: '#ejemplo',
  data: {
    types: [
      {name: "React", url: 'https://react-bootstrap.github.io/'},
      {name: "Vue.js", url: 'https://vuejs.org/'},
      {name: "Node.js", url: 'https://nodejs.org/es/'},
    ],
    show: false,
    message: "Planeta Huerto",
    image: "data:image/png;base64,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"
  },
  template: `
    <div>
    <template id="ejemplo">
    <div>
    <button type="button" @click="toggleShow()">Mostrar/Ocultar</button>
      <div v-if="show">
        <h2>{{ message }}</h2>
        
        <img v-bind:src="image"></img>
        <ul>
          <li v-for="(type, index) in types" :key="index">
            <a v-bind:href="type.url">{{ type.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </template>
    </div>
  `,
  methods:{
    toggleShow: function(){
      this.show = !this.show;
    }
  }
})

