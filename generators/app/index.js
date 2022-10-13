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
        validate: (name) => {
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
        },
      },
    ]).then((answers) => {
      this.answer = {
        answers,
      }

      return this.answer
    })
  }

  configuring(answers) {
    this.destinationRoot(path.join(this.destinationRoot(), this.answer.answers.name))
  }

  writing() {
    const { answers } = this.answer

    this.fs.copy(this.templatePath('eslintrc.js'), this.destinationPath('.eslintrc.js'))
    this.fs.copy(this.templatePath('gitignore'), this.destinationPath('.gitignore'))
    this.fs.copy(this.templatePath('lintstagedrc'), this.destinationPath('.lintstagedrc'))
    this.fs.copy(this.templatePath('npmrc'), this.destinationPath('.npmrc'))
    this.fs.copy(this.templatePath('prettierignore'), this.destinationPath('.prettierignore'))
    this.fs.copy(this.templatePath('prettierrc'), this.destinationPath('.prettierrc'))
    this.fs.copy(this.templatePath('stylelintrc.js'), this.destinationPath('.stylelintrc.js'))

    this.fs.copy(this.templatePath('tailwind.config.js'), this.destinationPath('tailwind.config.js'))
    this.fs.copy(this.templatePath('tailwind.css'), this.destinationPath('tailwind.css'))
    this.fs.copy(this.templatePath('tsconfig.json'), this.destinationPath('tsconfig.json'))
    this.fs.copy(this.templatePath('typings.d.ts'), this.destinationPath('typings.d.ts'))

    this.fs.copyTpl(this.templatePath('README.md'), this.destinationPath('README.md'), this.answer)
    this.fs.copyTpl(this.templatePath('package.json.vm'), this.destinationPath('package.json'), this.answer)

    this.fs.copy(this.templatePath('config'), this.destinationPath('config'))
    this.fs.copy(this.templatePath('mock'), this.destinationPath('mock'))
    this.fs.copy(this.templatePath('public'), this.destinationPath('public'))
    this.fs.copy(this.templatePath('src'), this.destinationPath('src'))
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
