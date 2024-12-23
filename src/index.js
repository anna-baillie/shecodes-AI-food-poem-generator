function generatePoem(event) {
  event.preventDefault();

  //   let poemContainer = document.querySelector(".poem-holder");
  //   poemContainer.innerHTML = "Generating poem...";

  new Typewriter(".poem-holder", {
    strings: "Generating poem...",
    autoStart: true,
    delay: 60,
    cursor: null,
  });
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
