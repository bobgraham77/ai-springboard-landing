#!/bin/bash

# Install dependencies
npm install

# Build the project
npm run build

# Copy the output directory to public_html
cp -r out/* .
