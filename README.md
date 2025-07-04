#  MediConnect - Healthcare Management Platform

A comprehensive healthcare management platform built with modern web technologies, featuring patient management, doctor appointments, and administrative controls.

##  Features

###  For Patients (Frontend)
- **User Registration & Authentication** - Secure login and signup system
- **Doctor Discovery** - Browse doctors by speciality and location
- **Appointment Booking** - Easy scheduling with available doctors
- **Profile Management** - Update personal information and medical history
- **Appointment History** - Track past and upcoming appointments
- **Responsive Design** - Mobile-friendly interface

### For Doctors (Admin Panel)
- **Doctor Dashboard** - Overview of appointments and patient information
- **Appointment Management** - Accept, reschedule, or cancel appointments
- **Patient Records** - Access to patient profiles and medical history
- **Schedule Management** - Set availability and working hours
- **Profile Management** - Update professional information

###  For Administrators (Admin Panel)
- **System Dashboard** - Overview of platform statistics
- **Doctor Management** - Approve doctor registrations and manage profiles
- **Patient Management** - Monitor patient registrations and activities
- **Appointment Oversight** - Monitor and manage all platform appointments
- **Analytics** - Platform usage and performance metrics

##  Technology Stack

### Frontend
- **Framework:** React.js with Vite
- **Styling:** Tailwind CSS
- **State Management:** Context API
- **Routing:** React Router
- **HTTP Client:** Axios
- **Build Tool:** Vite

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT (JSON Web Tokens)
- **File Upload:** Multer + Cloudinary
- **Security:** bcryptjs for password hashing
- **Validation:** Validator.js

### Database
- **Primary:** MongoDB
- **ODM:** Mongoose
- **Cloud Storage:** Cloudinary (for images)

## 📁 Project Structure

```
MediConnect/
├── frontend/          # Patient interface (React.js)
├── admin/            # Admin & Doctor dashboard (React.js)
├── backend/          # API server (Node.js/Express)
├── images/           # Project screenshots
├── .env.example      # Environment variables template
├── .gitignore        # Git ignore rules
└── README.md         # Project documentation
```
##Vercel Link: Cusstomer: https://medi-connect-azure.vercel.app/

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- Cloudinary account (for image uploads)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/RoshanJSingh/MediConnect.git
   cd MediConnect
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Admin Panel Setup**
   ```bash
   cd ../admin
   npm install
   ```

5. **Environment Configuration**
   ```bash
   # Copy the example environment file
   cp .env.example .env
   
   # Edit .env with your configuration
   # Add your MongoDB URI, JWT secret, Cloudinary credentials, etc.
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   npm run server
   ```

2. **Start the Frontend (Patient Interface)**
   ```bash
   cd frontend
   npm run dev
   ```

3. **Start the Admin Panel**
   ```bash
   cd admin
   npm run dev
   ```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/mediconnect

# JWT Secret
JWT_SECRET=your_super_secure_jwt_secret_here

# Cloudinary Configuration
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key

# Frontend URL for CORS
FRONTEND_URL=http://localhost:5173

# Server Port
PORT=4000
```

## 📚 API Documentation

### Authentication Endpoints
- `POST /api/user/register` - Patient registration
- `POST /api/user/login` - Patient login
- `POST /api/admin/login` - Admin login
- `POST /api/doctor/login` - Doctor login

### Patient Endpoints
- `GET /api/user/profile` - Get patient profile
- `PUT /api/user/profile` - Update patient profile
- `POST /api/user/book-appointment` - Book appointment
- `GET /api/user/appointments` - Get patient appointments

### Doctor Endpoints
- `GET /api/doctor/appointments` - Get doctor appointments
- `PUT /api/doctor/appointment/:id` - Update appointment status
- `GET /api/doctor/profile` - Get doctor profile
- `PUT /api/doctor/profile` - Update doctor profile

### Admin Endpoints
- `GET /api/admin/dashboard` - Get admin dashboard data
- `GET /api/admin/doctors` - Get all doctors
- `PUT /api/admin/doctor/:id` - Update doctor status
- `GET /api/admin/appointments` - Get all appointments

##  Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Roshan J Singh**
## 🙏 Acknowledgments

- Thanks to all contributors who helped with this project
- Icons and images from various open-source projects


