#!/bin/sh
set -e

echo "Running Medusa migrations..."
node_modules/.bin/medusa db:migrate || true

echo "Starting Medusa server..."
exec node_modules/.bin/medusa start
