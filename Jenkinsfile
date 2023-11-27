pipeline {
  agent any
  stages {
    stage('Install dependance') {
      steps {
        echo 'hello'
        sh 'npm install'
      }
    }

    stage('Build') {
      steps {
        sh '''npm install @angular/cli
'''
        sh 'npm run build'
        sh '''node_modules/.bin/ng test
'''
      }
    }

    stage('waw') {
      steps {
        echo 'hello'
      }
    }

  }
}