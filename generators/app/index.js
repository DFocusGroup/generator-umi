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
        name: 'vscode',
        message: 'Use vscode preference?',
        default: true
      },
      {
        type: 'list',
        name: 'npmOrYarn',
        message: 'Which tool would you use for dependencies?',
        choices: ['npm', 'yarn']
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

    if (answers.vscode) {
      this.fs.copy(this.templatePath('vscode'), this.destinationPath('.vscode'))
    }

    this.fs.copy(this.templatePath('eslintrc'), this.destinationPath('.eslintrc'))
    this.fs.copy(this.templatePath('jsconfig.json.vm'), this.destinationPath('jsconfig.json'))
    this.fs.copy(this.templatePath('gitignore'), this.destinationPath('.gitignore'))
    this.fs.copy(this.templatePath('prettierrc'), this.destinationPath('.prettierrc'))

    this.fs.copyTpl(this.templatePath('README.md'), this.destinationPath('README.md'), this.answer)
    this.fs.copyTpl(this.templatePath('umirc.ts.vm'), this.destinationPath('.umirc.ts'), this.answer)

    this.fs.copyTpl(this.templatePath('package.json.vm'), this.destinationPath('package.json'), this.answer)

    this.fs.copyTpl(this.templatePath('mock'), this.destinationPath('mock'), this.answer)
    this.fs.copyTpl(this.templatePath('server'), this.destinationPath('server'), this.answer)
    this.fs.copyTpl(this.templatePath('shells'), this.destinationPath('shells'), this.answer)
    this.fs.copyTpl(this.templatePath('src'), this.destinationPath('src'), this.answer)

    this.fs.copyTpl(this.templatePath('public'), this.destinationPath('public'), this.answer)
  }

  install() {
    const { answers } = this.answer

    if (answers.npmOrYarn === 'npm') {
      this.npmInstall()
    } else {
      this.yarnInstall()
    }
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
