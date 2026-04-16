@echo off
chcp 65001
echo ========================================
echo  烟具外贸网站 - 一键部署脚本
echo ========================================
echo.

echo [1/8] 配置 npm 国内镜像...
npm config set registry https://registry.npmmirror.com

echo [2/8] 克隆代码...
cd C:\
git clone https://github.com/ly383676000-boop/-.git smoke-shop
if %errorlevel% neq 0 (
    echo 克隆失败，尝试使用代理...
    git clone https://ghproxy.com/https://github.com/ly383676000-boop/-.git smoke-shop
)

echo [3/8] 安装后端依赖...
cd C:\smoke-shop\backend
call npm install

echo [4/8] 关闭防火墙...
netsh advfirefirewall set allprofiles state off

echo [5/8] 启动后端服务...
start "Backend" cmd /k "cd /d C:\smoke-shop\backend && npm start"

echo [6/8] 安装前端依赖...
cd C:\smoke-shop\frontend
call npm install

echo [7/8] 构建前端...
call npm run build

echo [8/8] 安装 serve 并启动前端...
call npm install -g serve
start "Frontend" cmd /k "serve -s C:\smoke-shop\frontend\dist -l 3000"

echo.
echo ========================================
echo  部署完成！
echo  前端地址: http://121.40.174.37:3000
echo  后端地址: http://121.40.174.37:3001
echo ========================================
pause
