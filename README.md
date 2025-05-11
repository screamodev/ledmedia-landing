## Getting Started

For development, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.


## Email Configuration

To enable the contact form functionality, you need to set up email credentials:

1. Create a `.env.local` file in the root directory with the following variables:

```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
RECIPIENT_EMAIL=info@ledmedia.ua
```

2. If using Gmail, you'll need to create an App Password:
   - Go to your Google Account > Security
   - Enable 2-Step Verification if not already enabled
   - Create an App Password for "Mail"
   - Use the generated password as EMAIL_PASS

3. For production deployment, add these environment variables to your hosting provider.

## Docker Deployment

This project includes Docker configuration for easy deployment to any server. Follow these steps to deploy:

### Prerequisites

- Docker and Docker Compose installed on your server
- Git installed on your server

### Deployment Steps

1. Clone the repository on your server:
   ```bash
   git clone https://your-repository-url.git
   cd ledmedia-landing
   ```

2. Create a `.env` file in the project root with your email configuration:
   ```bash
   # Create a new .env file
   touch .env
   
   # Add the following content to the .env file (replace with your actual values)
   echo "EMAIL_HOST=smtp.gmail.com" >> .env
   echo "EMAIL_PORT=587" >> .env
   echo "EMAIL_SECURE=false" >> .env
   echo "EMAIL_USER=your-email@gmail.com" >> .env
   echo "EMAIL_PASS=your-app-password" >> .env
   echo "RECIPIENT_EMAIL=info@ledmedia.ua" >> .env
   
   # Or edit the file manually
   nano .env
   ```

3. Build and start the Docker containers:
   ```bash
   docker-compose up -d --build
   ```

4. The application will be available at `http://your-server-ip:3000`

### Connecting with Nginx as a Reverse Proxy

If you want to use Nginx as a reverse proxy to serve your application:

1. Install Nginx on your server:
   ```bash
   sudo apt update
   sudo apt install nginx
   ```

2. Create a new Nginx configuration file:
   ```bash
   sudo nano /etc/nginx/sites-available/ledmedia
   ```

3. Add the following configuration (replace `yourdomain.com` with your actual domain):
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com www.yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

4. Enable the site and restart Nginx:
   ```bash
   sudo ln -s /etc/nginx/sites-available/ledmedia /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

5. Set up SSL with Let's Encrypt (recommended):
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
   ```

### Maintenance

- To view logs:
  ```bash
  docker-compose logs -f
  ```

- To stop the application:
  ```bash
  docker-compose down
  ```

- To update to a new version:
  ```bash
  git pull
  docker-compose up -d --build
  ```

## Guides

### Setting Up Company Email for Contact Form

The contact form uses Nodemailer to send emails. Follow these steps to set up your company email:

1. **Choose an Email Provider**:
   - For Gmail: Create or use an existing Gmail account
   - For company email: Use your existing company email credentials

2. **Gmail Setup (Recommended for Testing)**:
   - Go to your Google Account → Security
   - Enable 2-Step Verification if not already enabled
   - Go to "App Passwords" (under "Signing in to Google")
   - Select "Mail" as the app and "Other" as the device
   - Enter "Next.js Landing" or similar name
   - Click "Generate" and copy the 16-character password

3. **Update Environment Variables**:
   - In development: Edit `.env.local` file in the project root
   - In production: Update the `.env` file on your server
   ```
   EMAIL_HOST=smtp.gmail.com  # For Gmail
   EMAIL_PORT=587
   EMAIL_SECURE=false
   EMAIL_USER=your-company@gmail.com
   EMAIL_PASS=your-app-password
   RECIPIENT_EMAIL=where-to-receive@ledmedia.ua
   ```

4. **For Other Email Providers**:
   - Replace `EMAIL_HOST` with your provider's SMTP server
   - Update `EMAIL_PORT` and `EMAIL_SECURE` according to provider requirements
   - For example, for Outlook:
     ```
     EMAIL_HOST=smtp-mail.outlook.com
     EMAIL_PORT=587
     EMAIL_SECURE=false
     ```

5. **Testing the Contact Form**:
   - After setting up, submit a test message through the contact form
   - Check both the recipient inbox and spam folder

### Editing Cities and Locations

To update the cities and locations displayed on the website:

1. **Locate the Cities Data File**:
   ```bash
   src/lib/cities.ts
   ```

2. **Edit the Cities Data**:
   - Open the file in your code editor
   - Each city follows this structure:
     ```typescript
     {
       id: "unique-id",
       name: "City Name",
       address: "Street Address",
       phone: "+380 00 000 0000",
       email: "city@ledmedia.ua",
       coordinates: { lat: 50.123456, lng: 30.123456 }
     }
     ```

3. **To Add a New City**:
   - Copy an existing city object
   - Paste it at the end of the cities array
   - Update all fields with the new city's information
   - Make sure to use a unique ID for each city

4. **To Remove a City**:
   - Find the city object in the array
   - Delete the entire object including the surrounding curly braces
   - Make sure to remove any trailing comma if it was the last item

5. **To Update Map Coordinates**:
   - Find coordinates on Google Maps by right-clicking on the location
   - Select "What's here?" to see the latitude and longitude
   - Update the `coordinates` field with these values

6. **After Making Changes**:
   - Save the file
   - Rebuild the application using `npm run build` or with Docker:
     ```bash
     docker-compose up -d --build
     ```

### Adding Client Icons to the Slider

To add or update client logos in the clients slider:

1. **Prepare Your Logo Files**:
   - Create transparent PNG or SVG files
   - Recommended size: 180px × 80px
   - Keep file size under 100KB for optimal performance

2. **Add Logo Files to Public Directory**:
   - Place logo files in:
     ```
     public/images/clients/
     ```

3. **Update the Clients Data File**:
   ```bash
   src/lib/clients.ts
   ```

4. **Edit the Clients List**:
   - Each client follows this structure:
     ```typescript
     {
       id: "client-name",
       name: "Client Company Name",
       logo: "/images/clients/client-logo.png",
       alt: "Client Name Logo"
     }
     ```

5. **To Add a New Client**:
   - Copy an existing client object
   - Paste it at the end of the clients array
   - Update with the new client's information and logo path
   - Make sure to use a unique ID for each client

6. **To Remove a Client**:
   - Find the client object in the array
   - Delete the entire object including the surrounding curly braces
   - Make sure to remove any trailing comma if it was the last item

7. **After Making Changes**:
   - Save the file
   - Rebuild the application using `npm run build` or with Docker:
     ```bash
     docker-compose up -d --build
     ```