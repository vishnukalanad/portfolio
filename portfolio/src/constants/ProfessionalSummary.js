
export const SeniorRoleSummary = [
    {
        name: "eRupee Support Portal",
        description: "A secure, multi-tenant web platform designed for bank operations teams to efficiently manage e₹ (Digital Rupee) transactions, generate operational and compliance reports, and handle customer complaints. Built for multiple banking institutions, the system enables consistent processes across clients while allowing each bank to operate independently within its own secure environment.",
        keyPoints: [
            "Led the design and development of a secure multi-tenant eRupee Support Portal frontend in Angular with Server-Side Rendering (SSR), deployed across three major banks to ensure consistent multi-client support with independent secure environments.",
            "Implemented JWT-based authentication and role-based access control, ensuring secure, bank-specific access to sensitive CBDC operational data.",
            "Integrated 50+ REST APIs with the Golang backend to enable real-time transaction reconciliation, customer complaint management, transaction and user activity tracing, and automated report generation workflows.",
            "Optimized operational efficiency through intuitive dashboard designs, enhanced filtering/search capabilities, and streamlined workflows for bank operations teams.",
            "Collaborated closely with multiple banking stakeholders, conducted regular UAT sessions, and secured production sign-offs from all institutions, ensuring smooth rollout and adoption."
        ],
        clients: ["The Federal Bank of India", "Indian Bank", "Karnataka Bank"],
        stack: ["Angular", "Golang", "Postgresql"]
    },
    {
        name: "BO&T (Biller Onboarding & Automation Testing)",
        description: `BO&T is a software platform built for NPCI to streamline and automate biller onboarding and testing across India's payment networks. It provides NPCI and banks with tools to register, validate, and approve billers through secure, multi-step workflows, and to control their go-live after rigorous simulation and compliance checks.`,
        keyPoints: [
            "Designed and developed the frontend in Angular with Material UI and Bootstrap for complex, multi-step onboarding flows involving 60+ dynamic input fields.",
            "Implemented biller management and automation test modules to simulate bill fetch and payment scenarios before production rollout.",
            "Integrated more than 100 backend REST APIs for onboarding, biller management, testing, and admin modules.",
            "Collaborated directly with NPCI teams, including onsite architecture design and planning sessions, ensuring technical and compliance alignment.",
            "Packaged and deployed the application as Docker containers for both NPCI and participating banks.",
            "Managed two-phase production rollout — BO&T 1.0 in July 2024 and BO&T 2.0 in December 2024 — ensuring smooth upgrades and minimal downtime.",
            "Enabled banks to onboard and manage billers under their control with role-based access and approval workflows."
        ],
        clients: ["NPCI (National Payments Corporation of India)", "Various Banks"],
        stack: ["Angular", "Material UI", "Bootstrap", "Docker", "Golang", "PostgreSQL"]
    }
]

