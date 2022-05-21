<template>
  <div id="main__wrapper">
    <HeaderComp></HeaderComp>
    <main>
      <section id="mv" class="mv__less">
        <div class="copy__wrapper">
          <h2 class="mv__ttl">Link</h2>
          <h3>ページ内リンク</h3>
          <ul>
            <li><a href="#a01" class="btn">Link01（NG）</a></li>
            <li><a href="#a02" class="btn">Link02（NG）</a></li>
            <li><a href="#a03" class="btn">Link03（NG）</a></li>
          </ul>
          <h3>別ページへのリンク</h3>
          <ul>
            <li>
              <router-link to="/#accordion" class="btn">HomeのAccordionへ（Good／routerに記述）</router-link>
            </li>
          </ul>

          <div class="contents__link__wrapper">
            <div id="a01" class="content__link">
              <h4>Link1</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus dolor voluptatem saepe? Aliquid autem quasi, quas pariatur ad laudantium eos ut ullam veritatis, vitae obcaecati iste eligendi ipsa necessitatibus itaque?</p>
            </div><!-- /.content__link -->
            <div id="a02" class="content__link">
              <h4>Link2</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus dolor voluptatem saepe? Aliquid autem quasi, quas pariatur ad laudantium eos ut ullam veritatis, vitae obcaecati iste eligendi ipsa necessitatibus itaque?</p>
            </div><!-- /.content__link -->
            <div id="a03" class="content__link">
              <h4>Link3</h4>
              <p>通常ページ内リンクは、#で表されるidが付与された箇所へのリンクを表し、リンクをクリックするとBrowserウィンドウ上部へそのid部分のコンテンツが移動しますが、こちらのページ内リンクのように、ページ下部にスクロールするためのスペースがない場合、スクロールが途中で止まります。</p>
            </div><!-- /.content__link -->
          </div><!-- /.contents__link__wrapper -->
        </div><!--copy__wrapper-->
      </section><!--mv-->
    </main>
  </div><!--main_wrapper-->
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';

export default {
  data() {
    return {
      isActive: true,
      visited: false
    }
  },
  components: {
    HeaderComp,
  },
  mounted() {
    // 初回アクセス時(visited=yes)がcookieになかったら
    if (document.cookie.indexOf('visited=yes') === -1) {
      document.cookie = 'visited=yes path=/cssanim2';
      this.isActive = true;

    } else {
      // 2回目以降のアクセス
      console.log('2回目以降のアクセスです');
      this.isActive = false;
      this.visited = true
    }
  },
  methods: {
    removeCookie() {
      // Cookieを削除
      document.cookie = 'visited=yes; max-age=0';
      //ページ再読み込み
      location.reload();
    }
  }
}
</script>

<style scoped>
.mv__ttl__cssanim2, .btn__cookie {
  position: relative;
  z-index: 1;
  opacity: 0;
}
.mv__ttl__cssanim2.visited, .btn__cookie.visited {
  opacity: 1;
}
.mv__ttl__cssanim2.active, .btn__cookie.active {
  animation: txtAnim 1s cubic-bezier(0.215, 0.61, 0.355, 1) 1.2s forwards;
}
.btn__cookie.active {
  animation-delay: 1.6s;
}
.btn__cookie:hover, .btn__cookie.active:hover, .btn__cookie.visited:hover {
  opacity: 0.8;
}
@keyframes txtAnim {
  0% {
    opacity: 0;
    transform: translate(0, 20vh);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
.img_box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.img_box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.img_box::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 100%;
  background-color: cadetblue;
  /* width: 100%;
  height: 100%; */
}
.img_box.active::after {
  animation: slide 1.6s ease-in-out 0s 1 forwards;
}
@keyframes slide {
  0% {
    left: 0;
    right: 100%;
  }
  50% {
    /*背景色にleftとrightともに100%状態 */
    left: 0;
    right: 0;
  }
  100% {
    left: 100%;
    right: 0;
  }
}
/* .img_item {
  opacity: 0;
} */

.active .img_item img {
  opacity: 1;
  animation: imgShow 1.6s ease-in-out 0s 1 normal;
}
@keyframes imgShow {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  50.1% {
    opacity: 1;
    transform: scale(1.5);
  }
  100% {
    opacity: 1;
  }
}


.sp__only {
  display: block;
}
.pc__only {
  display: none;
}
@media (min-width: 565px) {
  .sp__only {
    display: none;
  }
  .pc__only {
    display: block;
  }
}

</style>
