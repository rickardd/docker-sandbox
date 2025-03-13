## Live reload with volumes

In the docker compose file we can define volumes as following as a live reload feature, meaning, any changes to any files withing the backend folder on the host machine will be copied over to the app folder on the container in real time. 

```
volumes:
  - ./backend:/app
```

*(Note, don't use volumes for production)*

This is great for development purposes but be aware this can cause a circular issue where the app does not build. 

If we have docker file in the backend folder which is copying `package.json` and run a `npm install` we have all dependancies in the node_modules on the container. 

But if we then have volumes defined in the compose file we are now copying the node_modules from the host (which is empty or doesn't exist) to the container, basically overwriting the working node_modules with an empty or outdated version. 

**Solution:** we can update our folder structure so we moving (live-reloading) a src folder but don't overwrite the node_modules, e.g.

```
volumes:
  - ./backend/src:/app/src
```

## Gotchas
- the db service will exit immediately as per design. It will just start to run a command and the stop. 
- moving files in the dockerfile and also using volumes in the compose file can overwrite each other and cause issues, see comments above. 
- Docker does caching so rebuild without cache can be useful sometimes.
  - `docker-compose down`
  - `docker-compose build --no-cache` **Note** this seems to delete/reset the database/volumes
  - `docker-compose up`

## Remove Unused Images
- `docker system prune` 

## logs
`docker compose logs backend`
