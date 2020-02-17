# 基础镜像为node，版本为v9.2.0
FROM node:8.10.0 

# 创建容器内的项目存放目录
RUN mkdir -p /home/nginx/www
WORKDIR /home/nginx/www

#  将Dockerfile当前目录下所有文件拷贝至容器内项目目录并安装项目依赖
COPY . /home/nginx/www
RUN npm install

# 容器对外暴露的端口号，要和node项目配置的端口号一致

# 容器启动时执行的命令
CMD [ "npm", "build" ]