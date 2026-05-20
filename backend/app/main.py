from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .schemas import SalaryInput
from .predictor import predict_salary

app = FastAPI()

# Add CORS middleware to resolve local development and production origin blocks
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "message": "Salary Prediction API Running"
    }

@app.post("/predict")
def predict(data: SalaryInput):

    prediction = predict_salary(data)

    return {
        "predicted_salary": round(prediction, 2)
    }