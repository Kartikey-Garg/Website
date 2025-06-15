#!/bin/bash

# Ensure latest pip + build tools
pip install --upgrade pip setuptools wheel build

# Now install the main requirements
pip install -r requirements.txt