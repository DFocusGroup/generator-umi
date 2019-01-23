const express = require('express')
const replace = require('replace-in-file')
const path = require('path')
const fs = require('fs')
const util = require('util')
const pkg = require('../package.json')

const WEEK = 7 * 24 * 60 * 60 * 1000

const ENVS = {
  STORAGE_DOMAIN: 'STORAGE_DOMAIN_PLACEHOLDER__',
  API_HOST: 'API_HOST_PLACEHOLDER__'
}

replaceWithEnv()

const app = express()

const readFile = util.promisify(fs.readFile)

const index = readFile(resolveFromRoot('dist', 'index.html'), { encoding: 'utf8' })

const PORT = process.env.PORT || 3000

app.get('/', indexHandler)

app.use('/', serve('dist'))

app.get('*', indexHandler)

app.listen(PORT, () => console.log(`${pkg.name} is up and running on port ${PORT}!`))

function indexHandler(req, res) {
  res.set('Cache-Control', 'private, no-cache, no-store, must-revalidate')
  res.set('Expires', '-1')
  index.then(html => {
    res.send(html)
  })
}

function serve(staticPath) {
  return express.static(resolveFromRoot(staticPath), {
    maxAge: WEEK
  })
}

function resolveFromRoot(...relativePath) {
  return path.resolve(__dirname, '..', ...relativePath)
}

function replaceWithEnv() {
  const options = {
    files: resolveFromRoot('dist/*.js')
  }

  const keys = Object.keys(ENVS)

  if (keys.some(key => !process.env[key])) {
    throw new Error(`System variables [ ${keys.join(',')} ] must be specified`)
  }

  const from = keys.map(key => ENVS[key])
  const to = keys.map(key => process.env[key])

  options.from = from
  options.to = to

  replace.sync(options)
}
