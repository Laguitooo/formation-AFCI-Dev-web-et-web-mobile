<template>
  <div id="nav">
    <!-- <i class="bi bi-person-bounding-box"></i> -->
    <!-- <i class="fa fa-home"/> -->
    <!-- <img class="logoshoppix" alt="logo shoppix" src="assets/image/logoshopix.png" /> -->
    <router-link to="/"><img class="imgmenu" :src="image"/></router-link> 
    <router-link to="/wish-list"><i class="fas fa-heart"></i></router-link> 
    <router-link to="/shopping-cart"><i class="fas fa-shopping-cart"></i></router-link> 
    <router-link to="/user-settings"><i class="fas fa-user"></i></router-link> 
  </div>
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
    integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
    crossorigin="anonymous"
  />
  <router-view />
  <div class="footer">
    <p>Copyright</p>
  </div>
</template>

<script>
import image from "./assets/image/logoshopix.png"

export default {
    data: () => {
        return {
            image: image
        }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

div#nav {
  display: flex;
  justify-content: center;
  justify-content: space-between;
}
#nav {
  padding: 30px;

 
}

#nav a {
  font-weight: bold;
  font-size: 150%;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: white;
}

.imgmenu {
  width: 30%;
}

div.footer {position: fixed;
box-sizing: border-box;
            padding: 10px 10px 10px 10px;
            bottom: 0;
            width: 100%;
            /* Height of the footer*/ 
            height: 35px;
            background: grey;
}
</style>
