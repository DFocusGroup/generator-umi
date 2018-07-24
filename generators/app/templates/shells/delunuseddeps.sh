#!/bin/sh

DIR="$(dirname $( cd "$( dirname "$0"  )" && pwd  ) )"

# confirm that following operations are being executed in $DIR
cd $DIR

# remove all deps and package-lock.json
rm -rf node_modules package-lock.json

# re-install runtime-only needed deps
npm install express replace-in-file --registry=https://registry.npm.taobao.org

# remove all cache
npm cache clean --force
