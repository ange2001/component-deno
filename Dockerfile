# Build stage
FROM denoland/deno:2.5.0 AS builder
WORKDIR /app
COPY . .
RUN deno cache .

# Production stage
FROM denoland/deno:alpine-2.5.0
WORKDIR /app
COPY --from=builder /app/ .
CMD ["deno", "task", "prod"]