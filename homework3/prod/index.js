const API_KEY = "AIzaSyAWCeMI4QmKOawb9kym3uZ3SiJMCJ8pFVY";
function videoCard(title, videoId, thumbnails) {
  return `
  <div class="card">
    <p>Title: ${title}</p>
    <img src="${thumbnails.medium.url}">
    <p>URL: <a href="http://www.youtube.com/embed/${videoId}">www.youtube.com/embed/${videoId}</a></p>
  </div>`;
}
function callYouTubeAPI(text) {
  const URL = `https://content.googleapis.com/youtube/v3/search?part=snippet&maxResults=21&q=${text}&type=video&key=${API_KEY}`;
  $.get(URL, function({ items }, status) {
    items.map(function(value) {
      $("#list-videos").append(
        videoCard(
          value.snippet.title,
          value.id.videoId,
          value.snippet.thumbnails
        )
      );
    });
  });
}

$(document).ready(function() {
  $("#btn-search").click(function() {
    const text = $("#input-search").val();
    $("#list-videos").empty();
    callYouTubeAPI(text);
  });
  $("#input-search").change(function() {
    const text = $(this).val();
    $("#list-videos").empty();
    callYouTubeAPI(text);
  });
});
