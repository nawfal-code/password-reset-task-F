# Password Reset – Frontend

This is the frontend application for the Password Reset Flow project.  
The app allows users to register, log in, request a password reset link, and update their password using a token received in email.

The frontend is built using React and communicates with the backend REST API.

---

## 🚀 Tech Stack

- React
- React Router DOM
- Axios
- Tailwind CSS
- React Toastify

---

## ✨ Features

✔ User Registration  
✔ User Login  
✔ JWT token saved in localStorage  
✔ Forgot password – request reset link  
✔ Reset password using token  
✔ Protected Dashboard  
✔ Logout functionality  
✔ Responsive UI  

---


---

## 🔑 Authentication Flow

- On login – backend returns JWT token  
- Token stored in `localStorage`
- `AuthContext` manages login/logout state
- Navbar shows:
  - Login/Register if logged out
  - Logout if logged in
- Logout clears token and redirects to login

---

## 📧 Password Reset Flow

1. User clicks **Forgot Password**
2. Enters registered email
3. Backend sends reset link
4. User opens `/password-reset/:token`
5. Enters new password
6. Password successfully updated

> Note: Due to recent Nodemailer issues, reset link is also shown in toast message when email fails.

---

## 🧪 API Endpoints Used

- `POST /api/users/register`
- `POST /api/users/login`
- `POST /api/users/forgot-password`
- `POST /api/users/reset-password/:token`

---

## 🙌 Credits

Developed by **Mohammed Nawfal**  
MERN Stack Project – Password Reset Flow

