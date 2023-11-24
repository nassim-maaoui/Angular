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
        sh 'ng build'
      }
    }

  }
}