export const JuniorRoleSummary = [
    {
        name: "PFMS (Public Fund Management System)",
        description: `PFMS is a large-scale multi-level user platform developed for The Federal Bank of India to manage the allocation and release of central government funds to various nodal offices. The system supports complex user roles and workflows to ensure secure and efficient fund disbursement, reconciliation, and reporting. It was successfully deployed to production in 2023.`,
        keyPoints: [
            "Developed frontend components using Angular with Material UI and Bootstrap, delivering a responsive and role-based user interface.",
            "Implemented comprehensive user onboarding and management features for diverse roles including Bank Admins, SNAs (State Nodal Agencies), and IAs (Implementing Agencies).",
            "Built modules for transaction creation, fund release, reconciliation processes, wallet and wallet management functionalities.",
            "Integrated more than 60 backend REST APIs to power user management, transactions, reconciliation, wallet operations, file processing, and reporting features.",
            "Implemented file upload and processing capabilities to support large-scale data handling and compliance requirements.",
            "Designed and developed extensive reporting features to enable detailed oversight and auditing of fund distribution.",
            "Collaborated closely with Federal Bank stakeholders to ensure regulatory compliance and align system workflows with government fund management policies.",
            "Successfully launched the platform in 2023, enabling operational use across multiple nodal offices."
        ],
        clients: ["The Federal Bank of India"],
        stack: ["Angular", "Material UI", "Bootstrap"]
    },
    {
        name: "BO&T (Biller Onboarding & Automation Testing)",
        description: `Ongoing development of a software platform for NPCI to streamline and automate biller onboarding and testing across India's payment networks. The system is designed to handle multi-step workflows, rigorous testing, and controlled go-live processes for NPCI and participating banks.`,
        keyPoints: [
            "Led frontend development in Angular with Material UI and Bootstrap for multi-step onboarding modules involving 60+ dynamic input fields.",
            "Implemented initial biller management and automation testing features to simulate bill fetch and payment scenarios.",
            "Integrated 70+ backend REST APIs during the development phase, covering onboarding, management, and admin functionality.",
            "Collaborated with NPCI teams, including onsite architecture discussions and design planning sessions.",
            "Packaged application builds as Docker containers for staging and internal testing environments."
        ],
        clients: ["NPCI (National Payments Corporation of India)", "Various Banks"],
        stack: ["Angular", "Material UI", "Bootstrap", "Docker", "Golang", "PostgreSQL"]
    },
    {
        name: "NLP (Port Transaction Management Platform)",
        description: `NLP is a multi-user web platform developed for The Federal Bank of India to manage and monitor customer transactions linked to various ports. The system supports role-based access with maker-checker workflows, enabling secure handling of port operations, transaction approvals, and detailed reporting. Bank teams can efficiently add, update, and remove port records, process transactions, and generate operational reports within a secure, responsive interface.`,
        keyPoints: [
            "Developed the frontend in Angular with Material UI and Bootstrap, delivering a responsive and user-friendly interface for internal bank operations teams.",
            "Implemented multi-user authentication and authorization with a maker-checker workflow to ensure secure processing and approvals.",
            "Delivered full port management functionality, including adding, editing, and deleting port records, with validation and role-based access control.",
            "Integrated around 30 REST APIs to support real-time transaction processing, port administration, and automated report generation.",
            "Designed and built reporting features enabling bank staff to efficiently filter, export, and download transaction and operational data.",
            "Collaborated closely with Federal Bank stakeholders to align workflows with business requirements, ensuring smooth handover and production success.",
            "Successfully deployed the application to production in 2024, improving transaction oversight and operational efficiency."
        ],
        clients: ["The Federal Bank of India"],
        stack: ["Angular", "Material UI", "Bootstrap", "Golang", "PostgreSQL"]
    },
    {
        name: "eRupee Support Portal",
        description: `Started development of a secure, multi-tenant web platform designed for bank operations teams to manage Digital Rupee (e₹) transactions, compliance reporting, and complaint handling. Conceptualized and contributed to the platform architecture to support multiple banks with independent secure environments.`,
        keyPoints: [
            "Led architectural design efforts and frontend development using Angular with Server-Side Rendering (SSR) for scalability and performance.",
            "Implemented initial JWT-based authentication and role-based access control modules to ensure secure and segregated access across banks.",
            "Collaborated with backend teams integrating core REST APIs for transaction reconciliation, complaint management, and report automation.",
            "Worked closely with stakeholders from multiple banks to align technical designs with operational needs and compliance standards.",
            "Contributed to building a scalable foundation supporting deployment across diverse banking institutions."
        ],
        clients: ["The Federal Bank of India", "Indian Bank", "Karnataka Bank"],
        stack: ["Angular 18^ (SSR)", "Figma", "PrimeNG", "Tailwind"]
    },
    {
        name: "AMS (Apartment Management System)",
        description: `AMS is a web platform developed for The Federal Bank of India to help apartment administrators efficiently manage billing, rent collection, and rental activities. The system is provided by the bank to apartment admins and landlords, enabling them to oversee customer rent payments, generate bills, and handle all associated rental management tasks within a secure and user-friendly interface.`,
        keyPoints: [
            "Developed the frontend using Angular with Material UI and Bootstrap, delivering a responsive and intuitive interface for apartment administrators and landlords.",
            "Implemented core features including bill generation, rent collection tracking, rental management, and tenant payment monitoring.",
            "Packaged and shipped the application as Docker containers to ensure consistent deployments and easy scalability.",
            "Collaborated with Federal Bank stakeholders and apartment management teams to tailor workflows and features to real-world rental management needs.",
            "Enabled role-based access for different users including apartment admins, landlords, and bank personnel to ensure secure and segmented operations."
        ],
        clients: ["The Federal Bank of India", "Apartment Administrators", "Landlords"],
        stack: ["Angular", "Material UI", "Bootstrap", "Docker"]
    }

]

export const InternRoleSummary = [
    {
        name: "PFMS (Public Fund Management System)",
        description: `Began development of PFMS, a multi-level user platform for The Federal Bank of India to manage central government fund disbursements. Focused on building foundational frontend components and user management modules for diverse roles including Bank Admins and State Nodal Agencies.`,
        keyPoints: [
            "Started frontend development using Angular with Material UI and Bootstrap, focusing on responsive and role-based user interfaces.",
            "Implemented initial user onboarding and management features catering to multiple user roles such as Bank Admins, SNAs, and IAs.",
            "Contributed to building core modules for transaction creation, fund release, and wallet management workflows.",
            "Collaborated with backend teams integrating REST APIs and ensured early alignment with compliance requirements.",
            "Engaged with stakeholders to gather requirements and refine workflows during the development phase."
        ],
        clients: ["The Federal Bank of India"],
        stack: ["Angular", "Material UI", "Bootstrap"]
    }
]