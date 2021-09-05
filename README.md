### `docker` (backend)

Run PHP Laravel backend (place next to the project folder)

`git clone https://github.com/laradock/laradock.git`

`cd laradock && docker-compose up -d nginx workspace postgres php-fpm`

`docker-compose exec postgres bash`

`psql -U default`

`CREATE DATABASE call;`

`exit`

`docker-compose exec nginx bash`

`vi /etc/nginx/nginx.conf` пролистать вниз до строчки начинающиеся с "include ..." и под ними добавить `include /var/www/balance-platforma/backend/nginx.conf`

`exit`

`docker-compose exec workspace bash`

`cd balance-platforma && cp .env.example .env && composer install && php artisan key:generate`

`php artisan migrate:fresh --seed`

### `react` (frontend)

`cd ../balance-platforma`

`npm install`

`npm run start`
