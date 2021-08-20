pipeline {
    agent any
    stages {
        stage('code checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/rob-coq/GrowlerFriday.git'
            }
        }
        stage('SonarQube analysis') {
            steps {
                script {
                    def scannerHome = tool 'sonarscanner';
                    withSonarQubeEnv('SonarQube') { // If you have configured more than one global server connection, you can specify its nam
                        sh "echo ${scannerHome}"
                        sh "${scannerHome}/bin/sonar-scanner -Dsonar.projectKey=DevSecOps -Dsonar.sources=. -Dsonar.host.url=http://sonarqube:9000 -Dsonar.login=60f26f3c5183a6d90c7380a4fe17db29f9b1d5dc"
                    }
                }
            }
        }
        stage("Quality gate") {
            steps {
                waitForQualityGate abortPipeline: true
            }
        }
        stage ('Invoke_pipeline') {
            steps {
                build job: 'Continuous-delivery/master'
            }
        }
    }
}
