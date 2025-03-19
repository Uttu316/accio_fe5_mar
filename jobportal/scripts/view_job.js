const closeBtn = $("#close_btn");

closeBtn.on("click", function () {
  document.body.style.overflow = "auto";
  const dialog = $("#view_job");
  dialog.hide();
});
