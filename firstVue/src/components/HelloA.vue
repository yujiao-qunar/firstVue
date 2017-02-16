<template>
  <div class="hello">
    <h1 v-text='msg'></h1>
    <button v-on:click="onClickMe">click</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'hello from component HelloA'
    }
  },
  props: ['mesgfromfather'],
  methods: {
    onClickMe: function () {
      console.log(this.mesgfromfather)
      this.$emit('child-tell-me-something', this.msg)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.finished {
  text-decoration: underline;
}
.hello {
  color: #42b983;
}
</style>
