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
        sh 'ng run test'
        sh 'ng run e2e'
      }
    }

  }
  tools {
    nodejs 'Nodejs_auto'
  }
}