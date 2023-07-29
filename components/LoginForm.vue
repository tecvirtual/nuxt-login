<script setup lang="ts">

import { ref } from 'vue';

const username = ref('');
const password = ref('');

async function login() {
    return true;
}

</script> 
<template>
    <form>
        <!-- Email input -->
        <div class="form-outline mb-4">
            <input type="text" id="form1Example13" class="form-control form-control-lg" v-model="username" />
            <label class="form-label" for="form1Example13">Username</label>
        </div>

        <!-- Password input -->
        <div class="form-outline mb-4">
            <input type="password" id="form1Example23" class="form-control form-control-lg" v-model="password" />
            <label class="form-label" for="form1Example23">Password</label>
        </div>

        <div class="d-flex justify-content-around align-items-center mb-4">
            <!-- Checkbox -->
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                <label class="form-check-label" for="form1Example3"> Remember me </label>
            </div>
            <a href="#!">Forgot password?</a>
        </div>

        <!-- Submit button -->
        <button type="submit" class="btn btn-primary btn-lg btn-block" @click.prevent="login">Sign
            in</button>


    </form>
</template>