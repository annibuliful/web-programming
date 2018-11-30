const APIkey = "AIzaSyBwdnMGnnef_olJQKcXr396eSmkCLGtrJs";
const cx = "017576662512468239146:omuauf_lfve";

function mapData(data) {
  return data.map(function(value) {
    return {
      title: value.title,
      description: value.snippet,
      link: value.link
    };
  });
}

function display(title, description, link) {
  return `
  <div class="col-md-12 col-sm-12 col-xs-12">
      <div class="card">
        <div>
          <h4><a href="${link}"><b>${title}</b></a></h4> 
          <p>${description}</p> 
        </div>
      </div>
  </div>
  `;
}
$("#submit").on("click", function() {
  let keyword = $("#searchinput").val();
  const URL = ` https://www.googleapis.com/customsearch/v1?key=${APIkey}&cx=${cx}&q=${keyword}`;
  $.get(URL, function(data, status) {
    const listOfData = mapData(data.items);
    listOfData.map(function(value) {
      $("#custom-search").append(
        display(value.title, value.description, value.link)
      );
    });
  });
});
