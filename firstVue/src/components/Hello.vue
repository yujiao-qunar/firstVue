<template>
  <div class="hello">
    <h1 v-text='msg'></h1>
    <input type='text' v-model='newItem' @keyup.enter='addNew'/>
    <ul>
      <li v-for="item in items" v-bind:class='{finished: item.isFinished}' v-on:click='toggleFinish(item)'>{{ item.label }}</li>
    </ul>
    <hello-a mesgfromfather='youdie' v-on:child-tell-me-something="listenToMyBoy"></hello-a>
    <p>childs tell me: {{ childwords }}</p>
  </div>
</template>

<script>
import Store from './store'
import HelloA from './HelloA'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      childwords: '',
      items: [
        {
          label: 'coding',
          isFinished: false
        },
        {
          label: 'eating',
          isFinished: true
        }
      ],
      newItem: ''
    }
  },
  components: { HelloA },
  watch: {
    items: {
      handler: function (items) {
        Store.save(items)
      },
      deep: true
    }
  },
  methods: {
    toggleFinish: function (item) {
      item.isFinished = !item.isFinished
      console.log(item.label)
    },
    addNew: function () {
      this.items.push({
        label: this.newItem,
        isFinished: false
      })
      this.newItem = ''
    },
    listenToMyBoy: function (msg) {
      this.childwords = msg
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
</style>
