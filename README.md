
# Prescripto

is a web application designed to simplify the process of booking and managing doctor appointments. The application offers a user-friendly interface for patients to browse through a list of trusted doctors, view their availability, and book appointments with ease. Prescripto ensures secure user authentication and provides a responsive design for seamless usage across various devices.


## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)

## Features

- **Doctor Information**: Browse detailed profiles of doctors, including their specializations, experience, and availability.
- **Appointment Booking**: Book appointments by selecting available slots from the doctor's schedule.
- **User Authentication**: Secure login and registration using JWT authentication.
- **Appointment Management**: View and manage existing appointments, including the ability to cancel appointments.
- **Responsive Design**: Mobile-friendly design for usage across various devices.
## Installation

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Clone the Repository

```bash
  git clone https://github.com/your-username/prescripto.git
  cd prescripto
```
### Install Dependencies

```bash
    npm install
```

### Environment Variables
```bash
DATABASE_URL 
ClOUDINARY_KEY_NAME 
ClOUDINARY_API_KEY 
ClOUDINARY_API_SECRET
JWT_SECRET
```
### Run the Application
```bash
npm run dev
```

## Usage

### Booking an Appointment
1- Navigate to all docotors page and browse through the list of doctors.

2- Click on a doctor to view their profile and available slots.

3- Select a suitable date and time, then click "Book an Appointment".

### Managing Appointments

1- Navigate to the "My Appointments" page.

2- View your upcoming appointments.

3- To cancel an appointment, click "Cancel Appointment" next to the respective appointment


## API Endpoints

### Authentication
```
POST /api/user/login  - Login a user
POST /api/user/register - Register a new user
```
### Doctors
```
GET /api/doctors - Get all doctors
```

### Appointments
```
POST /api/appointments/user/add-appointment - Add a new appointment
DELETE /api/appointments/user/delete-appointment - Delete an existing appointment
```

### Users
```
GET /api/user  - get user info
PUT /api/user/ - Update user info
POST /api/user/upload-profile-image - Upload user profile image
```


### Technologies Used

## Technologies Used

- **Frontend**: React, Tailwind CSS, React Router

- **Backend**: Node.js, Express, MongoDB, Mongoose

- **Authentication**: JWT (JSON Web Tokens)

- **Image Uploads**: Cloudinary

- **Deployment**: Vercel
