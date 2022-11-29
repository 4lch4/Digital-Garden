FROM squidfunk/mkdocs-material:8.5.10

COPY . .

RUN apk add --no-cache caddy

RUN pip install --no-cache-dir \
      "mkdocs-minify-plugin" \
      "mkdocs-redirects" \
      "mkdocs-git-revision-date-localized-plugin" \
      "mkdocs-section-index" \
      "mkdocs-autolinks-plugin" \
      "mkdocs-tooltips" \
      "mkdocs-img2fig-plugin" \
      "pillow" \
      "cairosvg";

RUN mkdocs build

# Expose MkDocs development server port
EXPOSE 8000

# Set working directory
WORKDIR /docs

# Start development server by default
ENTRYPOINT ["caddy", "run"]
