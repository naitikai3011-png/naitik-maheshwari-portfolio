#!/bin/bash
# Sync the current Replit project state to the connected GitHub repository.
# Called automatically by post-merge.sh after each task merge.
# Requires the GITHUB_TOKEN secret to be set in Replit secrets.

set -euo pipefail

GITHUB_USER="naitikai3011-png"
GITHUB_REPO="naitik-maheshwari-portfolio"
GITHUB_BRANCH="main"

if [ -z "${GITHUB_TOKEN:-}" ]; then
  echo "⚠️  GITHUB_TOKEN is not set. Skipping GitHub sync."
  echo "   Add a GitHub Personal Access Token as a Replit secret named GITHUB_TOKEN"
  echo "   to enable automatic sync. See: https://github.com/settings/tokens/new"
  exit 0
fi

echo "🔄 Syncing to GitHub (${GITHUB_USER}/${GITHUB_REPO})..."

REMOTE_URL="https://x-access-token:${GITHUB_TOKEN}@github.com/${GITHUB_USER}/${GITHUB_REPO}.git"

git remote remove _github_sync 2>/dev/null || true
git remote add _github_sync "$REMOTE_URL"

git push _github_sync "HEAD:${GITHUB_BRANCH}" --force

git remote remove _github_sync 2>/dev/null || true

echo "✅ GitHub sync complete."
