# 🎲 Pig Game - Architecture & Clean Code Edition

🔗 [**Live Demo**](https://ahmed-let-front.github.io/Pig-game/)

This project is a professional implementation of the classic **Pig Game**, rebuilt with a focus on **Clean Code**, **SOLID** principles, and high-performance architecture. It demonstrates how to transition from basic scripting to professional software engineering.

---

## 💎 The "Refactoring" Breakthrough

In this version, the codebase was transformed using "Architectural Thinking" to ensure maintainability and scalability.

### 1. Separation of Concerns (Logic vs. UI)

The core game engine is now completely decoupled from the DOM:

- **Pure Logic:** Functions like `proccesRoll` and `processHold` act as "Pure Calculations." They receive data, process it according to game rules, and return signals (`SWITCH_PLAYER`, `CONTINUE`, `WINNER`) without directly touching the HTML.
- **UI Handlers:** Functions like `updateDisplay`, `enableGameButtons`, and `disableGameButtons` serve as the "View Layer," responsible only for reflecting the internal state on the screen.

### 2. Elimination of Boolean Flags (Clean Code Principle #7)

Following the rule of **"Don't use flags as function parameters,"** I replaced ambiguous toggles with explicit, descriptive functions:

- `enableGameButtons()` and `disableGameButtons()` provide high readability and prevent logic errors compared to passing `true/false` as arguments.

### 3. Encapsulated Conditionals (Clean Code Principle #10)

Complex `if` statements are hidden behind meaningful function names. This makes the **Event Handlers** (`handleRoll`, `handleHold`) read like a story in plain English, hiding technical implementation details behind descriptive abstractions.

### 4. Open/Closed Principle (SOLID - O)

The project is designed to be **Open for extension but Closed for modification**:

- By using Constants (`WINNING_SCORE`, `LOSE_ROLL`) and decoupled logic, game rules can be expanded (e.g., adding "Hard Mode") without rewriting the core execution flow.

---

## 🚀 Performance & Tech Stack

- **Vite & npm:** Optimized asset bundling and local font management (Zero Latency/No CDNs).
- **Tailwind CSS v4:** Leveraging the new `@theme` engine for a high-performance, modern UI.
- **Lighthouse Targeted:** Optimized for a **400/400** score by minimizing DOM thrashing and eliminating external DNS lookups.

---

## 📁 Execution Pipeline

The code is organized to ensure predictable memory allocation and zero hoisting side effects:

1.  **Constants:** Global configurations.
2.  **Elements Object:** Centralized DOM Registry.
3.  **State Management:** Single Source of Truth (SSOT).
4.  **Helper Functions:** Pure UI & Logic utilities.
5.  **Game Logic:** The "Brain" of the application.
6.  **Event Handlers:** The "Controllers" connecting Logic to UI.

---

## 🎮 How to Play

1.  Click **Roll Dice** to generate a number.
2.  Rolling a **1** resets your current score and switches turns.
3.  Click **Hold** to lock in your current points to your total score.
4.  Reach **100 points** first to be declared the **Winner**!

---

## 👨‍💻 About the Developer

**Ahmed Yasser** - Junior Front-end Developer & Performance Enthusiast.
Focusing on the "How" and "Why" of JavaScript to build high-quality web experiences.
