/*
 * a function for rendering chart to show the sentiment analysis
 */
function renderChart(positive, negative, neural) {
  const myChart = new Chart(document.getElementById("myChart"), {
    type: "pie",
    data: {
      labels: ["Positive", "Negative", "Neural"],
      datasets: [
        {
          label: "Twitter sentiment analysis",
          data: [positive, negative, neural],
          backgroundColor: [
            "rgba(0, 168, 42, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(221, 209, 51, 0.2)"
          ],

          borderColor: [
            "rgba(0, 168, 42, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(167, 123, 15, 1)"
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  });
}

/*
 * function for accumulating score from sentiment analysis result
 * it use before render chart
 */
function accumulateScore(data) {
  return data.reduce((current, next) => {
    return {
      positive: current.positive + next.positive,
      negative: current.negative + next.negative,
      neural: current.neural + next.neural
    };
  });
}

/*
 * function for return template to render twitter card
 */
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

/*
 * event listender when user input keyword
 */
$("#submit").on("click", function() {
  $("#twitter-result").empty();
  let keyword = $("#searchinput").val();
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    /*
     * AJAX state
     * 0 not initial
     * 1 setup request
     * 2 sent request
     * 3 wating data
     * 4 complete
     * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
     */
    if (this.readyState === 4 && this.status === 200) {
      // parse string to JSON format from server
      const listTweet = JSON.parse(this.responseText);
      // use function
      const score = accumulateScore(listTweet);
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
      renderChart(score.positive, score.negative, score.neural);
    }
  };
  xmlhttp.open("GET", "api.php?key=" + keyword, true);
  xmlhttp.send();
});
