async function getWeather() {
    const city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const apiKey = "858630e7211d49118da72617260606";
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            alert("City not found");
            return;
        }

        document.getElementById("city").innerText = data.location.name;
        document.getElementById("temperature").innerText =
            `${data.current.temp_c}°C`;

        document.getElementById("condition").innerText =
            `Condition: ${data.current.condition.text}`;

        document.getElementById("humidity").innerText =
            `Humidity: ${data.current.humidity}%`;

        document.getElementById("weatherIcon").src =
            "https:" + data.current.condition.icon;

    } catch (error) {
        console.log(error);
        alert("Something went wrong");
    }
}