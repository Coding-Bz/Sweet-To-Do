function selectTheme(theme) {
    // Speichere das ausgewählte Theme im Local Storage
    localStorage.setItem('selectedTheme', theme);
    // Füge die Theme-Klasse zum Body hinzu
    document.body.className = theme + '-theme';
  }
  
  // Lade das Theme aus dem Local Storage, wenn die Seite geladen wird
  window.onload = function() {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
      document.body.className = savedTheme + '-theme';
    }
  };
  