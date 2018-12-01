function twitterTemplate(
  profileImage,
  userName,
  tweet,
  scorePositive,
  scoreNegative,
  scoreNeural
) {
  return `
    <div class=\"col-md-6 col-sm-12 col-xs-12\">
      <div class=\"twitter-card\">
        <img src=\"${profileImage}\" alt=\"Avatar\">
        <h4><b>${userName}</b></h4>
        <p>${tweet}</p>
        <p>Positive Score: ${scorePositive}</p>
        <p>Negative Score: ${scoreNegative}</p>
        <p>Neural Score: ${scoreNeural}</p>
      </div>
    </div>
  `;
}

$("#submit").on("click", function() {
  $("#twitter-result").empty();
  let keyword = $("#searchinput").val();
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const listTweet = JSON.parse(this.responseText);
      console.log(listTweet);
      listTweet.map(value => {
        $("#twitter-result").append(
          twitterTemplate(
            value.profileImage,
            value.profileName,
            value.tweet,
            value.positive,
            value.negative,
            value.neural
          )
        );
      });
    }
  };
  xmlhttp.open("GET", "api.php?key=" + keyword, true);
  xmlhttp.send();
});
