// Password for Admin Login
const correctPassword = "securepassword123"; // Change this to your desired password

// Predefined Teams
const teams = [
  "Team A", "Team B", "Team C", "Team D", "Team E",
  "Team F", "Team G", "Team H", "Team I", "Team J"
];

// Fixture Data (Example)
const fixtures = [
  "Team A vs Team B",
  "Team C vs Team D",
  "Team E vs Team F",
  "Team G vs Team H",
  "Team I vs Team J"
];

// League Data
let leagueTable = teams.map(team => ({
  name: team,
  played: 0,
  won: 0,
  drawn: 0,
  lost: 0,
  points: 0,
}));

// Display Fixture
const displayFixture = () => {
  const fixtureList = document.getElementById('fixtureList');
  fixtures.forEach(match => {
    const listItem = document.createElement('li');
    listItem.textContent = match;
    fixtureList.appendChild(listItem);
  });
};

// Validate Password
const validatePassword = () => {
  const passwordInput = document.getElementById('passwordInput').value;
  const loginError = document.getElementById('loginError');
  const inputSection = document.getElementById('inputSection');
  const loginSection = document.getElementById('loginSection');

  if (passwordInput === correctPassword) {
    loginSection.style.display = "none";
    inputSection.style.display = "block";
  } else {
    loginError.style.display = "block";
  }
};

// Update League Table
const updateLeagueTable = () => {
  const resultsInput = document.getElementById('resultsInput').value;
  const tableBody = document.getElementById('tableBody');

  // Parse Results (Example: "Team A 2-1 Team B")
  const resultRegex = /(.+?)\s(\d+)-(\d+)\s(.+)/;
  const match = resultsInput.match(resultRegex);

  if (match) {
    const team1 = match[1].trim();
    const score1 = parseInt(match[2]);
    const score2 = parseInt(match[3]);
    const team2 = match[4].trim();

    // Update Stats
    const team1Data = leagueTable.find(t => t.name === team1);
    const team2Data = leagueTable.find(t => t.name === team2);

    if (team1Data && team2Data) {
      team1Data.played++;
      team2Data.played++;

      if (score1 > score2) {
        team1Data.won++;
        team2Data.lost++;
        team1Data.points += 3;
      } else if (score1 < score2) {
        team2.won++;
        team1Data.lost++;
        team2Data.points += 3;
      } else {
        team1Data.drawn++;
        team2Data.drawn++;
        team1Data.points++;
        team2Data.points++;
      }
    }

    // Sort Table
    leagueTable.sort((a, b) => b.points - a.points || a.name.localeCompare(b.name));

    // Update Table Display
    tableBody.innerHTML = "";
    leagueTable.forEach((team, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${team.name}</td>
        <td>${team.played}</td>
        <td>${team.won}</td>
        <td>${team.drawn}</td>
        <td>${team.lost}</td>
        <td>${team.points}</td>
      `;
      tableBody.appendChild(row);
    });

    // Clear the input field
    document.getElementById('resultsInput').value = "";
  } else {
    alert("Invalid result format. Please use 'Team A 2-1 Team B' format.");
  }
};

// Initialize Fixture and Table
displayFixture();