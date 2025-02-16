# The Love Sparks

# Ignite - Highlighting how great matches create sparks

## ![Overview](https://img.shields.io/badge/Overview-Discovery-orange?style=for-the-badge)

**Ingnite** is a dating app designed for users who value personality over superficial swiping. Instead of seeing a full profile immediately, users discover potential matches through a step-by-step reveal of key personality traits, ensuring compatibility is built on genuine interest.

## ![AIM](https://img.shields.io/badge/AIM-meaningfulCONNECTIONS-blue?style=for-the-badge)

To revolutionise online dating by prioritising meaningful connections over superficial swiping.
By using progressive personality/like matching system the app encourages users to engage with potential partners based on compatibility rather than appearance alone.

## 🔥 How It Works

### 📝 Step 1: Personalized Questionnaire

First up, users fill out a **quick questionnaire** to highlight their personality traits and preferences. No endless forms—just enough to get a solid idea of what makes them tick.

### 💡 Step 2: Finding a Match

- Matches are shown **one at a time**—no overwhelming lists or endless swiping.
- Instead of seeing a full profile straight away, users get a **single personality trait** (e.g., **Adventurous, Introverted**), represented by a simple image.
- If they **like** what they see, they move on to the **next trait** of that match.
- If they **don’t**, they move on to someone else—no harm, no foul.
- To reveal a full match, users need to **approve three traits in a row**.
- If they like all three, boom—the match is **revealed**, and they finally see the person behind the traits.
- If at any point they’re not feeling it, they skip to a new match and start fresh.

### 💬 Step 3: Connection

- Once a match is revealed, users can **choose to start a conversation**—no pressure, just an option.
- If they’re not interested, they simply move on and start the process again.

The whole idea is to **put personality first** and make connections that actually mean something. No snap judgments—just a bit of curiosity and a fun way to discover people who genuinely click.

📢 **Announcement**

## 📢 Pivot & Final Implementation

We originally planned to build this as a full-stack application using Django for the backend. However, due to time constraints and challenges with implementation, we decided to pivot and focus on a front-end prototype to effectively demonstrate our concept.

Rather than give up, we wanted to create something to showcase —we owed it to ourselves to bring our vision to life. We had a **fantastic idea that needed to be shared**, and this prototype allows us to present it in a way that highlights its potential.

Even this pivot was **a challenge in itself**, requiring all of us to **pull together, adapt, and contribute** to make it happen. Everyone played their part, stepping up to ensure we had something solid to present. It’s been a true team effort, and we’re proud of what we’ve achieved! 💪🚀

## 🚀 What We Built

Instead of a fully functional application, we have created an interactive **HTML, CSS, and JavaScript prototype** that simulates the intended user experience. This includes:

- **Home Page** – Overview of the platform
- **Profile Page** – Displays user details and simulated matches
- **Find a Match Page** – Simulates searching for potential matches
- **Login Page** – UI for user authentication
- **Register Page** – Form to collect user details for profile display

While there is no backend or database, **JavaScript** is used to create a dynamic experience that showcases the intended user journey. This allows us to effectively present our vision despite the technical constraints.

## 🎓 Lessons Learned

- **Rapid prototyping** and adaptability are crucial in hackathon environments
- **Breaking down features** into smaller, manageable components helps maintain momentum
- **A front-end simulation** can still effectively communicate an idea without a full backend implementation

## 🔮 Future Plans

If we had more time, we would:

- Implement **Django** for user authentication and data storage
- Fully integrate **matchmaking logic** with a backend database
- Enhance **interactivity** with real-time updates

We’re proud of what we’ve achieved in the time we had and excited to share our work! 🎉

## ![User Stories](https://img.shields.io/badge/User_Stories-Read_More-purple?style=for-the-badge)

### ![First Time Users](https://img.shields.io/badge/First_Time_Users-Start_Here-green?style=for-the-badge)

### Landing page

- As a first time user: I want to have an overview of what the date app offers (easily grasp the concept of the app) and be able to sign in to get matched.
  - Acceptance Criteria:
    - Landing page with a clear overview for first time users.
    - Button to sign in (link to registration form).
    - About link.

### Registration Form

- As a first time user, I want to easily register and create a profile (account) so that I can start searching for matches.
  - Acceptance Criteria:
    - Registration Form.
    - Inputs to write my Personal Details.
    - First Name, Last Name, Alias, Location, Birthdate, Email, Password (password confirmation).
    - Checkboxes / Select inputs to select my preferences.
    - Simple quiz to establish personality/likes/hobbies (three questions?).
    - Questions with checkbox to select answers.

### Email registration / verification

- As a first time user, I want to verify my email so that I can ensure my account is secure.
  - Acceptance Criteria:
    - Send email with link to verify or authenticate account.
    - After clicking link in email you get access to your new match app profile and matches.

* Acceptance Criteria:
  - Registration Form
  - Inputs to write my Personal Details
  - First Name, Last Name, Alias, Location, Birthdate, Email, Password (password confirmation)
  - Checkboxes / Select inputs to select my preferences
  - Simple quiz to establish personality/likes/hobbies (three questions?)
  - Questions with checkbox to select answers

### Email registration / verification

- As a first time user, I want to verify my email so that I can ensure my account is secure
  - Acceptance Criteria:
    - Send email with link to verify or authenticate account.
    - After clicking link in email you get access to your new match app profile and matches

### ![Returning Users](https://img.shields.io/badge/Returning_Users-Welcome_Back-blue?style=for-the-badge)

