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
        sh 'npm install -g jest jest-cli jest-junit'
        sh 'jest --no-cache'
      }
    }

  }
  tools {
    nodejs 'Nodejs_auto'
  }
}