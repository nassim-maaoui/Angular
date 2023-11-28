pipeline {
  agent any
  stages {
    stage('Install dependencies') {
      steps {
        echo 'Hello Nassim'
        sh 'npm install'
      }
    }

    stage('Build') {
      steps {
        sh 'npm install @angular/cli'
        sh '''npm update @angular/cli @angular/core @angular/compiler @angular/compiler-cli
'''
        sh 'npm run build'
        sh 'npm run test'
      }
    }

    stage('Run in Docker') {
      steps {
        echo 'Hello oui'
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