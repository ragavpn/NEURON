#!/bin/bash

# Ensure dependencies are installed
yarn
pip install -r src/server/pyserver/requirements.txt

# Run the Python server and the Next.js development server in parallel
# Using `&` to run both in background and `wait` to keep the script running until both are finished
python3 src/server/pyserver/server.py &  # Run Python server in the background
yarn dev &  # Run Next.js server in the background

wait