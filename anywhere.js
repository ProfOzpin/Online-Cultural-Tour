window.onload = function () {
  const title = document.getElementById("title");
  const website = document.getElementById("website");
  const direction = document.getElementById("direction");
  const image = document.getElementById("image");
  const sub1 = document.getElementById("sub1");
  const sub2 = document.getElementById("sub2");
  const content = document.getElementById("content");
  const frame = document.getElementById("frame");

  var index = 0;
  var current;

  console.log ("Hi");
  fetch("./json_data/anywhere.json")
    .then((res) => res.json())
    .then((data) => {
      index = 0;
      image_index = 0;
      current = data[index];
      title.textContent = current.Title;
      sub1.textContent = current.Subtitle_1;
      sub2.textContent = current.Subtitle_2;
      content.textContent = current.Body;
      image.style.backgroundImage = "url(" + current.Image_path[0] + ")";  
      frame.src = current.Location;

      //Event listener for 'Next' button
      document.getElementById("next").onclick = function () {
        image_index = 0;
        index++;
        current = data[index];
        title.textContent = current.Title;
        sub1.textContent = current.Subtitle_1;
        sub2.textContent = current.Subtitle_2;
        content.textContent = current.Body;
        image.style.backgroundImage = "url(" + current.Image_path[0] + ")";
        frame.src = current.Location;
      };

      //Event listener for 'Back' button
      document.getElementById("back").onclick = function () {
        if (index > 0) {
          image_index = 0;
          index--;
          current = data[index];
          title.textContent = current.Title;
          sub1.textContent = current.Subtitle_1;
          sub2.textContent = current.Subtitle_2;
          content.textContent = current.Body;
          image.style.backgroundImage = "url(" + current.Image_path[0] + ")";
          frame.src = current.Location;
        }
      };

      //Event listener for 'Next Image' button
      document.getElementById("next_image").onclick = function () {
        if (typeof current.Image_path[image_index + 1] != "undefined") {
          image.style.backgroundImage =
            "url(" + current.Image_path[image_index + 1] + ")";
          image_index += 1;
        }
      };

      //Event listener for 'Previous Image' button
      document.getElementById("prev_image").onclick = function () {
        if (typeof current.Image_path[image_index - 1] != "undefined") {
          image.style.backgroundImage =
            "url(" + current.Image_path[image_index - 1] + ")";
          image_index -= 1;
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