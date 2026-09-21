@echo off
echo Installing dependencies...
call npm install
echo.
echo Starting development server...
echo Navigate to: http://localhost:4200/
call npm start
pause
