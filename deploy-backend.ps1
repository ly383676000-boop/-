# 烟具外贸网站 - 后端部署脚本 (Windows Server)
# 在阿里云 ECS 服务器上以管理员身份运行 PowerShell

$ErrorActionPreference = "Stop"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "烟具外贸网站后端部署脚本" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

# 1. 安装 Node.js 22
Write-Host "`n[1/5] 安装 Node.js 22..." -ForegroundColor Yellow
$nodeInstaller = "$env:TEMP\nodejs-22_x64.msi"
Invoke-WebRequest -Uri "https://nodejs.org/dist/v22.14.0/node-v22.14.0-x64.msi" -OutFile $nodeInstaller -UseBasicParsing
Start-Process msiexec.exe -ArgumentList "/i $nodeInstaller /quiet" -Wait
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
Remove-Item $nodeInstaller -Force -ErrorAction SilentlyContinue
Write-Host "Node.js 安装完成: $(node --version)" -ForegroundColor Green

# 2. 安装 Git
Write-Host "`n[2/5] 安装 Git..." -ForegroundColor Yellow
$gitInstaller = "$env:TEMP\git-installer.exe"
Invoke-WebRequest -Uri "https://github.com/git-for-windows/git/releases/download/v2.47.1.windows.1/Git-2.47.1-64-bit.exe" -OutFile $gitInstaller -UseBasicParsing
Start-Process $gitInstaller -ArgumentList "/VERYSILENT","/NORESTART","/NOCANCEL" -Wait
Remove-Item $gitInstaller -Force -ErrorAction SilentlyContinue
Write-Host "Git 安装完成" -ForegroundColor Green

# 3. 克隆代码
Write-Host "`n[3/5] 克隆 GitHub 代码..." -ForegroundColor Yellow
Set-Location C:\
if (Test-Path "C:\smoke-shop") { Remove-Item -Path "C:\smoke-shop" -Recurse -Force }
git clone https://github.com/ly383676000-boop/-.git smoke-shop
Set-Location C:\smoke-shop\backend
Write-Host "代码克隆完成" -ForegroundColor Green

# 4. 安装依赖
Write-Host "`n[4/5] 安装依赖..." -ForegroundColor Yellow
npm install
Write-Host "依赖安装完成" -ForegroundColor Green

# 5. 启动服务
Write-Host "`n[5/5] 启动后端服务..." -ForegroundColor Yellow
$env:PORT = "3001"
$env:HOST = "0.0.0.0"
Start-Process powershell.exe -ArgumentList "-Command cd C:\smoke-shop\backend; npm start" -WindowStyle Hidden
Start-Sleep 3

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "部署完成！" -ForegroundColor Green
Write-Host "后端地址: http://121.40.174.37:3001" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
