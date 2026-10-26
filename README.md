# Alvi — Creative 3D Portfolio
Responsive dark portfolio built with HTML, CSS and JavaScript. No build tools required.

## Add your profile photo
1. Put your photo inside `assets/` and name it `profile.jpg`.
2. In `index.html`, find `<div class="photo" id="photo">` and replace its inner content with:
   `<img class="profile-photo" src="assets/profile.jpg" alt="Portrait of Md. Alvi Hasan Emon">`
3. Add this to the end of `style.css`:
   `.profile-photo{width:100%;height:100%;object-fit:cover;object-position:center 25%;border-radius:14px}`

## Publish/update
1. Extract the ZIP on your computer.
2. Open https://github.com/mdalvihasanemon/alvihasanemon.github.io
3. Choose **Add file → Upload files**.
4. Upload `index.html`, `style.css`, `script.js`, `README.md` and the `assets` folder if it contains your photo. Upload them to the repository root, not inside another folder.
5. Confirm replacement of files with the same names, then click **Commit changes**.
6. Under **Settings → Pages**, source should be `Deploy from a branch`, branch `main`, folder `/(root)`.
7. Wait a few minutes and refresh https://alvihasanemon.github.io/ with Ctrl+F5.

Before publishing, verify your email and all project links. The contact form opens the visitor's email app; it does not send messages to a database. Keep private details and passwords out of public files.
