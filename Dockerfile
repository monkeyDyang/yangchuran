FROM nginx:latest

# 设置工作目录
WORKDIR /usr/share/nginx/html

# 将当前目录下的文件拷贝到容器中
COPY ./dist .

# 覆盖nginx配置文件
COPY nginx/default.conf /etc/nginx/conf.d/default.conf