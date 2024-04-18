const containerEl = document.querySelector(".container");

const heroes = ["superman", "spiderman", "batman", "hulk"];

let heroesIndex = 0;

let characterIndex = 0;

getHero();

function getHero() {
  characterIndex++;
  containerEl.innerHTML = `
<h1>I am a ${heroes[heroesIndex].slice(0, characterIndex)}</h1>
`;

  if (characterIndex === heroes[heroesIndex].length) {
    heroesIndex++;
    characterIndex = 0;
  }
  if (heroesIndex === heroes.length) {
    heroesIndex = 0;
  }

  setTimeout(getHero, 400);
}
