pipeline {
  agent any
  stages {
    stage('Install dependencies') {
 steps {
    echo 'Hello Nassim'
    script {
      def npmCache = tool 'npm'
      sh "npm install --cache ${npmCache}/.npm"
    }
  }
    }

    stage('Build') {
      steps {
sh 'rm -rf node_modules'
    sh 'npm install'
    sh 'npm install @angular/cli'
    sh 'npm update @angular/cli @angular/core @angular/compiler @angular/compiler-cli'
    sh 'npm run build'
    sh 'npm run test'
      }
    }

    stage('Run in Docker') {
      steps {
       echo 'Hello oui'
    sh 'docker build -t my-angular-app .'
    sh 'docker run -p 4200:4200 -e "NG_CLI_ANALYTICS=false" my-angular-app --host 0.0.0.0'
      }
    }

  }
  tools {
    nodejs 'Nodejs_auto'
    dockerTool 'docker'
  }
}
