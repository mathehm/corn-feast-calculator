<template>
  <div class="container">
    <h1 class="container__title">Project to train tests with Vitest</h1>
    <p class="container__result">{{ count }}</p>
    <input v-model="input" class="container__input" type="number" />
    <div class="container__buttons">
      <button class="addition" @click="count = count + input">+</button>
      <button class="subtraction" @click="count = count - input">-</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const count: Ref<number> = ref(0)
const input: Ref<number> = ref(1)
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  display: block;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 3rem;
  border: 2px solid blueviolet;
  border-radius: 1rem;

  &__title {
    margin-bottom: 3rem;
    text-transform: uppercase;
  }

  &__result {
    padding: 1rem;
    border: 1px solid black;
    margin-bottom: 2rem;
    border-radius: 8px;
    width: 8.5rem;
    text-align: center;
    background-color: rgba(137, 43, 226, 0.1);
    font-size: 3rem;
    font-weight: 900;
  }

  &__input {
    border: 1 solid blueviolet;
    padding: 1rem;
    border-radius: 8px;
    width: 8.5rem;
    font-size: 3rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  &__buttons {
    display: flex;
    gap: 1rem;

    button {
      width: 5rem;
      height: 4rem;
      background-color: blueviolet;
      color: white;
      font-size: 2rem;
      font-weight: 700;
      border: 1px solid black;
      border-radius: 8px;
    }
  }
}
</style>
