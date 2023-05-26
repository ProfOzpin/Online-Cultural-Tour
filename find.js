const wordCardTemplate = document.querySelector("[template]");
const wordCardContainer = document.querySelector("[container]");
const searchInput = document.getElementById("search");
const categoryCheckboxes = document.querySelectorAll('input[name="category"]');

let words = [];
let startTour = [];
let anywhereContent = [];
let socialContent = [];

console.log("Meow333333");

// Event listener for search input
searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    const filteredWords = words.filter((word) => {
      return word.Title.toLowerCase().includes(value);
    });
    updateCardContainer(filteredWords);
  });

  // Function to update card container with new set.
function updateCardContainer(filteredWords) {
    wordCardContainer.innerHTML = "";
    filteredWords.forEach((word) => {
      wordCardContainer.append(word.element);
    });
  }

  // Event listener for category checkboxes
categoryCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
      // Filter words based on checked categories
      const checkedCategories = Array.from(categoryCheckboxes)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value);
      let filteredWords;
      if (checkedCategories.length === 0) {
        filteredWords = words;
      } else {
        filteredWords = words.filter((word) => {
          return checkedCategories.includes(word.category);
        });
      }
      updateCardContainer(filteredWords);
    });
  });

  // Fetch from start_tour.json for Start the Tour
fetch("json_data/start_tour.json")
.then((res) => res.json())
.then((data) => {
  startTour = data.map((word) => {
    const card = wordCardTemplate.content.cloneNode(true).children[0];
    const header = card.querySelector("[title]");
    header.textContent = word.Title;
    wordCardContainer.append(card);
    card.addEventListener("click", function (e) {
      window.location.href = "curated.html?listings=" + word.id + ",";
    });
    return { Title: word.Title, element: card, category: "category1" };
  });
  words = [...startTour, ...anywhereContent, ...socialContent];
});

// Fetch from anywhere.json for Take me Anywhere
fetch("json_data/anywhere.json")
  .then((res) => res.json())
  .then((data) => {
    anywhereContent = data.map((word) => {
      const card = wordCardTemplate.content.cloneNode(true).children[0];
      const header = card.querySelector("[title]");
      header.textContent = word.Title;
      card.addEventListener("click", function (e) {
        window.location.href = "curated2.html?listings=" + word.id + ",";
    });    
      wordCardContainer.append(card);
      return { Title: word.Title, element: card, category: "category2" };
    });
    words = [...startTour, ...anywhereContent, ...socialContent];
  });

// Fetch from social.json for Social Medias
fetch("json_data/social.json")
  .then((res) => res.json())
  .then((data) => {
    socialContent = data.map((word) => {
      const card = wordCardTemplate.content.cloneNode(true).children[0];
      const header = card.querySelector("[title]");
      header.textContent = word.Title;
      wordCardContainer.append(card);
      card.addEventListener("click", function (e) {
        window.location.href = "curated3.html?listings=" + word.id + ",";
      });
      return { Title: word.Title, element: card, category: "category3" };
    });
    words = [...startTour, ...anywhereContent, ...socialContent];
  });