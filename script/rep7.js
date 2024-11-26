// Tạo thông báo khi nhấp vào các mục tiêu học tập
function showGoalDetails(goalTitle) {
  alert("Chi tiết mục tiêu học tập: " + goalTitle);
}

const ctx = document.getElementById("lineChart").getContext("2d");
const lineChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [" 1", " 2", "3", "4"],
    datasets: [
      {
        label: " ",
        data: [0, 200, 300, 700, 700],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.4, // Tăng độ cong cho đường
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
