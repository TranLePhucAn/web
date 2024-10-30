function toggleContent(subject) {
  // Ẩn tất cả các nội dung
  document.querySelectorAll(".hidden-content").forEach((content) => {
    content.style.display = "none";
  });

  // Hiện nội dung của môn học được chọn
  const contentToShow = document.getElementById(subject);
  contentToShow.style.display =
    contentToShow.style.display === "none" ? "block" : "none";
}
