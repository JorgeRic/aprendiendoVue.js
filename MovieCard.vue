<template>
  <div>
    <img width= 200px v-bind:src="image" v-bind:alt="title"/>
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
  export default{
    name:'movie-card',
    props: {
      image: String,
      title: String
    }
</script>

<style scoped>

  h2 {
    color: red;
  }
</style>