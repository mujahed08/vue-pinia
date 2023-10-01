<script setup lang="ts">
import useNoteStore from '@/stores/note';
import { storeToRefs } from 'pinia';


const store = useNoteStore()
const { notes } = storeToRefs(store) 

store.getNotesFromCipher()

</script>

<template>
  <main class="container-fluid">
    <h3>Notes</h3>
    <div class="row my-2">
        <div v-for="item in notes" class="col-xs-12 col-sm-6 col-lg-4 mb-3" >
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{{ item.title }}</h5>
                    <div class="col">
                        <p class="pre-formatted">{{ item.content }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </main>
</template>
<style>
.pre-formatted {
  white-space: pre;
}
</style>