# MMPortal-SaaS 🚀

**MMPortal** is a cloud-based, multi-tenant SaaS platform tailored for foreign employment and manpower recruitment agencies. Built for scalability, security, and compliance, MMPortal streamlines the entire recruitment lifecycle — from candidate registration to final deployment — across Gulf countries like Saudi Arabia, UAE, Qatar, and more.

---

## 🌍 Live Demo
Coming Soon...

---

## 📌 Key Features

- ✅ Multi-Tenant Architecture (agency-wise data isolation)
- ✅ Role-Based Dashboards (Manager, HR, Agent, Receptionist)
- ✅ Candidate Lifecycle Management (Registration → Visa → Deployment)
- ✅ Secure CV & Document Uploads (S3/Cloudinary)
- ✅ Visa, Interview & Ticket Status Tracking
- ✅ Job Order Management (Per Company & Per Country)
- ✅ WhatsApp/SMS/Email Notification Integration
- ✅ Reports, Export (PDF/Excel), and Analytics
- ✅ REST API for Third-Party Integration
- ✅ Stripe-based Subscription Billing

---

## 🧰 Tech Stack

| Layer         | Tech                          |
| ------------- | ----------------------------- |
| **Frontend**  | Next.js + Tailwind CSS        |
| **Backend**   | Node.js (Express)             |
| **Database**  | MongoDB (multi-tenant design) |
| **Auth**      | JWT + RBAC                    |
| **Storage**   | AWS S3 / Cloudinary           |
| **Billing**   | Stripe API                    |
| **Deployment**| Docker + AWS ECS / Vercel     |

---

## 📦 Folder Structure

```
MMPortal-SaaS/
├── apps/
│   ├── web-client/              # Frontend (Next.js + Tailwind CSS)
│   ├── mobile-agent/           # Mobile app (React Native - optional)
│   └── admin-dashboard/        # Admin portal
├── backend/
│   ├── api/                    # Express.js REST APIs
│   ├── models/                 # MongoDB schemas (multi-tenant)
│   ├── middleware/             # Auth, RBAC, logging
│   └── services/               # Core logic (notifications, visa tracking, etc.)
├── infra/
│   ├── docker/                 # Dockerfiles & docker-compose setup
│   ├── deployment/             # AWS ECS/Vercel config, CI/CD pipelines
│   └── s3-storage/             # File storage interface (Cloudinary / AWS S3)
├── docs/
│   ├── architecture.md         # Multi-tenant DB design & SaaS flow
│   ├── API_reference.md        # API docs
│   └── user_manual.md          # Setup and usage guides
├── scripts/
│   └── seedData.js             # Demo tenant and sample users
├── .env.example                # Environment variable template
├── README.md                   # Project overview and setup
├── LICENSE
└── package.json
```

---

### 🌟 GitHub Tags / Topics

```
#saas #recruitment #manpower #nodejs #nextjs #mongodb #multi-tenant #hrtech #stripe #aws
```





