import json
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Enable CORS so your static HTML can call it
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace * with your HTML site's origin in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load your exported Langflow JSON (for demo, just loads the file)
with open("clause-explainer-llm.json", "r") as f:
    flow_data = json.load(f)

@app.post("/explain")
async def explain_clause(request: Request):
    data = await request.json()
    clause = data.get("clause", "")
    # For demo: just echo the clause. You can add lookup logic here if your JSON has mappings.
    return {"explanation": f"Explanation for: {clause}"}
