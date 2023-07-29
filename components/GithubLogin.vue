<script setup lang="ts">
const { signIn } = useAuth()
</script>

<template>
  <button
  class="btn btn-primary btn-lg btn-block" style="background-color: #55acee"
    @click="signIn('github', { callbackUrl : '/' })"
  >
  
  <i class="fab fa-github me-2"></i>Continue with Git Hub
  </button>


  
</template>