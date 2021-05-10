#!/usr/bin/env bash

# This script will download Design Tokens as a zip file from InVision DSM and
# put them in a temporary folder from where they can be transformed to other formats.

TOKENS_URL=https://skf.invisionapp.com/dsm-export/ab-skf/4-web-applications/tokens-style-dictionary.zip
TMP_DIR=.tmp
ZIP_FILE="$TMP_DIR/dsm-style-dictionary.zip"

set -e

# Download and unzip property files.
echo "🧹 Cleaning up temporary files..."
[ -d "$TMP_DIR" ] && rm -rf "$TMP_DIR";

echo "📦 Downloading tokens from InVision..."
curl "$TOKENS_URL" --create-dirs --output "$ZIP_FILE"

echo "🗄 Extracting tokens..."
unzip "$ZIP_FILE" -d "$TMP_DIR"
