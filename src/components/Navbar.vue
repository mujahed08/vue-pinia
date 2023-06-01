<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
    <div class="container">
        <ul class="nav">
            <li class="nav-item">
                <!-- <a class="nav-link active" aria-current="page" href="#">Active</a> -->
                <RouterLink to="/" active-class="active" class="nav-link">Home</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/planning" active-class="active" class="nav-link">Planning</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/password" active-class="active" class="nav-link">Password</RouterLink>
            </li>
            
            <!-- <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
            </li> -->
        </ul>
    </div>
</template>

<style scoped>

h3 {
  font-size: 1.2rem;
}

.active {

    font-weight: bold;
}

</style>
