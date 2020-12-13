h1 news-explorer-api

h3 К backend можно обратиться по адресу http://api.students.nomoredomains.monster

-----------------------------------------------------

h2 Не авторизованные

h3 создаёт пользователя с переданными в теле email, password и name
POST /signup

http://api.students.nomoredomains.monster/signup


h3 проверяет переданные в теле почту и пароль и возвращает JWT
POST /signin

http://api.students.nomoredomains.monster/signin

-----------------------------------------------------

h2 Авторизованные

h3 возвращает информацию о пользователе (email и имя)
GET /users/me

http://api.students.nomoredomains.monster/users/me

h3 возвращает все сохранённые пользователем статьи
GET /articles

http://api.students.nomoredomains.monster/articles

h3 создаёт статью с переданными в теле keyword, title, text, date, source, link и image
POST /articles

http://api.students.nomoredomains.monster/articles

h3 удаляет сохранённую статью  по _id
DELETE /articles/articleId

http://api.students.nomoredomains.monster/articles/:articleId 
