#!/usr/bin/env bash
# Exit on error
set -o errexit

pushd frontend 
npm install --legacy-peer-deps
npm run build 
popd
cp -r frontend/build backend/static/
cd backend

# Modify this line as needed for your package manager (pip, poetry, etc.)
pip install -r requirements.txt

# Convert static asset files
python manage.py collectstatic --no-input

# Apply any outstanding database migrations
python manage.py migrate