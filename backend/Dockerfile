# Use node version 16 as the base image.
FROM node:16

# Set the working directory.
WORKDIR /app

# Install node packages for production.
COPY package.json package-lock.json ./
RUN npm ci

# Copy the application files.
COPY . .

# PORT is set and exposed here. When run in Cloud Run, the PORT environment variable will be overridden with its default port (likely 8080).
ENV PORT 3000
EXPOSE ${PORT}

# Run the create-react-app application when the container is started.
CMD ["npm", "start"]