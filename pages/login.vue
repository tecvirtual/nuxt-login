<script setup lang="ts">

definePageMeta({
    layout: "auth",
    auth: {
        unauthenticatedOnly: false,
        navigateAuthenticatedTo: '/protected',
    },
});

</script>

<template>
    <Login />
</template>

