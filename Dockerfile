FROM --platform=$BUILDPLATFORM node:19 AS dev-envs

COPY . .

RUN apt-get update && apt-get install -y git
RUN yarn global add @vue/cli
RUN yarn install
ENV HOST=0.0.0.0

# install Docker tools (cli, buildx, compose)
COPY --from=gloursdocker/docker / /
CMD ["yarn", "run", "serve"]
