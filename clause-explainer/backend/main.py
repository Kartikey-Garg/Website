from langflow import load_flow_from_json
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

flow = load_flow_from_json("langflow_config.json")

app = FastAPI()

# Enable CORS so your static HTML can call it
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace * with your HTML site's origin in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/api/v1/run/<flow_id>")
async def run_flow(flow_id: str, request: Request):
    data = await request.json()
    return flow(data["input_value"])
