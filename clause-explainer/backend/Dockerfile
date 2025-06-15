# Use a lightweight Python base image
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Install Langflow (latest version)
RUN pip install --no-cache-dir langflow

# Copy the flow file into the container
COPY clause-explainer-llm.json .

# Expose the port
EXPOSE 7868

# Start Langflow with your flow loaded
CMD ["langflow", "run", "--host", "0.0.0.0", "--port", "7868", "--load-file", "clause-explainer-llm.json"]
