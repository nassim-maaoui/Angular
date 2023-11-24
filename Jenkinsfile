pipeline {
  agent any
tools{
  nodejs "Nodejs_auto"
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


  }
}
