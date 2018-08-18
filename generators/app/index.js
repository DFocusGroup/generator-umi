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

const DEPENDENCIES_MOBILE = [
  'antd-mobile',
  'axios',
  'classnames',
  'dva',
  'dva-model-extend',
  'express',
  'js-cookie',
  'lodash',
  'moment',
  'path-to-regexp',
  'rc-form',
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
  'umi-plugin-routes',
  'lint-staged',
  'husky'
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
        type: 'confirm',
        name: 'mobileOnly',
        message: 'Is mobile only application?',
        default: false
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
      this.fs.copy(this.templatePath('dockerignore'), this.destinationPath('.dockerignore'))
      this.fs.copyTpl(this.templatePath('Dockerfile.vm'), this.destinationPath('Dockerfile'), this.answer)
      this.fs.copyTpl(this.templatePath('shells'), this.destinationPath('shells'), this.answer)
    }
    if (answers.vscode) {
      this.fs.copy(this.templatePath('vscode'), this.destinationPath('.vscode'))
    }

    this.fs.copy(this.templatePath('eslintrc'), this.destinationPath('.eslintrc'))
    this.fs.copy(this.templatePath('gitignore'), this.destinationPath('.gitignore'))
    this.fs.copy(this.templatePath('prettierrc'), this.destinationPath('.prettierrc'))

    if (answers.mobileOnly) {
      this.fs.copyTpl(this.templatePath('umirc.js.mobile.vm'), this.destinationPath('.umirc.js'), this.answer)
    } else {
      this.fs.copyTpl(this.templatePath('umirc.js.vm'), this.destinationPath('.umirc.js'), this.answer)
    }

    this.fs.copyTpl(this.templatePath('package.json.vm'), this.destinationPath('package.json'), this.answer)

    if (answers.mobileOnly) {
      this.fs.copyTpl(
        this.templatePath('src/assets/favicon.png'),
        this.destinationPath('src/assets/favicon.png'),
        this.answer
      )
      this.fs.copyTpl(
        this.templatePath('src/assets/logo.svg'),
        this.destinationPath('src/assets/logo.svg'),
        this.answer
      )
      this.fs.copyTpl(
        this.templatePath('src/components/LanguageSwitch'),
        this.destinationPath('src/components/LanguageSwitch'),
        this.answer
      )
      this.fs.copyTpl(this.templatePath('src/config'), this.destinationPath('src/config'), this.answer)
      this.fs.copyTpl(this.templatePath('src/helpers'), this.destinationPath('src/helpers'), this.answer)
      this.fs.copyTpl(
        this.templatePath('src/layouts/index.js'),
        this.destinationPath('src/layouts/index.js'),
        this.answer
      )
      this.fs.copyTpl(
        this.templatePath('src/layouts/OpenPageLayout.js'),
        this.destinationPath('src/layouts/OpenPageLayout.js'),
        this.answer
      )
      this.fs.copyTpl(this.templatePath('src/locale'), this.destinationPath('src/locale'), this.answer)
      this.fs.copyTpl(this.templatePath('src/models/app.js'), this.destinationPath('src/models/app.js'), this.answer)

      this.fs.copyTpl(
        this.templatePath('src/pages/overview/index.js'),
        this.destinationPath('src/pages/overview/index.js'),
        this.answer
      )
      this.fs.copyTpl(this.templatePath('src/pages/404.js'), this.destinationPath('src/pages/404.js'), this.answer)
      this.fs.copyTpl(this.templatePath('src/pages/404.less'), this.destinationPath('src/pages/404.less'), this.answer)
      this.fs.copyTpl(
        this.templatePath('src/pages/document.ejs'),
        this.destinationPath('src/pages/document.ejs'),
        this.answer
      )
      this.fs.copyTpl(this.templatePath('src/pages/index.js'), this.destinationPath('src/pages/index.js'), this.answer)
      this.fs.copyTpl(this.templatePath('src/themes'), this.destinationPath('src/themes'), this.answer)
      this.fs.copyTpl(this.templatePath('src/dva.js'), this.destinationPath('src/dva.js'), this.answer)
    } else {
      this.fs.copyTpl(this.templatePath('src'), this.destinationPath('src'), this.answer)
    }

    this.fs.copyTpl(this.templatePath('server'), this.destinationPath('server'), this.answer)
    this.fs.copyTpl(this.templatePath('mock'), this.destinationPath('mock'), this.answer)
  }

  install() {
    const { answers } = this.answer

    this.npmInstall(answers.mobileOnly ? DEPENDENCIES_MOBILE : DEPENDENCIES, {
      registry: answers.registry,
      save: true
    })
    this.npmInstall(DEV_DEPENDENCIES, {
      registry: answers.registry,
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
