async function fetchIPInfo() {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    document.getElementById("ipInfo").innerHTML = `
            <strong>IP:</strong> ${data.ip}<br>
            <strong>Locatie:</strong> ${data.city}, ${data.region}, ${data.country}<br>
            <strong>ISP:</strong> ${data.org}<br>
        `;
  } catch (error) {
    console.error("Fout bij het ophalen van IP-gegevens:", error);
    document.getElementById("ipInfo").innerHTML =
      "Fout bij het laden van gegevens.";
  }
}
window.onload = fetchIPInfo;
