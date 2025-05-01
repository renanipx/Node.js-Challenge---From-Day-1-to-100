# Step 1: Use the official Node.js image
FROM node:18

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install application dependencies
RUN npm install

# Step 5: Copy the rest of the application files
COPY . .

# Step 6: Create the logs folder (in case it's ignored by .gitignore)
RUN mkdir -p logs

# Step 7: Expose the port your app runs on
EXPOSE 3000

# Step 8: Start the application
CMD ["node", "server.js"]
