<template>
  <p class="loader"></p>
</template>

<script>
export default {};
</script>

<style scoped>
.loader {
  margin: 0;
  padding: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgb(34, 114, 94);
  position: relative;
}
.loader::before,
.loader:after {
  animation: 0.6s load running infinite alternate ease-in-out;
  content: " ";
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: cadetblue;
  position: absolute;
  top: 0;
}
.loader::before {
  left: -20px;
  transform-origin: 20px center;
}
.loader::after {
  left: 20px;
  transform-origin: -10px center;
}

@keyframes load {
  from {
    transform: rotate(-40deg);
  }
  to {
    transform: rotate(220deg);
  }
}
</style>
