# Banking System Backend

## Live Demo

https://banking-system-lk9p.onrender.com/

## GitHub Repository

https://github.com/Priyanshu57005/Banking-System

## Overview

Banking System Backend is a secure REST API built using Node.js, Express.js, and MongoDB. The project simulates real-world banking operations such as user authentication, account creation, fund transfers, transaction tracking, ledger management, and email notifications.

The application follows backend development best practices including JWT authentication, middleware-based authorization, password hashing, idempotent transaction processing, and MongoDB transactions.

---

## Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* Cookie-Based Session Handling
* Password Hashing using bcrypt

### Account Management

* Create Bank Accounts
* Account Status Validation
* Account Ownership Verification

### Transaction Management

* Transfer Funds Between Accounts
* Initial Fund Distribution
* Transaction History
* MongoDB Transaction Sessions

### Ledger System

* Credit Ledger Entries
* Debit Ledger Entries
* Dynamic Balance Calculation
* Transaction Audit Trail

### Security

* Authentication Middleware
* System User Authorization
* JWT Verification
* Duplicate Transaction Prevention

### Email Notifications

* Registration Emails
* Transaction Success Emails
* Transaction Failure Emails

---

## Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT
* bcryptjs
* Nodemailer
* Cookie Parser
* Render

---

## API Endpoints

### Authentication

POST /api/auth/register

POST /api/auth/login

### Accounts

POST /api/accounts

### Transactions

POST /api/transaction

POST /api/transaction/system/initial-funds

---

## Key Concepts Implemented

* JWT Authentication
* Middleware Authorization
* MongoDB Transactions
* Idempotency Handling
* Ledger-Based Accounting
* REST API Design
* Email Services
* Secure Password Storage

---

## Author

Priyanshu Gautam

B.Tech Information Technology

MERN Stack Developer
