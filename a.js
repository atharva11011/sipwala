const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
        AlignmentType, HeadingLevel, BorderStyle, WidthType, PageBreak } = require('docx');
const fs = require('fs');

const doc = new Document({
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
      }
    },
    children: [
      // Chapter Title
      new Paragraph({
        text: "CHAPTER 1",
        heading: HeadingLevel.HEADING_1,
        alignment: AlignmentType.CENTER,
        spacing: { before: 480, after: 240 }
      }),
      new Paragraph({
        text: "INTRODUCTION",
        heading: HeadingLevel.HEADING_1,
        alignment: AlignmentType.CENTER,
        spacing: { after: 480 }
      }),

      // Main Introduction
      new Paragraph({
        text: "In today's fast-paced financial landscape, retail investors face significant challenges in making informed investment decisions. The complexity of financial markets, coupled with the overwhelming amount of information available, often leaves individual investors confused and hesitant. Traditional investment advisory services are frequently expensive, inaccessible to common investors, and lack the transparency needed to build trust.",
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 240, line: 360 }
      }),

      new Paragraph({
        text: "SIPWALA is a comprehensive web-based registered advisory platform designed specifically for retail investors who seek guidance in systematic investment planning (SIP) and mutual fund investments. The platform bridges the gap between professional financial advisory services and everyday investors by providing accessible, transparent, and user-friendly investment tools and resources.",
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 240, line: 360 }
      }),

      new Paragraph({
        text: "The rise of digital platforms has revolutionized how people interact with financial services. E-commerce and digital transformation have touched almost every sector, and the investment advisory domain is no exception. SIPWALA leverages modern web technologies to democratize access to quality investment advisory services, making them available to anyone with an internet connection.",
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 240, line: 360 }
      }),

      new Paragraph({
        text: "This project aims to develop an interactive online platform that empowers retail investors with essential tools including a SIP calculator for planning investments, a comprehensive fund explorer to research and compare mutual funds, educational blog content managed by administrators, consultation forms for personalized guidance, and trust-building resources that establish credibility in the advisory space.",
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 480, line: 360 }
      }),

      // Section 1.1
      new Paragraph({
        text: "1.1 Existing System and Need for Software",
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 480, after: 240 }
      }),

      new Paragraph({
        text: "The existing investment advisory ecosystem operates primarily through traditional channels that present several limitations:",
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 240, line: 360 }
      }),

      new Paragraph({
        text: "Manual and Offline Processes:",
        bold: true,
        spacing: { before: 240, after: 120 }
      }),
      new Paragraph({
        text: "Traditional investment advisors typically operate through physical offices where clients must schedule appointments, travel to locations, and engage in time-consuming face-to-face consultations. This manual approach limits accessibility and creates barriers for investors in remote locations or those with busy schedules. Documentation is often paper-based, making it difficult to track investment history, retrieve information quickly, or maintain organized records.",
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 240, line: 360 }
      }),

      new Paragraph({
        text: "High Cost and Limited Accessibility:",
        bold: true,
        spacing: { before: 240, after: 120 }
      }),
      new Paragraph({
        text: "Professional financial advisory services typically charge substantial fees, often as a percentage of assets under management or fixed consultation charges that are prohibitive for small retail investors. This pricing model effectively excludes a large segment of the population who would benefit most from investment guidance but cannot afford premium services. Additionally, quality advisory services are concentrated in urban centers, leaving investors in tier-2 and tier-3 cities underserved.",
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 240, line: 360 }
      }),

      new Paragraph({
        text: "Lack of Transparency and Trust Issues:",
        bold: true,
        spacing: { before: 240, after: 120 }
      }),
      new Paragraph({
        text: "Many investors are skeptical of financial advisors due to concerns about hidden commissions, biased recommendations favoring certain products, and lack of transparent fee structures. The absence of standardized information and the difficulty in verifying advisor credentials contribute to this trust deficit. Investors often struggle to distinguish between genuine advisory services and entities primarily focused on selling financial products.",
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 240, line: 360 }
      }),

      new Paragraph({
        text: "Limited Educational Resources:",
        bold: true,
        spacing: { before: 240, after: 120 }
      }),
      new Paragraph({
        text: "While information about investments is abundant online, it is often scattered across multiple sources, inconsistent in quality, and overwhelming for beginners. Retail investors lack access to curated, reliable educational content that can help them understand investment concepts, market dynamics, and the principles of systematic investing. The absence of centralized, trustworthy resources forces investors to rely on word-of-mouth recommendations or make uninformed decisions.",
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 240, line: 360 }
      }),

      new Paragraph({
        text: "Inadequate Planning Tools:",
        bold: true,
        spacing: { before: 240, after: 120 }
      }),
      new Paragraph({
        text: "Investors need tools to calculate potential returns, plan their investment journeys, and visualize the impact of systematic investments over time. While some basic calculators exist, they are often limited in functionality, difficult to find, or provided by platforms with vested interests. There is a clear need for comprehensive, unbiased planning tools that help investors make data-driven decisions about their SIP investments.",
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 240, line: 360 }
      }),

      new Paragraph({
        text: "Drawbacks of the Existing System:",
        bold: true,
        spacing: { before: 360, after: 120 }
      }),

      new Paragraph({
        text: "• Time-consuming manual processes for research and consultation",
        spacing: { after: 120, line: 360 }
      }),
      new Paragraph({
        text: "• High advisory fees that exclude small retail investors",
        spacing: { after: 120, line: 360 }
      }),
      new Paragraph({
        text: "• Geographical limitations restricting access to quality advisory services",
        spacing: { after: 120, line: 360 }
      }),
      new Paragraph({
        text: "• Lack of transparency in fee structures and recommendation processes",
        spacing: { after: 120, line: 360 }
      }),
      new Paragraph({
        text: "• Difficulty in verifying advisor credentials and expertise",
        spacing: { after: 120, line: 360 }
      }),
      new Paragraph({
        text: "• Scattered and inconsistent educational resources",
        spacing: { after: 120, line: 360 }
      }),
      new Paragraph({
        text: "• Limited availability of comprehensive investment planning tools",
        spacing: { after: 120, line: 360 }
      }),
      new Paragraph({
        text: "• Absence of platforms enabling direct investor-advisor communication",
        spacing: { after: 240, line: 360 }
      }),

      new Paragraph({
        text: "The Need for SIPWALA:",
        bold: true,
        spacing: { before: 360, after: 120 }
      }),
      new Paragraph({
        text: "These challenges necessitate a digital platform that can democratize access to investment advisory services, provide transparent and unbiased information, offer powerful planning tools, and create a trustworthy environment for retail investors. SIPWALA addresses these needs by providing a comprehensive, accessible, and user-friendly online platform that empowers investors to make informed decisions about their financial futures.",
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 480, line: 360 }
      }),

      // Section 1.2
      new Paragraph({
        text: "1.2 Proposed System",
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 480, after: 240 }
      }),

      new Paragraph({
        text: "SIPWALA is designed as a modern, web-based investment advisory platform that overcomes the limitations of traditional advisory systems through technology and user-centric design. The proposed system leverages cutting-edge web technologies to deliver a seamless, responsive, and feature-rich experience to retail investors.",
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 240, line: 360 }
      }),

      new Paragraph({
        text: "System Overview:",
        bold: true,
        spacing: { before: 240, after: 120 }
      }),
      new Paragraph({
        text: "The platform is built on a modern technology stack consisting of Next.js 14 for both frontend and backend operations, Tailwind CSS for responsive and attractive UI design, TypeScript for type-safe development, PostgreSQL as the primary database, Neon for cloud-hosted database services, and Prisma as the ORM for efficient database operations. This technology stack ensures high performance, scalability, and maintainability.",
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 240, line: 360 }
      }),

      new Paragraph({
        text: "Key Features of the Proposed System:",
        bold: true,
        spacing: { before: 360, after: 120 }
      }),

      new Paragraph({
        text: "1. SIP Calculator:",
        bold: true,
        spacing: { before: 240, after: 120 }
      }),
      new Paragraph({
        text: "An interactive and sophisticated calculator that allows investors to visualize the potential growth of their systematic investments. Users can input parameters such as monthly investment amount, expected rate of return, and investment duration to see projected returns. The calculator provides both numerical results and visual representations through charts and graphs, helping investors understand the power of compounding and plan their investment journeys effectively.",
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 240, line: 360 }
      }),

      new Paragraph({
        text: "2. Fund Explorer:",
        bold: true,
        spacing: { before: 240, after: 120 }
      }),
      new Paragraph({
        text: "A comprehensive database and search interface for mutual funds that enables investors to research, compare, and analyze different investment options. The fund explorer provides detailed information including fund performance metrics, historical returns, expense ratios, fund manager details, asset allocation, and risk ratings. Advanced filtering and sorting capabilities help investors identify funds that align with their investment goals and risk tolerance.",
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 240, line: 360 }
      }),

      new Paragraph({
        text: "3. Blog and Content Management System:",
        bold: true,
        spacing: { before: 240, after: 120 }
      }),
      new Paragraph({
        text: "An administrator-managed blog section that serves as an educational resource for investors. Administrators can create, edit, and publish articles covering topics such as investment strategies, market analysis, financial planning tips, and regulatory updates. The blog includes a gallery feature for visual content, categorization for easy navigation, and a featured content system to highlight important articles. This feature establishes the platform as a knowledge hub and builds credibility with users.",
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 240, line: 360 }
      }),

      new Paragraph({
        text: "4. Consultation Form:",
        bold: true,
        spacing: { before: 240, after: 120 }
      }),
      new Paragraph({
        text: "A contact and consultation request system that allows visitors to reach out to advisors for personalized guidance. The form captures essential information including user name, email, phone number, specific areas of interest (such as Monthly SIP, Lumpsum investments, etc.), and detailed messages describing their investment queries. Submitted consultations are stored in the database and accessible to administrators for follow-up, creating a streamlined communication channel between investors and advisors.",
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 240, line: 360 }
      }),

      new Paragraph({
        text: "5. Trust and Credibility Section:",
        bold: true,
        spacing: { before: 240, after: 120 }
      }),
      new Paragraph({
        text: "A dedicated section that builds trust with visitors by showcasing credentials, certifications, regulatory compliance, client testimonials, success stories, and transparency in advisory processes. This section addresses the trust deficit in the investment advisory industry by providing verifiable information about the platform's legitimacy and track record.",
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 240, line: 360 }
      }),

      new Paragraph({
        text: "User Roles and Access Control:",
        bold: true,
        spacing: { before: 360, after: 120 }
      }),

      new Paragraph({
        text: "Visitors/Guests (Unauthenticated Users):",
        bold: true,
        spacing: { before: 240, after: 120 }
      }),
      new Paragraph({
        text: "The majority of platform features are accessible to all visitors without requiring authentication. Guests can use the SIP calculator, explore mutual funds, read blog articles, view the image gallery, access the trust and credibility information, and submit consultation requests. This open-access model reduces barriers to entry and allows potential investors to evaluate the platform's value before committing to engagement.",
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 240, line: 360 }
      }),

      new Paragraph({
        text: "Administrators (Authenticated Users):",
        bold: true,
        spacing: { before: 240, after: 120 }
      }),
      new Paragraph({
        text: "Administrators have secure, password-protected access to the content management system. They can create, edit, and delete blog posts, manage the image gallery by uploading and organizing visual content, view and respond to consultation requests, and manage platform content to keep information current and relevant. The admin dashboard provides a centralized interface for all management activities.",
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 240, line: 360 }
      }),

      new Paragraph({
        text: "Advantages of the Proposed System:",
        bold: true,
        spacing: { before: 360, after: 120 }
      }),

      new Paragraph({
        text: "• 24/7 Accessibility: Users can access tools and information anytime, from anywhere with an internet connection",
        spacing: { after: 120, line: 360 }
      }),
      new Paragraph({
        text: "• Cost-Effective: Free access to essential tools eliminates financial barriers for small investors",
        spacing: { after: 120, line: 360 }
      }),
      new Paragraph({
        text: "• User-Friendly Interface: Modern, responsive design ensures ease of use across devices",
        spacing: { after: 120, line: 360 }
      }),
      new Paragraph({
        text: "• Comprehensive Resources: Integrated tools, educational content, and advisory services in one platform",
        spacing: { after: 120, line: 360 }
      }),
      new Paragraph({
        text: "• Transparency: Clear information about services, processes, and credentials builds user trust",
        spacing: { after: 120, line: 360 }
      }),
      new Paragraph({
        text: "• Scalability: Cloud-based infrastructure allows the platform to grow with user demand",
        spacing: { after: 120, line: 360 }
      }),
      new Paragraph({
        text: "• Data-Driven Insights: Tools provide calculations and visualizations to support informed decision-making",
        spacing: { after: 120, line: 360 }
      }),
      new Paragraph({
        text: "• Efficient Communication: Streamlined consultation process connects investors with advisors",
        spacing: { after: 480, line: 360 }
      }),

      // Section 1.3
      new Paragraph({
        text: "1.3 Scope of Work",
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 480, after: 240 }
      }),

      new Paragraph({
        text: "The SIPWALA platform is designed to serve multiple stakeholders in the investment advisory ecosystem, with clearly defined capabilities and boundaries that ensure focused delivery of value.",
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 240, line: 360 }
      }),

      new Paragraph({
        text: "Target Users:",
        bold: true,
        spacing: { before: 240, after: 120 }
      }),

      new Paragraph({
        text: "1. Retail Investors and Visitors:",
        bold: true,
        spacing: { before: 240, after: 120 }
      }),
      new Paragraph({
        text: "The primary users of SIPWALA are individual investors seeking guidance on systematic investment planning and mutual fund investments. These users can access all public-facing features without creating an account or logging in. They benefit from the SIP calculator to plan their investment strategies, the fund explorer to research and compare mutual funds, educational blog content to improve their financial literacy, consultation forms to request personalized guidance, and trust-building resources to verify the platform's credibility.",
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 240, line: 360 }
      }),

      new Paragraph({
        text: "2. Platform Administrators:",
        bold: true,
        spacing: { before: 240, after: 120 }
      }),
      new Paragraph({
        text: "Authenticated administrators manage the platform's content and user interactions. They have access to a comprehensive dashboard where they can publish and manage blog articles, upload and organize gallery images, review and respond to consultation requests, update trust and credibility information, and monitor platform usage and engagement metrics.",
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 240, line: 360 }
      }),

      new Paragraph({
        text: "Functional Scope:",
        bold: true,
        spacing: { before: 360, after: 120 }
      }),

      new Paragraph({
        text: "For Visitors:",
        bold: true,
        spacing: { before: 240, after: 120 }
      }),
      new Paragraph({
        text: "• Calculate potential SIP returns with customizable parameters\n• Explore comprehensive mutual fund database with filtering and search capabilities\n• Read educational content on investment strategies and financial planning\n• View visual gallery showcasing platform success stories and educational infographics\n• Submit consultation requests with detailed information about investment needs\n• Access trust and credibility information including certifications and testimonials\n• Navigate through all five main sections: Home, SIP Calculator, Fund Explorer, Blog, and Contact/Consultation",
        spacing: { after: 240, line: 360 }
      }),

      new Paragraph({
        text: "For Administrators:",
        bold: true,
        spacing: { before: 240, after: 120 }
      }),
      new Paragraph({
        text: "• Secure authentication and authorization for accessing admin features\n• Create, edit, publish, and delete blog posts with rich content\n• Upload, categorize, and manage gallery images\n• Mark specific content as featured for homepage display\n• View complete list of consultation requests with contact details\n• Export consultation data for offline processing and follow-up\n• Manage platform content to ensure information remains current and accurate",
        spacing: { after: 240, line: 360 }
      }),

      new Paragraph({
        text: "Technical Scope:",
        bold: true,
        spacing: { before: 360, after: 120 }
      }),
      new Paragraph({
        text: "The platform is built as a full-stack web application using Next.js 14 for server-side rendering and API routes, providing excellent performance and SEO optimization. The frontend utilizes React components with TypeScript for type safety, Tailwind CSS for responsive design, and Framer Motion for smooth animations. The backend implements RESTful API endpoints using Next.js API routes, Prisma ORM for database operations, and PostgreSQL hosted on Neon for data persistence. The application supports CORS for secure cross-origin requests and implements proper error handling and validation throughout.",
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 240, line: 360 }
      }),

      new Paragraph({
        text: "Scope Limitations:",
        bold: true,
        spacing: { before: 360, after: 120 }
      }),

      new Paragraph({
        text: "To maintain focus and ensure timely delivery, certain features are explicitly excluded from the current scope:",
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 120, line: 360 }
      }),

      new Paragraph({
        text: "• User Registration and Accounts: Visitors do not create personal accounts; the platform provides open access to tools and information",
        spacing: { after: 120, line: 360 }
      }),
      new Paragraph({
        text: "• Payment Processing: No financial transactions occur through the platform; it serves as an advisory and educational resource only",
        spacing: { after: 120, line: 360 }
      }),
      new Paragraph({
        text: "• Actual Investment Execution: The platform does not facilitate direct mutual fund purchases or investment transactions",
        spacing: { after: 120, line: 360 }
      }),
      new Paragraph({
        text: "• Portfolio Management: No features for tracking individual user portfolios or investment holdings",
        spacing: { after: 120, line: 360 }
      }),
      new Paragraph({
        text: "• Real-Time Market Data Integration: Fund information is maintained manually rather than through live market data feeds",
        spacing: { after: 120, line: 360 }
      }),
      new Paragraph({
        text: "• Mobile Applications: The current version is web-based only, though the responsive design works on mobile browsers",
        spacing: { after: 120, line: 360 }
      }),
      new Paragraph({
        text: "• Multi-Language Support: The platform currently operates in English only",
        spacing: { after: 120, line: 360 }
      }),
      new Paragraph({
        text: "• Advanced Analytics Dashboard: Basic consultation tracking is provided, but detailed analytics are out of scope",
        spacing: { after: 480, line: 360 }
      }),

      new Paragraph({
        text: "Benefits to Stakeholders:",
        bold: true,
        spacing: { before: 360, after: 120 }
      }),
      new Paragraph({
        text: "The platform provides significant value to all stakeholders. Retail investors gain free access to professional-grade investment planning tools, educational resources that improve financial literacy, transparent information to make informed decisions, and convenient access to advisory services. Administrators benefit from an efficient content management system, streamlined communication with potential clients, a platform to establish thought leadership through quality content, and tools to build credibility and trust with the investor community.",
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 480, line: 360 }
      }),

      // Section 1.4
      new Paragraph({
        text: "1.4 Operating Environment - Hardware and Software Requirements",
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 480, after: 240 }
      }),

      new Paragraph({
        text: "The SIPWALA platform is designed to operate in a modern web environment, requiring specific hardware and software configurations for both development and deployment phases.",
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 360, line: 360 }
      }),

      new Paragraph({
        text: "Development Environment - Hardware Requirements:",
        bold: true,
        spacing: { before: 360, after: 120 }
      }),

      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
          new TableRow({
            children: [
              new TableCell({
                children: [new Paragraph({ text: "Component", bold: true })],
                width: { size: 30, type: WidthType.PERCENTAGE },
                shading: { fill: "D3D3D3" }
              }),
              new TableCell({
                children: [new Paragraph({ text: "Minimum Requirement", bold: true })],
                width: { size: 35, type: WidthType.PERCENTAGE },
                shading: { fill: "D3D3D3" }
              }),
              new TableCell({
                children: [new Paragraph({ text: "Recommended", bold: true })],
                width: { size: 35, type: WidthType.PERCENTAGE },
                shading: { fill: "D3D3D3" }
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph("Processor")] }),
              new TableCell({ children: [new Paragraph("Intel Core i3 or equivalent")] }),
              new TableCell({ children: [new Paragraph("Intel Core i5 or higher")] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph("RAM")] }),
              new TableCell({ children: [new Paragraph("8 GB")] }),
              new TableCell({ children: [new Paragraph("16 GB or more")] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph("Hard Disk Space")] }),
              new TableCell({ children: [new Paragraph("50 GB free space")] }),
              new TableCell({ children: [new Paragraph("100 GB or more SSD")] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph("Monitor")] }),
              new TableCell({ children: [new Paragraph("14-inch display, 1366x768")] }),
              new TableCell({ children: [new Paragraph("15-inch or larger, Full HD")] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph("Network")] }),
              new TableCell({ children: [new Paragraph("Stable internet connection")] }),
              new TableCell({ children: [new Paragraph("High-speed broadband")] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph("Input Devices")] }),
              new TableCell({ children: [new Paragraph("Keyboard and mouse")] }),
              new TableCell({ children: [new Paragraph("Keyboard, mouse, and trackpad")] })
            ]
          })
        ]
      }),

      new Paragraph({ text: "", spacing: { after: 360 } }),

      new Paragraph({
        text: "Development Environment - Software Requirements:",
        bold: true,
        spacing: { before: 360, after: 120 }
      }),

      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
          new TableRow({
            children: [
              new TableCell({
                children: [new Paragraph({ text: "Category", bold: true })],
                width: { size: 30, type: WidthType.PERCENTAGE },
                shading: { fill: "D3D3D3" }
              }),
              new TableCell({
                children: [new Paragraph({ text: "Software/Technology", bold: true })],
                width: { size: 70, type: WidthType.PERCENTAGE },
                shading: { fill: "D3D3D3" }
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph("Operating System")] }),
              new TableCell({ children: [new Paragraph("Windows 10/11, macOS, or Linux (Ubuntu 20.04+)")] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph("Code Editor/IDE")] }),
              new TableCell({ children: [new Paragraph("Visual Studio Code (recommended) or WebStorm")] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph("Runtime Environment")] }),
              new TableCell({ children: [new Paragraph("Node.js v18.x or higher with npm/yarn package manager")] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph("Frontend Framework")] }),
              new TableCell({ children: [new Paragraph("Next.js 14 (React-based framework)")] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph("Programming Language")] }),
              new TableCell({ children: [new Paragraph("TypeScript 5.x (JavaScript superset)")] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph("CSS Framework")] }),
              new TableCell({ children: [new Paragraph("Tailwind CSS 3.x for styling")] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph("Backend")] }),
              new TableCell({ children: [new Paragraph("Next.js API Routes (serverless functions)")] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph("Database")] }),
              new TableCell({ children: [new Paragraph("PostgreSQL 14+ (hosted on Neon cloud platform)")] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph("ORM")] }),
              new TableCell({ children: [new Paragraph("Prisma 6.x for database operations")] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph("Version Control")] }),
              new TableCell({ children: [new Paragraph("Git with GitHub/GitLab for repository management")] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph("Web Browser")] }),
              new TableCell({ children: [new Paragraph("Google Chrome, Firefox, or Edge (latest versions)")] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph("API Testing")] }),
              new TableCell({ children: [new Paragraph("Postman or Thunder Client for API development and testing")] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph("Build Tool")] }),
              new TableCell({ children: [new Paragraph("Vite (for admin panel) and Next.js built-in bundler")] })
            ]
          })
        ]
      }),

      new Paragraph({ text: "", spacing: { after: 360 } }),

      new Paragraph({
        text: "Key Dependencies and Libraries:",
        bold: true,
        spacing: { before: 360, after: 120 }
      }),

      new Paragraph({
        text: "Frontend Dependencies:",
        bold: true,
        spacing: { before: 240, after: 120 }
      }),
      new Paragraph({
        text: "• React 18.x - Core UI library\n• React Router DOM - Client-side routing\n• Axios - HTTP client for API requests\n• Framer Motion - Animation library for smooth transitions\n• Lucide React - Icon library for UI elements\n• React Toastify - Toast notifications for user feedback\n• Radix UI - Accessible component primitives\n• Shadcn UI - Pre-built component library\n• DND Kit - Drag and drop functionality\n• React PDF Renderer - PDF generation capabilities\n• html2canvas & jspdf - Client-side document generation",
        spacing: { after: 240, line: 360 }
      }),

      new Paragraph({
        text: "Backend Dependencies:",
        bold: true,
        spacing: { before: 240, after: 120 }
      }),
      new Paragraph({
        text: "• Express.js - Backend framework (if using separate backend)\n• CORS - Cross-origin resource sharing middleware\n• dotenv - Environment variable management\n• @prisma/client - Prisma database client\n• @prisma/adapter-pg - PostgreSQL adapter for Prisma\n• pg - PostgreSQL driver for Node.js",
        spacing: { after: 240, line: 360 }
      }),

      new Paragraph({
        text: "Production/Deployment Environment:",
        bold: true,
        spacing: { before: 360, after: 120 }
      }),

      new Paragraph({
        text: "Cloud Platform:",
        bold: true,
        spacing: { before: 240, after: 120 }
      }),
      new Paragraph({
        text: "The platform is designed for deployment on modern cloud platforms such as Vercel (recommended for Next.js), Netlify, or AWS. The database is hosted on Neon, a serverless PostgreSQL platform that provides automatic scaling, branching capabilities, and excellent integration with modern web frameworks.",
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 240, line: 360 }
      }),

      new Paragraph({
        text: "End-User Requirements:",
        bold: true,
        spacing: { before: 240, after: 120 }
      }),
      new Paragraph({
        text: "Users accessing the SIPWALA platform require minimal technical setup. They need any device with internet capability (desktop, laptop, tablet, or smartphone), a modern web browser such as Chrome 90+, Firefox 88+, Safari 14+, or Edge 90+, and a stable internet connection with minimum 1 Mbps speed. The responsive design ensures the platform works seamlessly across all screen sizes and devices.",
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 240, line: 360 }
      }),

      new Paragraph({
        text: "Security and Performance Considerations:",
        bold: true,
        spacing: { before: 360, after: 120 }
      }),
      new Paragraph({
        text: "The platform implements industry-standard security practices including HTTPS encryption for all communications, secure password hashing for administrator authentication, environment variable protection for sensitive credentials, CORS configuration to prevent unauthorized access, input validation and sanitization to prevent injection attacks, and secure database connections. Performance optimizations include server-side rendering for faster initial page loads, code splitting for reduced bundle sizes, image optimization for faster loading, caching strategies for frequently accessed data, and CDN integration for static asset delivery.",
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 480, line: 360 }
      }),

      new Paragraph({
        text: "Development Workflow:",
        bold: true,
        spacing: { before: 360, after: 120 }
      }),
      new Paragraph({
        text: "The development process follows modern best practices with local development servers running on localhost ports (typically 3000 for frontend, 4000 for backend if separated), hot module replacement for instant code updates during development, ESLint and Prettier for code quality and formatting, Git-based version control with feature branching, automated testing where applicable, continuous integration/continuous deployment (CI/CD) pipelines for automated deployments, and staging environments for pre-production testing.",
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 480, line: 360 }
      }),

      new Paragraph({
        text: "This comprehensive operating environment ensures that SIPWALA can be developed efficiently, maintained easily, and scaled effectively to meet growing user demand while maintaining high performance and security standards.",
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 240, line: 360 }
      })
    ]
  }]
});

// Generate and save the document
Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync('C:\Users\Atharva\Downloads\SIPWALA_Chapter_1_Introduction.docx', buffer);
  console.log('Chapter 1: Introduction created successfully!');
}).catch(err => {
  console.error('Error creating document:', err);
});
