# PowerShell script to deploy portfolio to GitHub Pages
# Run this script after making changes to your portfolio

Write-Host "🚀 Starting deployment process..." -ForegroundColor Green

# Check if git is initialized
if (-not (Test-Path ".git")) {
    Write-Host "📁 Initializing git repository..." -ForegroundColor Yellow
    git init
}

# Add all changes
Write-Host "📝 Adding all changes to git..." -ForegroundColor Yellow
git add .

# Commit changes
$commitMessage = Read-Host "Enter commit message (or press Enter for default)"
if ([string]::IsNullOrWhiteSpace($commitMessage)) {
    $commitMessage = "Update portfolio - $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
}

Write-Host "💾 Committing changes: $commitMessage" -ForegroundColor Yellow
git commit -m $commitMessage

# Check if remote origin exists
$remoteExists = git remote get-url origin 2>$null
if (-not $remoteExists) {
    Write-Host "⚠️  No remote origin found!" -ForegroundColor Red
    Write-Host "Please add your GitHub repository as remote origin:" -ForegroundColor Yellow
    Write-Host "git remote add origin https://github.com/YOUR_USERNAME/portfolio.git" -ForegroundColor Cyan
    exit 1
}

# Push to GitHub
Write-Host "📤 Pushing to GitHub..." -ForegroundColor Yellow
git push origin main

Write-Host "✅ Deployment completed!" -ForegroundColor Green
Write-Host "🌐 Your site will be available at: https://YOUR_USERNAME.github.io/" -ForegroundColor Cyan
Write-Host "⏱️  It may take a few minutes for changes to appear." -ForegroundColor Yellow
