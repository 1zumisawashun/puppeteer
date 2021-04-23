<template>
  <div class="molekule-container">
    <div v-for="(molekule, index) in this.molekuleNames[0]" :key="index">
      <!-- <p>{{ molekule.name }}</p> -->
    </div>
    <div v-for="(molekule, index) in this.molekulePrices[0]" :key="index">
      <!-- <p>{{ molekule.price }}</p> -->
    </div>
    <div v-for="(molekule, index) in this.molekuleList[0]" :key="index">
      <p>{{ molekule.name }}</p>
      <p>{{ molekule.price }}</p>
    </div>
  </div>
</template>

<script>
import Methods from "@/api/methods";
import axios from "axios";

export default {
  data() {
    return {
      molekuleNames: [],
      molekulePrices: [],
      molekuleList:[]
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
      .get(`http://localhost:3000/api/molekule/name`)
      .then((res) => {
        this.molekuleNames.push(res.data[0]);
      });
  axios
      .get(`http://localhost:3000/api/molekule/price`)
      .then((res) => {
        this.molekulePrices.push(res.data[0]);
      });
  axios
      .get(`http://localhost:3000/api/molekule`)
      .then((res) => {
        this.molekuleList.push(res.data);
        console.log(this.molekuleList);
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