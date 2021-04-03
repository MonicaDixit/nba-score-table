const warriorsGames = [
  {
    awayTeam: {
      team: "Golden State",
      points: 119,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 106,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 105,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 127,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 126,
      isWinner: true,
    },
    awayTeam: {
      team: "Houston",
      points: 85,
      isWinner: false,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 92,
      isWinner: false,
    },
    awayTeam: {
      team: "Houston",
      points: 95,
      isWinner: true,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 94,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 98,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 115,
      isWinner: true,
    },
    awayTeam: {
      team: "Houston",
      points: 86,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 101,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 92,
      isWinner: false,
    },
  },
];

// **************************************************
// STEP 1 - UGLY, UN-REFACTORED CODE! (but it works!)
// **************************************************

function createChart(games, targetTeam) {
  let ulparent = document.createElement("ul");

  let fragment = new DocumentFragment();
  for (let game of games) {
    let li = document.createElement("li");
    const gameText = createGametext(game);
    const gameScoreText = createGameScoreText(game);
    li.innerHTML = `${gameText} ${gameScoreText}`;
    const isTargetTeamWinner = isWinner(game, targetTeam);
    li.classList.add(isTargetTeamWinner ? "win" : "loss");
    fragment.append(li);
  }

  ulparent.append(fragment);
  const h1 = document.createElement("h1");
  h1.textContent = targetTeam;
  ulparent.prepend(h1);
  return ulparent;
}

function createGametext({ homeTeam, awayTeam }) {
  const { team: hTeam, points: hPoints } = homeTeam;
  const { team: aTeam, points: aPoints } = awayTeam;
  let textstr = `${aTeam} @ ${hTeam}`;
  return textstr;
}

function createGameScoreText({ homeTeam, awayTeam }) {
  const { team: hTeam, points: hPoints } = homeTeam;
  const { team: aTeam, points: aPoints } = awayTeam;
  if (hPoints > aPoints) {
    return `${aPoints}-<b>${hPoints}</b>`;
  }
  return `<b>${aPoints}</b>-${hPoints}`;
}

function isWinner({ homeTeam, awayTeam }, targetTeam) {
  const targetTeamObj = homeTeam.team === targetTeam ? homeTeam : awayTeam;
  return targetTeamObj.isWinner;
}

const scoreChart = createChart(warriorsGames, "Golden State");
const scoreChart2 = createChart(warriorsGames, "Houston");

document.body.prepend(scoreChart);
document.body.append(scoreChart2);
