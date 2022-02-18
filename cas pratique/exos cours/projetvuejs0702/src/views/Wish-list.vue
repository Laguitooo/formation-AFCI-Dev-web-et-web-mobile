<template>
    <div class="wish-list">
    <br>
    <br>
    <MessagePage msg="MA LISTE" />
        <!-- <div class="btn btn-success">OK</div> -->
    </div>
</template>

<script>

// @ is an alias to /src
import MessagePage from "@/components/MessagePage.vue";

export default {
  name: "wish-list",
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
