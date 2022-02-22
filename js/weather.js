jQuery(document).ready(function ($) {


    jQuery('#get-weather').on('click', function () {

        const zipcode = $("input#zipcode").val();
        const apiKey = 'd636d1643ef0d31c83cfa378324cd157';
        const country = 'us';
        const weatherApiUrl = `http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},${country}&appid=${apiKey}`;

        //show spinner
        $('#spin').toggleClass('d-none');


        axios.get(weatherApiUrl).then(function (response) {
            //Hide spinner
            $('#spin').toggleClass('d-none');
            const {weather, main, name} = response.data;
            const {temp, feels_like} = main;
            const { description, icon} = weather[0];
            tempFarenheight = Math.floor((temp - 273.15) * (9/5) + 32);
            console.log(zipcode);
            console.log(response.data);

            const weatherHtml = `
            <div class="container  bg-info rounded">
                <div class="row">
                    <h4>${name}</h4>
                </div>
                <div class="row">
                    <div class="col">
                        <img src="http://openweathermap.org/img/wn/${icon}@2x.png">
                    </div>
                    <div class="col">
                        <p>Today: ${description}</p>
                        <p>Temperature: ${tempFarenheight}&#176;</p>
                    </div>
                </div>
            </div>
        `;
        $('#response-weather').html(weatherHtml);

        }).catch(function (error) {
            // Something better should happen here
        });


       
    });
});