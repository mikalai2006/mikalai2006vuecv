<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>

<template>
  <div>
    About page
    <router-link to="/" title="Home"> Home </router-link>
  </div>
</template>