### 🔑 Login Form

- As a registered user, I want to easily sign in.
  - **Acceptance Criteria:**
    - Sign-in form to log in.

### 🧭 Navigation

- As a registered user, I want to have **easy access to navigate** the app.
  - **Acceptance Criteria:**
    - Navigation menu with links to:
      - Profile dashboard / settings
      - Chats
      - Log out

### 💘 Match Page

- As a registered user, I want to **easily find potential matches, continue as long as needed, and connect with people who share similar interests** so that I can build meaningful relationships.
  - **Acceptance Criteria:**
    - **Step-by-step reveal process:**
      - Random display of a single potential match with **4 hidden categories**.
      - Categories are revealed **one at a time** upon user interaction (with captions?).
      - Final reveal shows the **profile picture and summary** (alias or first name, location, short bio).
    - **Decision phase:**
      - After the profile pic is revealed, users can choose to:
        - **“Ignite”** – Accept the match and start a chat.
        - **“Next”** – Skip and move to another potential match.

### 🔧 User Dashboard / Profile Settings

- As a registered user, I want to **update my profile and preferences** if needed so that my information stays accurate and relevant.
  - **Acceptance Criteria:**
    - **Edit Profile Form**
    - **Edit Preferences Form**
    - **Manage privacy settings** to control who can see my profile.

### 🔒 Security Settings

- As a registered user, I want to **control my privacy settings** so that I can decide who can see my profile.
  - **Acceptance Criteria:**
    - Security settings to adjust **profile visibility**.
    - Profile display based on **chosen privacy levels**.

### 🎯 Filter for Potential Matches

- As a registered user, I want to **filter my matches based on my preferences** so that I can find suitable partners.
  - **Acceptance Criteria:**
    - Advanced filter system (e.g., filter matches by **age range**).

### 🔔 Match Alert

- As a registered user, I want to **be notified when I’ve been matched**.
  - **Acceptance Criteria:**
    - Display match notification with options to:
      - **Accept** – Starts a new SparkChat.
      - **Pass** – Returns to the Match Page.

### 👤 Profile Details

- As a registered user, I want to **view my match’s profile** so I can get a better idea of the person and reference it later.
  - **Acceptance Criteria:**
    - Profile display component (page or modal) showing:
      - Profile pic, alias, location, interests, hobbies, values, and revealed personality traits.

### 💬 Chat Page (Active Matches Section)

- As a registered user, I want to **send and receive messages securely** so that I can communicate with my matches and keep track of conversations.
  - **Acceptance Criteria:**
    - Sidebar/dropdown to show **all active chats**.
    - **Chat interface** with:
      - Ability to send and receive messages.
      - Display of **message history** with timestamps.
      - Distinction between **my messages** and **match’s messages**.
      - **Text input with send button**.
      - **Report user button**.
    - **View Profile button** (links to profile or opens a modal).
    - **Report or Block button**.

### 🚫 Report / Block

- As a registered user, I want to be able to **report or block disrespectful users**.
  - **Acceptance Criteria:**
    - **Report button** accessible in various parts of the app (chat, match page, etc.).
    - **Block button** available in chats and profile views.

---

### ![Admin Users / Mods](https://img.shields.io/badge/Admin_Users%2FMods-Keep_it_Safe-red?style=for-the-badge)

### 🛠️ Admin Dashboard

- As an admin, I want to **oversee user activity** to maintain a **safe and respectful environment**.
  - **Acceptance Criteria:**
    - User management panel displaying:
      - **Active, inactive, and banned users**.
      - **Reports submitted by users**.
      - **Existing matches** (optional, for investigation).

### 🔍 Show Profile Details

- As an admin, I want to **access and manage user profiles**.
  - **Acceptance Criteria:**
    - Display **user profile details**, including:
      - Profile picture, alias, location, and other relevant info.
      - Related **matches** (optional).
      - Any **reports** filed against the user.
      - **Suspend / Ban button**.

### 🚨 Moderation & Enforcement

- As an admin, I want to **take appropriate action against users who violate community rules**.
  - **Acceptance Criteria:**
    - **Warning button** – Sends a **first warning** for minor issues.
    - **Suspend button** – Temporarily suspends an account after repeated warnings.
    - **Ban account button** – Permanently removes a user for repeated or severe violations.
    - **Delete user button** – Removes an account from the system.
    - **Automated ban or suspension?** (TBD)

## ![Wireframes](https://img.shields.io/badge/Wireframes-View_Now-9cf?style=for-the-badge)

<img src="docs/readme_images/homepage.png" alt="Home Page" width="500">

## ![Technologies](https://img.shields.io/badge/Technologies-Stack-ff9800?style=for-the-badge)

![HTML](https://img.shields.io/badge/Frontend-HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/Frontend-CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/Frontend-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## Bugs ![Bugs](https://img.shields.io/badge/Bugs-Squashed-brightgreen?style=for-the-badge&logo=bug&logoColor=white)

### Solved Bugs ![Killed Bugs](https://img.shields.io/badge/Killed%20Bugs-✔️-brightgreen?style=for-the-badge&logo=bugatti)

### Unsolved Bugs ![Alive Bugs](https://img.shields.io/badge/Alive%20Bugs-❌-red?style=for-the-badge&logo=bugatti)

## Future Improvements ![Future Improvements](https://img.shields.io/badge/✈️-Future%20Improvements-blue?style=for-the-badge)
