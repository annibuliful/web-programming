/*
  get random joke from API
*/
function getRandomJoke(name) {
  const url = `http://localhost/jokeService.php?name=${name}`;
  $.get(url, function({ setup, punchline, score }, status) {
    $("#your-joke").html(`
      ${setup}
      <br><br>
      ${punchline}
      <p>Your score is ${score}</p>
      `);
  });
}

$(document).ready(function() {
  $("#random-joke").click(function() {
    const name = $("#name").val();
    if (name.length === 1) {
      $("#alert").empty();
      getRandomJoke(name);
    } else {
      $("#alert").text(
        "I told you that input ONLY first character of your nickname"
      );
    }
  });
});
