<template>
  <Bar :data="data" :options="options" />
</template>

<script lang="ts">
import {
BarElement,
CategoryScale,
Chart as ChartJS,
Legend,
LinearScale,
Title,
Tooltip
} from "chart.js";
import { Bar } from "vue-chartjs";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default {
  name: "App",
  components: {
    Bar,
  },
  data() {
    return {
      data: {
        labels: [
          "มกุล 0",
          "มกุล 1",
          "มกุล 2 & 9",
          "มกุล 3",
          "มกุล 4 & 5",
          "มกุล 6",
          "มกุล 7",
          "มกุล 8",
        ],
        datasets: [
          {
            label: "คะแนน",
            backgroundColor: "#f87979",
            data: [
              { x: "มกุล 0", y: 8000 },
              { x: "มกุล 1", y: 0 },
              { x: "มกุล 2 & 9", y: 0 },
              { x: "มกุล 3", y: 0 },
              { x: "มกุล 4 & 5", y: 0 },
              { x: "มกุล 6", y: 0 },
              { x: "มกุล 7", y: 0 },
              { x: "มกุล 8", y: 0 },
            ],
          },
        ],
      },
      options: {
        responsive: true,

        scales: {
          y: {
            max: 20000, // Set the max value for the y-axis here
          },
        },
      },
    };
  },
};
</script>
