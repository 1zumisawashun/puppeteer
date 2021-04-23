<template>
  <div class="mimi-container">
    <div v-for="(mimi, index) in this.mimiNames[0]" :key="index">
      <!-- <p>{{ mimi.name }}</p> -->
    </div>
    <div v-for="(mimi, index) in this.mimiPrices[0]" :key="index">
      <!-- <p>{{ mimi.price }}</p> -->
    </div>
    <div v-for="(mimi, index) in this.mimiList[0]" :key="index">
      <p>{{ mimi.name }}</p>
      <p>{{ mimi.price }}</p>
    </div>
  </div>
</template>

<script>
import Methods from "@/api/methods";
import axios from "axios";

export default {
  data() {
    return {
      mimiNames: [],
      mimiPrices: [],
      mimiList:[]
    };
  },
  methods: {
    // サーバーから返ってくる値をログに出力したいのでasyncとawaitを行う
    async post() {
      let response = await Methods.testPosting();
      console.log(response);
    },
  },
  mounted() {
    axios
      .get(`http://localhost:3000/api/mimi/name`)
      .then((res) => {
        this.mimiNames.push(res.data[0]);
      });
  axios
      .get(`http://localhost:3000/api/mimi/price`)
      .then((res) => {
        this.mimiPrices.push(res.data[0]);
      });
  axios
      .get(`http://localhost:3000/api/mimi`)
      .then((res) => {
        this.mimiList.push(res.data);
        console.log(this.mimiList);
        //[]を外す必要があるインデックス番号0を記述する必要があるï
      })
      .catch((err) => {
        console.log(err);
      });
}
};
</script>

<style scoped>

</style>