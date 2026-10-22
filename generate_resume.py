import os
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable, KeepTogether
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT

def create_resume(output_path):
    # Ensure directory exists
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    # 0.35 inch margins for single-page clean density
    margin = 0.32 * inch
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=margin,
        rightMargin=margin,
        topMargin=margin,
        bottomMargin=margin
    )
    
    styles = getSampleStyleSheet()
    
    # Custom Palette
    PRIMARY = HexColor("#0f172a")     # Deep Slate / Navy
    ACCENT = HexColor("#0284c7")      # Bright Cerulean Cyan/Blue
    AI_ACCENT = HexColor("#6d28d9")   # Modern AI Violet
    DARK_TEXT = HexColor("#1e293b")   # Charcoal
    MUTED_TEXT = HexColor("#475569")  # Slate Gray
    BORDER_COLOR = HexColor("#cbd5e1")# Light Slate
    
    # Styles
    name_style = ParagraphStyle(
        'ResumeName',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=20,
        alignment=TA_CENTER,
        textColor=PRIMARY
    )
    
    title_style = ParagraphStyle(
        'ResumeTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=11.5,
        alignment=TA_CENTER,
        textColor=ACCENT
    )
    
    contact_style = ParagraphStyle(
        'ResumeContact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=10.5,
        alignment=TA_CENTER,
        textColor=MUTED_TEXT
    )
    
    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=12,
        textColor=PRIMARY,
        spaceAfter=2
    )
    
    body_style = ParagraphStyle(
        'ResumeBody',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=10.8,
        textColor=DARK_TEXT
    )
    
    bullet_style = ParagraphStyle(
        'ResumeBullet',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=10.5,
        textColor=DARK_TEXT,
        leftIndent=9,
        firstLineIndent=-6,
        spaceAfter=1.5
    )
    
    company_style = ParagraphStyle(
        'JobCompany',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=11,
        textColor=PRIMARY
    )
    
    job_date = ParagraphStyle(
        'JobDate',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8,
        leading=10.5,
        alignment=TA_RIGHT,
        textColor=MUTED_TEXT
    )
    
    skill_category = ParagraphStyle(
        'SkillCategory',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8,
        leading=10.5,
        textColor=PRIMARY
    )
    
    skill_content = ParagraphStyle(
        'SkillContent',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=10.5,
        textColor=DARK_TEXT
    )

    story = []
    
    # 1. Header
    story.append(Paragraph("RANJITH C", name_style))
    story.append(Spacer(1, 1))
    story.append(Paragraph("SOFTWARE DEVELOPER • AI-ASSISTED DEVELOPMENT SPECIALIST", title_style))
    story.append(Spacer(1, 2))
    
    contact_text = (
        'Kanniyakumari, Tamil Nadu, India &nbsp;|&nbsp; '
        '+91 95979 98489 &nbsp;|&nbsp; '
        '<font color="#0284c7"><b>ranjithshiva22@gmail.com</b></font> &nbsp;|&nbsp; '
        '<font color="#0284c7"><b>github.com/ranjith-devop</b></font> &nbsp;|&nbsp; '
        '<font color="#0284c7"><b>linkedin.com/in/ranjith9597</b></font>'
    )
    story.append(Paragraph(contact_text, contact_style))
    story.append(HRFlowable(width="100%", thickness=0.8, color=BORDER_COLOR, spaceBefore=3, spaceAfter=4))
    
    # 2. Professional Summary
    story.append(Paragraph("PROFESSIONAL SUMMARY", section_heading))
    summary_text = (
        "<b>Software Developer</b> with <b>1 year of professional experience</b> building scalable, maintainable web and mobile "
        "applications with advanced proficiency in <b>AI-assisted development</b> (Cursor, Google Antigravity, GitHub Copilot, "
        "Gemini CLI, Claude). Experienced across frontend (React.js, Tailwind CSS), backend (Express.js, Elysia.js, PHP, Laravel), "
        "mobile (React Native, Flutter), and databases (MySQL, PostgreSQL, MongoDB). Proven track record of leveraging AI workflows "
        "for accelerated prototyping, code refactoring, automated testing, and building resilient user-centric products."
    )
    story.append(Paragraph(summary_text, body_style))
    story.append(HRFlowable(width="100%", thickness=0.6, color=BORDER_COLOR, spaceBefore=3, spaceAfter=4))
    
    # 3. Professional Experience
    story.append(Paragraph("PROFESSIONAL EXPERIENCE", section_heading))
    
    # Job 1: Edmond Remedies
    col_widths = [4.7 * inch, 2.7 * inch]
    job1_data = [
        [
            Paragraph("<b>Edmond Remedies</b> &nbsp;|&nbsp; <font color='#0284c7'><b>Software Developer L1</b></font>", company_style),
            Paragraph("<b>Oct 2025 – Oct 2026</b>", job_date)
        ]
    ]
    t1 = Table(job1_data, colWidths=col_widths)
    t1.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(t1)
    
    job1_bullets = [
        "<b>Feature Engineering:</b> Contributed to end-to-end design, development, and maintenance of core application features adhering to product specs and clean coding standards.",
        "<b>AI-Assisted Efficiency:</b> Leveraged <b>AI-assisted development environments (Cursor, GitHub Copilot, Antigravity)</b> for rapid prototyping, complex code refactoring, context-aware debugging, and automated test scaffolding, accelerating delivery cycles.",
        "<b>Performance & Debugging:</b> Diagnosed and resolved application bugs, optimized critical runtime bottlenecks, and enhanced overall system stability and code maintainability.",
        "<b>API & Data Integration:</b> Engineered and integrated RESTful APIs, orchestrating seamless data flow between decoupled frontend client apps and backend micro-services.",
        "<b>Database Operations:</b> Performed schema queries, updates, and performance tuning across relational (MySQL) and NoSQL (MongoDB) databases.",
        "<b>Agile & Teamwork:</b> Collaborated actively with cross-functional engineering teams in Agile sprints, Git pull-request workflows, and peer code reviews."
    ]
    for b in job1_bullets:
        story.append(Paragraph(f"• &nbsp;{b}", bullet_style))
    story.append(Spacer(1, 2))
    
    # Job 2: AK Infopark
    job2_data = [
        [
            Paragraph("<b>AK Infopark</b> &nbsp;|&nbsp; <font color='#0284c7'><b>Full-Stack Development Intern</b></font>", company_style),
            Paragraph("<b>15-Day Onsite Internship</b>", job_date)
        ]
    ]
    t2 = Table(job2_data, colWidths=col_widths)
    t2.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(t2)
    
    job2_bullets = [
        "Acquired hands-on experience in full-stack web application development utilizing <b>React.js, Express.js, and MongoDB</b>.",
        "Implemented reusable component-based user interfaces with state management, modular CSS, and responsive layouts.",
        "Explored server-side architectural patterns, API endpoint handling, and database CRUD operations in MongoDB."
    ]
    for b in job2_bullets:
        story.append(Paragraph(f"• &nbsp;{b}", bullet_style))
    
    story.append(HRFlowable(width="100%", thickness=0.6, color=BORDER_COLOR, spaceBefore=3, spaceAfter=4))
    
    # 4. Technical Skills & AI Arsenal
    story.append(Paragraph("TECHNICAL SKILLS & AI ARSENAL", section_heading))
    
    skills_data = [
        [
            Paragraph("<b>AI-Assisted Dev:</b>", skill_category),
            Paragraph("<b>Cursor (Composer/Agentic), Google Antigravity, GitHub Copilot, Gemini CLI, Claude 3.5, Zcode, Prompt Engineering, Agentic Workflows</b>", skill_content)
        ],
        [
            Paragraph("<b>Languages:</b>", skill_category),
            Paragraph("Java (Core & OOP), JavaScript (ES6+), PHP, C (Basics), SQL", skill_content)
        ],
        [
            Paragraph("<b>Frontend:</b>", skill_category),
            Paragraph("React.js, Tailwind CSS, HTML5, CSS3, Blade, Framer Motion, Responsive Design", skill_content)
        ],
        [
            Paragraph("<b>Backend & Frameworks:</b>", skill_category),
            Paragraph("Express.js, Elysia.js (Bun), Node.js, PHP, Laravel, RESTful APIs, JWT Auth", skill_content)
        ],
        [
            Paragraph("<b>Mobile Development:</b>", skill_category),
            Paragraph("React Native, Flutter, Expo, AsyncStorage, Mobile Navigation", skill_content)
        ],
        [
            Paragraph("<b>Databases:</b>", skill_category),
            Paragraph("MySQL, PostgreSQL, MongoDB, Mongoose, Relational & NoSQL Schema Design", skill_content)
        ],
        [
            Paragraph("<b>Tools & Editors:</b>", skill_category),
            Paragraph("Git, GitHub, VS Code, Cursor, Antigravity, Postman, Vite, Bun/npm, Agile/Scrum", skill_content)
        ]
    ]
    
    skills_table = Table(skills_data, colWidths=[1.6 * inch, 5.8 * inch])
    skills_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0.7),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0.7),
    ]))
    story.append(skills_table)
    
    story.append(HRFlowable(width="100%", thickness=0.6, color=BORDER_COLOR, spaceBefore=3, spaceAfter=4))
    
    # 5. Key Projects
    story.append(Paragraph("NOTABLE PROJECTS", section_heading))
    
    # Project 1: Smart Medication App
    p1_head = [
        [
            Paragraph("<b>Smart Medication App</b> &nbsp;|&nbsp; <font color='#6d28d9'><b>React Native • AI Chatbot Integration</b></font>", company_style),
            Paragraph("<font color='#0284c7'><b>github.com/ranjith-devop/Smartmeds</b></font>", job_date)
        ]
    ]
    t_p1 = Table(p1_head, colWidths=col_widths)
    t_p1.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0.5),
    ]))
    story.append(t_p1)
    story.append(Paragraph("• &nbsp;Engineered mobile healthcare application with dosage tracking, schedules, and <b>integrated conversational AI Chatbot API</b> for real-time medicine queries.", bullet_style))
    story.append(Paragraph("• &nbsp;Architected with React Native, Node/Express backend, and MongoDB for secure patient prescription storage.", bullet_style))
    story.append(Spacer(1, 1))
    
    # Project 2: Memory Management App (Memo)
    p2_head = [
        [
            Paragraph("<b>Memory Management Application (Memo)</b> &nbsp;|&nbsp; <font color='#0284c7'><b>React Native • Express.js</b></font>", company_style),
            Paragraph("<font color='#0284c7'><b>github.com/ranjith-devop/Memo</b></font>", job_date)
        ]
    ]
    t_p2 = Table(p2_head, colWidths=col_widths)
    t_p2.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0.5),
    ]))
    story.append(t_p2)
    story.append(Paragraph("• &nbsp;Developed note & memory tracking app featuring fast search, media attachments, offline persistence with AsyncStorage, and cloud sync APIs.", bullet_style))
    story.append(Spacer(1, 1))
    
    # Project 3: Pattern-Based Authentication System
    p3_head = [
        [
            Paragraph("<b>Pattern-Based Authentication System</b> &nbsp;|&nbsp; <font color='#0284c7'><b>React.js • HTML5 Canvas</b></font>", company_style),
            Paragraph("<font color='#0284c7'><b>patternauthsystem.netlify.app</b></font>", job_date)
        ]
    ]
    t_p3 = Table(p3_head, colWidths=col_widths)
    t_p3.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0.5),
    ]))
    story.append(t_p3)
    story.append(Paragraph("• &nbsp;Created visual gesture authentication system utilizing interactive canvas gesture tracking as biometric access credentials instead of plaintext passwords.", bullet_style))
    
    story.append(HRFlowable(width="100%", thickness=0.6, color=BORDER_COLOR, spaceBefore=3, spaceAfter=4))
    
    # 6. Education
    story.append(Paragraph("EDUCATION", section_heading))
    edu_head = [
        [
            Paragraph("<b>Rohini College of Engineering and Technology</b> &nbsp;|&nbsp; <font color='#1e293b'>B.E. Computer Science and Engineering</font>", company_style),
            Paragraph("<b>2022 – 2026 &nbsp;|&nbsp; CGPA: 8.06 / 10</b>", job_date)
        ]
    ]
    t_edu = Table(edu_head, colWidths=col_widths)
    t_edu.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_edu)

    doc.build(story)
    print(f"Successfully generated resume at: {output_path}")

if __name__ == '__main__':
    # Generate both in public and src/assets for maximum compatibility
    create_resume(r"d:\pportfolio\public\ranjithresume.pdf")
    create_resume(r"d:\pportfolio\src\assets\ranjithresume.pdf")
