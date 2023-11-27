pipeline {
  agent any
    tools {
            nodejs 'Nodejs_auto'
          }
  stages {
    stage('Install dependance') {
      steps {
        echo 'hello nassim'
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
        echo 'hello oui'
      }
    }

  }
}
