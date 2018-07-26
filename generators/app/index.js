const path = require('path')
const fs = require('fs')
const Generator = require('yeoman-generator')

const DEPENDENCIES = [
  'antd',
  'axios',
  'classnames',
  'dva',
  'dva-model-extend',
  'express',
  'js-cookie',
  'lodash',
  'moment',
  'path-to-regexp',
  'react-helmet',
  'replace-in-file'
]

const DEV_DEPENDENCIES = [
  'babel-plugin-import',
  'eslint',
  'eslint-config-prettier',
  'eslint-config-umi',
  'eslint-plugin-prettier',
  'less-vars-to-js',
  'prettier',
  'umi',
  'umi-plugin-dva',
  'umi-plugin-routes'
]

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts)
  }

  initializing() {
    try {
      this.username = process.env.USER || process.env.USERPROFILE.split(path.sep)[2]
    } catch (e) {
      this.username = ''
    }
  }

  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        validate: name => {
          if (!name) {
            return 'Project name cannot be empty'
          }
          if (!/\w+/.test(name)) {
            return 'Project name should only consist of 0~9, a~z, A~Z, _, .'
          }

          if (!this.fs.exists(this.destinationPath(name))) {
            return true
          }
          if (fs.statSync(this.destinationPath(name)).isDirectory()) {
            return 'Project already exist'
          }
          return true
        }
      },
      {
        type: 'confirm',
        name: 'vscode',
        message: 'Use vscode preference?',
        default: true
      },
      {
        type: 'confirm',
        name: 'docker',
        message: 'Use docker for release?',
        default: true
      },
      {
        type: 'list',
        name: 'registry',
        message: 'Which registry would you use?',
        choices: ['https://registry.npm.taobao.org', 'https://registry.npmjs.org']
      }
    ]).then(answers => {
      this.answer = {
        answers
      }

      return this.answer
    })
  }

  configuring(answers) {
    this.destinationRoot(path.join(this.destinationRoot(), this.answer.answers.name))
  }

  writing() {
    const { answers } = this.answer

    if (answers.docker) {
      this.fs.copy(this.templatePath('.dockerignore'), this.destinationPath('.dockerignore'))
      this.fs.copyTpl(this.templatePath('Dockerfile.vm'), this.destinationPath('Dockerfile'), this.answer)
      this.fs.copyTpl(this.templatePath('shells'), this.destinationPath('shells'), this.answer)
    }
    if (answers.vscode) {
      this.fs.copy(this.templatePath('vscode'), this.destinationPath('.vscode'))
    }

    this.fs.copy(this.templatePath('.eslintrc'), this.destinationPath('.eslintrc'))
    this.fs.copy(this.templatePath('.gitignore'), this.destinationPath('.gitignore'))
    this.fs.copy(this.templatePath('.prettierrc'), this.destinationPath('.prettierrc'))

    this.fs.copyTpl(this.templatePath('.umirc.js.vm'), this.destinationPath('.umirc.js'), this.answer)

    this.fs.copyTpl(this.templatePath('package.json.vm'), this.destinationPath('package.json'), this.answer)

    this.fs.copyTpl(this.templatePath('src'), this.destinationPath('src'), this.answer)

    this.fs.copyTpl(this.templatePath('server'), this.destinationPath('server'), this.answer)
    this.fs.copyTpl(this.templatePath('mock'), this.destinationPath('mock'), this.answer)
  }

  install() {
    this.npmInstall(DEPENDENCIES, {
      registry: this.answer.answers.registry,
      save: true
    })
    this.npmInstall(DEV_DEPENDENCIES, {
      registry: this.answer.answers.registry,
      'save-dev': true
    })
  }

  end() {
    const { answers } = this.answer

    console.log()
    if (answers.vscode) {
      this.log.info(
        'Make sure you have vscode extension https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode installed'
      )
      console.log()
    }

    this.log.ok(`Project ${answers.name} generated!!!`)
  }
}
