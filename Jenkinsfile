pipeline {
  agent any
  stages {
    stage('Install dependence') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build') {
      steps {
        sh 'ng build'
      }
    }

  }
}