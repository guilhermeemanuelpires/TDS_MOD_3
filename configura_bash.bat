@echo off
echo Configurando Git...

REM Define diretamente o nome de usuário e e-mail
set username=SEU_NOME
set useremail=SEU_EMAIL

REM Configurações globais do Git
git config --global user.name "%username%"
git config --global user.email "%useremail%"

echo.
echo Configurações aplicadas com sucesso:
git config --global user.name
git config --global user.email

exit