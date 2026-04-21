import "./css/style.css";
const WINNING_SCORE = 100;
const INITIAL_SCORE = 0;
const LOSE_ROLL = 1;
const displayDice = shouldShow =>
  elements.dice.classList.toggle("hidden", shouldShow);
const elements = {
  scores: [
    document.getElementById("score--0"),
    document.getElementById("score--1"),
  ],
  currents: [
    document.getElementById("current--0"),
    document.getElementById("current--1"),
  ],
  players: [
    document.querySelector(".player--0"),
    document.querySelector(".player--1"),
  ],
  dice: document.querySelector(".dice"),
  btnRoll: document.querySelector(".btn--roll"),
  btnHold: document.querySelector(".btn--hold"),
  btnNew: document.querySelector(".btn--new"),
};
let state;
const getRandomDice = () => Math.floor(Math.random() * 6) + 1;
const disableGameButtons = () => {
  elements.btnRoll.disabled = true;
  elements.btnHold.disabled = true;
};
const enableGameButtons = () => {
  elements.btnRoll.disabled = false;
  elements.btnHold.disabled = false;
};
const updateDisplay = (player, type, value) => {
  elements[type][player].textContent = value;
};
const init = () => {
  state = {
    scores: [INITIAL_SCORE, INITIAL_SCORE],
    currentScore: INITIAL_SCORE,
    activePlayer: 0,
    playing: true,
  };
  elements.scores.forEach((_, i) => updateDisplay(i, "scores", INITIAL_SCORE));
  elements.currents.forEach((_, i) =>
    updateDisplay(i, "currents", INITIAL_SCORE),
  );
  elements.players.forEach(el =>
    el.classList.remove("player--winner", "player--active"),
  );
  elements.players[0].classList.add("player--active");
  displayDice(true);
  enableGameButtons();
};
const switchPlayer = () => {
  state.currentScore = INITIAL_SCORE;
  updateDisplay(state.activePlayer, "currents", INITIAL_SCORE);
  state.activePlayer = state.activePlayer ? 0 : 1;
  elements.players.forEach(p => p.classList.toggle("player--active"));
};
const proccesRoll = dice => {
  if (dice === LOSE_ROLL) {
    state.currentScore = INITIAL_SCORE;
    return "SWITCH_PLAYER";
  } else {
    state.currentScore += dice;
    return "CONTINUE";
  }
};
const handleRoll = () => {
  if (!state.playing) return;
  const dice = getRandomDice();
  displayDice(false);
  elements.dice.src = `dice-${dice}.png`;
  const result = proccesRoll(dice);
  if (result === "SWITCH_PLAYER") switchPlayer();
  else updateDisplay(state.activePlayer, "currents", state.currentScore);
};
const processHold = () => {
  state.scores[state.activePlayer] += state.currentScore;
  updateDisplay(state.activePlayer, "scores", state.scores[state.activePlayer]);
  if (state.scores[state.activePlayer] >= WINNING_SCORE) {
    state.playing = false;
    const activePlayerEl = elements.players[state.activePlayer];
    activePlayerEl.classList.add("player--winner");
    activePlayerEl.classList.remove("player--active");
    disableGameButtons()
    return "WINNER";
  }
  return "CONTINUE";
};
const handleHold = () => {
  if (!state.playing) return;
  const result = processHold();
  if (result === "CONTINUE") {
    switchPlayer();
  }
};
elements.btnRoll.addEventListener("click", handleRoll);
elements.btnHold.addEventListener("click", handleHold);
elements.btnNew.addEventListener("click", init);
init();
