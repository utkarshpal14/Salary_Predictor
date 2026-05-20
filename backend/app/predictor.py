import joblib
import pandas as pd
import numpy as np
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

model_path = BASE_DIR / "model" / "salary_model.pkl"
columns_path = BASE_DIR / "model" / "model_columns.pkl"

model = joblib.load(model_path)
model_columns = joblib.load(columns_path)

def categorize_role(role: str) -> str:
    role_lower = role.lower()
    if 'data' in role_lower:
        return 'Data'
    elif 'machine learning' in role_lower or 'ml' in role_lower:
        return 'AI'
    elif 'engineer' in role_lower:
        return 'Engineering'
    elif 'analyst' in role_lower:
        return 'Analytics'
    else:
        return 'Other'

def predict_salary(data):

    # Map experience_years to experience_level for the model
    # The model expects experience_level_MI, experience_level_SE, experience_level_EX
    # 'EN' is the baseline and is dropped (represented by all zeros)
    years = data.experience_years
    experience_level = 'EN' if years < 2 else ('MI' if years < 5 else ('SE' if years < 9 else 'EX'))

    input_dict = {
        "work_year": data.work_year,
        "remote_ratio": data.remote_ratio,
    }

    if experience_level != 'EN':
        input_dict[f"experience_level_{experience_level}"] = 1

    # Map the detailed job title to high-level category
    role_category = categorize_role(data.role_category)

    categorical_fields = {
        "employment_type": data.employment_type,
        "employee_residence": data.employee_residence,
        "company_location": data.company_location,
        "company_size": data.company_size,
        "role_category": role_category
    }

    for field, value in categorical_fields.items():
        column_name = f"{field}_{value}"

        input_dict[column_name] = 1

    input_df = pd.DataFrame([input_dict])

    input_df = input_df.reindex(
        columns=model_columns,
        fill_value=0
    )

    prediction = model.predict(input_df)

    real_salary = np.expm1(prediction[0])

    return real_salary