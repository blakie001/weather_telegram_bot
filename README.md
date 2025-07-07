# 🌦️ Telegram Weather Bot with Admin Panel

A Telegram bot built with **Node.js** and **MongoDB** that provides daily weather updates to subscribed users. The bot features a clean command system, user management (subscribe, unsubscribe, location setting), and an admin panel (built with **Next.js App Router**) to manage bot settings and users.

---

## 🚀 Features

### 🧑‍💻 User-side (Telegram Bot)
- `/start` — Greet and show basic usage
- `/location [city]` — Set your weather location
- `/subscribe` — Start receiving daily weather updates
- `/unsubscribe` — Stop receiving updates
- 🔄 Cron job sends updates daily at 12:00 PM (configurable)

### 👨‍🏫 Admin Panel
- Built with **Next.js** (App Router)
- Secure login with JWT (stored in HTTP-only cookies)
- View and manage all users:
  - Block/Unblock users
  - Delete users
- Update bot configuration:
  - Weather API Key
  - Daily cron schedule

---

## 🛠️ Tech Stack

| Layer       | Technology           |
|-------------|----------------------|
| Bot         | Node.js + Telegraf   |
| Weather API | OpenWeatherMap       |
| Scheduler   | node-cron            |
| Database    | MongoDB (Mongoose)   |
| Admin Panel | Next.js 14+ (App Router) |
| Auth        | JWT (cookie-based)   |

---
