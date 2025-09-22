# Project Name

> Project Setup Guide

Welcome! 🎉

This README will walk you (step-by-step) through setting up this project locally. — follow the steps and copy-paste the commands.

### NOTE: Hindi po ito perfect guide HUHU! I highly recommend reading or watching tutorials muna on how to install this, that etc.

### Don't worry this will not break your computer hehe <3

---

## Table of contents

- [Prerequisites](#prerequisites)
- [Install Git](#install-git)
- [Install Node.js (via NVM)](#install-nodejs-via-nvm)
- [Clone the repository](#clone-the-repository)
- [Install project dependencies](#install-project-dependencies)
- [Run the project](#run-the-project)
- [Environment variables](#environment-variables)
- [Update your local copy](#update-your-local-copy)
- [Common issues & fixes](#common-issues--fixes)
- [VS Code (optional)](#vs-code-optional)
- [Need help / contact](#need-help--contact)
- [License](#license)

---

## Prerequisites

You will need:

- Git
- NVM (Node Version Manager) and Node.js
- `npm` (installed with Node using NVM)
- VS Code for editing

---

## Install Git

**Windows**

1. Download Git from: https://git-scm.com
2. Run the installer and accept the default options.
3. Open **Command Prompt** or **PowerShell** and run:

```bash
git --version
```

If you see a version number, Git is installed.

**macOS**

Open Terminal and run:

```bash
git --version
```

If it is not installed, follow the prompts or install via Homebrew:

```bash
brew install git
```

**Linux (Ubuntu/Debian)**

```bash
sudo apt update
sudo apt install git
```

---

## Install Node.js (via NVM)

We recommend using NVM so you can easily change Node versions.

### Follow the guides here:

Windows:
https://github.com/coreybutler/nvm-windows

Mac:
https://github.com/nvm-sh/nvm

### macOS / Linux

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
# Close and re-open your terminal
command -v nvm
# Then install Node LTS
nvm install --lts
nvm use --lts
node -v
npm -v
```

### Windows

Use **nvm-windows** (Windows-compatible fork). Download it from its releases page and run the installer.

After installing, open Command Prompt and run:

```bash
nvm version
nvm install --lts
nvm use lts
node -v
npm -v
```

---

## Clone the repository

Open a terminal and choose a location (for example `Desktop`):

```bash
cd (path to folder where you want the repository will be saved)
```

Clone the repo (replace with the real repo URL):

Note: At this point, you must be inside the folder you just created.

```bash
git clone https://github.com/JacobCll/mobile-kiosk.git
cd mobile-kiosk
```

---

## Install project dependencies

This repository contains two main parts:

- `server` — backend API
- `frontend` — Next.js frontend
- inside the `frontend` folder, you will see the `mobile-kiosk` folder (this is where the frontend code is located)

Install dependencies (necessary stuff for things to work) separately for the `server` and `frontend` folders

```bash
# Server
cd server
npm install
```

- Note: After you do `npm install` don't close the terminal!
- It might also take a while! That's normal

```bash
# Frontend
cd ../frontend/mobile-kiosk
npm install
```

---

## Run the project

To run the frontend and backend:

**Start the server**

```bash
cd ../../server
npm run dev
```

You should see a message like `Server running on http://localhost:5666` (port may vary).

**Start the frontend**

```bash
cd ../frontend/mobile-kiosk
npm run dev
```

You should see something like `Local: http://localhost:3000`. Open that URL in your browser.

---

## Environment variables

- No environment variables yet (these are the secrets or passwords to access third party apis )
- Once na meron nang environment variables I will make a guide for them here!

---

## Update your local copy

When the master repo changes (check with `git branch -a`) and you want the latest:

```bash
cd your-repo-name
git pull
```

If dependencies changed after pulling:

```bash
cd server && npm install
cd ../frontend && npm install
```

---

## Common issues & fixes

- **`nvm` not recognized (Windows):** Close and reopen Command Prompt after installing `nvm-windows`.
- **`npm` not recognized:** Run `nvm use --lts` or reinstall Node via NVM.
- **Port already in use:** Another program is using `:3000` or `:5000`. Kill that process or change the port in the app config.
- **Permission errors (Linux/macOS):** Avoid using `sudo` with npm unless necessary. If you must:

  ```bash
  sudo npm install
  ```

---

## VS Code (optional)

**Install:** https://code.visualstudio.com/

**Recommended extensions**

- ESLint
- Prettier

**Tips**

- Open the project root in VS Code.
- Use the integrated terminal (`View → Terminal`) to run commands.

---

## Need help / contact

If you get stuck, please:

1. Just message me!

--
