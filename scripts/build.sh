#!/bin/bash

echo "Verifying build..."

# Building React output
yarn install
yarn run build

echo "Build successfully."