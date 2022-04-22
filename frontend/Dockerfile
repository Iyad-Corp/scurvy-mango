# Use node version 16 as the base image.
FROM node:16

# Get build args and set env variables
ARG BACKEND_URI
ARG FRONTEND_URI
ENV REACT_APP_BACKEND_URI=$BACKEND_URI
ENV REACT_APP_FRONTEND_URI=$FRONTEND_URI

# Set the working directory.
WORKDIR /app

# Install node packages for production.
COPY package.json package-lock.json ./
RUN npm ci

# Copy the application files and run npm build.
COPY . .
RUN npm run build

# PORT is set and exposed here. When run in Cloud Run, the PORT environment variable will be overridden with its default port (likely 8080).
ENV PORT 3000
EXPOSE ${PORT}

# Install the serve command globally.
RUN npm install -g serve

# Run the create-react-app application when the container is started.
CMD ["serve", "-s", "build"]