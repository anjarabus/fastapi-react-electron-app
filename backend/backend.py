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
    allow_origins=["http://localhost:8080"],  # Allow the React frontend
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

@app.get("/add/{number1}/{number2}")
def add_numbers(number1: int, number2: int):
    return {"sum": number1 + number2}


if __name__ == "__main__":
    import asyncio
    import uvicorn
    print("Starting FastAPI server...")

    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)

    loop.run_until_complete(uvicorn.run(app, host=HOST, port=PORT))
    # uvicorn.run(app, host=HOST, port=PORT)