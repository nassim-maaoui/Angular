pipeline {
  agent any
  stages {
    stage('Install dependance') {
      steps {
        script {
          tools {
            nodejs 'Nodejs_auto'
          }
          // Installation des dépendances
          sh 'npm install'
        }

      }
    }

    stage('Build') {
      steps {
        script {
          sh 'npm run build'
        }

      }
    }

    stage('Test') {
      post {
        always {
          junit '**/test-results.xml'
        }

      }
      steps {
        script {
          sh 'npm test -- --no-watch --no-progress --browsers=ChromeHeadlessCI'
        }

      }
    }

  }
}