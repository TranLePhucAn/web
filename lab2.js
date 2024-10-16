let isLoggedIn = false;

const questionsData = {
  3: [
    {
      question: "2 + 2 = ?",
      options: ["A) 3", "B) 4", "C) 5", "D) 6"],
      answer: "B",
    },
    {
      question: "3 x 3 = ?",
      options: ["A) 6", "B) 8", "C) 9", "D) 7"],
      answer: "C",
    },
    {
      question: "5 - 3 = ?",
      options: ["A) 1", "B) 2", "C) 3", "D) 4"],
      answer: "B",
    },
    {
      question: "10 / 2 = ?",
      options: ["A) 3", "B) 5", "C) 6", "D) 8"],
      answer: "B",
    },
    {
      question: "5 + 7 = ?",
      options: ["A) 12", "B) 10", "C) 11", "D) 14"],
      answer: "A",
    },
    {
      question: "3 + 5 = ?",
      options: ["A) 7", "B) 6", "C) 8", "D) 9"],
      answer: "C",
    },
    {
      question: "6 - 2 = ?",
      options: ["A) 3", "B) 4", "C) 5", "D) 6"],
      answer: "B",
    },
    {
      question: "4 x 4 = ?",
      options: ["A) 12", "B) 15", "C) 16", "D) 14"],
      answer: "C",
    },
    {
      question: "8 / 4 = ?",
      options: ["A) 2", "B) 3", "C) 4", "D) 1"],
      answer: "A",
    },
    {
      question: "7 - 4 = ?",
      options: ["A) 2", "B) 3", "C) 4", "D) 1"],
      answer: "B",
    },
  ],
  1: [
    {
      question: "Nước sôi ở nhiệt độ bao nhiêu độ C?",
      options: ["A) 90", "B) 100", "C) 80", "D) 70"],
      answer: "B",
    },
    {
      question: "Mặt trời là gì?",
      options: ["A) Hành tinh", "B) Sao", "C) Ngôi sao", "D) Vệ tinh"],
      answer: "C",
    },
    {
      question: "Hệ mặt trời có bao nhiêu hành tinh?",
      options: ["A) 8", "B) 7", "C) 9", "D) 10"],
      answer: "A",
    },
    {
      question: "Tế bào là gì?",
      options: [
        "A) Khối nhỏ nhất của sự sống",
        "B) Tổ chức",
        "C) Chất rắn",
        "D) Khí",
      ],
      answer: "A",
    },
    {
      question: "Động vật nào có khả năng bay?",
      options: ["A) Cá", "B) Chim", "C) Bò", "D) Hổ"],
      answer: "B",
    },
    {
      question: "Thực vật nào thực hiện quá trình quang hợp?",
      options: ["A) Cây cỏ", "B) Hoa", "C) Cây ăn trái", "D) Tất cả"],
      answer: "D",
    },
    {
      question: "Địa cầu là gì?",
      options: ["A) Hành tinh", "B) Ngôi sao", "C) Vệ tinh", "D) Khí"],
      answer: "A",
    },
    {
      question: "Ánh sáng mặt trời mất bao lâu để đến trái đất?",
      options: ["A) 8 phút", "B) 10 phút", "C) 5 phút", "D) 12 phút"],
      answer: "A",
    },
    {
      question: "Nước là gì?",
      options: ["A) Hóa chất", "B) Hợp chất", "C) Kim loại", "D) Khí"],
      answer: "B",
    },
    {
      question: "Máy móc hoạt động dựa vào điều gì?",
      options: ["A) Năng lượng", "B) Áp suất", "C) Điện", "D) Tất cả"],
      answer: "D",
    },
  ],
  2: [
    {
      question: "Mỗi tháng có bao nhiêu ngày?",
      options: ["A) 28", "B) 30", "C) 31", "D) 29"],
      answer: "C",
    },
    {
      question: "Khi nào Trái Đất quay quanh Mặt Trời?",
      options: ["A) 1 năm", "B) 1 tháng", "C) 1 ngày", "D) 1 giờ"],
      answer: "A",
    },
    {
      question: "Công thức nước là gì?",
      options: ["A) CO2", "B) H2O", "C) O2", "D) H2"],
      answer: "B",
    },
    {
      question: "Thành phần chính của không khí là gì?",
      options: ["A) Oxy", "B) Nitơ", "C) Carbon", "D) Hydrogen"],
      answer: "B",
    },
    {
      question: "Năng lượng không thể tạo ra từ đâu?",
      options: ["A) Mặt trời", "B) Nhiên liệu", "C) Không khí", "D) Tất cả"],
      answer: "D",
    },
    {
      question: "Hành tinh lớn nhất trong hệ mặt trời là gì?",
      options: ["A) Địa cầu", "B) Sao Thổ", "C) Sao Mộc", "D) Sao Hỏa"],
      answer: "C",
    },
    {
      question: "Tại sao bầu trời có màu xanh?",
      options: ["A) Phản xạ ánh sáng", "B) Không khí", "C) Nước", "D) Cát"],
      answer: "A",
    },
    {
      question: "Lực hấp dẫn là gì?",
      options: ["A) Lực đẩy", "B) Lực kéo", "C) Lực tĩnh", "D) Lực biến hình"],
      answer: "B",
    },
    {
      question: "Khí quyển Trái Đất có mấy lớp?",
      options: ["A) 5", "B) 4", "C) 3", "D) 2"],
      answer: "B",
    },
    {
      question: "Độ sâu trung bình của đại dương là bao nhiêu?",
      options: ["A) 2000m", "B) 3000m", "C) 4000m", "D) 5000m"],
      answer: "C",
    },
  ],
};

