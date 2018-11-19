
function callAPI(id){
    var url = "http://localhost/u6088107/api/?id="+id;
    $.getJSON(url,function (data,status){
        setMarker(Number(data.placelat),Number(data.placelong),data.placename);
    })
}
$(document).ready(function() {
    $("#submit").click(function() {
      const id = $("#id").val();
      callAPI(id);
    });
});