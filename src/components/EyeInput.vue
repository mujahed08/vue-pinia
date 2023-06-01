<script setup lang="ts">
import { ref } from 'vue';
import Eye from './icons/Eye.vue';


const { keyx, value } = defineProps<{
    keyx: string
    value: string
}>()

const flag = ref(false)
const reset = ()=> {flag.value = false}

const showToggle = ()=> {
    flag.value = !flag.value
    setTimeout(reset, 10000)
}

</script>
<template>
    <label>{{ keyx }} : </label>
    <input :type="flag ? 'text' : 'password'" v-bind:value="value" />
    <button class="btn btn-link" @click="showToggle"><i><Eye/></i></button>
</template>
