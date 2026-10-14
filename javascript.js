// 1) جلب العناصر
const calculatorContainer = document.getElementById("calculator-container");
const displayArea = document.getElementById("display-area");

// 2) مسح الشاشة
function clear() {
  displayArea.textContent = "";
}

// 3) إضافة قيمة للشاشة
function addToDisplayArea(value) {
  displayArea.textContent = displayArea.textContent + value;
}

// 4) حذف آخر خانة
function deleteOneValue() {
  let currentContent = displayArea.textContent;
  displayArea.textContent = currentContent.substring(0, currentContent.length - 1);
}

// 5) حساب النتيجة
function evaluate() {
  try {
    let calculation = math.evaluate(displayArea.textContent);
    displayArea.textContent = calculation;
  } catch (error) {
    displayArea.textContent = "Invalid operation";
    console.error(error);
  }
}

// 6) الاستماع للنقرات
calculatorContainer.addEventListener("click", e => {
  if (e.target.nodeName === "BUTTON") {
    switch (e.target.textContent) {
      case "C":
        clear();
        break;
      case "Del":
        deleteOneValue();
        break;
      case "=":
        evaluate();
        break;
      default:
        addToDisplayArea(e.target.textContent);
    }
  }
});