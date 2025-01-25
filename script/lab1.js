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
        <button class="btn btn-danger btn-sm delete-single-course">Xóa khóa học</button>
      </div>
    `;

    // Add delete event for this course card
    courseCard
      .querySelector(".delete-single-course")
      .addEventListener("click", () => {
        courseListContainer.removeChild(courseCard);
      });

    courseListContainer.appendChild(courseCard);
  };

  const resetForm = () => {
    courseForm.reset();
    document.getElementById("created_at").value = "Tự động sinh";
    document.getElementById("updated_at").value = "Tự động cập nhật";
  };

  const clearAllCourses = () => {
    courseListContainer.innerHTML = "";
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

  // Add event listener to delete all courses button
  const deleteAllButton = document.querySelector(".delete-btn");
  if (deleteAllButton) {
    deleteAllButton.addEventListener("click", () => {
      if (confirm("Bạn có chắc muốn xóa tất cả các khóa học đã lưu?")) {
        clearAllCourses();
      }
    });
  }
});
