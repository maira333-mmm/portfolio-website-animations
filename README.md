<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Maira Alam | Portfolio</title>
    <style>
        /* ===== RESET & BASE ===== */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            scroll-behavior: smooth;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #0a0a0a;
            color: #ffffff;
            line-height: 1.6;
            padding: 20px;
        }

        /* ===== CONTAINER ===== */
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: #111;
            padding: 40px;
            border-radius: 16px;
            box-shadow: 0 0 40px rgba(0, 204, 255, 0.05);
            border: 1px solid #1a1a1a;
        }

        /* ===== HEADER ===== */
        .header {
            text-align: center;
            padding: 30px 0 20px;
            border-bottom: 2px solid #00ccff;
            margin-bottom: 30px;
        }

        .header h1 {
            font-size: 3rem;
            font-weight: 700;
            background: linear-gradient(135deg, #00ccff, #0099cc);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .header .subtitle {
            font-size: 1.2rem;
            color: #8899aa;
            margin-top: 5px;
        }

        .header .badge-container {
            margin-top: 15px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
        }

        .badge {
            display: inline-block;
            padding: 6px 16px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 600;
            letter-spacing: 0.5px;
            text-transform: uppercase;
        }

        .badge-html { background: #E34F26; color: #fff; }
        .badge-css { background: #1572B6; color: #fff; }
        .badge-js { background: #F7DF1E; color: #000; }
        .badge-responsive { background: #FF6B6B; color: #fff; }
        .badge-status { background: #2563EB; color: #fff; }
        .badge-version { background: #10B981; color: #fff; }
        .badge-commit { background: #8B5CF6; color: #fff; }

        /* ===== TABLE OF CONTENTS ===== */
        .toc {
            background: #1a1a1a;
            padding: 20px 30px;
            border-radius: 12px;
            margin: 30px 0;
            border-left: 4px solid #00ccff;
        }

        .toc h2 {
            color: #00ccff;
            font-size: 1.3rem;
            margin-bottom: 12px;
        }

        .toc ul {
            list-style: none;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 6px 20px;
        }

        .toc ul li::before {
            content: "▸ ";
            color: #00ccff;
        }

        .toc ul li a {
            color: #aabbcc;
            text-decoration: none;
            transition: 0.3s;
        }

        .toc ul li a:hover {
            color: #00ccff;
        }

        /* ===== SECTIONS ===== */
        section {
            margin: 40px 0;
            padding: 30px;
            background: #151515;
            border-radius: 12px;
            border: 1px solid #1f1f1f;
            transition: 0.3s;
        }

        section:hover {
            border-color: #00ccff33;
        }

        h2 {
            font-size: 2rem;
            color: #00ccff;
            margin-bottom: 20px;
            border-bottom: 2px solid #00ccff22;
            padding-bottom: 10px;
        }

        h3 {
            font-size: 1.4rem;
            color: #66ddff;
            margin: 20px 0 12px;
        }

        p {
            color: #ccddee;
            font-size: 1.05rem;
            margin-bottom: 12px;
        }

        /* ===== BADGES ROW ===== */
        .tech-badges {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin: 15px 0;
        }

        .tech-badge {
            display: inline-block;
            padding: 8px 20px;
            background: #1a1a2e;
            border: 1px solid #00ccff44;
            border-radius: 30px;
            font-size: 0.9rem;
            color: #aaccff;
            transition: 0.3s;
        }

        .tech-badge:hover {
            background: #00ccff22;
            border-color: #00ccff;
            transform: translateY(-2px);
        }

        /* ===== TABLES ===== */
        .table-wrap {
            overflow-x: auto;
            margin: 15px 0;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 0.95rem;
            min-width: 500px;
        }

        th {
            background: #00ccff;
            color: #000;
            padding: 12px 16px;
            text-align: left;
            font-weight: 700;
        }

        td {
            padding: 12px 16px;
            border-bottom: 1px solid #1f2a3a;
            color: #ccddee;
        }

        tr:hover td {
            background: #00ccff08;
        }

        /* ===== PROJECTS ===== */
        .project-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            margin-top: 15px;
        }

        .project-card {
            background: #1a1a2e;
            padding: 20px;
            border-radius: 10px;
            border-left: 4px solid #00ccff;
            transition: 0.3s;
        }

        .project-card:hover {
            transform: translateX(6px);
            border-color: #66ddff;
            box-shadow: 0 0 25px #00ccff11;
        }

        .project-card h4 {
            color: #66ddff;
            font-size: 1.2rem;
            margin-bottom: 6px;
        }

        .project-card .tech {
            font-size: 0.85rem;
            color: #8899bb;
            margin-bottom: 8px;
        }

        .project-card ul {
            list-style: none;
            padding-left: 0;
        }

        .project-card ul li {
            color: #aabbcc;
            font-size: 0.95rem;
            padding: 4px 0 4px 20px;
            position: relative;
        }

        .project-card ul li::before {
            content: "◆ ";
            color: #00ccff;
            position: absolute;
            left: 0;
        }

        /* ===== SKILLS ===== */
        .skill-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin: 10px 0;
        }

        .skill-tag {
            padding: 8px 20px;
            background: #1a1a2e;
            border: 1px solid #00ccff44;
            border-radius: 30px;
            font-size: 0.9rem;
            color: #aaccff;
            transition: 0.3s;
        }

        .skill-tag:hover {
            background: #00ccff;
            color: #000;
            transform: scale(1.05);
        }

        /* ===== CODE BLOCKS ===== */
        .code-block {
            background: #0d0d1a;
            padding: 16px 20px;
            border-radius: 8px;
            border: 1px solid #1f2a3a;
            font-family: 'Courier New', monospace;
            font-size: 0.9rem;
            color: #88ddff;
            overflow-x: auto;
            margin: 12px 0;
            white-space: pre-wrap;
            word-break: break-all;
        }

        .code-block .comment {
            color: #6688aa;
        }

        /* ===== CERTIFICATES ===== */
        .cert-list {
            list-style: none;
            padding: 0;
        }

        .cert-list li {
            padding: 12px 18px;
            background: #1a1a2e;
            margin: 8px 0;
            border-radius: 8px;
            border-left: 3px solid #00ccff;
            color: #ccddee;
            cursor: pointer;
            transition: 0.3s;
        }

        .cert-list li:hover {
            background: #00ccff11;
            border-color: #66ddff;
        }

        /* ===== CONTACT ===== */
        .contact-info {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            padding: 10px 0;
        }

        .contact-item {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 20px;
            background: #1a1a2e;
            border-radius: 30px;
            border: 1px solid #00ccff33;
            transition: 0.3s;
        }

        .contact-item:hover {
            border-color: #00ccff;
            transform: translateY(-2px);
        }

        .contact-item a {
            color: #88ddff;
            text-decoration: none;
        }

        .contact-item a:hover {
            color: #00ccff;
        }

        /* ===== FOOTER ===== */
        .footer {
            text-align: center;
            padding: 30px 0 10px;
            border-top: 2px solid #00ccff22;
            margin-top: 30px;
        }

        .footer .heart {
            color: #ff4466;
        }

        .footer .star {
            color: #ffcc00;
        }

        .footer a {
            color: #00ccff;
            text-decoration: none;
        }

        .footer a:hover {
            text-decoration: underline;
        }

        .back-top {
            display: inline-block;
            margin-top: 15px;
            padding: 8px 24px;
            background: #00ccff;
            color: #000;
            border-radius: 30px;
            font-weight: 600;
            text-decoration: none;
            transition: 0.3s;
        }

        .back-top:hover {
            background: #66ddff;
            transform: scale(1.05);
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 768px) {
            .container { padding: 20px; }
            .header h1 { font-size: 2.2rem; }
            .toc ul { grid-template-columns: 1fr; }
            section { padding: 20px; }
            .project-grid { grid-template-columns: 1fr; }
            table { font-size: 0.85rem; min-width: 300px; }
            .contact-info { flex-direction: column; }
        }

        @media (max-width: 480px) {
            .container { padding: 12px; }
            .header h1 { font-size: 1.8rem; }
            .badge-container .badge { font-size: 0.65rem; padding: 4px 12px; }
            .tech-badges .tech-badge { font-size: 0.75rem; padding: 5px 14px; }
            .code-block { font-size: 0.75rem; padding: 12px; }
        }
    </style>
</head>
<body>

<div class="container">

    <!-- ===== HEADER ===== -->
    <header class="header">
        <h1>👩‍💻 Maira Alam</h1>
        <p class="subtitle">Computer Science Student | Aspiring Software Developer</p>
        <div class="badge-container">
            <span class="badge badge-html">HTML5</span>
            <span class="badge badge-css">CSS3</span>
            <span class="badge badge-js">JavaScript</span>
            <span class="badge badge-responsive">Responsive</span>
            <span class="badge badge-status">Status: In Development</span>
            <span class="badge badge-version">Version 1.0.0</span>
            <span class="badge badge-commit">Last Commit: 2024</span>
        </div>
    </header>

    <!-- ===== TABLE OF CONTENTS ===== -->
    <div class="toc">
        <h2>📋 Table of Contents</h2>
        <ul>
            <li><a href="#about">About The Project</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#tech">Technologies</a></li>
            <li><a href="#structure">Project Structure</a></li>
            <li><a href="#sections">Sections Overview</a></li>
            <li><a href="#getting-started">Getting Started</a></li>
            <li><a href="#customization">Customization Guide</a></li>
            <li><a href="#js-features">JavaScript Features</a></li>
            <li><a href="#browser">Browser Compatibility</a></li>
            <li><a href="#contributing">Contributing</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#license">License</a></li>
        </ul>
    </div>

    <!-- ===== ABOUT ===== -->
    <section id="about">
        <h2>🎯 About The Project</h2>
        <p>A <strong>responsive personal portfolio website</strong> built with <strong>HTML, CSS, and JavaScript</strong> — designed to showcase projects, skills, and achievements in a clean and interactive layout.</p>

        <h3>Purpose</h3>
        <ul style="color:#ccddee; list-style:none; padding-left:0;">
            <li style="padding:6px 0;">✅ <strong>Personal Branding:</strong> Establishes a professional online presence</li>
            <li style="padding:6px 0;">✅ <strong>Project Showcase:</strong> Demonstrates technical capabilities through detailed project descriptions</li>
            <li style="padding:6px 0;">✅ <strong>Skill Display:</strong> Highlights programming languages, frameworks, and tools</li>
            <li style="padding:6px 0;">✅ <strong>Interactive Experience:</strong> Engages visitors with tabbed sections and clickable elements</li>
        </ul>
    </section>

    <!-- ===== FEATURES ===== -->
    <section id="features">
        <h2>✨ Features</h2>
        <div class="table-wrap">
            <table>
                <thead>
                    <tr><th>Feature</th><th>Description</th></tr>
                </thead>
                <tbody>
                    <tr><td>🎨 Responsive Design</td><td>Adapts perfectly to all screen sizes (mobile, tablet, desktop)</td></tr>
                    <tr><td>✨ Smooth Animations</td><td>Fade-in and slide-in effects for polished user experience</td></tr>
                    <tr><td>📂 Interactive Projects</td><td>Click navigation buttons to view detailed project information</td></tr>
                    <tr><td>📜 Certificate Tabs</td><td>Switch between Academic Certificates and Volunteer Experience</td></tr>
                    <tr><td>🖱️ Click-to-View</td><td>Expand certificate details and images on click</td></tr>
                    <tr><td>📌 Fixed Navigation</td><td>Smooth scrolling with fixed header</td></tr>
                    <tr><td>📄 Resume Download</td><td>One-click PDF download (placeholder)</td></tr>
                    <tr><td>🎯 Contact Section</td><td>Direct email link for easy communication</td></tr>
                </tbody>
            </table>
        </div>
    </section>

    <!-- ===== TECH STACK ===== -->
    <section id="tech">
        <h2>🛠️ Technologies Used</h2>
        <div class="tech-badges">
            <span class="tech-badge">HTML5</span>
            <span class="tech-badge">CSS3</span>
            <span class="tech-badge">JavaScript</span>
            <span class="tech-badge">Google Fonts</span>
            <span class="tech-badge">CSS Variables</span>
            <span class="tech-badge">Responsive Design</span>
        </div>
        <div class="table-wrap">
            <table>
                <thead>
                    <tr><th>Technology</th><th>Purpose</th></tr>
                </thead>
                <tbody>
                    <tr><td>HTML5</td><td>Semantic structure and content</td></tr>
                    <tr><td>CSS3</td><td>Styling and animations</td></tr>
                    <tr><td>JavaScript</td><td>Interactive features</td></tr>
                    <tr><td>Google Fonts</td><td>Poppins typography</td></tr>
                    <tr><td>CSS Variables</td><td>Consistent theming</td></tr>
                </tbody>
            </table>
        </div>
    </section>

    <!-- ===== PROJECT STRUCTURE ===== -->
    <section id="structure">
        <h2>📁 Project Structure</h2>
        <div class="code-block">
portfolio-website/
│
├── 📄 index.html          # Main HTML file
├── 🎨 style.css           # All styles and animations
├── ⚡ script.js           # JavaScript functionality
├── 📄 resume.pdf          # Downloadable resume (placeholder)
│
├── 📂 assets/
│   ├── 📂 img/            # Certificate images
│   │   ├── social.jpg
│   │   ├── photoshop.jpg
│   │   ├── html5.jpg
│   │   └── volunteer.jpg
│   └── 📂 icons/          # Additional icons
│
└── 📄 README.md           # Project documentation
        </div>
    </section>

    <!-- ===== SECTIONS OVERVIEW ===== -->
    <section id="sections">
        <h2>📑 Sections Overview</h2>

        <h3>🏠 Home Section</h3>
        <p>Introduction with animated typing effect. Call-to-action buttons (Contact Me, Download Resume).</p>

        <h3>👤 About Section</h3>
        <p>Professional summary highlighting software development foundation, technical expertise, and problem-solving skills.</p>

        <h3>💻 Skills Section</h3>
        <div class="table-wrap">
            <table>
                <thead><tr><th>Category</th><th>Skills</th></tr></thead>
                <tbody>
                    <tr><td><strong>Technical Skills</strong></td><td>C++, HTML, CSS, JavaScript, PHP</td></tr>
                    <tr><td><strong>Web Technologies</strong></td><td>MySQL, jQuery, Bootstrap, Laravel</td></tr>
                    <tr><td><strong>Other Skills</strong></td><td>Communication (English & Urdu), Teamwork, Problem-Solving</td></tr>
                </tbody>
            </table>
        </div>

        <h3>📂 Projects Section</h3>
        <div class="project-grid">
            <div class="project-card">
                <h4>Online Car Rental System</h4>
                <div class="tech">HTML, CSS, JS, Bootstrap, jQuery, PHP, Laravel</div>
                <ul>
                    <li>Fully functional car rental system</li>
                    <li>Responsive design with interactive forms</li>
                    <li>Migrated to Laravel for scalability</li>
                </ul>
            </div>
            <div class="project-card">
                <h4>Encryption-Decryption Tool</h4>
                <div class="tech">HTML, CSS, JavaScript</div>
                <ul>
                    <li>Secure web-based encryption tool</li>
                    <li>Enhances privacy in communications</li>
                </ul>
            </div>
            <div class="project-card">
                <h4>Augmented Reality Game</h4>
                <div class="tech">AR Technology</div>
                <ul>
                    <li>Immersive AR experience</li>
                    <li>Educational cultural exploration</li>
                </ul>
            </div>
            <div class="project-card">
                <h4>SciGen App</h4>
                <div class="tech">Research Platform</div>
                <ul>
                    <li>Share research and ideas</li>
                    <li>Comments, ratings, location services</li>
                </ul>
            </div>
            <div class="project-card">
                <h4>Airplane Seating Management</h4>
                <div class="tech">C++ / OOP</div>
                <ul>
                    <li>Manage seat bookings</li>
                    <li>User-friendly application</li>
                </ul>
            </div>
        </div>

        <h3>📜 Certificates Section</h3>
        <p><strong>Academic Certificates:</strong> Social Media Mastery, Graphics Design, Full-Stack Course</p>
        <p><strong>Volunteer Experience:</strong> Government Special Education Centre (GSEC)</p>

        <h3>📬 Contact Section</h3>
        <p>Email: <a href="mailto:maira.alam33@gmail.com" style="color:#00ccff;">maira.alam33@gmail.com</a></p>
    </section>

    <!-- ===== GETTING STARTED ===== -->
    <section id="getting-started">
        <h2>🚀 Getting Started</h2>

        <h3>Prerequisites</h3>
        <ul style="color:#ccddee; padding-left:20px;">
            <li>Any modern web browser (Chrome, Firefox, Safari, Edge)</li>
            <li>Text editor (VS Code recommended)</li>
        </ul>

        <h3>Installation</h3>
        <div class="code-block">
# Clone the repository
git clone https://github.com/maira-alam/portfolio-website.git

# Navigate to project directory
cd portfolio-website

# Open in browser (choose one)
# Option 1: Double-click index.html
# Option 2: Use Live Server extension in VS Code
        </div>
    </section>

    <!-- ===== CUSTOMIZATION ===== -->
    <section id="customization">
        <h2>🎨 Customization Guide</h2>

        <h3>Change Colors</h3>
        <p>Edit in <code style="color:#00ccff;">style.css</code>:</p>
        <div class="code-block">
:root {
  --bg-color: #000;           /* Background color */
  --second-bg-color: #0a0a0a; /* Secondary background */
  --text-color: #fff;         /* Text color */
  --main-color: #00ccff;      /* Primary accent color */
  --hover-color: #0099cc;     /* Hover state color */
}
        </div>

        <h3>Add New Project</h3>
        <div class="code-block">
&lt;div id="project6" class="project"&gt;
  &lt;h3&gt;Project Name&lt;/h3&gt;
  &lt;p&gt;&lt;strong&gt;Technologies:&lt;/strong&gt; HTML, CSS, JavaScript&lt;/p&gt;
  &lt;ul&gt;
    &lt;li&gt;Feature description 1&lt;/li&gt;
    &lt;li&gt;Feature description 2&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;
        </div>

        <h3>Add Certificate</h3>
        <div class="code-block">
&lt;li class="certificate-name"&gt;
  Certificate Title
  &lt;div class="certificate-details"&gt;
    &lt;img src="assets/img/certificate.jpg" alt="Certificate"&gt;
  &lt;/div&gt;
&lt;/li&gt;
        </div>
    </section>

    <!-- ===== JAVASCRIPT FEATURES ===== -->
    <section id="js-features">
        <h2>💻 JavaScript Features</h2>
        <div class="table-wrap">
            <table>
                <thead><tr><th>Function</th><th>Description</th></tr></thead>
                <tbody>
                    <tr><td><code>scrollToProject(id)</code></td><td>Navigates to selected project and displays details</td></tr>
                    <tr><td>Certificate Tab Switching</td><td>Toggles between Academic and Volunteer tabs</td></tr>
                    <tr><td>Certificate Expand/Collapse</td><td>Shows/hides certificate images on click</td></tr>
                    <tr><td>Smooth Scrolling</td><td>Built-in CSS <code>scroll-behavior: smooth</code></td></tr>
                </tbody>
            </table>
        </div>
    </section>

    <!-- ===== BROWSER COMPATIBILITY ===== -->
    <section id="browser">
        <h2>🧪 Browser Compatibility</h2>
        <div class="table-wrap">
            <table>
                <thead><tr><th>Browser</th><th>Version</th><th>Status</th></tr></thead>
                <tbody>
                    <tr><td>Chrome</td><td>60+</td><td>✅ Fully Supported</td></tr>
                    <tr><td>Firefox</td><td>60+</td><td>✅ Fully Supported</td></tr>
                    <tr><td>Safari</td><td>12+</td><td>✅ Fully Supported</td></tr>
                    <tr><td>Edge</td><td>80+</td><td>✅ Fully Supported</td></tr>
                    <tr><td>Opera</td><td>50+</td><td>✅ Fully Supported</td></tr>
                </tbody>
            </table>
        </div>
    </section>

    <!-- ===== CONTRIBUTING ===== -->
    <section id="contributing">
        <h2>🤝 Contributing</h2>
        <p>Contributions are welcome! Here's how you can help:</p>

        <h3>How to Contribute</h3>
        <ol style="color:#ccddee; padding-left:20px;">
            <li><strong>Fork</strong> the repository</li>
            <li><strong>Create</strong> your feature branch (<code>git checkout -b feature/AmazingFeature</code>)</li>
            <li><strong>Commit</strong> your changes (<code>git commit -m 'Add some AmazingFeature'</code>)</li>
            <li><strong>Push</strong> to the branch (<code>git push origin feature/AmazingFeature</code>)</li>
            <li><strong>Open</strong> a Pull Request</li>
        </ol>

        <h3>Good First Issues</h3>
        <ul style="color:#ccddee; padding-left:20px;">
            <li>🎨 Improve accessibility</li>
            <li>✨ Add more animations</li>
            <li>📱 Enhance mobile responsiveness</li>
            <li>🖼️ Optimize images</li>
            <li>🔧 Fix minor bugs</li>
        </ul>
    </section>

    <!-- ===== CONTACT ===== -->
    <section id="contact">
        <h2>📬 Contact</h2>
        <p><strong>Maira Alam</strong></p>
        <div class="contact-info">
            <div class="contact-item">📧 <a href="mailto:maira.alam33@gmail.com">maira.alam33@gmail.com</a></div>
            <div class="contact-item">🔗 <a href="https://github.com/maira-alam">GitHub</a></div>
            <div class="contact-item">💼 <a href="https://linkedin.com/in/maira-alam">LinkedIn</a></div>
        </div>
    </section>

    <!-- ===== LICENSE ===== -->
    <section id="license">
        <h2>📄 License</h2>
        <p>MIT License - see <a href="#" style="color:#00ccff;">LICENSE</a> file for details.</p>
        <div class="code-block">
MIT License

Copyright (c) 2024 Maira Alam

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
        </div>
    </section>

    <!-- ===== ACKNOWLEDGMENTS ===== -->
    <section>
        <h2>🙏 Acknowledgments</h2>
        <ul style="color:#ccddee; padding-left:20px;">
            <li><a href="https://capsule-render.vercel.app/" style="color:#00ccff;">Capsule Render</a> for animated headers</li>
            <li><a href="https://readme-typing-svg.demolab.com/" style="color:#00ccff;">Readme Typing SVG</a> for typing animations</li>
            <li><a href="https://shields.io/" style="color:#00ccff;">Shields.io</a> for badges</li>
            <li><a href="https://fonts.google.com/" style="color:#00ccff;">Google Fonts</a> for Poppins font</li>
        </ul>
    </section>

    <!-- ===== FOOTER ===== -->
    <footer class="footer">
        <p>Made with <span class="heart">❤️</span> by <strong>Maira Alam</strong></p>
        <p><span class="star">⭐</span> Star this repository if you find it helpful!</p>
        <a href="#" class="back-top">⬆ Back to Top</a>
        <br><br>
        <img width="100%" src="https://capsule-render.vercel.app/api?type=waving&height=80&section=footer&color=0:60A5FA,50:2563EB,100:1E3A5F&animation=fadeIn" alt="Footer" />
    </footer>

</div>

</body>
</html>
