window.onload = function () {
  // Declarations
  const title = document.getElementById("title");
  const handle = document.getElementById("social_handle");
  const frame = document.getElementById("frame");
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  
  var index = 0;
  var current;

  var type = "tiktok";
  var ran = false;

  function load_html(type, current) {
    title.textContent = current.Title;

    handle.setAttribute("data-embed-id", current[type + "_data_embed_id"]);

    handle.style.visibility = "visible";

    frame.src = current.Location;

    reload(type);
    ran = true;
  }

  function reload(type) {
    if (ran == true) {
      document.getElementById("social_script").remove();
    }

    var newScriptElement = document.createElement("script");
    newScriptElement.type = "text/javascript";
    newScriptElement.id = "social_script";

    if (type == "tiktok") {
      newScriptElement.src =
        "https://widgets.sociablekit.com/tiktok-hashtag-feed/widget.js?" +
        Math.floor(Math.random() * 10000000);
    } else if (type == "insta") {
      newScriptElement.src =
        "https://widgets.sociablekit.com/instagram-hashtag-feed/widget.js?" +
        Math.floor(Math.random() * 10000000);
    } else {
    }

    document.getElementById("script_holder").appendChild(newScriptElement);
  }

  console.log("Hi");
  fetch("./json_data/social.json")
    .then((res) => res.json())
    .then((data) => {
      index = parseInt(urlParams.get("listings"));
      current = data[index];

      load_html(type, current);

      document.getElementById("next").onclick = function () {
        if (!(typeof data[index + 1] === "undefined")) {
          index++;
          current = data[index];
          load_html(type, current);
        }
      };
      document.getElementById("back").onclick = function () {
        if (index > 0) {
          console.log("back");
          index--;
          current = data[index];

          load_html(type, current);
        }
      };

      // Assigns the type and updates handle to the correct class
      document.getElementById("select_tiktok").onclick = function () {
        handle.style.visibility = "hidden";
        index = 0;
        current = data[index];
        type = "tiktok";
        handle.setAttribute("class", "sk-ww-tiktok-hashtag-feed");
        load_html(type, current);
      };

      document.getElementById("select_instagram").onclick = function () {
        handle.style.visibility = "hidden";
        index = 0;
        current = data[index];
        type = "insta";
        handle.setAttribute("class", "sk-ww-instagram-hashtag-feed");
        load_html(type, current);
      };
    });
};
