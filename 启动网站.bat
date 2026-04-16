@echo off
title HONG KONG COOKIES TRADING LIMITED - Smoke Shop
color 0A

echo ========================================
echo   Smoke Shop - Start Script
echo   HONG KONG COOKIES TRADING LIMITED
echo ========================================
echo.

:: Kill existing processes
echo [1/3] Closing existing processes...
taskkill /F /IM node.exe 2>nul
timeout /t 2 /nobreak >nul

:: Start Backend
echo [2/3] Starting Backend Server (Port 3001)...
cd /d "%~dp0backend"
start "Backend Server" cmd /k "node src/index.js"

timeout /t 3 /nobreak >nul

:: Start Frontend
echo [3/3] Starting Frontend Server (Port 3000)...
cd /d "%~dp0frontend"
start "Frontend Server" cmd /k "npm run dev"

echo.
echo ========================================
echo   All servers started!
echo ========================================
echo.
echo   Website:     http://localhost:3000
echo   Admin:       http://localhost:3000/admin.html
echo   API:         http://localhost:3001/api
echo.
echo   Press any key to exit this window...
pause >nul
