<template>
  <div class="Automemo-container">
    <carousel></carousel>
    <div class="title">
        家電量販店
      </div>
    <div class="kadenryouhanten-container">
      
      <div
        v-for="(Automemo, index) in this.yodobashiAutomemo"
        :key="index"
        class="yodobashi Block"
      >
        <v-card elevation="10">
          <v-card-title class="font-weight-bold">{{
            Automemo.company
          }}</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pb-0">{{ Automemo.name }}</v-card-text>
          <v-card-text>{{ Automemo.price }}</v-card-text>
        </v-card>
      </div>
      <div
        v-for="(Automemo, index) in this.bicAutomemo"
        :key="index"
        class="bic Block"
      >
        <v-card elevation="10">
          <v-card-title class="font-weight-bold">{{
            Automemo.company
          }}</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pb-0">{{ Automemo.name }}</v-card-text>
          <v-card-text>{{ Automemo.price }}</v-card-text>
        </v-card>
      </div>
      <div
        v-for="(Automemo, index) in this.yamadaAutomemo"
        :key="index"
        class="yamada Block"
      >
        <v-card elevation="10">
          <v-card-title class="font-weight-bold">{{
            Automemo.company
          }}</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pb-0">{{ Automemo.name }}</v-card-text>
          <v-card-text>{{ Automemo.price }}</v-card-text>
        </v-card>
      </div>
      <div
        v-for="(Automemo, index) in this.nojimaAutomemo"
        :key="index"
        class="nojima Block"
      >
        <v-card elevation="10">
          <v-card-title class="font-weight-bold">{{
            Automemo.company
          }}</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pb-0">{{ Automemo.name }}</v-card-text>
          <v-card-text>{{ Automemo.price }}</v-card-text>
        </v-card>
      </div>
      <div
        v-for="(Automemo, index) in this.edionAutomemo"
        :key="index"
        class="edion Block"
      >
        <v-card elevation="10">
          <v-card-title class="font-weight-bold">{{
            Automemo.company
          }}</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pb-0">{{ Automemo.name }}</v-card-text>
          <v-card-text>{{ Automemo.price }}</v-card-text>
        </v-card>
      </div>
    </div>

<div class="title">
        価格ドットコム
      </div>
    <div class="kakakucom-container">
     
      <div
        v-for="(Automemo, index) in this.kakakucomAutomemo"
        :key="index"
        class="Block"
      >
        <v-card elevation="10" class="blue lighten-5">
          <v-card-title class="font-weight-bold">{{
            Automemo.company
          }}</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pb-0">{{ Automemo.name }}</v-card-text>
          <v-card-text>{{ Automemo.price }}</v-card-text>
        </v-card>
      </div>
    </div>

<div class="title">
        楽天市場
      </div>
    <div class="rakuten-container">
      <div
        v-for="(Automemo, index) in this.rakutenAutomemo"
        :key="index"
        class="Block"
      >
        <v-card elevation="10" class="red lighten-5">
          <v-card-title class="font-weight-bold">{{
            Automemo.company
          }}</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pb-0">{{ Automemo.name }}</v-card-text>
          <v-card-text>{{ Automemo.price }}</v-card-text>
        </v-card>
      </div>
    </div>

