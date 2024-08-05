// JSON 파일에서 데이터를 불러오는 함수
async function fetchData() {
  const response = await fetch("data.json");
  const data = await response.json();
  return data;
}

// 랜덤 문구 생성 함수
async function generateText() {
  // JSON 데이터를 불러옴
  const data = await fetchData();

  // 선택된 길이와 개수, 요소 유형 가져오기
  const length = document.getElementById("length").value;
  const count = parseInt(document.getElementById("count").value, 10);
  const element = document.getElementById("element").value;

  // 해당 길이의 문구 배열에서 랜덤으로 선택
  const selectedTexts = [];
  const textArray = data[length];
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * textArray.length);
    selectedTexts.push(textArray[randomIndex]);
  }

  // HTML 코드 생성 및 출력
  let htmlCode = "";
  switch (element) {
    case "p":
      htmlCode = selectedTexts.map((text) => `<p>${text}</p>`).join("\n");
      break;
    case "table":
      htmlCode = `<table border="1">\n${selectedTexts
        .map((text) => `  <tr><td>${text}</td></tr>`)
        .join("\n")}\n</table>`;
      break;
    case "ul":
      htmlCode = `<ul>\n${selectedTexts
        .map((text) => `  <li>${text}</li>`)
        .join("\n")}\n</ul>`;
      break;
    case "ol":
      htmlCode = `<ol>\n${selectedTexts
        .map((text) => `  <li>${text}</li>`)
        .join("\n")}\n</ol>`;
      break;
    case "dl":
      htmlCode = `<dl>\n${selectedTexts
        .map((text) => `  <dt>${text}</dt>\n  <dd>정의</dd>`)
        .join("\n")}\n</dl>`;
      break;
    default:
      break;
  }

  // 결과 출력
  document.getElementById("output").innerHTML = htmlCode;
  document.getElementById("codeOutput").value = htmlCode;
}

// 코드 복사 함수
function copyCode() {
  const codeOutput = document.getElementById("codeOutput");
  codeOutput.select();
  document.execCommand("copy");
  alert("코드가 복사되었습니다.");
}
