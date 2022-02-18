<template>
  <div class="user-settings">
  <br><br>
    <MessagePage msg="MON ESPACE" />
  </div>
</template>
<script>

// @ is an alias to /src
import MessagePage from "@/components/MessagePage.vue";

export default {
  name: "UserSettings",
  components: {
    MessagePage,
  },
};

</script>
<style>
body {
background-color: rgb(3, 156, 202);}
    p{
    color: white}
</style>
