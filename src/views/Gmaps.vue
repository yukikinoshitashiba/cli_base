<template>
  <div id="main__wrapper">
    <HeaderComp></HeaderComp>
    <main>
      <section id="mv" class="mv__less">
        <div class="copy__wrapper">
          <h2 class="mv__ttl">Google Maps</h2>
          <div class="search_wrapper">
            <input id="search_input" type="text" v-model="address" />
            <button id="search_btn" type="button" @click="mapSearch">
              検索
            </button>
          </div>
          <!--search_wrapper-->
          <div id="map" ref="map"></div>
          <!-- <p>{{ clickPosition }}</p> -->
        </div>
        <!--copy__wrapper-->
      </section>
      <!--mv-->
    </main>
    <FooterComp></FooterComp>
  </div>
  <!--main_wrapper-->
</template>

<script>
import HeaderComp from "@/components/HeaderComp.vue";
import FooterComp from "@/components/FooterComp.vue";

export default {
  data() {
    return {
      map: {},
      geocoder: {},
      address: "",
      startLatLng: { lat: 34.6852112, lng: 135.5257176 },
      marker: null,
      markers: [],
    };
  },
  components: {
    HeaderComp,
    FooterComp,
  },
  //Google Maps APIの動的読込み
  mounted() {
    if (!window.mapLoadStarted) {
      window.mapLoadStarted = true;
      let script = document.createElement("script");
      //
      //下記URLの中にご自身のGoogle MapsプロジェクトのAPIキーを書く
      //
      script.src =
        "https://maps.googleapis.com/maps/api/js?key=ご自身のAPIキーを書く&libraries=places&callback=initMap";
      script.async = true;
      document.head.appendChild(script);
    }
    window.initMap = () => {
      window.mapLoaded = true;
    };
    let timer = setInterval(() => {
      if (window.mapLoaded) {
        clearInterval(timer);
        this.map = new window.google.maps.Map(this.$refs.map, {
          center: this.startLatLng,
          zoom: 14,
        });
        this.geocoder = new window.google.maps.Geocoder();
      }
    }, 500);
  },
  methods: {
    setMarker(marker) {
      window.google.maps.event.addListener(marker, 'click',() => {
      new window.google.maps.Geocoder().geocode({
          latLng: marker.getPosition()
        }, function(result, status) {
          if (status == window.google.maps.GeocoderStatus.OK) {
            new window.google.maps.InfoWindow({
              content:
                `${result[0].formatted_address}
                <p>${result[0].geometry.location}</p>
                `
            }).open(marker.getMap(), marker);
          }
        });
      });
    },
    mapSearch() {
      this.geocoder.geocode(
        {
          address: this.address,
        },
        (results, status) => {
          if (status === window.google.maps.GeocoderStatus.OK) {
            this.address = '';//検索欄を空にする
            this.map.setCenter(results[0].geometry.location);
            // 緯度経度の取得
            console.log(results[0].geometry.location.lat());
            console.log(results[0].geometry.location.lng());
            this.markers.push({
              lat: results[0].geometry.location.lat(),
              lng: results[0].geometry.location.lng()
            });
            for (let i = 0; i < this.markers.length; i++) {
              this.marker = new window.google.maps.Marker({
                map: this.map,
                position: results[0].geometry.location,
                // icon:
                // "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
                // // ポップなアニメーションを付与
                // animation: google.maps.Animation.DROP,
              });
              this.setMarker(this.marker);
            }

          }
        }
      );
    },
  },
};
</script>

<style scoped>
#mv {
  padding-top: 80px;
}
.copy__wrapper {
  padding: 40px 0;
}
#map {
  width: 90vw;
  height: 60vh;
  margin: 0 auto;
}
.search_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;
}
#search_input {
  width: 80%;
}
#search_btn {
  margin: 0 0 0 4.4%;
}
</style>
