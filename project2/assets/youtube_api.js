const apikey = "AIzaSyAWPB2dUkyPM0DAE0YYWpECUJoU-BmpRFU";

function renderVideoCard(
  title,
  coverImage,
  author,
  youtubeId,
  description,
  publishDate
) {
  return `
  <div class="col-md-6 col-sm-12 col-xs-12">
    <a href="http://www.youtube.com/embed/${youtubeId}">
      <div class="youtube-card-container">
        <div class="youtube-card-desktop">
          <div class="side">
            <img src="${coverImage}">
            <p class="text-center title">${title}</p>
            <p class="date">publish: ${publishDate} </p>
          </div>
          <div class="side back"><p><b>Youtuber name</b>: ${author}</p>
            <p class="decription">
              <b>Description</b>
              :${description}
            </p>
          </div>
        </div>
      </div>
      <div class="youtube-card">
        <img src="${coverImage}">
        <p class="text-center title">${title}</p>
        <p class="date">publish: ${publishDate} </p>
      </div>
    </a>
  </div>
  `;
}

/*
 * mapping data to be new Array which return only the necessary datas
 */
function mapYoutubeData(data) {
  return data.map(value => {
    // formate Unix time to be normal date
    const date = dayjs(value.snippet.publishedAt).format("DD / MMM / YYYY");
    // In some case, the data will be playlist.
    if (value.id.videoId) {
      return {
        title: value.snippet.title,
        coverImage: value.snippet.thumbnails.high.url,
        authorTitle: value.snippet.channelTitle,
        videoId: value.id.videoId,
        description: value.snippet.description,
        publishDate: date
      };
    } else {
      return {
        title: value.snippet.title,
        coverImage: value.snippet.thumbnails.high.url,
        authorTitle: value.snippet.channelTitle,
        playlistId: value.id.playlistId,
        description: value.snippet.description,
        publishDate: date
      };
    }
  });
}

/*
 * event listener when user input keyword
 */
$("#submit").on("click", function() {
  $("#youtube-result").empty();
  let keyword = $("#searchinput").val();
  const URL = `https://content.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${keyword}&key=${apikey}`;
  $.get(URL, function(data, status) {
    $(".header").show();
    // map data
    const allVideos = mapYoutubeData(data.items);

    // iterate each data
    allVideos.map(value => {
      if (value.videoId) {
        const htmlTemplate = renderVideoCard(
          value.title,
          value.coverImage,
          value.authorTitle,
          value.videoId,
          value.description,
          value.publishDate
        );
        $("#youtube-result").append(htmlTemplate);
      } else {
        const htmlTemplate = renderVideoCard(
          value.title,
          value.coverImage,
          value.authorTitle,
          value.videoId,
          value.description,
          value.publishDate
        );
        $("#youtube-result").append(htmlTemplate);
      }
    });
  });
});
