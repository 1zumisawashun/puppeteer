<template>
  <div class="Meetingowl-container">
    <carousel></carousel>
    <div class="title">家電量販店</div>
    <div class="kadenryouhanten-container">
      <div
        v-for="(Meetingowl, index) in this.yodobashiMeetingowl"
        :key="`first-${index}`"
        class="yodobashi Block"
      >
        <v-card elevation="10">
          <v-card-title class="font-weight-bold">{{
            Meetingowl.company
          }}</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pb-0">{{ Meetingowl.name }}</v-card-text>
          <v-card-text>{{ Meetingowl.price }}</v-card-text>
        </v-card>
      </div>
      <div
        v-for="(Meetingowl, index) in this.bicMeetingowl"
        :key="`second-${index}`"
        class="bic Block"
      >
        <v-card elevation="10">
          <v-card-title class="font-weight-bold">{{
            Meetingowl.company
          }}</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pb-0">{{ Meetingowl.name }}</v-card-text>
          <v-card-text>{{ Meetingowl.price }}</v-card-text>
        </v-card>
      </div>
      <div
        v-for="(Meetingowl, index) in this.yamadaMeetingowl"
        :key="`third-${index}`"
        class="yamada Block"
      >
        <v-card elevation="10">
          <v-card-title class="font-weight-bold">{{
            Meetingowl.company
          }}</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pb-0">{{ Meetingowl.name }}</v-card-text>
          <v-card-text>{{ Meetingowl.price }}</v-card-text>
        </v-card>
      </div>
      <div
        v-for="(Meetingowl, index) in this.nojimaMeetingowl"
        :key="`forth-${index}`"
        class="nojima Block"
      >
        <v-card elevation="10">
          <v-card-title class="font-weight-bold">{{
            Meetingowl.company
          }}</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pb-0">{{ Meetingowl.name }}</v-card-text>
          <v-card-text>{{ Meetingowl.price }}</v-card-text>
        </v-card>
      </div>
      <div
        v-for="(Meetingowl, index) in this.edionMeetingowl"
        :key="`fifth-${index}`"
        class="edion Block"
      >
        <v-card elevation="10">
          <v-card-title class="font-weight-bold">{{
            Meetingowl.company
          }}</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pb-0">{{ Meetingowl.name }}</v-card-text>
          <v-card-text>{{ Meetingowl.price }}</v-card-text>
        </v-card>
      </div>
    </div>

    <div class="title">価格ドットコム</div>
    <div class="kakakucom-container">
      <div
        v-for="(Meetingowl, index) in this.kakakucomMeetingowl"
        :key="`sixth-${index}`"
        class="Block"
      >
        <v-card elevation="10" class="blue lighten-5">
          <v-card-title class="font-weight-bold">{{
            Meetingowl.company
          }}</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pb-0">{{ Meetingowl.name }}</v-card-text>
          <v-card-text>{{ Meetingowl.price }}</v-card-text>
        </v-card>
      </div>
    </div>

    <div class="title">楽天市場</div>
    <div class="rakuten-container">
      <div
        v-for="(Meetingowl, index) in this.rakutenMeetingowl"
        :key="`seventh-${index}`"
        class="Block"
      >
        <v-card elevation="10" class="red lighten-5">
          <v-card-title class="font-weight-bold">{{
            Meetingowl.company
          }}</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pb-0">{{ Meetingowl.name }}</v-card-text>
          <v-card-text>{{ Meetingowl.price }}</v-card-text>
        </v-card>
      </div>
    </div>

    <div class="title">paypayモール</div>
    <div class="paypay-container">
      <div
        v-for="(Meetingowl, index) in this.paypayMeetingowl"
        :key="`eighth-${index}`"
        class="Block"
      >
        <v-card elevation="10" class="yellow lighten-5">
          <v-card-title class="font-weight-bold">{{
            Meetingowl.company
          }}</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pb-0">{{ Meetingowl.name }}</v-card-text>
          <v-card-text>{{ Meetingowl.price }}</v-card-text>
        </v-card>
      </div>
    </div>
    <VueJsonToCsv
      :json-data="csvData"
      :csv-title="ChexkingIotPriceCSV"
      :labels="labels"
    >
      <v-btn
      @click="download"
      class="mx-2"
      fab
      dark
      large
      color="cyan"
    >
      <v-icon dark>
        mdi-pencil
      </v-icon>
    </v-btn>
    </VueJsonToCsv>
  </div>
</template>

<script>
import axios from "axios";
import VueJsonToCsv from "vue-json-to-csv"; // eslint-disable-line
import Carousel from '../components/Carousel.vue';

