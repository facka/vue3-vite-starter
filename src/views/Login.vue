<template>
  <div class="grid justify-items-center pt-8">
    <div>LOGIN</div>
    <input v-model="userName" type="text" class="m-4 p-2 border rounded"/>
    <button @click="submit" class="p-2 text-white bg-indigo-600 rounded">Login</button>
    <span class="pt-4 text-gray-300">Available Users: test, admin</span>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useStore()

const userName = ref('')

function submit() {
  store.dispatch('login', userName.value)
  router.push({name: 'Home'})
}

</script>

<style>

</style>