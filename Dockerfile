FROM nginx:stable

# Set working directory to server home.
WORKDIR /usr/share/nginx/html

# Copy nginx config to server.
COPY ./.nginx/ /etc/nginx/

# Copy source files to server.
COPY ./build /usr/share/nginx/html/

# Pipe the server logs to container output.
RUN ln -sf /dev/stdout /var/log/nginx/access.log && \
    ln -sf /dev/stderr /var/log/nginx/error.log

EXPOSE 80 443

ENTRYPOINT ["nginx", "-g", "daemon off;"]
