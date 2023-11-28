pipeline {
  agent any
  environment {
        CHROME_BIN = 'google-chrome'
    }
  stages {
    stage('Install dependance') {
      steps {
        echo 'hello nassim'
        sh 'npm install'
      }
    }

    stage('Build') {
      steps {
        sh '''npm install @angular/cli
'''
        sh 'npm run build'
        sh 'export CHROME_BIN=google-chrome'
        sh '''node_modules/.bin/ng test
'''
      }
    }

    stage('waw') {
      steps {
        echo 'hello oui'
        sh 'docker build -t my-angular-app .'
        sh 'docker run -p 4200:4200 my-angular-app'
      }
    }

  }
  tools {
    nodejs 'Nodejs_auto'
   dockerTool 'docker'
  }
}
