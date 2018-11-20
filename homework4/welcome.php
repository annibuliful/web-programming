<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Programming Jokes</title>
    <link rel="stylesheet" type="text/css" href="assets/style.css">
  </head>
  <body>
    <div class="header">
      <img src="assets/!false.jpg" alt="Snow">
      <div class="centered">
        <h6><?php echo date("D / M / Y");?></h6>
        <h2>Your joke is:</h2>
        <h3 style="text-align: center" id="your-joke"></h3>
      </div>
    </div>
    <div class="center">
      <div>Input first character of your nickname:
        <input class="input-name" id="name" type="text" autocomplete="off">
        <button class="btn-joke btn-joke-color" id="random-joke">random</button>
        <h3 id="alert" style="color: red"></h3>
      </div>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="assets/index.js"></script>
  </body>
</html>
