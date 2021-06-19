FROM nginx:stable

WORKDIR /usr/share/nginx/html

# move nginx to container
COPY ./.nginx/ /etc/nginx/

# move source files to container
COPY ./build /usr/share/nginx/html/

# Pipe logs to container output
RUN ln -sf /dev/stdout /var/log/nginx/access.log && \
    ln -sf /dev/stderr /var/log/nginx/error.log

# Expose only the necessary ports for the application to be accessed by users
EXPOSE 80 443

# This basically prevents nginx from creating background processes.
# Necessary to prevent docker from quiting when it thinks the process has stopped.
# This could also be added to the nginx config but it's safer to have it here in all apps. 
ENTRYPOINT ["nginx", "-g", "daemon off;"]
