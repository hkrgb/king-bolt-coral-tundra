#!/bin/sh
set -eu
cd /workspace
# Reuse the connected GitHub session so uploads land in the public
# hkrgb/rgb-workshop-media repo without pasting a PAT in preview.
if [ -z "${GITHUB_TOKEN:-}${GITHUB_MEDIA_TOKEN:-}" ] && command -v gh >/dev/null 2>&1; then
  _tok=$(gh auth token 2>/dev/null || true)
  if [ -n "$_tok" ]; then
    export GITHUB_TOKEN="$_tok"
  fi
fi
if curl -sf -o /dev/null --max-time 2 http://127.0.0.1:8080/; then
  exit 0
fi
npm run dev >>/tmp/app-startup.log 2>&1 &
