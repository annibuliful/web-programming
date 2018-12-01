const APIkey = "AIzaSyAWPB2dUkyPM0DAE0YYWpECUJoU-BmpRFU";
const cx = "017576662512468239146:omuauf_lfve";

// map data
function mapData(data) {
  return data.map(function(value) {
    return {
      title: value.title,
      description: value.snippet,
      link: value.link,
      website: value.displayLink
    };
  });
}
// google template card
function display(title, description, link, website) {
  return `
  <div class="col-md-12 col-sm-12 col-sx-12 google-card">
    <a href="${link}">
      <div class="google-card-icon"></div>
      <div class="google-card-detail">
        <h4>${title}</h4>
        <p>${website}</p>
        <p>${description}</p>
      </div>
    </a>
  </div>
  `;
}

// event listener
$("#submit").on("click", function() {
  $("#google-result").empty();
  let keyword = $("#searchinput").val();
  const URL = ` https://www.googleapis.com/customsearch/v1?key=${APIkey}&cx=${cx}&q=${keyword}`;
  $.get(URL, function(data, status) {
    $(".header").show();
    const listOfData = mapData(data.items);
    listOfData.map(function(value) {
      $("#google-result").append(
        display(value.title, value.description, value.link, value.website)
      );
    });
  });
});
