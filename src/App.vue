<template>
    {{ a }}
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
    name: 'App',
    setup() {
        const a = ref<string>('2222232');
        a.value = 1323;
        return {a};
    }
});
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
