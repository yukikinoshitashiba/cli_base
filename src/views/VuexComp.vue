<template>
  <div id="main__wrapper">
    <HeaderComp></HeaderComp>
    <main>
      <section id="mv" class="mv__less">
        <div class="copy__wrapper">
          <h2 class="mv__ttl">Vuex</h2>
          <h2 class="mv__ttl">{{ doubleCount }}</h2>
          <h2 class="mv__ttl">{{ tripleCount }}</h2>
          <button @click="increment">+1</button>
          <button @click="decrement">-1</button>
          <h3 class="mv__ttl">Vuexの双方向バインディング</h3>
          <!-- 2つやり方があるうちの１つ v-model使う方法 -->
          <p><input type="text" v-model="message"></p>
          <!-- 2つやり方があるうちの１つ v-model使わない方法 -->
          <!-- <p><input type="text" value="" @input="updateMessage"></p> -->
          <p>{{message}}</p>
        </div>
      </section><!--mv-->
    </main>
    <FooterComp></FooterComp>
  </div><!--main_wrapper-->
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';
import FooterComp from '@/components/FooterComp.vue';
export default {
  data() {
    return {
      // count: 2
      // message:'',
    }
  },
  computed: {
    doubleCount() {
      return this.$store.getters.doubleCount
    },
    tripleCount() {
      return this.$store.getters.tripleCount
    },
    // message() {
    //   return this.$store.getters.message;
    // }
    message: {
      get() {
        return this.$store.getters.message;
      },
      set(value) {
        this.$store.dispatch('updateMessage', value)
      }
    }
  },
  components: {
    HeaderComp,
    FooterComp,
  },
  methods: {
    // increment() {
    //   this.$store.commit('increment', 1)
    // },
    // decrement() {
    //   this.$store.commit('decrement', 1)
    // },
    increment() {
      this.$store.dispatch('increment', 1)
    },
    decrement() {
      this.$store.dispatch('decrement', 1)
    },
    updateMessage(e){
      this.$store.dispatch('updateMessage', e.target.value)
    }
    // increment() {
    //   this.count++
    // },
    // decrement() {
    //   this.count--
    // }
  },
}
</script>
