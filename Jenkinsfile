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
      post {
        always {
          junit '**/test-results.xml'
        }

      }
      steps {
        sh 'npm install -g jest jest-cli jest-junit'
        sh 'jest --no-cache'
        echo 'bnj'
      }
    }

  }
  tools {
    nodejs 'Nodejs_auto'
  }
}