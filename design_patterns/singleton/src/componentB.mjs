import globalStyles from "./globalStyles.mjs";

const selectedColor = document.querySelectorAll("#selected-color");
const colorPickerA = document.getElementById("color-picker-a");
const colorPickerB = document.getElementById("color-picker-b");

colorPickerB.onchange = (e) => {
  globalStyles.setPropertyValue("color", e.target.value);

  const color = globalStyles.getPropertyByName("color");

  selectedColor.forEach((elem) => {
    elem.innerHTML = color;
  });

  colorPickerA.value = color;
};
