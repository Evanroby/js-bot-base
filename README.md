# Discord Bot

## 📌 About
This is a powerful and modular Discord bot built using `discord.js v14`. It includes:
- 🛠️ Moderation commands (ban, kick, etc.)
- 🎉 Fun commands (jokes, memes, etc.)
- 📂 Organized folder structure
- ✅ Optimized error handling

---

## 🚀 Setup & Installation

### 1️⃣ Requirements
- [Node.js](https://nodejs.org/) (v16 or newer required)
- [Discord Developer Portal](https://discord.com/developers/applications) bot token

### 2️⃣ Installation Steps
```sh
# Clone the repository
git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME

# Install dependencies
npm install
```

### 3️⃣ Configuration
Edit the `config.json` file:
```json
{
  "token": "YOUR_BOT_TOKEN",
  "prefix": "!"
}
```

### 4️⃣ Start the Bot
```sh
npm start
```

---

## 📂 Project Structure
```plaintext
/my-bot
  ├── commands/          
  │   ├── moderation/    
  │   ├── fun/          
  ├── events/
  │   ├── messageCreate/
  │   ├── ready/              
  ├── config.json       
  ├── index.js          
  ├── package.json      
```

---

## 🔧 Features
- ✅ **Easy-to-use** command handler
- 🔥 **Automatic event loading**
- 🏆 **Multiple command categories**
- ⚡ **Optimized performance & error handling**

---

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).

