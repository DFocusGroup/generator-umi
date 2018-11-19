#!/bin/sh

DIR="$(dirname $( cd "$( dirname "$0"  )" && pwd  ) )"

# confirm that following operations are being executed in $DIR
cd $DIR

# set npm loglevel for better observation
npm config set loglevel http

npm install --registry=<%= answers.registry %>

if [ $? -ne 0 ]; then
  echo "Failed to install first depenedencies"
  exit -1
fi

npm run build

if [ $? -ne 0 ]; then
  echo "Failed to generating bundles"
  exit -1
fi

# remove all deps and package-lock.json
rm -rf node_modules package-lock.json

# re-install runtime-only needed deps, for creating smaller image
npm install express replace-in-file --registry=<%= answers.registry %>

if [ $? -ne 0 ]; then
  echo "Failed to install required server depenedencies"
  exit -1
fi

# remove all cache, for creating smaller image
npm cache clean --force
