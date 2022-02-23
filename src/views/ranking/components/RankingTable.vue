<template>
  <table class="min-w-full mb-16">
    <thead class="bg-gray-50">
    <tr>
      <th class="px-2 py-2 md:px-6 md:py-3 text-left text-xs md:text-lg font-medium text-gray-500" v-for="column in columns"
          :key="column.label">
        <div class="flex "><span>{{ column.label }}</span> 
        <img class ="w-4 ml-4 cursor-pointer" @click="sortByMonth" v-if="column.label === 'Month' && sortByMonthDescending " src="@/assets/icons/arrow-down.svg" alt="">

        <img class ="w-4 ml-4 cursor-pointer" @click="sortByMonth" v-if="column.label === 'Month' && !sortByMonthDescending " src="@/assets/icons/arrow-up.svg" alt="">
        </div>
      </th>
    </tr>
    </thead>
    <tbody class="bg-white">
    <tr class="bg-blue-200 border-b-4 border-gray-50 hover:bg-blue-300 cursor-pointer" v-for="row in tableData"
        :key="row.id">
      <td class="px-2 py-2 md:px-6 md:py-2  whitespace-nowrap" v-for="column in columns" :key="column.prop">
        <router-link :to="'/'+ row.id">
          <div class="text-sm text-gray-900"> {{ row[column.prop] }}</div>
        </router-link>
      </td>
    </tr>

    </tbody>
  </table>
</template>

<script>
export default {
  name: 'RankingTable',
  props: {
    tableData: {
      type: Array,
    },
  },
  data() {
    return {
      columns: [
        {
          prop: 'id',
          label: 'Id'
        },
        {
          prop: 'username',
          label: 'Name'
        },
        {
          prop: 'monthly',
          label: 'Month'
        },
        {
          prop: 'weekly',
          label: 'Week',

        }, {
          prop: 'daily',
          label: 'Daily'
        },
      ],
      sortByMonthDescending: true,
    }
  },

methods: {

sortByMonth () {
  this.tableData = this.tableData.reverse();
  this.sortByMonthDescending = !this.sortByMonthDescending;
}

}}
</script>