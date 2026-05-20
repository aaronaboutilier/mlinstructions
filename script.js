const helloBtn = document.getElementById("hello-btn");
const helloOutput = document.getElementById("hello-output");

if (helloBtn && helloOutput) {
  helloBtn.addEventListener("click", () => {
    helloOutput.textContent = "Hello from vanilla JavaScript.";
  });
}
