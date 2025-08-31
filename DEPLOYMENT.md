# Deployment Guide for GitHub Pages

## Prerequisites
- GitHub account
- Git installed on your local machine

## Step-by-Step Deployment Process

### 1. Create a GitHub Repository
1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository `portfolio` (or any name you prefer)
5. Make it public (required for free GitHub Pages)
6. Don't initialize with README, .gitignore, or license
7. Click "Create repository"

### 2. Push Your Code to GitHub
```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git push -u origin main
```

### 3. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section in the left sidebar
4. Under "Source", select "GitHub Actions"
5. The workflow will automatically deploy when you push to main branch

### 4. Configure GitHub Pages Settings
1. In the same Pages section, make sure:
   - Source is set to "GitHub Actions"
   - Branch is set to "main"
   - Folder is set to "/ (root)"

### 5. Your Site Will Be Available At
- `https://YOUR_USERNAME.github.io/`

## Automatic Deployment
The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that will:
- Automatically build your project when you push to the main branch
- Deploy it to GitHub Pages
- Update your site with the latest changes

## Manual Deployment (if needed)
If you need to deploy manually:
```bash
# Build the project
npm run build

# The built files will be in the `dist` folder
# You can then upload these files to any hosting service
```

## Troubleshooting
- If your site doesn't load, check the Actions tab in your GitHub repository for any build errors
- Make sure your repository is public (required for free GitHub Pages)
- The first deployment might take a few minutes to become available

## Custom Domain (Optional)
If you want to use a custom domain:
1. Go to your repository Settings > Pages
2. Add your custom domain in the "Custom domain" field
3. Update your DNS settings to point to your GitHub Pages URL
4. Add a `CNAME` file in your repository root with your domain name
