<script setup>

</script>

<template>
  <div class="container min-w-full home ">
    <div class="info">
      <p class="text-white text-4xl">Bienvenue sur Dracarys Tech</p>
    </div>
  </div>
</template>

<style scoped>
.home{
  height: calc(100vh - 70px);
  background-color: black;
  background-image: url("src/assets/three.jpg");
  background-size: cover;
  background-position: center;
  opacity: 0.9;
  display: flex;
  align-items: center;
  justify-content: center;
}
.info {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  background: rgba(0,0,0,0.4);
  border-radius: 20px;
  box-shadow: 10px 20px 25px rgba(0,0,0,0.3);
  width: 50%;
  height: 60%;
}
</style>
