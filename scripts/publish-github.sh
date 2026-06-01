#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

if ! command -v gh >/dev/null 2>&1; then
  echo "Install GitHub CLI: https://cli.github.com/"
  exit 1
fi

gh auth status >/dev/null 2>&1 || gh auth login

if git remote get-url origin >/dev/null 2>&1; then
  git push -u origin main
else
  gh repo create stones --public --source=. --remote=origin --push \
    --description "Vaali Stones — granite & marble export website (stones.vaaliadvisory.com)"
fi

echo "Done. Enable GitHub Pages: Settings → Pages → GitHub Actions"
