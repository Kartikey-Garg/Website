FROM python:3.10-slim

# Set env
ENV VIRTUAL_ENV=/opt/venv
RUN python3 -m venv $VIRTUAL_ENV
ENV PATH="$VIRTUAL_ENV/bin:$PATH"

# Install system dependencies
RUN apt-get update && apt-get install -y \
    curl \
    build-essential \
    git \
    libssl-dev \
    libffi-dev \
    rustc \
    cargo \
 && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY requirements.txt .
RUN pip install --upgrade pip setuptools
RUN pip install -r requirements.txt

# Copy app
COPY . .

# Expose port
EXPOSE 7868

# Start Langflow
CMD ["langflow", "run", "--host", "0.0.0.0", "--port", "7868", "--load-file", "clause-explainer-llm.json"]
