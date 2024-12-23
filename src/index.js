function showPoem(response) {
  let poem = response.data.answer;
  new Typewriter(".poem-holder", {
    strings: poem,
    autoStart: true,
    delay: 60,
    cursor: null,
  });
}

function generatePoem(event) {
  event.preventDefault();
  let poemBox = document.querySelector(".poem-holder");
  poemBox.innerHTML = "Generating poem...";
  let foodFocus = document.querySelector("#input-text");
  let apiKey = "8o2ff7498032b5ae4f9bt64daad694e7";
  let context =
    "You are a poet AI Assistant that tells short poems. The poem must not exceed 6 lines. The poem must be provided in HTML format. Example: <p>poem line </p>. Sign the poem at the end with SheCodes AI, inside <strong> tag.";
  let prompt = `Generate a unique poem about ${foodFocus.value}.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(showPoem);
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
