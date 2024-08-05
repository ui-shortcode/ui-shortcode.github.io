document.addEventListener("DOMContentLoaded", () => {
  var wrap = document.querySelector("#upload-container"),
    uploadBox = wrap.querySelector(".upload-box"),
    resultWrap = document.querySelector("#convert-result"),
    resultText = resultWrap.querySelector(".convert-text"),
    resultCSSBackground = resultWrap.querySelector(".convert-css-background"),
    btnResultClose = resultWrap.querySelector("#btn-result-close"),
    previewImage = document.querySelector("#preview-image"),
    tempResultText = document.querySelector("#temp-result-text"),
    tempResultCssBg = document.querySelector("#temp-result-css-backgruond"),
    btnCopyText = document.querySelector("#btn-copy-text"),
    btnCopyCSSBg = document.querySelector("#btn-copy-css-bg");

  /* 박스 안에 Drag 들어왔을 때 */
  uploadBox.addEventListener("dragenter", function (e) {
    // console.log('dragenter');
  });

  /* 박스 안에 Drag를 하고 있을 때 */
  uploadBox.addEventListener("dragover", function (e) {
    e.preventDefault();
    // console.log('dragover');
    this.style.backgroundColor = "#1159c5";
    this.style.color = "#FFF";
  });

  /* 박스 밖으로 Drag가 나갈 때 */
  uploadBox.addEventListener("dragleave", function (e) {
    // console.log('dragleave');
    this.style.backgroundColor = "white";
    this.style.color = "#555";
  });

  /* 박스 안에서 Drag를 Drop했을 때 */
  uploadBox.addEventListener("drop", function (e) {
    e.preventDefault();
    // console.log('drop');
    this.style.backgroundColor = "white";
    this.style.color = "#555";

    var imageFile = e.dataTransfer.files[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const srcData = fileReader.result;
      resultText.innerText = srcData;
      resultCSSBackground.innerText = `.element {
    background-image: url(${srcData});
  }`;
      wrap.style.display = "none";
      resultWrap.style.display = "block";
      previewImage.src = srcData;

      tempResultText.value = srcData;
      tempResultCssBg.value = `.element {
    background-image: url(${srcData});
  }`;
    };

    fileReader.readAsDataURL(imageFile);
  });

  //
  btnResultClose.addEventListener("click", function (e) {
    e.preventDefault();
    resultWrap.style.display = "none";
    wrap.style.display = "block";
  });

  btnCopyText.addEventListener("click", function (e) {
    var editorHTMLValue = tempResultText.value;
    window.navigator.clipboard.writeText(editorHTMLValue).then(() => {
      alert("raw base64 내용이 클립보드에 복사되었습니다!");
    });
  });

  btnCopyCSSBg.addEventListener("click", function (e) {
    var editorHTMLValue = tempResultCssBg.value;
    window.navigator.clipboard.writeText(editorHTMLValue).then(() => {
      alert("CSS 배경용 base64 내용이 클립보드에 복사되었습니다!");
    });
  });
});
