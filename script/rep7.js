// Biểu đồ đường
const ctx = document.getElementById("lineChart").getContext("2d");
const lineChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"], // Trục X
    datasets: [
      {
        label: "Your Progress",
        data: [50, 100, 150, 159], // Điểm theo tuần
        borderColor: "#007bff",
        backgroundColor: "rgba(0, 123, 255, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Weeks",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Score",
        },
      },
    },
  },
});
