document.getElementById("lab6-toggle").addEventListener("click", function (e) {
  e.preventDefault(); // Ngăn chặn hành động mặc định của thẻ <a>

  const dropdown = document.getElementById("lab6-dropdown");
  // Kiểm tra trạng thái hiện tại và toggle hiển thị
  if (dropdown.style.display === "none") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
});
// Dữ liệu các khóa học cho từng chủ đề
const coursesData = {
  web: [
    {
      title: "The Complete 2024 Web Development Bootcamp",
      instructor: "Dr. Angela Yu",
      rating: "4.7",
      reviews: "409,451",
      price: "₫1,699,000",
      bestseller: true,
    },
    {
      title: "The Web Developer Bootcamp 2024",
      instructor: "Colt Steele",
      rating: "4.7",
      reviews: "276,674",
      price: "₫2,399,000",
    },
  ],
  javascript: [
    {
      title: "JavaScript: The Advanced Concepts",
      instructor: "Andrei Neagoie",
      rating: "4.8",
      reviews: "50,123",
      price: "₫1,999,000",
      bestseller: true,
    },
    {
      title: "JavaScript for Beginners",
      instructor: "Brad Traversy",
      rating: "4.5",
      reviews: "30,456",
      price: "₫1,299,000",
    },
  ],
  react: [
    {
      title: "React - The Complete Guide",
      instructor: "Maximilian Schwarzmüller",
      rating: "4.7",
      reviews: "100,023",
      price: "₫1,699,000",
    },
    {
      title: "Modern React with Redux",
      instructor: "Stephen Grider",
      rating: "4.6",
      reviews: "80,412",
      price: "₫1,899,000",
    },
  ],
  // Các chủ đề khác có thể thêm tương tự
};

// Hàm hiển thị các khóa học
function showCourses(topic) {
  const courseContainer = document.getElementById("courseContainer");
  courseContainer.innerHTML = ""; // Xóa nội dung cũ

  // Lấy danh sách khóa học theo chủ đề
  const courses = coursesData[topic] || [];

  // Tạo các thẻ khóa học
  courses.forEach((course) => {
    const courseCard = document.createElement("div");
    courseCard.classList.add("course-card");

    courseCard.innerHTML = `
        <div class="course-image">
          <img src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2152872931/settings_images/3073a32-ffb3-e3d7-c106-171cca61401c_13ec59a1-5fa0-4999-9de1-ed2063a8ad7c.jpg" alt="${
            course.title
          }" />
        </div>
        <div class="course-info">
          <div class="course-title">${course.title}</div>
          <div class="course-instructor">${course.instructor}</div>
          <div class="course-rating">⭐ ${course.rating} (${
      course.reviews
    } reviews)</div>
          <div class="course-price">${course.price}</div>
          ${
            course.bestseller
              ? '<span class="bestseller">Bestseller</span>'
              : ""
          }
        </div>
        <div class="tooltip">
          <div><strong>${course.title}</strong></div>
          <div>${course.instructor}</div>
          <div>Rating: ⭐ ${course.rating}</div>
          <div>${course.price}</div>
          <button class="add-to-cart" onclick="addToCart('${
            course.title
          }')">Add to Cart</button>
        </div>
      `;
    courseContainer.appendChild(courseCard);
  });

  // Cập nhật trạng thái active cho button
  document.querySelectorAll(".header button").forEach((button) => {
    button.classList.remove("active");
  });
  document
    .querySelector(`.header button[onclick="showCourses('${topic}')"]`)
    .classList.add("active");
}

// Hàm xử lý khi bấm nút "Add to Cart"
function addToCart(courseTitle) {
  alert(`Đã thêm "${courseTitle}" vào giỏ hàng!`);
}

// Hiển thị khóa học chủ đề đầu tiên khi tải trang
showCourses("web");