export default {
  data() {
    return {
      yodobashiMeetingowl: [],
      bicMeetingowl: [],
      yamadaMeetingowl: [],
      nojimaMeetingowl: [],
      edionMeetingowl: [],
      kakakucomMeetingowl: [],
      rakutenMeetingowl: [],
      paypayMeetingowl: [],
      csvData:[],
      labels: {
        company: { title: "WEBサイト名" },
        category: { title: "カテゴリー" },
        price: { title: "価格" },
        product: { title: "製品名" },
      },
    };
  },
  components: {
    VueJsonToCsv,
    Carousel
  },
  methods: {
    //CSV出力
    download() {
      //1個ずつ入れるとテーブルになる、配列を解除しオブジェクトの状態にする
      this.yodobashiMeetingowl.forEach((data) => {
        this.csvData.push({
          company: data.company,
          category:data.category,
          price: data.price,
          product: data.name,
        });
      });
      this.bicMeetingowl.forEach((data) => {
        this.csvData.push({
          company: data.company,
          category:data.category,
          price: data.price,
          product: data.name,
        });
      });
      this.yamadaMeetingowl.forEach((data) => {
        this.csvData.push({
          company: data.company,
          category:data.category,
          price: data.price,
          product: data.name,
        });
      });
      this.nojimaMeetingowl.forEach((data) => {
        this.csvData.push({
          company: data.company,
          category:data.category,
          price: data.price,
          product: data.name,
        });
      });
      this.edionMeetingowl.forEach((data) => {
        this.csvData.push({
          company: data.company,
          category:data.category,
          price: data.price,
          product: data.name,
        });
      });
    this.kakakucomMeetingowl.forEach((data) => {
        this.csvData.push({
          company: data.company,
          category:data.category,
          price: data.price,
          product: data.name,
        });
      });
      this.rakutenMeetingowl.forEach((data) => {
        this.csvData.push({
          company: data.company,
          category:data.category,
          price: data.price,
          product: data.name,
        });
      });
      this.paypayMeetingowl.forEach((data) => {
        this.csvData.push({
          company: data.company,
          category:data.category,
          price: data.price,
          product: data.name,
        });
      });
    },
  },
  mounted() {
    axios
      .get(`http://localhost:3000/api/yodobashicamera/Meetingowl`)
      .then((res) => {
        for (var i in res.data) {
          var str = res.data[i];
          if (str.name.indexOf("MTW200") !== -1) {
            str.name = "Meeting Owl Pro";
            this.yodobashiMeetingowl.push(
              Object.assign({ company: "ヨドバシカメラ" },{category: "家電量販店"}, str)
            );
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`http://localhost:3000/api/biccamera/Meetingowl`)
      .then((res) => {
        for (var i in res.data) {
          var str = res.data[i];
          if (str.name.indexOf("MTW200") !== -1) {
            str.name = "Meeting Owl Pro";
            this.bicMeetingowl.push(
              Object.assign({ company: "ビックカメラ" },{category: "家電量販店"}, str)
            );
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`http://localhost:3000/api/yamadadenki/Meetingowl`)
      .then((res) => {
        for (var i in res.data) {
          var str = res.data[i];
          if (str.name.indexOf("MTW200") !== -1) {
            str.name = "Meeting Owl Pro";
            this.yamadaMeetingowl.push(
              Object.assign({ company: "ヤマダデンキ" },{category: "家電量販店"}, str)
            );
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`http://localhost:3000/api/nojima/Meetingowl`)
      .then((res) => {
        console.log(res.data);
        for (var i in res.data) {
          var str = res.data[i];
          if (str.name.indexOf("SOURCE") !== -1) {
            str.name = "Meeting Owl Pro";
            this.nojimaMeetingowl.push(
              Object.assign({ company: "ノジマ" },{category: "家電量販店"}, str)
            );
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`http://localhost:3000/api/edion/Meetingowl`)
      .then((res) => {
        console.log(res.data);
        for (var i in res.data) {
          var str = res.data[i];
          if (str.name.indexOf("MTW200") !== -1) {
            str.name = "Meeting Owl Pro";
            this.edionMeetingowl.push(
              Object.assign({ company: "エディオン" },{category: "家電量販店"}, str)
            );
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`http://localhost:3000/api/kakakucom/Meetingowl`)
      .then((res) => {
        console.log(res.data);
        for (var i in res.data) {
          var str = res.data[i];
          //console.log(str.price);
          var result = str.price.split(",");
          //console.log(result);
          var result2 = result.join("");
          //console.log( result2);
          var result3 = result2.split("¥");
          //console.log(result3);
          //console.log( result3.join(''))
          //str.split('/').join('-')で省略することもできる
          var result4 = result3.join("");
          if (result4 < 126500) {
            this.kakakucomMeetingowl.push(
              Object.assign({ name: "Meeting Owl Pro" },{category: "価格ドットコム"}, str)
            );
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`http://localhost:3000/api/rakuten/Meetingowl`)
      .then((res) => {
        console.log(res.data);
        for (var i in res.data) {
          var str = res.data[i];
          //console.log(str.price);
          var result = str.price.split(",");
          //console.log(result);
          var result2 = result.join("");
          //console.log( result2);
          var result3 = result2.split("円");
          //console.log(result3);
          //console.log( result3.join(''))
          var result4 = result3.join("");
          if (result4 < 126500) {
            this.rakutenMeetingowl.push(
              Object.assign({ name: "Meeting Owl Pro" }, {category: "楽天市場"},str)
            );
          }
        }
        console.log(this.rakutenMeetingowl);
      })
      .catch((err) => {
        console.log(err);
      });
      

    axios
      .get(`http://localhost:3000/api/paypay/Meetingowl`)
      .then((res) => {
        console.log(res.data);
        for (var i in res.data) {
          var str = res.data[i];
          //console.log(str.price);
          var result = str.price.split(",");
          //console.log(result);
          var result2 = result.join("");
          //console.log( result2);
          var result3 = result2.split("円");
          //console.log(result3);
          //console.log( result3.join(''))
          var result4 = result3.join("");
          if (result4 < 126500) {
            this.paypayMeetingowl.push(
              Object.assign({ name: "Meeting Owl Pro" },{category: "paypayモール"}, str)
            );
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.Meetingowl-container {
  width: 100%;
  height: auto;
  background-color: #f1f1f1;
}
.kadenryouhanten-container,
.kakakucom-container,
.rakuten-container,
.paypay-container {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
}
.Block {
  width: 18%;
  height: auto;
  margin: 1%;
  border-radius: 3px;
}
.title {
  padding: 1% 0 0 2%;
  font-weight: bold;
}
</style>