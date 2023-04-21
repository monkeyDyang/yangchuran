FROM --platform=$BUILDPLATFORM node:latest AS dev-envs

COPY . .

RUN apt-get update && apt-get install -y git
RUN yarn global add @vue/cli
RUN yarn install
ENV HOST=0.0.0.0

RUN <<EOF
useradd -s /bin/bash -m vscode
groupadd docker
usermod -aG docker vscode
EOF

# install Docker tools (cli, buildx, compose)
COPY --from=gloursdocker/docker / /
CMD ["yarn", "run", "serve"]
