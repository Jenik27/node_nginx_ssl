# Example of a nodejs instance running on nginx server in compute engine

1. create a compute engine instance and ssh into it
2. clone the repo in app dir (optional)
3. install pm2 to run node app in the background
4. install nginx and run it using systemctl
5. configure nginx

```bash
sudo vi /etc/nginx/sites-available/default

# change the following lines, from try_files $uri $uri/ =404; to
proxy_pass http://localhost:3000; # or whatever port your app is running on
proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection 'upgrade';
proxy_set_header Host $host;
proxy_cache_bypass $http_upgrade;

# (optional) in server_name put your domain, with and without www
```

## Add domain and SSL

TODO

# NGINX

- there are directives and contexts in nginx.conf
- directives are like commands
- contexts are like blocks

- more guide on *https://www.youtube.com/watch?v=7VAI73roXaY&t=613s*
