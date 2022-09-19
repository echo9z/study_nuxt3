<template>
  <button @click="handleError">Clear errors</button>
</template>

<script setup>
defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>
