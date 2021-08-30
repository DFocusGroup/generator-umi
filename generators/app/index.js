const path = require('path')
const fs = require('fs')
const Generator = require('yeoman-generator')

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
        name: 'useDynamicTheme',
        default: false,
        message: 'Would you like to enable Dynamic Theme?'
      },
      {
        type: 'confirm',
        name: 'docker',
        message: 'Create Dockerfile?',
        default: false
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

    this.fs.copy(this.templatePath('vscode'), this.destinationPath('.vscode'))

    if (answers.docker) {
      this.fs.copy(this.templatePath('Dockerfile'), this.destinationPath('Dockerfile'))
      this.fs.copy(this.templatePath('dockerignore'), this.destinationPath('.dockerignore'))
    }

    this.fs.copy(this.templatePath('eslintrc.js'), this.destinationPath('.eslintrc.js'))
    this.fs.copy(this.templatePath('gitignore'), this.destinationPath('.gitignore'))
    this.fs.copyTpl(this.templatePath('package.json.vm'), this.destinationPath('package.json'), this.answer)
    this.fs.copy(this.templatePath('prettierrc.js'), this.destinationPath('.prettierrc.js'))
    this.fs.copyTpl(this.templatePath('README.md'), this.destinationPath('README.md'), this.answer)
    this.fs.copy(this.templatePath('tsconfig.json.vm'), this.destinationPath('tsconfig.json'))
    this.fs.copy(this.templatePath('typings.d.ts'), this.destinationPath('typings.d.ts'))

    this.fs.copyTpl(this.templatePath('config'), this.destinationPath('config'), this.answer)
    this.fs.copyTpl(this.templatePath('husky'), this.destinationPath('.husky'), this.answer)
    this.fs.copyTpl(this.templatePath('mock'), this.destinationPath('mock'), this.answer)
    this.fs.copyTpl(this.templatePath('public'), this.destinationPath('public'), this.answer)
    this.fs.copyTpl(this.templatePath('server'), this.destinationPath('server'), this.answer)
    this.fs.copyTpl(this.templatePath('shells'), this.destinationPath('shells'), this.answer)
    this.fs.copyTpl(this.templatePath('src'), this.destinationPath('src'), this.answer)
  }

  end() {
    const { answers } = this.answer

    console.log()
    this.log.info(
      'Make sure you have vscode extension https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode installed'
    )
    console.log()

    this.log.ok(`Project ${answers.name} generated!!!`)
  }
}
