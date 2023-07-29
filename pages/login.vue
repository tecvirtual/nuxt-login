<script setup lang="ts">

definePageMeta({
    layout: "auth",
    auth: {
        unauthenticatedOnly: true,
        navigateAuthenticatedTo: '/protected',
    },
});

</script>

<template>
    <Login />
</template>

