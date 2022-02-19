<template>
  <button class="btn mb24">{{ text }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
  },
};
</script>

<style>
.btn {
  border: none;
  color: var(--secondary-color);
  background: var(--primary-color);
  font-size: 1.5rem;
  border-radius: 5px;
  width: 13.25rem;
  height: 4.875rem;
  cursor: pointer;
  transition: 0.5s;
}
.btn:hover {
  background: #e72b45cc;
}
.btn:active {
  background: #ac2234;
}
</style>
