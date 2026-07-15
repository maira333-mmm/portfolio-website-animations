<div align="center">

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&height=210&color=0:1E3A5F,50:2563EB,100:60A5FA&text=Maira%20Alam&fontColor=ffffff&fontSize=50&fontAlignY=38&desc=Computer%20Science%20Student%20%7C%20Developer&descAlignY=60&animation=fadeIn" alt="Maira Alam animated header" />

<br />

<a href="#">
  <img src="https://readme-typing-svg.demolab.com?font=Inter&weight=600&size=20&duration=2800&pause=700&color=2563EB&center=true&vCenter=true&repeat=true&width=640&height=52&lines=Building+innovative+solutions+with+code.;Passionate+about+software+development.;Always+learning%2C+always+creating.;Turning+ideas+into+reality." alt="Animated overview" />
</a>

<p>
  A responsive personal portfolio website built with HTML, CSS, and JavaScript.<br />
  Showcasing projects, skills, and achievements in a clean and interactive layout.
</p>

<p>
  <a href="#">
    <img src="https://img.shields.io/badge/VIEW_PROJECT-2563EB?style=for-the-badge&logo=github&logoColor=white" alt="View Project" />
  </a>
  <a href="#">
    <img src="https://img.shields.io/github/last-commit/maira-alam/portfolio-website?style=for-the-badge&color=2563EB&label=LAST%20UPDATE" alt="Latest GitHub commit" />
  </a>
</p>

<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Responsive-FF6B6B?style=flat-square&logo=responsive&logoColor=white" alt="Responsive" />
</p>

</div>

## 📋 Table of Contents

