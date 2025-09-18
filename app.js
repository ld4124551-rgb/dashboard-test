// Données du dashboard
const dashboardData = [
    {"Année": 2017, "Semestre": "S1", "Volume": 420, "Audience": 81, "Tonalité": 12.4, "Prises_Parole": 22.0, "Médiatisation": 40.0, "Messages_Clés": 36.0, "Période": "2017-S1"},
    {"Année": 2017, "Semestre": "S2", "Volume": 560, "Audience": 86, "Tonalité": 11.3, "Prises_Parole": 26.0, "Médiatisation": 42.0, "Messages_Clés": 22.0, "Période": "2017-S2"},
    {"Année": 2018, "Semestre": "S1", "Volume": 481, "Audience": 90, "Tonalité": 11.9, "Prises_Parole": 21.0, "Médiatisation": 46.0, "Messages_Clés": 21.0, "Période": "2018-S1"},
    {"Année": 2018, "Semestre": "S2", "Volume": 784, "Audience": 91, "Tonalité": 11.5, "Prises_Parole": 13.0, "Médiatisation": 34.0, "Messages_Clés": 16.0, "Période": "2018-S2"},
    {"Année": 2019, "Semestre": "S1", "Volume": 688, "Audience": 79, "Tonalité": 11.4, "Prises_Parole": 14.0, "Médiatisation": 31.0, "Messages_Clés": 16.0, "Période": "2019-S1"},
    {"Année": 2019, "Semestre": "S2", "Volume": 635, "Audience": 62, "Tonalité": 11.4, "Prises_Parole": 13.0, "Médiatisation": 36.0, "Messages_Clés": 28.0, "Période": "2019-S2"},
    {"Année": 2020, "Semestre": "S1", "Volume": 757, "Audience": 114, "Tonalité": 11.5, "Prises_Parole": 33.0, "Médiatisation": 51.0, "Messages_Clés": 31.0, "Période": "2020-S1"},
    {"Année": 2020, "Semestre": "S2", "Volume": 594, "Audience": 89, "Tonalité": 11.4, "Prises_Parole": 29.0, "Médiatisation": 41.0, "Messages_Clés": 31.0, "Période": "2020-S2"},
    {"Année": 2021, "Semestre": "S1", "Volume": 545, "Audience": 68, "Tonalité": 11.8, "Prises_Parole": 29.0, "Médiatisation": 45.0, "Messages_Clés": 29.0, "Période": "2021-S1"},
    {"Année": 2021, "Semestre": "S2", "Volume": 678, "Audience": 71, "Tonalité": 11.5, "Prises_Parole": 27.0, "Médiatisation": 51.0, "Messages_Clés": 24.0, "Période": "2021-S2"},
    {"Année": 2022, "Semestre": "S1", "Volume": 668, "Audience": 52, "Tonalité": 12.0, "Prises_Parole": 30.0, "Médiatisation": 45.0, "Messages_Clés": 35.0, "Période": "2022-S1"},
    {"Année": 2022, "Semestre": "S2", "Volume": 600, "Audience": 70, "Tonalité": 11.4, "Prises_Parole": 26.0, "Médiatisation": 30.0, "Messages_Clés": 15.0, "Période": "2022-S2"},
    {"Année": 2023, "Semestre": "S1", "Volume": 668, "Audience": 63, "Tonalité": 11.2, "Prises_Parole": 11.0, "Médiatisation": 22.0, "Messages_Clés": 16.0, "Période": "2023-S1"},
    {"Année": 2023, "Semestre": "S2", "Volume": 594, "Audience": 59, "Tonalité": 11.6, "Prises_Parole": 18.0, "Médiatisation": 21.0, "Messages_Clés": 17.0, "Période": "2023-S2"},
    {"Année": 2024, "Semestre": "S1", "Volume": 875, "Audience": 133, "Tonalité": 12.5, "Prises_Parole": 22.0, "Médiatisation": 35.0, "Messages_Clés": 40.0, "Période": "2024-S1"},
    {"Année": 2024, "Semestre": "S2", "Volume": 710, "Audience": 60, "Tonalité": 11.7, "Prises_Parole": 20.0, "Médiatisation": 23.0, "Messages_Clés": 28.0, "Période": "2024-S2"},
    {"Année": 2025, "Semestre": "S1", "Volume": 624, "Audience": 41, "Tonalité": 12.2, "Prises_Parole": 16.0, "Médiatisation": 25.0, "Messages_Clés": 30.0, "Période": "2025-S1"}
];

// Initialisation du dashboard
document.addEventListener('DOMContentLoaded', function() {
    console.log('Dashboard médiatique initialisé avec', dashboardData.length, 'périodes de données');
    
    // Mettre à jour le compteur de résultats
    const resultsCount = document.getElementById('resultsCount');
    if (resultsCount) {
        resultsCount.textContent = dash
