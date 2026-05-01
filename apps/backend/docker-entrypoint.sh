#!/bin/sh
set -e

echo "Running Medusa migrations..."
node .medusa/server/index.js db:migrate || true

echo "Starting Medusa server..."
exec node .medusa/server/index.js
