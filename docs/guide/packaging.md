# 打包

## 打包到 .zip

在根目录直接运行 `bash ./shells/build.sh` 可以生成 `.zip` 包，讲其放置目标服务器上解压，进入解压后的目录，运行 `yarn serve` 即可启动应用。

## 打包到 docker 镜像

在根目录直接运行 `docker build --no-cache -t <镜像名>:<版本号> .` 可以生成 镜像。

使用 `docker container run -e "API_HOST=<后端API_HOST>" -e "STORAGE_DOMAIN=<token存放在cookie中的domain>" -p <宿主端口>:3000 <镜像名>:<版本号>`
