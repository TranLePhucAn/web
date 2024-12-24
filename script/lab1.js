function toggleDropdown(event) {
  event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
  const dropdownMenu = event.target.nextElementSibling; // Lấy menu con
  if (dropdownMenu.classList.contains("show")) {
    dropdownMenu.classList.remove("show");
  } else {
    document.querySelectorAll(".dropdown-menu").forEach((menu) => {
      menu.classList.remove("show"); // Đóng các menu khác
    });
    dropdownMenu.classList.add("show"); // Hiển thị menu hiện tại
  }
}

// Đóng menu khi nhấn ngoài menu
document.addEventListener("click", (event) => {
  if (!event.target.closest(".nav-item.dropdown")) {
    document.querySelectorAll(".dropdown-menu").forEach((menu) => {
      menu.classList.remove("show");
    });
  }
});
document.querySelector(".delete-btn").addEventListener("click", function () {
  if (confirm("Bạn có chắc muốn xóa khóa học này?")) {
    alert("Khóa học đã được xóa.");
  }
});
