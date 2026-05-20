from pydantic import BaseModel

class SalaryInput(BaseModel):
    work_year: int
    employment_type: str
    employee_residence: str
    remote_ratio: int
    company_location: str
    company_size: str
    experience_years: int
    role_category: str