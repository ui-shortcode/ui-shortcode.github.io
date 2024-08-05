document.addEventListener("DOMContentLoaded", function () {
  // back to list
  const btnBackToList = document.getElementById("btn-back-to-list");
  btnBackToList.addEventListener("click", function () {
    location.href = "../";
  });

  // get screenshot
  // const btnGetScreenshot = document.getElementById("btn-get-screenshot");
  // btnGetScreenshot.addEventListener("click", function () {
  //   html2canvas(document.documentElement, {
  //     scale: window.devicePixelRatio,
  //     logging: true,
  //     useCORS: true,
  //     windowHeight: window.innerHeight,
  //     windowWidth: window.innerWidth,
  //   }).then((canvas) => {
  //     // Create an image
  //     var image = canvas
  //       .toDataURL("image/png")
  //       .replace("image/png", "image/octet-stream");

  //     // Create a link to download the image
  //     var link = document.createElement("a");
  //     link.download = "screenshot.png";
  //     link.href = image;
  //     link.click();

  //     // Show the button again
  //     this.classList.remove("hidden");
  //   });
  // });
});
