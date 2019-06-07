#!/usr/bin/env bash

DIR="$(dirname $( cd "$( dirname "$0"  )" && pwd  ) )"

# confirm that following operations are being executed in $DIR
cd $DIR

echo "Injected UMI_ENV is: " ${UMI_ENV}

if  [ ! -n "$UMI_ENV" ] ;then
    output="<%= answers.name %>-zip-dist"
else
    output="${UMI_ENV}-<%= answers.name %>-zip-dist"
fi

# 删除之前打包好的项目

rm -rf ./*-zip-dist ./dist ./<%= answers.name %>*.zip
mkdir ./${output}
mkdir ./${output}/bin


rm -rf package-lock.json

yarn

if [ $? -ne 0 ]; then
  echo "Failed to install first depenedencies"
  exit -1
fi

# 移动dist目录到打包目录
yarn run build

if [ $? -ne 0 ]; then
  echo "Failed to generating bundle"
  exit -1
fi

mv ./dist ./${output}

# 拷贝server目录到打包目录
cp -r ./server ./${output}

# 拷贝package.json到打包目录
cp ./package.json ./${output}

if test -n "$UMI_ENV"; then
  if [ "$(uname)" == "Darwin" ];then
    sed -i '' 's/<%= answers.name %>/'${UMI_ENV}'_<%= answers.name %>/g' ./${output}/package.json
  else 
    sed -i 's/<%= answers.name %>/'${UMI_ENV}'_<%= answers.name %>/g' ./${output}/package.json
  fi
fi

# 拷贝stop.sh到打包目录
cp ./shells/stop.sh ./${output}/bin

if test -n "$UMI_ENV"; then
  if [ "$(uname)" == "Darwin" ];then
    sed -i '' 's/<%= answers.name %>/'${UMI_ENV}'_<%= answers.name %>/g' ./${output}/bin/stop.sh
  else 
    sed -i 's/<%= answers.name %>/'${UMI_ENV}'_<%= answers.name %>/g' ./${output}/bin/stop.sh
  fi
fi

# 回到打包目录
cd ./${output}

# 安装运行时依赖
npm i express replace-in-file --registry=https://registry.npm.taobao.org

if [ $? -ne 0 ]; then
    echo "Install runtime dependencies failed, check network first!"
    exit -1
fi

# 退回到打包目录的上一级
cd $DIR

# 生成压缩包
zip -r "${output}.zip" ${output}

