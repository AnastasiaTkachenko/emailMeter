<template>
  <div class="ranking">
    <div class="md:flex justify-between md:h-96 sm:px-36">
      <div class="w-full md:w-2/5  py-4 md:py-24 "><img src="../../assets/img/logo.png"
                                                       class="max-w-4/5 mx-auto max-h-32  md:max-h-48" alt="Logo"></div>
      <div class="w-full md:w-3/5 my-auto px-4">
        <p class="text-lg md:text-3xl lg:text-5xl sm:right-0.5"> Welcome to Daily Steps Ranking.</p>
        <p class="text-xs md:text-xl lg:text-2xl uppercase text-gray-400 md:uppercase mt-2 md:mt-4 md:ml-2 md:ml-10"> Every step
          counts. create your healthy future.</p>
      </div>
    </div>
    <RankingTable  class="mt-4" :data="users"/>

     <Footer/>
  </div>
</template>
<script>
import {getUsers} from "@/services/StepsMeterService";
import RankingTable from "@/views/ranking/components/RankingTable";
import moment from "moment";
import Footer from "@/components/Footer";


export default {
  name: "Ranking",
  components: {RankingTable,Footer},
  data() {
    return {
      users: [],
      today: moment().format("YYYY-MM-DD"),
      yesterday: moment().subtract(1, 'days').format("YYYY-MM-DD"),
      weekAgo: moment().subtract(1, 'weeks').format("YYYY-MM-DD"),
      monthAgo: moment().subtract(1, 'month').format("YYYY-MM-DD")

    }
  },
  mounted() {
    this.getData();
  },
  methods: {

    async getData() {
      const daily = await getUsers(this.yesterday, this.yesterday);
      console.log("hello")
      this.users = daily.map(el => {
        return {id: el.id, username: el.username, daily: el['avg_steps']}
      })

      const weekly = await getUsers(this.weekAgo, this.today);
      weekly.forEach((el, idx) => this.users[idx].weekly = el['avg_steps'])

      const monthly = await getUsers(this.monthAgo, this.today);
      monthly.forEach((el, idx) => this.users[idx].monthly = el['avg_steps'])
      this.users = this.users.sort((a, b) => b['monthly'] - a['monthly'])

    }
  }
}
</script>
