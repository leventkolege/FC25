// Password for Admin Login
const correctPassword = "securepassword123"; // Change this to your desired password

// Predefined Teams
const teams = [
  "Aston Villa - Huseyin", "PSG - Harun", "M.City - Diren", "Liverpool - Cagatay",
  "Fenerbahce - Batu", "Arsenal - Caglar", "Galatasaray - Levent", "Inter - Ugur",
  "Barcelona - Alperen", "Real Madrid - Baris"
];

// Fixture Data
const fixtures = [
  "Round 1: Aston Villa - Huseyin vs PSG - Harun",
  "Round 1: M.City - Diren vs Liverpool - Cagatay",
  "Round 1: Fenerbahce - Batu vs Arsenal - Caglar",
  "Round 1: Galatasaray - Levent vs Inter - Ugur",
  "Round 1: Barcelona - Alperen vs Real Madrid - Baris",
  "Round 2: Liverpool - Cagatay vs Aston Villa - Huseyin",
  "Round 2: Arsenal - Caglar vs PSG - Harun",
  "Round 2: Inter - Ugur vs M.City - Diren",
  "Round 2: Real Madrid - Baris vs Fenerbahce - Batu",
  "Round 2: Barcelona - Alperen vs Galatasaray - Levent",
  "Round 3: Aston Villa - Huseyin vs Arsenal - Caglar",
  "Round 3: Liverpool - Cagatay vs Inter - Ugur",
  "Round 3: PSG - Harun vs Real Madrid - Baris",
  "Round 3: M.City - Diren vs Barcelona - Alperen",
  "Round 3: Fenerbahce - Batu vs Galatasaray - Levent",
  "Round 4: Inter - Ugur vs Aston Villa - Huseyin",
  "Round 4: Real Madrid - Baris vs Arsenal - Caglar",
  "Round 4: Barcelona - Alperen vs Liverpool - Cagatay",
  "Round 4: Galatasaray - Levent vs PSG - Harun",
  "Round 4: Fenerbahce - Batu vs M.City - Diren",
  "Round 5: Aston Villa - Huseyin vs Real Madrid - Baris",
  "Round 5: Inter - Ugur vs Barcelona - Alperen",
  "Round 5: Arsenal - Caglar vs Galatasaray - Levent",
  "Round 5: Liverpool - Cagatay vs Fenerbahce - Batu",
  "Round 5: PSG - Harun vs M.City - Diren",
  "Round 6: Barcelona - Alperen vs Aston Villa - Huseyin",
  "Round 6: Galatasaray - Levent vs Real Madrid - Baris",
  "Round 6: Fenerbahce - Batu vs Inter - Ugur",
  "Round 6: M.City - Diren vs Arsenal - Caglar",
  "Round 6: PSG - Harun vs Liverpool - Cagatay",
  "Round 7: Aston Villa - Huseyin vs Galatasaray - Levent",
  "Round 7: Barcelona - Alperen vs Fenerbahce - Batu",
  "Round 7: Real Madrid - Baris vs M.City - Diren",
  "Round 7: Inter - Ugur vs PSG - Harun",
  "Round 7: Arsenal - Caglar vs Liverpool - Cagatay",
  "Round 8: Fenerbahce - Batu vs Aston Villa - Huseyin",
  "Round 8: M.City - Diren vs Galatasaray - Levent",
  "Round 8: PSG - Harun vs Barcelona - Alperen",
  "Round 8: Liverpool - Cagatay vs Real Madrid - Baris",
  "Round 8: Arsenal - Caglar vs Inter - Ugur",
  "Round 9: Aston Villa - Huseyin vs M.City - Diren",
  "Round 9: Fenerbahce - Batu vs PSG - Harun",
  "Round 9: Galatasaray - Levent vs Liverpool - Cagatay",
  "Round 9: Barcelona - Alperen vs Arsenal - Caglar",
  "Round 9: Real Madrid - Baris vs Inter - Ugur",
  "Round 10: PSG - Harun vs Aston Villa - Huseyin",
  "Round 10: Liverpool - Cagatay vs M.City - Diren",
  "Round 10: Arsenal - Caglar vs Fenerbahce - Batu",
  "Round 10: Inter - Ugur vs Galatasaray - Levent",
  "Round 10: Real Madrid - Baris vs Barcelona - Alperen",
  "Round 11: Aston Villa - Huseyin vs Liverpool - Cagatay",
  "Round 11: PSG - Harun vs Arsenal - Caglar",
  "Round 11: M.City - Diren vs Inter - Ugur",
  "Round 11: Fenerbahce - Batu vs Real Madrid - Baris",
  "Round 11: Galatasaray - Levent vs Barcelona - Alperen",
  "Round 12: Arsenal - Caglar vs Aston Villa - Huseyin",
  "Round 12: Inter - Ugur vs Liverpool - Cagatay",
  "Round 12: Real Madrid - Baris vs PSG - Harun",
  "Round 12: Barcelona - Alperen vs M.City - Diren",
  "Round 12: Galatasaray - Levent vs Fenerbahce - Batu",
  "Round 13: Aston Villa - Huseyin vs Inter - Ugur",
  "Round 13: Arsenal - Caglar vs Real Madrid - Baris",
  "Round 13: Liverpool - Cagatay vs Barcelona - Alperen",
  "Round 13: PSG - Harun vs Galatasaray - Levent",
  "Round 13: M.City - Diren vs Fenerbahce - Batu",
  "Round 14: Real Madrid - Baris vs Aston Villa - Huseyin",
  "Round 14: Barcelona - Alperen vs Inter - Ugur",
  "Round 14: Galatasaray - Levent vs Arsenal - Caglar",
  "Round 14: Fenerbahce - Batu vs Liverpool - Cagatay",
  "Round 14: M.City - Diren vs PSG - Harun",
  "Round 15: Aston Villa - Huseyin vs Barcelona - Alperen",
  "Round 15: Real Madrid - Baris vs Galatasaray - Levent",
  "Round 15: Inter - Ugur vs Fenerbahce - Batu",
  "Round 15: Arsenal - Caglar vs M.City - Diren",
  "Round 15: Liverpool - Cagatay vs PSG - Harun",
  "Round 16: Galatasaray - Levent vs Aston Villa - Huseyin",
  "Round 16: Fenerbahce - Batu vs Barcelona - Alperen",
  "Round 16: M.City - Diren vs Real Madrid - Baris",
  "Round 16: PSG - Harun vs Inter - Ugur",
  "Round 16: Liverpool - Cagatay vs Arsenal - Caglar",
  "Round 17: Aston Villa - Huseyin vs Fenerbahce - Batu",
  "Round 17: Galatasaray - Levent vs M.City - Diren",
  "Round 17: Barcelona - Alperen vs PSG - Harun",
  "Round 17: Real Madrid - Baris vs Liverpool - Cagatay",
  "Round 17: Inter - Ugur vs Arsenal - Caglar",
  "Round 18: M.City - Diren vs Aston Villa - Huseyin",
  "Round 18: PSG - Harun vs Fenerbahce - Batu",
  "Round 18: Liverpool - Cagatay vs Galatasaray - Levent",
  "Round 18: Arsenal - Caglar vs Barcelona - Alperen",
  "Round 18: Inter - Ugur vs Real Madrid - Baris"
];

// Display Fixture
const displayFixture = () => {
  const fixtureList = document.getElementById('fixtureList');
  fixtures.forEach(match => {
    const listItem = document.createElement('li');
    listItem.textContent = match;
    fixtureList.appendChild(listItem);
  });
};

// Other logic remains unchanged
displayFixture();
