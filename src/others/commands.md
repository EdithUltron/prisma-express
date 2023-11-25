
## Docker run command
```
docker run 
--name prismadb 
-p 5432:5432 
-e POSTGRES_USER=prisma 
-e POSTGRES_PASSWORD=prisma 
-d postgres
```