# Docker Workshop App


## Description
This app will populate react ui using vite, api using exoress, and database using postgres, all using docker.

### Setup
- First ensure that you have docker installed in your terminal.
- Once you chech the docker, navigate the the application directory and run 
```docker
docker-compose up
```
Now check localhost:3000 for the ui and localhost:8000 for the api.<br>
This should populate your whole app(the app will automatically do migration on knex and seed the db).


- When you want to stop the app, simplly run
```docker
docker-compose down
```


![ezgif com-optimize](https://github.com/user-attachments/assets/19f0a220-3e15-45aa-90da-a22939bcc549)

