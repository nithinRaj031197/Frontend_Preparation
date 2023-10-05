import globalStyle from "./globalStyles.mjs";

const selectedColor = document.querySelectorAll("#selected-color");
const colorPickerA = document.getElementById("color-picker-a");
const colorPickerB = document.getElementById("color-picker-b");

colorPickerA.onchange = (e) => {
  globalStyle.setPropertyValue("color", e.target.value);

  const color = globalStyle.getPropertyByName("color");

  selectedColor.forEach((elem) => {
    elem.innerHTML = color;
  });

  colorPickerB.value = color;
};
