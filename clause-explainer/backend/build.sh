#!/bin/bash

# Upgrade pip and install build dependencies
pip install --upgrade pip
pip install -r build-requirements.txt

# Install main dependencies
pip install -r requirements.txt