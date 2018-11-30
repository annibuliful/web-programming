$("#submit").on("click", function() {
  let keyword = $("#searchinput").val();
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("twitter-search").innerHTML = this.responseText;
    }
  };
  xmlhttp.open("GET", "api.php?key=" + keyword, true);
  xmlhttp.send();
});
