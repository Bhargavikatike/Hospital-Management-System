# 🏥 CareFlow – Hospital Management System (HMS)

## Introduction
CareSync is a full-stack Hospital Management System developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js).
The main objective of this project is to simplify and digitize hospital management activities such as appointment booking, patient record handling, doctor management, prescription generation, medical report uploads, appointment reminders, and administrative operations.
The system uses role-based access control so that different users can access only their respective functionalities securely.

## Project Objective
The objective of this project is:
* Reduce manual hospital processes
* Provide secure authentication and authorization
* Manage doctors, patients, and appointments efficiently
* Maintain medical records digitally
* Improve communication among patients, doctors, receptionists, and administrators
* Provide centralized hospital management

## Repository Structure
Health-CareManagement/
├── Backend/
│   ├── APIs/                 # Express route modules
│   ├── Config/               # Database and application configurations
│   ├── Models/               # Mongoose schemas
│   ├── Services/             # Business logic and reusable services
│   ├── MiddleWares/          # JWT and role validation middleware
│   ├── Utils/                # Utility/helper functions
│   ├── .env                  # Environment variables
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   ├── req.http              # API testing requests
│   └── server.js             # Backend entry point
│
├── Frontend/
│   ├── public/
│   ├── src/
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── vercel.json
│   └── vite.config.js
│
├── Heath-CareManagement
└── README.md

## Technologies Used

### Frontend
* React.js
* React Router DOM
* Axios
* Lucide React Icons
* CSS

### Backend
* Node.js
* Express.js
* MongoDB
* Mongoose

### Authentication & Security
* JWT Authentication
* Protected Routes
* Role-Based Access Control

### Additional Libraries
* Multer
* Cloudinary
* Cookie Parser
* CORS

# User Roles in the System
The system contains four types of users:

## 1. Patient
Patients can register and log in to the system. They can access doctor information, schedule appointments, upload reports, and manage their healthcare records.

### Patient Features
* Registration and login
* View doctor details
* Book appointments
* Upload medical reports
* View prescriptions
* View appointment history
* Dashboard analytics

## 2. Doctor
Doctors are created and managed directly by the administrator. The administrator provides account credentials and system access permissions.
Doctors can log in and manage patient-related activities through their dashboard.

### Doctor Features
* Login through administrator-provided access
* View appointments
* Confirm or complete appointments
* Create prescriptions
* View prescription history
* Configure available time slots
* View patient reports
* Dashboard analytics

## 3. Receptionist
Receptionists assist in managing appointment-related activities and patient scheduling within the hospital.

### Receptionist Features
* Login to the system
* Book appointments for walk-in patients
* Reschedule appointments
* View appointment details
* Manage appointment schedules
* Send appointment reminder emails
* Dashboard analytics

## 4. Admin
Admins manage the complete hospital system and have full control over users and hospital activities.

### Admin Features
* Create doctors and receptionists
* Edit doctors and receptionists
* View all users
* View all appointments
* Block or enable user accounts
* Manage hospital operations
* Send appointment reminder emails
* View audit logs
* Dashboard analytics

# Email Reminder System
The Email Reminder System helps users stay updated regarding important hospital activities and appointment schedules.
It improves communication between patients, doctors, receptionists, and hospital administrators through automated reminder emails.

### Features include:
* Appointment confirmation emails
* Upcoming appointment reminder emails
* Appointment status update emails
* Reduced missed appointments
* Improved communication among users

# System Workflow

## Patient Workflow
Patient Registration/Login
↓
View Doctors
↓
Book Appointment
↓
Doctor Receives Appointment
↓
Doctor Consultation
↓
Doctor Creates Prescription
↓
Patient Views Prescription
↓
Patient Uploads Reports

## Doctor Workflow

Administrator Creates Doctor
↓
Administrator Provides Credentials
↓
Doctor Login
↓
Dashboard Access Granted
↓
Manage Appointments
↓
Create Prescriptions
↓
Configure Available Slots
↓
View Patient Reports

## Receptionist Workflow

Receptionist Login
↓
Book Walk-in Patient Appointments
↓
Manage Appointment Schedules
↓
Reschedule Appointments
↓
Send Reminder Emails
↓
Monitor Appointment Status

## Admin Workflow

Admin Login
↓
Create Doctors and Receptionists
↓
Manage Users
↓
View All Appointments
↓
Block/Enable Users
↓
Monitor Hospital Activities
↓
View Audit Logs

# Security Features
The system provides several security mechanisms:
* JWT-based authentication
* Protected routes
* Role-based authorization
* Account activation/deactivation
* Secure API access

# Future Enhancements
Future improvements that can be added:
* Video consultation
* Online payment system
* SMS reminders
* AI-based symptom prediction
* Chat functionality
* Telemedicine support

## Conclusion

CareSync Hospital Management System provides a centralized and efficient digital platform for managing hospital operations. The system simplifies interactions among patients, doctors, receptionists, and administrators by reducing manual work and streamlining daily processes.

Features such as appointment management, prescription generation, medical report handling, role-based access control, and automated email reminder services create a secure and user-friendly healthcare environment.

By integrating multiple hospital functionalities into a single platform, CareSync enhances communication, improves operational efficiency, and demonstrates the practical implementation of MERN stack technologies in building a real-world healthcare management solution.
