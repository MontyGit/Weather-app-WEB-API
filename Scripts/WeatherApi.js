﻿<p id="reply">

</p>
    <button>Get Weather</button>
    <script>
        $(document).ready(function)(){
            $("button").click(function () {

                $.get("http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=9d4f5b53afebb4cbf5a9bab392352bab&units=imperial", function (response) {
                    $("#reply").text(response.name);
                    console.log(response)
                });
            });
        });
</script>