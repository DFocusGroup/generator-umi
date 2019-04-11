#!/usr/bin/env bash

echo -e "\033[33mThis is a tool improving the efficiency of your git operations\033[0m" 

echo 

echo "Press any key to continue"

read

echo "Enter your name($USER): "

read username

if [ -z "$username" ]; then
  if [ -z "$USER" ]; then
    while [ -z "$username" ]
    do
      echo -e "\033[31mname must not be empty\033[0m"
      echo
      echo "Enter your name: "
      read username
    done
  else
    username=$USER
  fi
fi

git config --local user.name $username

echo "Enter your email: "

read email

while [ -z "$email" ]
do
  echo -e "\033[31memail must not be empty\033[0m"
  echo
  echo "Enter your email: "
  read email
done

git config --local user.email $email

git config --local core.excludesfile $HOME/.gitignore
git config --local core.autocrlf input
git config --local core.ignorecase false
git config --local color.ui true
git config --local gui.encoding utf-8
git config --local push.default simple
git config --local branch.autosetupmerge always
git config --local branch.autosetuprebase always
git config --local alias.co checkout
git config --local alias.st status
git config --local alias.br branch
git config --local alias.ci commit
git config --local alias.cp cherry-pick
git config --local alias.df diff
git config --local alias.lo "log --oneline"
git config --local alias.pr "pull --rebase"
git config --local alias.pl pull
git config --local alias.ps push

echo 

echo -e "\033[36mgit config --local user.name $username\033[0m"
echo -e "\033[36mgit config --local user.email $email\033[0m"
echo -e "\033[36mgit config --local core.excludesfile \$HOME/.gitignore\033[0m"
echo -e "\033[36mgit config --local core.autocrlf input\033[0m"
echo -e "\033[36mgit config --local core.ignorecase false\033[0m"
echo -e "\033[36mgit config --local color.ui true\033[0m"
echo -e "\033[36mgit config --local gui.encoding utf-8\033[0m"
echo -e "\033[36mgit config --local push.default simple\033[0m"
echo -e "\033[36mgit config --local branch.autosetupmerge always\033[0m"
echo -e "\033[36mgit config --local branch.autosetuprebase always\033[0m"
echo -e "\033[36mgit config --local alias.co checkout\033[0m"
echo -e "\033[36mgit config --local alias.st status\033[0m"
echo -e "\033[36mgit config --local alias.br branch\033[0m"
echo -e "\033[36mgit config --local alias.ci commit\033[0m"
echo -e "\033[36mgit config --local alias.cp cherry-pick\033[0m"
echo -e "\033[36mgit config --local alias.df diff\033[0m"
echo -e "\033[36mgit config --local alias.lo \"log --oneline\"\033[0m"
echo -e "\033[36mgit config --local alias.pr \"pull --rebase\"[0m"
echo -e "\033[36mgit config --local alias.pl pull\033[0m"
echo -e "\033[36mgit config --local alias.ps push\033[0m"
