const inputs = document.querySelectorAll(".controls input");
const color = document.querySelector(".color-picker input");

const handleUpdate = (event) => {
  const suffix = event.target.dataset.sizing || "";

  document.documentElement.style.setProperty(
    `--${event.target.name}`,
    `${event.target.value}` + suffix
  );
};

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));

color.addEventListener("change", handleUpdate);
color.addEventListener("mousemove", handleUpdate);
