<script setup lang="ts">
import EyeInput from '@/components/EyeInput.vue';
import usePasswordStore  from '@/stores/password';

import { storeToRefs } from 'pinia'

const store = usePasswordStore()
const { credentials, privateKey, cipher } = storeToRefs(store) 

console.log(privateKey)

const save = ()=> {
    console.log(privateKey)
    if(null != privateKey) {
        store.saveWithCrypto()
    }
}


</script>

<template>
  <main class="container-fluid">
    <h3>Password Manager</h3>
    <div class="row">
        <div class="col-xs-12 col-md-12 mb-2" >
            <label class="form-label">Cipher</label>
            <textarea v-model="cipher" rows="3" class="form-control"></textarea>
        </div>
        <div class="col-9 col-md-4 col-lg-4 mb-3">
            <label class="form-label">Private Key</label>
            <input type="password" v-model="privateKey" class="form-control"/>
        </div>
        <div class="col-3 col-md-2 d-flex">
            <div class="align-self-end">
                <button class="btn btn-primary mb-3" @click="save">Load</button>
            </div>
        </div>
    </div>
    <div class="row my-2">
        <div v-for="item in credentials" class="col-xs-12 col-sm-6 col-lg-4 mb-3" >
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{{item.name}}</h5>
                    <div class="col protected" v-for="keyval in item.list">
                        <EyeInput :keyx="keyval.key" :value="keyval.value"></EyeInput>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </main>
</template>

<style>
.protected span {
    margin: .5rem .5rem 0 .5rem;
    width: 5rem;
}
.protected label {
    font: 0.8em sans-serif;
    width: 7rem;
}

.protected input {
    width: 8rem;
}
</style>
