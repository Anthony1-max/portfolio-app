# Run this script after you have created the GitHub repository.
# Replace YOUR_USERNAME and YOUR_REPO with your GitHub details.

$repoUrl = 'https://github.com/YOUR_USERNAME/YOUR_REPO.git'

git init
git add .
git commit -m "Initial portfolio deployment"
git branch -M main
git remote add origin $repoUrl
git push -u origin main

Write-Host "Push complete. Check GitHub Actions to confirm deployment." -ForegroundColor Green
