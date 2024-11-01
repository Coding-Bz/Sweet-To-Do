let startTime = 0; // Startzeit in Millisekunden
let updatedTime = 0; // Zeit, die seit dem Start vergangen ist
let timeDifference = 0; // Differenz zwischen der aktuellen Zeit und der Startzeit
let timerInterval; // Intervall für die Zeitaktualisierung
let isRunning = false; // Status des Timers

// Funktion zum Starten der Stoppuhr
function start() {
    if (!isRunning) {
        startTime = new Date().getTime() - timeDifference; // Startzeit mit der vergangenen Differenz berechnen
        timerInterval = setInterval(updateTime, 1000); // Zeit jede Sekunde aktualisieren
        isRunning = true; // Timer läuft
    }
}

// Funktion zum Stoppen der Stoppuhr
function stop() {
    clearInterval(timerInterval); // Timer stoppen
    isRunning = false; // Timer nicht mehr laufend
}

// Funktion zum Zurücksetzen der Stoppuhr
function reset() {
    clearInterval(timerInterval); // Timer zurücksetzen
    timeDifference = 0; // Differenz auf 0 setzen
    isRunning = false; // Timer nicht mehr laufend
    document.getElementById("display").innerHTML = "00:00:00"; // Anzeige zurücksetzen
}

// Funktion zur Aktualisierung der Zeit
function updateTime() {
    updatedTime = new Date().getTime(); // Aktuelle Zeit abrufen
    timeDifference = updatedTime - startTime; // Differenz berechnen
    let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Stunden berechnen
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)); // Minuten berechnen
    let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000); // Sekunden berechnen

    // Stunden, Minuten und Sekunden im Format 00 anzeigen
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("display").innerHTML = `${hours}:${minutes}:${seconds}`; // Zeit im Format HH:MM:SS anzeigen
}
