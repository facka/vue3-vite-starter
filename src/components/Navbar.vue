<template>
  <nav v-if="name" class="bg-gray-300 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <a href="#" class="flex">
        <span class="self-center text-lg font-semibold whitespace-nowrap dark:text-white">Example App</span>
      </a>
      <div class="w-full md:block md:w-auto">
        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <li>
            <router-link :to="{ name: 'Home'}">
              <a v-if="$route.name == 'Home'" href="#" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
              <a v-else href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
            </router-link>
          </li>
          <li>
            <router-link v-if="isAdmin" :to="{ name: 'Admin'}">
              <a v-if="$route.name == 'Admin'" href="#" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Admin</a>
              <a v-else href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Admin</a>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="w-full flex md:w-auto p-2 items-center">
        <span class="p-2">{{ name }}</span>
        <button @click="logout" class="float-right p-2 text-white bg-indigo-600 rounded">Logout</button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { HomeIcon } from '@heroicons/vue/solid'
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const name = computed(() => {
  return store.state.user.name
})

const permissions = computed(() => {
  return store.state.user.permissions
})

console.log('permissions: ', permissions)

const isAdmin = computed(() => {
  console.log('isAdmin computed: ', store.state.user.permissions)
  return store.state.user.permissions ? store.state.user.permissions['admin'] : false
})

function logout() {
  store.dispatch('logout')
  router.push({name: 'Login'})
}

</script>

<style>

</style>