<div class="title">
        paypayモール
      </div>
    <div class="paypay-container">
      <div
        v-for="(Automemo, index) in this.paypayAutomemo"
        :key="index"
        class="Block"
      >
        <v-card elevation="10" class="yellow lighten-5">
          <v-card-title class="font-weight-bold">{{
            Automemo.company
          }}</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pb-0">{{ Automemo.name }}</v-card-text>
          <v-card-text>{{ Automemo.price }}</v-card-text>
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
      yodobashiAutomemo: [],
      bicAutomemo: [],
      yamadaAutomemo: [],
      nojimaAutomemo: [],
      edionAutomemo: [],
      kakakucomAutomemo: [],
      rakutenAutomemo: [],
      paypayAutomemo: [],
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
      this.yodobashiAutomemo.forEach((data) => {
        this.csvData.push({
          company: data.company,
          category:data.category,
          price: data.price,
          product: data.name,
        });
      });
      this.bicAutomemo.forEach((data) => {
        this.csvData.push({
          company: data.company,
          category:data.category,
          price: data.price,
          product: data.name,
        });
      });
      this.yamadaAutomemo.forEach((data) => {
        this.csvData.push({
          company: data.company,
          category:data.category,
          price: data.price,
          product: data.name,
        });
      });
      this.nojimaAutomemo.forEach((data) => {
        this.csvData.push({
          company: data.company,
          category:data.category,
          price: data.price,
          product: data.name,
        });
      });
      this.edionAutomemo.forEach((data) => {
        this.csvData.push({
          company: data.company,
          category:data.category,
          price: data.price,
          product: data.name,
        });
      });
    this.kakakucomAutomemo.forEach((data) => {
        this.csvData.push({
          company: data.company,
          category:data.category,
          price: data.price,
          product: data.name,
        });
      });
      this.rakutenAutomemo.forEach((data) => {
        this.csvData.push({
          company: data.company,
          category:data.category,
          price: data.price,
          product: data.name,
        });
      });
      this.paypayAutomemo.forEach((data) => {
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
      .get(`http://localhost:3000/api/yodobashicamera/Automemo`)
      .then((res) => {
        for (var i in res.data) {
          var str = res.data[i];
          if (str.name.indexOf("AM1WH") !== -1) {
            str.name = "Automemo";
            this.yodobashiAutomemo.push(
              Object.assign({ company: "ヨドバシカメラ" }, {category: "家電量販店"},str)
            );
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`http://localhost:3000/api/biccamera/Automemo`)
      .then((res) => {
        for (var i in res.data) {
          var str = res.data[i];
          if (str.name.indexOf("AM1WH") !== -1) {
            str.name = "Automemo";
            this.bicAutomemo.push(
              Object.assign({ company: "ビックカメラ" },{category: "家電量販店"}, str)
            );
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`http://localhost:3000/api/yamadadenki/Automemo`)
      .then((res) => {
        for (var i in res.data) {
          var str = res.data[i];
          if (str.name.indexOf("AM1WH") !== -1) {
            str.name = "Automemo";
            this.yamadaAutomemo.push(
              Object.assign({ company: "ヤマダデンキ" }, {category: "家電量販店"},str)
            );
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`http://localhost:3000/api/nojima/Automemo`)
      .then((res) => {
        console.log(res.data);
        for (var i in res.data) {
          var str = res.data[i];
          if (str.name.indexOf("SOURCE") !== -1) {
            str.name = "Automemo";
            this.nojimaAutomemo.push(
              Object.assign({ company: "ノジマ" },{category: "家電量販店"}, str)
            );
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`http://localhost:3000/api/edion/Automemo`)
      .then((res) => {
        console.log(res.data);
        for (var i in res.data) {
          var str = res.data[i];
          if (str.name.indexOf("AM1WH") !== -1) {
            str.name = "Automemo";
            this.edionAutomemo.push(
              Object.assign({ company: "エディオン" },{category: "家電量販店"}, str)
            );
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`http://localhost:3000/api/kakakucom/Automemo`)
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
          var result4 = result3.join("");
          if (result4 < 19800) {
            this.kakakucomAutomemo.push(
              Object.assign({ name: "Automemo" }, {category: "価格ドットコム"},str)
            );
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`http://localhost:3000/api/rakuten/Automemo`)
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
          if (result4 < 19800) {
            this.rakutenAutomemo.push(
              Object.assign({ name: "Automemo" },{category: "楽天市場"}, str)
            );
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`http://localhost:3000/api/paypay/Automemo`)
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
          if (result4 < 19800) {
            this.paypayAutomemo.push(
              Object.assign({ name: "Automemo" },{category: "paypayモール"}, str)
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

.Automemo-container {
  width: 100%;
  height: auto;
  background-color: #f1f1f1;
}
.kadenryouhanten-container,
.kakakucom-container,
.rakuten-container,
.paypay-container
{
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
.title{
  padding: 1% 0 0 2%;
  font-weight: bold;
}
</style>