#!/bin/bash
PORT=${PORT:-7868}
langflow run --host 0.0.0.0 --port $PORT --load-file clause-explainer-llm.json