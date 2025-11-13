# Social Development Events Platform

A community-driven event management platform where users can **create**, **join**, and **track** social service events happening in their local area.  
---

## Live Links

- **Client Live URL:** https://your-client-site.netlify.app  
- **GitHub Repository:** https://github.com/yourusername/social-platform  


## Website Features

 **User Authentication:**  
Users can register, log in, and stay logged in even after page reload using Firebase Authentication.

**Create & Manage Events:**  
Logged-in users can create social events, edit details, or delete their own events.

**Join Events:**  
Users can join events posted by others and view all the events they’ve joined.

**Filter & Search:**  
Users can filter events by type (Cleanup, Donation, Plantation, etc.) or search events by name.

**Upcoming Events:**  
The app automatically filters and shows only future events (based on event date).

 **Toast Notifications:**  
Custom success and error messages using `react-hot-toast` — no default browser alerts.

**Private Routes:**  
Users cannot access protected pages (like Create Event or My Events) without logging in.  
Reloading the page does **not** redirect logged-in users back to login.

**Responsive Design:**  
Fully mobile-friendly layout built using Tailwind CSS and DaisyUI.

---

## 🧠 Tech Stack

| Category | Technology 

 **Frontend** : React, React Router, Tailwind CSS, DaisyUI, React Hot Toast, React DatePicker |
**Backend** :Node.js, Express.js 
**Database**:MongoDB Atlas 
**Authentication** : Firebase Auth + Firebase Admin SDK 
**Hosting** :Client → Netlify / Vercel, Server → Vercel 

---



## Authentication Flow

- Firebase Authentication handles user login/register.  
- On login, the user gets an **ID token**.  
- Token is sent with each protected API request using:
