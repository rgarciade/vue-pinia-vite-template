<script  lang="ts">
import { key } from '@/status';
import { computed, defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    const store = useStore(key)
    console.log('store',store)
    const count = ref(0)
    //const double = computed(() => count.value * 2)

    const changeText = () => {
      store.dispatch('changeTextoPrueba', 'new text')
    }
    return {
      count,
      store,
      textoPrueba: store.state.textoPrueba,
      changeText
    }
  }
})
</script>

<template>
  <h1>aa{{ msg }}</h1>
  <h1>aa{{ store.state.textoPrueba }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  <button @click="changeText">cambia texto</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
