<?php require("script.php") ?>
<!DOCTYPE html>
<html>
  <link href="./images/stylesheet.css" rel="stylesheet" type="text/css" />
  <head>
    <style>
      body,
      html {
        margin: 0;
        height: 100%;
      }

      @font-face {
        font-family: Spoof-Bold;
        src: url("images/Spoof-Bold.ttf");
      }

      .intro {
        /* The image used */
        background-position: center;
        /* Full height */
        height: 100%;
        width: 100%;
        position: relative;
        background-size: 100vw 100vh;
        background-repeat: no-repeat;
        background-size: cover;
        font-size: 0;
      }

      .image-container {
        align-items: center;
        text-align: center;
        width: 100%;
        font-family: Spoof-Bold;
        top: 5%;
        font-size: 15px;
        position: absolute;
      }

      .button_container {
        left: 15%;
        top: 30%;
        position: absolute;
        width: 40px;
        cursor: pointer;
      }

      .button-container-subtitle {
        align-items: center;
        text-align: center;
        width: 100%;
        font-family: Spoof-Bold;
        top: 26%;
        font-size: 15px;
        position: absolute;
      }

      .button {
        border: none;
        text-align: center;
        text-decoration: none;
        font-size: 25px;
        width: 400px;
        height: 90px;
        vertical-align: middle;
        line-height: 90px; /* same as height! */
        margin-left: 100px;
        margin-right: 100px;
        display: inline-block;
        background-color: white;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 25px;
        font-family: Spoof-Bold;
      }

      .button-subtitle {
        top: 50%;
        border: none;
        padding: 20px 65px;
        text-align: center;
        text-decoration: none;
        font-size: 20px;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 25px;
        color: white;
      }

      .frame {
        width: 100%;
        height: 100%;
      }

      .bar {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(2, 20, 19, 0.829);
      }

      .list_container {
        width: 60%;
        position: absolute;
        top: 28%;
        bottom: 5%;
        left: 0;
        right: 0;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 25px;
        margin: auto;
        color: gray;
        background-color: white;
        font-family: Spoof-Bold;
      }

      .title {
        width: 60%;
        height: 10%;
        position: absolute;
        top: 5%;
        bottom: 0;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        line-height: 120%;
        font-family: Spoof-Bold;
        font-size: 60px;
        font-style: bold;
        margin-bottom: 0px;
        color: black;
      }
      .description {
        width: 60%;
        height: 10%;
        position: absolute;
        top: 15%;
        bottom: 0;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;

        text-align: center;
        line-height: 120%;
        font-family: Spoof-Bold;
        font-size: 30px;
        font-style: bold;
        margin-bottom: 0px;
        color: black;
      }

      .subtitle {
        width: 60%;
        height: 10%;
        position: absolute;
        top: 75%;
        left: 0;
        bottom: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        line-height: 120%;
        font-family: Spoof-Bold;
        font-size: 40px;
        font-style: bold;
        margin-bottom: 0px;
        color: black;
      }

      .listing {
        border: solid;
        border-width: 3px;
        border-color: gray;
        width: 99%;
        background-color: white;
        margin-left: auto;
        margin-right: auto;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 25px;
        color: black;
        justify-content: center;
        display: flex;
        align-items: center;
        font-size: 40px;
        font-family: Spoof-Bold;
      }

      label {
        display: inline-block;
        font-size: 50px;
        margin-left: 20px;
        margin-bottom: 5px;
      }

      .input-data {
        margin-left: 20px;
        margin-bottom: 5px;
      }

      .submit {
        margin-left: 20px;
        width: 95%;
        height: 50px;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 25px;
        background-color: #f5aa41;
        font-size: 30px;
        font-family: Spoof-Bold;
        cursor: pointer;
      }

      @media screen and (max-width: 1000px) {
        .button_container {
          left: 25%;
          top: 30%;
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .list_container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 80%;
          top: 35%;
          bottom: 15%;
        }

        .input-data {
          width: 100%;
        }

        .submit {
          width: 90%;
        }
      }
    </style>
  </head>

  <body>
    <div class="intro">
      <div class="bar">
        <div class="button_container">
          <img src="./images/search.png"width="70px;"onclick="window.location.href = './search.html'" style="margin-bottom: 10px"/>
          <img src="./images/start.png"width="70px;"onclick="window.location.href = './starttour.html'"style="margin-bottom: 10px"/>
          <img src="./images/anywhere.png"width="70px;"onclick="window.location.href = './anywhere.html'"style="margin-bottom: 10px"/>
          <img src="./images/social_icon.png"width="70px;"onclick="window.location.href = './social.html'"style="margin-bottom: 10px"/>
        </div>
        <img src="./images/close_button.png"style="position: absolute;top: 5%;right: 6%;margin: 10px;cursor: pointer;width: 70px;"width="50px;"onclick="window.location.href = './Main_Page.html'"/>
        
        <div class="title" style="color: white">Contribute your story!</div>
        <div class="description" style="color: white">
          Do you have a story that you would like to contribute to the story
          map? Fill in the form and we will contact you for an interview.
        </div>

        <div class="list_container">
          <form style="width: 100%" action="" method="post">
            <label for="fname" style="margin-top: 40px">Name</label>
            <input class="input-data"type="text"id="fname" name="name"value=""style="width: 93.5%; height: 20px"/>
            <label class="number_form"for="number"style="display: inline; margin-right: 15%">Phone Number</label>
            <label class="email_form" for="email" style="display: inline">E-mail</label><br />
            <input class="input-data"type="text"id="number"name="number" value=""style="display: inline; width: 45%; margin-right: 5px"/>
            <input class="input-data"type="email"id="email"name="email"value=""style="display: inline; width: 45%"/>
            <label for="story">Description of story</label>
            <input class="input-data"type="text"id="story"name="story"value=""style="width: 93.5%; height: 220px"/>
            <input type="submit" name="submit" value="Submit my Story!" class="submit" />
          </form>

        </div>
      </div>
      <iframe class="frame"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127576.85527137546!2d102.18129171220997!3d2.2373772717919405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d1ee278e8c65dd%3A0x32a7281769e016a!2sMalacca%2C%20Malaysia!5e0!3m2!1sen!2sae!4v1661842862412!5m2!1sen!2sae" width="600"height="450"style="border: 0"allowfullscreen=""loading="lazy"referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </body>
</html>
