<script setup>
</script>

<template>
  <main class="body">
    <header class="container min-w-full h-[70px] bg-blue-950 header  justify-between items-center  px-5 ">
        <p class=" text-white font-bold text-2xl">DRACARYS TECH</p>
      <div class="flex-row space-x-3 text-white mr-4">
        <a href="#">Accueil</a>
        <a href="#">A propos</a>
        <a href="#">Nos Services</a>
        <a href="#">Notre Equipes</a>
        <a href="#">Contacts</a>
      </div>
    </header>
    <router-view/>
  </main>
</template>

<style scoped>
*{
  font-family: "Poppins Medium", sans-serif;
}
.body{
  background-color: black;
}
.header{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 5px 10px 10px rgba(0,0,0,0.4);
}
</style>
