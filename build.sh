#!/bin/bash

set -e

rm -rf node_modules 

npm install --registry=https://registry.npmmirror.com/

npm run build

rm -rf ~/webroot/static

mkdir -p ~/webroot/static

cp -r ~/repos/mz-desktop/dist/* ~/webroot/static/