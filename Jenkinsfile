pipeline {
  agent any
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
        sh 'docker run my-angular-app'
      }
    }

  }
  tools {
    nodejs 'Nodejs_auto'
    docker 'docker:latest'
  }
}