- [About The Project](#-about-the-project)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Sections Overview](#-sections-overview)
- [Getting Started](#-getting-started)
- [Customization Guide](#-customization-guide)
- [JavaScript Features](#-javascript-features)
- [Browser Compatibility](#-browser-compatibility)
- [Contributing](#-contributing)
- [Contact](#-contact)
- [License](#-license)

---

## 🎯 About The Project

A **responsive personal portfolio website** built with **HTML, CSS, and JavaScript** — designed to showcase projects, skills, and achievements in a clean and interactive layout.

Built for the question: *"How do I present my skills and projects professionally?"*

<div align="center">

| Design | Build | Launch |
| :---: | :---: | :---: |
| Plan the layout and color scheme | Write clean HTML, CSS, and JavaScript | Deploy and share with the world |

</div>

---

## ✨ Features

| Feature | What it means |
| --- | --- |
| Responsive Design | Adapts to all screen sizes (mobile, tablet, desktop) |
| Smooth Animations | Fade-in and slide-in effects for polished experience |
| Interactive Projects | Click navigation buttons to view project details |
| Certificate Tabs | Switch between Academic and Volunteer certificates |
| Click-to-View | Expand certificates to see images |
| Fixed Navigation | Smooth scrolling with fixed header |
| Resume Download | One-click PDF download |
| Contact Section | Direct email link for communication |

---

## 📁 Project Structure

```text
portfolio-website/
│
├── index.html          # Main HTML file
├── style.css           # All styles and animations
├── script.js           # JavaScript functionality
├── resume.pdf          # Downloadable resume
│
├── assets/
│   ├── img/            # Certificate images
│   │   ├── social.jpg
│   │   ├── photoshop.jpg
│   │   ├── html5.jpg
│   │   └── volunteer.jpg
│   └── icons/          # Additional icons
│
└── README.md           # Documentation
---

# 📑 Sections Overview

<table>
<tr>
<td width="50%">

## 🏠 Home

✨ Animated hero section

🎯 Professional introduction

📄 Resume download button

📬 Contact button

Smooth scrolling navigation

</td>

<td width="50%">

## 👤 About

Professional summary

Technical expertise

Problem-solving mindset

Communication & teamwork

Career objective

</td>
</tr>

<tr>
<td>

## 💻 Skills

| Category | Skills |
| :--- | :--- |
| 💻 Technical | C++, HTML, CSS, JavaScript, PHP |
| 🌐 Web | MySQL, Bootstrap, jQuery, Laravel |
| 🤝 Other | Communication, Teamwork, Problem Solving |

</td>

<td>

## 📂 Projects

| Project | Stack |
| :--- | :--- |
| 🚗 Car Rental System | HTML, CSS, JS, PHP, Laravel |
| 🔐 Encryption Tool | HTML, CSS, JavaScript |
| 🎮 AR Game | Augmented Reality |
| 🧪 SciGen | Research Platform |
| ✈ Airplane Seating | C++ / OOP |

</td>
</tr>

<tr>
<td>

## 📜 Certificates

🎓 Academic

- Social Media Mastery
- Graphics Design & Video Editing
- HTML5, Python, Django & Flask

🤝 Volunteer

- Government Special Education Centre (GSEC)

</td>

<td>

## 📬 Contact

📧 **Email**

maira.alam33@gmail.com

💼 Available for internships and collaboration.

</td>
</tr>
</table>

---

# 🚀 Getting Started

## 📋 Requirements

✅ Modern Web Browser

✅ VS Code (Recommended)

---

## 1️⃣ Clone Repository

```bash
git clone https://github.com/maira-alam/portfolio-website.git

cd portfolio-website
```

---

## 2️⃣ Open Website

```bash
# Double click

index.html

# OR

Use Live Server in VS Code
```

---

## 3️⃣ Customize

Edit the following files

| File | Purpose |
| :--- | :--- |
| index.html | Website Structure |
| style.css | Styling & Animations |
| script.js | JavaScript Functionality |

---

# 🎨 Customization Guide

<details>

<summary><b>🎨 Change Theme Colors</b></summary>

```css
:root{
  --bg-color:#000;
  --second-bg-color:#0a0a0a;
  --main-color:#00ccff;
  --hover-color:#0099cc;
}
```

</details>

---

<details>

<summary><b>➕ Add New Project</b></summary>

```html
<div id="project6" class="project">

<h3>Project Name</h3>

<p><strong>Technologies:</strong> HTML, CSS</p>

<ul>

<li>Feature One</li>

<li>Feature Two</li>

</ul>

</div>
```

</details>

---

<details>

<summary><b>📜 Add New Certificate</b></summary>

```html
<li class="certificate-name">

Certificate Title

<div class="certificate-details">

<img src="assets/img/certificate.jpg">

</div>

</li>
```

</details>

---

# ⚙ JavaScript Features

| Function | Description |
| :--- | :--- |
| scrollToProject(id) | Opens selected project |
| Tab Switching | Academic ↔ Volunteer |
| Expand Certificates | Click to preview certificate |
| Smooth Scrolling | Navigation animation |

---

# 🌍 Browser Compatibility

| Browser | Supported |
| :--- | :---: |
| <img src="https://img.shields.io/badge/Chrome-Yes-success"> | ✅ |
| <img src="https://img.shields.io/badge/Firefox-Yes-success"> | ✅ |
| <img src="https://img.shields.io/badge/Edge-Yes-success"> | ✅ |
| <img src="https://img.shields.io/badge/Safari-Yes-success"> | ✅ |
| <img src="https://img.shields.io/badge/Opera-Yes-success"> | ✅ |

---

# 🤝 Contributing

```text
Fork Repository
      │
      ▼
Create Feature Branch
      │
      ▼
Commit Changes
      │
      ▼
Push Branch
      │
      ▼
Open Pull Request
```

---

# 📬 Contact

<div align="center">

### 👩‍💻 Maira Alam

📧 **Email**

maira.alam33@gmail.com

💻 GitHub

https://github.com/maira-alam

💼 LinkedIn

https://linkedin.com/in/maira-a-48699630b

</div>

---

# 📄 License

This project is licensed under the **MIT License**.

See the **LICENSE** file for details.

---

# 🙏 Acknowledgements

| Resource | Purpose |
| :--- | :--- |
| Capsule Render | Animated Header |
| Readme Typing SVG | Typing Animation |
| Shields.io | Badges |
| GitHub | Repository Hosting |

---

<div align="center">

<img width="100%" src="https://capsule-render.vercel.app/api?type=rect&height=2&color=0:1E3A5F,50:2563EB,100:60A5FA" />

### ❤️ Built with HTML, CSS & JavaScript

**Made by Maira Alam**

⭐ If you like this project, consider giving it a star.

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&height=120&section=footer&color=0:60A5FA,50:2563EB,100:1E3A5F"/>

</div>
