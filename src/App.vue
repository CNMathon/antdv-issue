<template>
  <Demo />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Demo from "./components/Demo";

export default defineComponent({
  name: "App",
  components: {
    Demo,
  },
});
</script>
