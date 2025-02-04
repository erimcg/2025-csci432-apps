
<template>
  <div id="logo">
    <slot name="logoTitle"></slot>
    <img alt="Vue logo" src="../../assets/vueLogo.png" />
  </div>
</template>

<style>
#logo {
  margin: 15px;

  aspect-ratio: 1 / 1;
  width: 15vh;

  background-color: lightgray;
  border-radius: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#title {
  font-size: 2vh;
}

#subtitle {
  font-size: 1.2vh;
}

img {
  display: inline-block;
  width: 50%;
}
</style>
