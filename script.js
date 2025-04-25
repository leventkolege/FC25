// Password for Admin Login
const correctPassword = "securepassword123"; // Change this to your desired password

// Predefined Teams
const teams = [
  "Aston Villa - Huseyin", "PSG - Harun", "M.City - Diren", "Liverpool - Cagatay",
  "Fenerbahce - Batu", "Arsenal - Caglar", "Galatasaray - Levent", "Inter - Ugur",
  "Barcelona - Alperen", "Real Madrid - Baris"
];

// Fixture Data
const fixtures = {
  "Round 1": [
    "Aston Villa - Huseyin vs PSG - Harun",
    "M.City - Diren vs Liverpool - Cagatay",
    "Fenerbahce - Batu vs Arsenal - Caglar",
    "Galatasaray - Levent vs Inter - Ugur",
    "Barcelona - Alperen vs Real Madrid - Baris"
  ],
  "Round 2": [
    "Liverpool - Cagatay vs Aston Villa - Huseyin",
    "Arsenal - Caglar vs PSG - Harun",
    "Inter - Ugur vs M.City - Diren",
    "Real Madrid - Baris vs Fenerbahce - Batu",
    "Barcelona - Alperen vs Galatasaray - Levent"
  ],
  // Add all other rounds here...
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

// Display Fixture
const displayFixture = () => {
  const fixtureRounds = document.getElementById('fixtureRounds');
  for (const [round, matches] of Object.entries(fixtures)) {
    const roundDiv = document.createElement('div');
    roundDiv.classList.add('round');

    // Round Title
    const roundTitle = document.createElement('h3');
    roundTitle.textContent = round;
    roundTitle.onclick = () => {
      const matchList = roundDiv.querySelector('ul');
      matchList.style.display = matchList.style.display === 'none' ? 'block' : 'none';
    };

    // Match List
    const matchList = document.createElement('ul');
    matches.forEach(match => {
      const matchItem = document.createElement('li');
      matchItem.textContent = match;
      matchList.appendChild(matchItem);
    });

    roundDiv.appendChild(roundTitle);
    roundDiv.appendChild(matchList);
    fixtureRounds.appendChild(roundDiv);
  }
};

// Initialize Fixture
displayFixture();
