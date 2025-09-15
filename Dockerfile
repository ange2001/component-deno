
# Build stage
FROM denoland/deno:2.5.0 AS builder
ARG FOLDER=/app
WORKDIR ${FOLDER}
COPY . .
RUN mkdir -p /deno-dir && chown -R 1000:1000 /deno-dir
RUN deno cache .

# Production stage
FROM denoland/deno:alpine-2.5.0
ARG FOLDER=/app
WORKDIR ${FOLDER}
COPY --from=builder --chown=1000:1000 /app /app
EXPOSE 8000
USER 1000:1000

CMD ["deno", "task", "prod"]