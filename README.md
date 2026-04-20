# 🎲 Pig Game - Modern JavaScript Edition

A professional implementation of the classic **Pig Game**, built with a focus on high performance, clean architecture, and modern JavaScript best practices.

---

## 🚀 Tech Stack

- **Vite:** High-performance build tool for a lightning-fast development experience.
- **Vanilla JavaScript (ES6+):** Optimized logic focusing on state management and modularity.
- **Tailwind CSS (v4):** Modern utility-first CSS framework for responsive and sleek UI.
- **npm:** Used for local package management (fonts and assets) to eliminate external dependencies.

---

## 🛠️ Refactoring & Architecture

The codebase has been refactored to move beyond simple scripting into a robust system based on these principles:

### 1. Single Source of Truth (SSOT)

All game data is managed through a central `state` object. The UI reacts to changes in the JavaScript state, ensuring data consistency across the application.

### 2. Dynamic DOM Manipulation

Instead of repetitive DOM updates, we implemented a `updateDisplay(player, type, value)` function. This uses **Dynamic Property Access** to update any score or current value across the board with a single, reusable line of code.

### 3. State Guards & Logic Safety

The `playing` boolean acts as a "State Guard." This ensures that even if UI elements are tampered with (e.g., removing `disabled` via DevTools), the core game logic will block any actions after the game has ended.

---

## 📦 Asset Management (Performance First)

In this project, we explicitly avoided using external CDNs (like Google Fonts) for the following reasons:

- **Zero Latency:** Loading fonts locally via `npm` eliminates DNS Lookups and external requests.
- **Offline Support:** The game is fully functional without an internet connection.
- **Stability:** Prevents layout shifts (CLS) caused by delayed external asset loading.

---

## 📁 Execution Flow & Organization

The script follows a strict logical order to handle memory efficiently and avoid hoisting issues:

1.  **Constants:** Defined global settings (e.g., `WINNING_SCORE`) for easy maintainability.
2.  **DOM Selectors:** Centralized in an `elements` object for clean access.
3.  **State Initialization:** Defining the game's starting data structure.
4.  **Helper Functions:** Small, pure functions (e.g., `getRandomDice`) for specific tasks.
5.  **Event Handlers:** Decoupled logic for Roll, Hold, and Reset actions.
6.  **Bootstrap:** Calling `init()` at the very end to ensure all functions and variables are defined in memory before execution.

---

## 🎮 How to Play

1.  Click **Roll Dice** to roll.
2.  If you roll a **1**, your current score is lost, and the turn passes to the next player.
3.  Click **Hold** to add your current score to your total.
4.  The first player to reach **100 points** wins the game!
