<template>
  <div class="home">
    <h2 ref="appTitleRef">{{appTitle}}</h2>
    <h3>{{counterData.title}}:</h3>
    <div>
      <button @click="descreaseCounter(2)" class="btn">--</button>
      <button @click="descreaseCounter(1)" class="btn">-</button>
      <span class="counter">{{counterData.count}}</span>
      <button @click="increaseCounter(1)" class="btn">+</button>
      <button @click="increaseCounter(2)" class="btn">++</button>
    </div>
    <p>This counter is {{oddOrEven}}</p>
    <div class="edit">
      <h4>Edit counter title:</h4>
      <input type="text" v-model="counterData.title" v-autofocus>
    </div>
  </div>
</template>

<!--
<script>
  export default {
    data() {
      return {
        counter: 0
      }
    },
    methods: {
      increaseCounter() {
        this.counter++;
      },
      descreaseCounter() {
        this.counter--;
      }
    }
  }
</script>
-->

<!--
<script>
import {ref} from 'vue'

export default {
  setup() {
    const counter = ref(0)
    const increaseCounter = () => {
      counter.value++
    }
    const descreaseCounter = () => {
      counter.value--
    }

    return {
      counter,
      increaseCounter,
      descreaseCounter
    }
  }
}
</script>
-->

<script setup>
import { nextTick, ref, reactive, computed, watch, onMounted } from 'vue'
import {vAutofocus} from '@/directives/vAutofocus'

const appTitle = 'My OK Counter App' //non-reactive
const appTitleRef = ref(null)
onMounted(()=>{
  console.log(`The app title is ${appTitleRef.value.offsetWidth}`)
})


const counterData = reactive({ //reactive
  count: 0,
  title: 'My Counter'
})
watch(() => counterData.count, (newCount ) => {
  if (newCount === 20) {
    alert('You made it to 20!')
  }
})
const oddOrEven = computed(()=>{
  if (counterData.count % 2 === 0) return 'even'
  return 'odd'
})
const increaseCounter = (amount) => {
  counterData.count += amount
  nextTick(()=>{
    console.log('do something when counter has updated in the dom')
  })

}
const descreaseCounter = (amount) => {
  counterData.count -= amount
}


</script>

<!--
<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  computed: {
    myComputedProperty() {
      return 'my result'
    }
  },
  watch: {
    count(newCount, oldCount) {
      if (newCount == 20) alert('Twenty!')
    }
  },
  mounted() {
    //
  },
  unmounted() {
    //
  },
  directives: {
    autofocus: {
      mounted(el) {
        el.focus()
      }
    }
  }
}
</script>
-->

<style>
.home {
  text-align: center;
  padding: 20px;
}
.btn, .counter {
  font-size: 40px;
  margin: 10px;
}
.edit {
  margin-top: 60px;
}
</style>