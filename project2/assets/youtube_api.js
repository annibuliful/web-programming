const apikey = "AIzaSyBe4Hlu1O-J317pdBXWeZh9Cv2AMMrtEyI";

$("#submit").on("click", function() {
  let keyword = $("#searchinput").val();
  console.log(keyword);
  const URL = `https://content.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&key=${apikey}`;
  $.get(URL, function(data, status) {
    console.log(data);
    console.log(status);
  });
});
