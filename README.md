# Backend Starter Challenges

This repository contains starter backend challenges for fresh graduates and junior developers.  
It is designed to simulate real-world tasks and help developers practice essential backend skills.  
The repository will grow over time with more exercises and utilities.

---

## 🚀 Current Challenge

### Calc Expiry Date

A utility function to calculate expiry dates for special messages in booking or notification systems.

#### Rules:

- **Request Cancellation / Request Approval / Inquiry Booking** → +12 hours from now.
- **Special Offer / Allow Booking** → +5 hours from now.
- **Check-in Info (with date)** → +24 hours from the given date.
- **New Booking (with date)** → returns the given booking date (timestamp).
- **Default (if type not found)** → +12 hours from now.

---

## 📂 Project Structure

### backend-starter-challenges/

```
├── src/
│   ├── utils/
│   │   └── message-utils.ts   # implementation
│   └── index.ts
├── tests/
│   └── message-utils.test.ts    # unit tests
├── package.json
├── tsconfig.json
├── yarn.lock
└── README.md
```

---

## 🛠 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/abubakr404/backend-starter-challenges.git
cd backend-starter-challenges
yarn install
```

## 📚 Usage

```bash
yarn dev
```

## 📝 Testing

```bash
yarn test
```
