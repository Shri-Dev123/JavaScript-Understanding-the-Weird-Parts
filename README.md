# JavaScript-Understanding-the-Weird-Parts
Course by Tony Alicea

## 🎯 Goals of Success

- ✅ Be able to **read and understand jQuery source code**
- ✅ Complete and understand the **final project** of writing your own JavaScript library
- ✅ Master key JavaScript concepts like:
  - Syntax Parser
  - Execution Context
  - Lexical Environment
  - Name-Value Pairs and Objects

---

## 🧠 Conceptual Aside: Syntax Parser, Execution Context, and Lexical Environment

### 🔍 Syntax Parser

A **syntax parser** is a program that:
- Reads your code
- Determines what it does
- Checks whether its grammar/syntax is valid

🛠 When you write JavaScript, you're **not directly telling the computer what to do**. Instead:
- A **compiler** or **interpreter** reads and **translates** your JS code into something the machine can understand.
- During this process, **additional behavior** might be added by the compiler authors.
- Your **actual code is not what's executed** — it’s the translated version.

---

### 📌 Lexical Environment

- Refers to **where in the code** something is written.
- It's influenced by the **physical placement** of your code.
- **In JavaScript, where you write something matters** because it defines how it’s scoped and accessed.

---

### ⚙️ Execution Context

An **execution context** is:
- A **wrapper** around the currently running code.
- It contains:
  - The code itself
  - The relevant **lexical environment**
  - Additional internal resources used during execution

🔁 JavaScript maintains multiple **lexical environments**, but only one is active at a time — determined by the **current execution context**.

---

## 🧱 Conceptual Aside: Name-Value Pairs and Objects

### 🔑 Name-Value Pair

- A **name** that maps to a **unique value**
- In a single **execution context**, a name:
  - Can be **defined multiple times**
  - But can only **hold one value** at a time

---

### 📦 Object

- An **object** is simply a **collection of name-value pairs**
- It's a foundational structure in JavaScript for grouping data and functionality
