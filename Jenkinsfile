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
        script {
          // Exécutez les tests et générer les rapports JUnit
          sh 'npm test -- --no-watch --no-progress --browsers=ChromeHeadlessCI'
        }
      }
      post {
        always {
          // Publiez les rapports JUnit
          junit '**/test-results.xml'
        }
      }
    }
    }

  }
  tools {
    nodejs 'Nodejs_auto'
  }
}
