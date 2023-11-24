pipeline {
  agent any
  stages {
    stage('Install dependance') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Test') {
      steps {
        sh 'npm install -g karma jasmine protractor'
        sh 'npm run test'
      }
    }

  }
  tools {
    nodejs 'Nodejs_auto'
  }
}