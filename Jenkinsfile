pipeline {
  agent any
    tools {
    nodejs 'Nodejs_auto'
  }
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
      post {
    always {
      junit '**/test-results.xml'
    }
  }
    }

  }

}
