window.onload = function () {
  // Declarations
  const title = document.getElementById("title");
  const handle = document.getElementById("social_handle"); // The actual embed itself
  const frame = document.getElementById("frame");
  var index = 0;
  var current;

  // To be used to keep track of what type of social media the user selects.
  var type = "tiktok";
  var ran = false;

  function load_html(type, current) {
    title.textContent = current.Title;

    // Type stores the type of social media, and then we use that to create a new string by combining it with "_data_embed_id"
    // This lets us call the value from the json file.
    // For example if type = "tiktok", then "tiktok" + "_data_embed_id" gets us "tiktok_data_embed_id" which returns current.tiktok_data_embed_id from the JSON file.
    handle.setAttribute("data-embed-id", current[type + "_data_embed_id"]);
    handle.style.visibility = "visible";
    
    frame.src = current.Location;

    reload(type);
    ran = true;
  }

  function reload(type) {
    // Gets rid of the previously created script tag (If there was one)
    if (ran == true) {
      document.getElementById("social_script").remove();
    }

    var newScriptElement = document.createElement("script");
    newScriptElement.type = "text/javascript";
    newScriptElement.id = "social_script";

    // Gives it the correct script link based on social media type
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
    
    //new 'script' element is appended to the ID 'script_holder' that is in the html file.
    document.getElementById("script_holder").appendChild(newScriptElement);
  }

  fetch("./json_data/social.json")
    .then((res) => res.json())
    .then((data) => {
      index = 0;
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
