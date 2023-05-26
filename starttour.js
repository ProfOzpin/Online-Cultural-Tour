window.onload = function () {
  const title = document.getElementById("title");
  const sub = document.getElementById("sub");
  const content = document.getElementById("content");
  const frame = document.getElementById("frame");
  const website = document.getElementById("website");
  const direction = document.getElementById("direction");

  var index = 0;
  var current;

  fetch("./json_data/start_tour.json")
    .then((res) => res.json())
    .then((data) => {
      index = 0;
      current = data[index];
      title.textContent = current.Title;
      sub.textContent = current.Subtitle_2;
      content.textContent = current.Body;
      frame.src = current.streetview_link;
      
      //Event listener for 'Next' button
      document.getElementById("next").onclick = function () {
        index++;
        current = data[index];
        title.textContent = current.Title;
        sub.textContent = current.Subtitle;
        content.textContent = current.Body;
        frame.src = current.streetview_link;
      };
      //Event listener for 'Back' button
      document.getElementById("back").onclick = function () {
        if (index > 0) {
          index--;
          current = data[index];
          title.textContent = current.Title;
          sub.textContent = current.Subtitle;
          content.textContent = current.Body;
          frame.src = current.streetview_link;
        }
      };

      //Event listener for website button
      website.onclick = function () {
        window.location.href = current.Website;
      };

      //Event listener for direction button
      direction.onclick = function () {
        window.location.href = current.Directions;
      };
    });
};
