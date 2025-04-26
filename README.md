
# Project Installation steps

## Clone the repo

```
git clone https://github.com/Shagufa92/docupet
cd docupet

```

## Set Up the Backend (Laravel)
Navigate to the Laravel project directory, and install the backend dependencies using Composer:

```
cd docupet
composer install
```

## Set Up the Environment

copy the root env file and laravel env file
```
cp .env.example .env
cd docupet
cp .env.example .env

```
Open your .env file in laravel and configure the database connection:

```
DB_CONNECTION=mysql
DB_HOST=db
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=laravel
DB_PASSWORD=secret
```

## Start the Containers with Docker Compose

Build and start the containers: 

```
docker-compose up --build

```
if you want to watch the changes 

```
docker-compose up -d --build && docker compose up --watch
```

## setting up the DB. 

exec into the docker container. 

```
docker ps
docker exec -it docupet-app-1 bash
```

and run the following commands to setup DB. 

```
php artisan key:generate
php artisan migrate
php artisan db:seed
exit;
```

## Set Up the Frontend (React)

```ex
npm install
npm run build
```

You should be able to run it on you localhost

```
http://localhost/
```