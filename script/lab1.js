document.addEventListener("DOMContentLoaded", () => {
  const courseForm = document.querySelector(".course-form");
  const courseListContainer = document.createElement("div");
  courseListContainer.classList.add("course-list-container");
  courseForm.parentElement.appendChild(courseListContainer);

  const renderCourseList = (course) => {
    const courseCard = document.createElement("div");
    courseCard.classList.add("card", "mb-3");

    courseCard.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${course.courseName}</h5>
        <p class="card-text">
          <strong>Mã khóa học:</strong> ${course.courseId}<br>
          <strong>Mô tả:</strong> ${course.courseDescription || "Không có"}<br>
          <strong>Giảng viên:</strong> ${course.createdBy}<br>
          <strong>Ngày tạo:</strong> ${course.createdAt}<br>
          <strong>Cập nhật lần cuối:</strong> ${course.updatedAt}<br>
        </p>
      </div>
    `;
    courseListContainer.appendChild(courseCard);
  };

  const resetForm = () => {
    courseForm.reset();
    document.getElementById("created_at").value = "Tự động sinh";
    document.getElementById("updated_at").value = "Tự động cập nhật";
  };

  courseForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const courseId = document.getElementById("course_id").value;
    const courseName = document.getElementById("course_name").value;
    const courseDescription =
      document.getElementById("course_description").value;
    const createdBy =
      document.getElementById("created_by").options[
        document.getElementById("created_by").selectedIndex
      ].text;
    const createdAt = new Date().toLocaleString();
    const updatedAt = new Date().toLocaleString();

    const course = {
      courseId,
      courseName,
      courseDescription,
      createdBy,
      createdAt,
      updatedAt,
    };

    renderCourseList(course);
    resetForm();
  });

  document.querySelector(".delete-btn").addEventListener("click", () => {
    if (confirm("Bạn có chắc muốn xóa các thông tin trên biểu mẫu?")) {
      resetForm();
    }
  });
});
