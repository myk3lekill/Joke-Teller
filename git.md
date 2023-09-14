<-- create a repository for a project and upload initial commit-->
git init
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/myk3lekill/smartbrain.git
git push -u origin main

<-- upload files to an existing repository -->
git remote add origin https://github.com/myk3lekill/Picture-In_Picture.git
git branch -M main
git push -u origin main

<-- upload files -->
git add .
git commit -m 'second commit'
git push origin main

<-- change git url (in case of changing repository) -->
git remote set-url origin https://github.com/myk3lekill/template.git
