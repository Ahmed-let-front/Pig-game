import "./css/style.css";
const WINNING_SCORE = 100;
const INITIAL_SCORE = 0;
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
const toggleButtons = isDisabled => {
  elements.btnRoll.disabled = isDisabled;
  elements.btnHold.disabled = isDisabled;
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
  elements.dice.classList.add("hidden");
  toggleButtons(false);
};
const switchPlayer = () => {
  state.currentScore = INITIAL_SCORE;
  updateDisplay(state.activePlayer, "currents", INITIAL_SCORE);
  state.activePlayer = state.activePlayer ? 0 : 1;
  elements.players.forEach(p => p.classList.toggle("player--active"));
};
const handleRoll = () => {
  if (!state.playing) return;
  const dice = getRandomDice();
  elements.dice.classList.remove("hidden");
  elements.dice.src = `dice-${dice}.png`;
  if (dice !== 1) {
    state.currentScore += dice;
    updateDisplay(state.activePlayer, "currents", state.currentScore);
  } else {
    switchPlayer();
  }
};
const handleHold = () => {
  if (!state.playing) return;
  state.scores[state.activePlayer] += state.currentScore;
  updateDisplay(state.activePlayer, "scores", state.scores[state.activePlayer]);
  if (state.scores[state.activePlayer] >= WINNING_SCORE) {
    state.playing = false;
    elements.players[state.activePlayer].classList.add("player--winner");
    elements.players[state.activePlayer].classList.remove("player--active");
    elements.dice.classList.add("hidden");
    toggleButtons(true);
  } else {
    switchPlayer();
  }
};
elements.btnRoll.addEventListener("click", handleRoll);
elements.btnHold.addEventListener("click", handleHold);
elements.btnNew.addEventListener("click", init);
init();
