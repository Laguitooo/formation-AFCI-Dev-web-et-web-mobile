<template>
  <div class="home">
    <!-- <img class="logoshoppix" alt="logo shoppix" src="../assets/image/logoshopix.png" /> -->
    <br />
    <br />
    <MessagePage msg="WELCOME TO SHOPIX" />
    <br />
    <br />
          <!-- //////   AFFICHAGE MONTRES  //////  -->
      <!-- ///////    v-bind:src="product.img"   égale à   :src="product.img"  /////// -->
    <div class="container">
      <div class="row">
        <div v-for="product in products" :key="product.id" class="articles">
          <div class="imag-container">
            <img v-bind:src="product.img" :alt="product.description" />
            <h3 class="titrearticles">{{product.description}}</h3>
            <span>{{product.price}}€</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MessagePage from "@/components/MessagePage.vue";

const products = [{
                id: 1,
                description: "Quarz Luxe",
                price: 12,
                img: '/img/quarz-luxe.jpg'
           
            }

            , {
                id: 2,
                description: 'Curren Business',
                price: 20,
                img: '/img/curren-business.jpg'
                
            }

            , {
                id: 3,
                description: 'Curren Sport',
                price: 5,
                img: '/img/curren-sport.jpg'
                
            }

            , {
                id: 4,
                description: 'Jaragar Racing',
                price: 8,
                img: '/img/jaragar-racing.jpg'
                
            }

            , {
                id: 5,
                description: 'Liges Hommes',
                price: 3,
                img: '/img/liges-hommes.jpg'
                
            }

            , {
                id: 6,
                description: 'Maserati Mechanical',
                price: 65,
                img: '/img/maserati-mechanical.jpg'
                
            }

            , {
                id: 7,
                description: 'Montre Mecanique',
                price: 25,
                img: '/img/montre-mecanique.jpg'
            }

            , {
                id: 8,
                description: 'Brand Designer',
                price: 28,
                img: '/img/brand-designer.jpg'
            }

            , {
                id: 9,
                description: 'Relogio Masculino',
                price: 4,
                img: '/img/relogio-masculino.jpg'
            }

            , {
                id: 10,
                description: 'Tissot Multifunction',
                price: 29,
                img: '/img/tissot-multifunction.jpg'
            }

            , {
                id: 11,
                description: 'Hip Hop Gold',
                price: 87,
                img: '/img/hiphop-gold.jpg'
            }

            , {
                id: 12,
                description: 'Mesh Genova',
                price: 6,
                img: '/img/mesh-genova.jpg'
            }

            ,
        ];

export default {
  name: "Home",
  data: () => {
    return {
      products,
    }
  },
  components: {
    MessagePage,
  }
};

</script>
