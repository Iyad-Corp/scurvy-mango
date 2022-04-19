# Use node version 16 as the base image.
FROM node:16

# Get build args and set env variables
ARG BACKEND_URI
ARG FRONTEND_URI
ARG SUPERTOKENS_URI
ARG SUPERTOKENS_API_KEY
ENV BACKEND_URI=$BACKEND_URI
ENV FRONTEND_URI=$FRONTEND_URI
ENV SUPERTOKENS_URI=$SUPERTOKENS_URI
ENV SUPERTOKENS_API_KEY=$SUPERTOKENS_API_KEY

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