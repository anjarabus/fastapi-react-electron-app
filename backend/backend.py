# python backend
from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import os

HOST = "127.0.0.1"
PORT = 8000

app = FastAPI()

# Add CORS middleware: only necessary during development 
app.add_middleware(
    CORSMiddleware,
    # allow_origins=["http://localhost:8080"],  # Allow the React frontend
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

@app.get("/op/{number1}/{number2}")
def operations(number1: int, number2: int):
    divide_result = "NaN"

    if number2 != 0:
        divide_result = number1 / number2
    return {
        "sum": number1 + number2,
        "diff": number1 - number2,
        "prod": number1 * number2,
        "div": divide_result
    }

if __name__ == "__main__":
    import asyncio
    import uvicorn
    print("Starting FastAPI server...")

    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)

    loop.run_until_complete(uvicorn.run(app, host=HOST, port=PORT))
    # uvicorn.run(app, host=HOST, port=PORT)