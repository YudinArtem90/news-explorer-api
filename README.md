# news-explorer-api

### К backend можно обратиться по адресу http://api.students.nomoredomains.monster

-----------------------------------------------------

## Не авторизованные

### создаёт пользователя с переданными в теле email, password и name
POST /signup

http://api.students.nomoredomains.monster/signup


### проверяет переданные в теле почту и пароль и возвращает JWT
POST /signin

http://api.students.nomoredomains.monster/signin

-----------------------------------------------------

## Авторизованные

### возвращает информацию о пользователе (email и имя)
GET /users/me

http://api.students.nomoredomains.monster/users/me

### возвращает все сохранённые пользователем статьи
GET /articles

http://api.students.nomoredomains.monster/articles

### создаёт статью с переданными в теле keyword, title, text, date, source, link и image
POST /articles

http://api.students.nomoredomains.monster/articles

### удаляет сохранённую статью  по _id
DELETE /articles/articleId

http://api.students.nomoredomains.monster/articles/:articleId 
