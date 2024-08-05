document.addEventListener("DOMContentLoaded", () => {
  const colorInputs = document.querySelectorAll(".input-color");
  const directionButtons = document.querySelectorAll(".direction");
  const color1Value = document.getElementById("color-1-value");
  const color2Value = document.getElementById("color-2-value");
  const codeOutput = document.getElementById("code");
  const copyButton = document.getElementById("btn-copy-code");
  const generateButton = document.getElementById("btn-generate");
  let currentDirection = "to right";

  // 초기 설정: 랜덤 색상 생성 및 설정
  function randomColor() {
    return (
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
    );
  }

  function setRandomColors() {
    colorInputs[0].value = randomColor();
    colorInputs[1].value = randomColor();
    updateColorValues();
    updateGradientPreview();
  }

  // 색상 값을 업데이트
  function updateColorValues() {
    color1Value.textContent = colorInputs[0].value;
    color2Value.textContent = colorInputs[1].value;
  }

  // 그라디언트 미리보기 업데이트
  function updateGradientPreview() {
    const gradient = `linear-gradient(${currentDirection}, ${colorInputs[0].value}, ${colorInputs[1].value})`;
    codeOutput.value = `background-image: ${gradient};`;
  }

  // 실제 그라디언트 적용
  function updateGradient() {
    const gradient = `linear-gradient(${currentDirection}, ${colorInputs[0].value}, ${colorInputs[1].value})`;
    document.body.style.backgroundImage = gradient;
  }

  // 방향 버튼 클릭 이벤트
  directionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      directionButtons.forEach((btn) => btn.classList.remove("is-active"));
      button.classList.add("is-active");
      currentDirection = button.getAttribute("data-direction");
      updateGradientPreview();
    });
  });

  // 색상 변경 이벤트
  colorInputs.forEach((input) => {
    input.addEventListener("input", () => {
      updateColorValues();
      updateGradientPreview();
    });
  });

  // CSS 코드 복사 기능
  copyButton.addEventListener("click", () => {
    codeOutput.select();
    document.execCommand("copy");
    alert("CSS 코드가 클립보드에 복사되었습니다!");
  });

  // Generate 버튼 클릭 시 그라디언트 적용
  generateButton.addEventListener("click", () => {
    updateGradient();
  });

  // 페이지 로드 시 초기화
  setRandomColors();
  updateGradient();
});
