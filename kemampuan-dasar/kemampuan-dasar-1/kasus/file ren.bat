@ECHO off
cls
:start
ECHO (y/t)?

set pilih=
set /p pilih=

if not '%pilih%'=='' set pilih=%pilih:~0,1%
if '%pilih%'=='y' goto iya
if '%pilih%'=='t' goto tidak
ECHO "%pilih%" is not valid, try again

ECHO.
goto start
:iya
for /r C:\Users\user\Documents\GitHub\praxis-academy\kemampuan-dasar-1\kasus %%x in (*.java) do set nm_lama=%%~dpnxx
ECHO %nm_lama%
ECHO input nama file baru
set /p nama= :
echo file telah di rename menjadi %nama%

REN "%nm_lama%" %nama%.java

goto end
:tidak
for /r C:\Users\user\Documents\GitHub\praxis-academy\kemampuan-dasar-1\kasus %%x in (*.java) do echo Ada file Java pada direktori : %%~dpnxx
goto end
:end
pause