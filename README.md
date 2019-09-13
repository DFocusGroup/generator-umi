# generator-umi

[![NPM version][npm-image]][npm-url]
![][david-url]
![][dt-url]
![][license-url]

Yeoman generator for umi project

> Read documentation here: [https://leftstick.gitbook.io/generator-umi](https://leftstick.gitbook.io/generator-umi)

![](./docs/generator.gif)

# Installation

```bash
sudo npm install -g yo generator-umi
```

# Usage

## Create new umi app

```bash
yo umi
```

> answer questions `generator-umi` required

**Nice work**

## Start debugging

```bash
npm start
```

## Release with docker image

```bash
# create Docker Image
docker build --no-cache -t <imagename>:<version> .

# run docker image
docker run -p <exposed port>:3000 -e "STORAGE_DOMAIN=.yourdomain.com" -e "API_HOST=http://backend-address" -d <imagename>:<version>
```

## LICENSE

[MIT License](https://raw.githubusercontent.com/DFocusGroup/generator-umi/master/LICENSE)

[npm-url]: https://npmjs.org/package/generator-umi
[npm-image]: https://badge.fury.io/js/generator-umi.png
[david-url]: https://david-dm.org/DFocusGroup/generator-umi.png
[dt-url]: https://img.shields.io/npm/dt/generator-umi.svg
[license-url]: https://img.shields.io/npm/l/generator-umi.svg