function toggleDisplay(elementId, display) {
  document.getElementById(elementId).style.display = display;
}

function setActiveTab(tabName) {
  document
    .querySelectorAll(".tab-content")
    .forEach((tab) => toggleDisplay(tab.id, "none"));
  toggleDisplay(`${tabName}-tab`, "block");

  document
    .querySelectorAll(".tab-link")
    .forEach((link) => link.classList.remove("active"));
  document
    .querySelector(`.tab-link[data-tab="${tabName}"]`)
    .classList.add("active");
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "phucan" && password === "123456") {
    isLoggedIn = true;
    toggleDisplay("form-login", "none");
    toggleDisplay("home-tab", "block");
    toggleDisplay("logout-btn", "inline");
    setActiveTab("home");
  } else {
    alert("Sai tên đăng nhập hoặc mật khẩu!");
  }
}

document.getElementById("logout-btn").addEventListener("click", () => {
  isLoggedIn = false;
  toggleDisplay("form-login", "block");
  toggleDisplay("home-tab", "none");
  toggleDisplay("about-tab", "none");
  toggleDisplay("labs-tab", "none");
  toggleDisplay("logout-btn", "none");
});

document.querySelectorAll(".tab-link").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    if (isLoggedIn) {
      setActiveTab(this.getAttribute("data-tab"));
    } else {
      alert("Vui lòng đăng nhập trước!");
    }
  });
});

function startExercise(exerciseNumber) {
  toggleDisplay("questions-section", "block");
  document.getElementById("exercise-number").innerText = exerciseNumber;
  const questionsList = document.getElementById("questions-list");
  questionsList.innerHTML = "";

  questionsData[exerciseNumber].forEach((item, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
    questionDiv.innerHTML = `<p>${item.question}</p>`;
    item.options.forEach((option) => {
      questionDiv.innerHTML += `<input type="radio" name="question${index}" value="${option.charAt(
        0
      )}"> ${option}<br>`;
    });
    questionsList.appendChild(questionDiv);
  });
}

function submitAnswers() {
  const exerciseNumber = parseInt(
    document.getElementById("exercise-number").innerText
  );
  const userAnswers = [];
  let score = 0;

  questionsData[exerciseNumber].forEach((item, index) => {
    const selectedOption = document.querySelector(
      `input[name="question${index}"]:checked`
    );
    if (selectedOption) {
      userAnswers.push(selectedOption.value);
      if (selectedOption.value === item.answer) {
        score++;
      }
    }
  });

  document.getElementById(
    "result"
  ).innerText = `Điểm của bạn: ${score} / ${userAnswers.length}`;
}
