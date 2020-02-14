#!/bin/bash
set -e

TAG=${1:-`date '+%Y%m%d%H%M%S'`}
REGISTRY=${2:-vpereskokov/vpagroup}
BUILD=${3:-testing}

echo "${TAG}" "${REGISTRY}" "${BUILD}"

DOCKER_CONTAINER_NAME="trkir_www"
DOCKER_CONTAINER_INDEX="1"

function pushToRegistry() {
    # $1 - TAG
    REGISTRY_WITH_TAG="${REGISTRY}:$1"
    echo "Registry with tag: ${REGISTRY}:${TAG}"
    docker tag "${DOCKER_CONTAINER_NAME}" "${REGISTRY}:${TAG}"
    docker push "${REGISTRY}:${TAG}"
}

if docker stop "${DOCKER_CONTAINER_NAME}_${DOCKER_CONTAINER_INDEX}"; then
    echo Stopped
fi

echo "BUILD=${BUILD}" >> docker/.env
echo "PORT=3061" >> docker/.env

# Build and push to registry
docker build --no-cache \
    --build-arg BUILD="$(echo ${BUILD})" \
    --build-arg PORT="3061" \
    -f ./docker/Dockerfile \
    -t "${DOCKER_CONTAINER_NAME}" .
docker run --rm -d -p 3061:3061 --name "${DOCKER_CONTAINER_NAME}_${DOCKER_CONTAINER_INDEX}" "${DOCKER_CONTAINER_NAME}"
docker commit "${DOCKER_CONTAINER_NAME}_${DOCKER_CONTAINER_INDEX}" "${DOCKER_CONTAINER_NAME}"
pushToRegistry "${TAG}" "${DOCKER_CONTAINER_NAME}"

# Clear artifacts
if docker stop "${DOCKER_CONTAINER_NAME}_${DOCKER_CONTAINER_INDEX}"; then
    echo Stopped
else
    echo Not started
fi
docker rmi -f "${DOCKER_CONTAINER_NAME}"

# Show the correct tag
echo "Tag: ${TAG}"
