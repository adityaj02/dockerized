# Dockerized Full-Stack App with CI/CD

This repository contains a React frontend and a Node.js/Express backend, both containerized with Docker and automated using GitHub Actions.

## ?? Getting Started

### Prerequisites
- Docker & Docker Compose
- GitHub Secrets (DOCKERHUB_USERNAME, DOCKERHUB_TOKEN)

### Local Development
Run the entire stack locally with:
`ash
docker-compose up --build
`

### CI/CD Pipeline
- **CI**: Automated tests and builds run on every Pull Request to main.
- **CD**: Production images are pushed to Docker Hub upon merges to main.

---
*Last updated: 2026-04-15 22:07:26*
