# tmv-admin

Administrative PWA to TMV Ingeniería S.A.

## Requirements

- NodeJS
- Docker
- SMTP Server

### 1.Create environment variables

Create a `.env` from `.env.example` file in the root folder with all environment variables, this variables will be used by the containers, it need to be reached by `docker-compose.yml` file.

Inside `ui` make sure to create `.env.production` for production environment or just `.env` for development environment. (Based on [create-react-app](https://create-react-app.dev/))

### 2. Run

At the end just type

```
docker compose -p tmv-admin -up -d --build
```

This commands will wake up the services access it through port specified in `$*_PORT` environment variables.

Nevertheless is recomended to use a docker private network with a reverse proxy.

If you set the environment variable `API_CREATE_ADMIN` to `1` then the user credentials for first access are:
```
Username: admin
Password: admin
```
After first start up set `API_CREATE_ADMIN` to `0`

Use this code if you need it, don´t forget to share, have a nice day.
