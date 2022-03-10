<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>

<template>
  <div>
    Home page
    <router-link to="/about" title="About"> About </router-link>
  </div>
</template>
