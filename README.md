# CICD-cloudbuild-cloudrun-docker-nodejs

### How to use

- clone this repo then create your own repo and push to it the project

- from GCP console go to Cloud Build Triggers page then click on "Connect Repositories" --> Choose "GitHub (Cloud Build GitHub App)" or any other Repo provider that's hosting your repo. Then click "Continue"

- You will see a list of all your repos in "Github or Bitbucket" or whatever you chose in the previous step. Check your repo, accept the "I understand that GitHub content fo..." then "Connect Repository"

- From GCP console Cloud Build Settings enable "Cloud Run --> Cloud Run Admin" and "Service Accounts	Service Account User"

- Go back to Cloud Build Triggers page and click on "Create Trigger" and specify a

  1- name

  2- event "Push to branch"

  3- Source: 

  respositoy --> "your repo"

  branch --> ^master$ or ^main$ or how your configured it

  4- build configurations: leave as "autodetected". This will look for cloudbuild.yaml file and if it doesn't find it will look for Dockerfile file

  5- Leave the rest as it's and click "Create"

- you are ready. Now, just make some changes to your project and push to your Repo and watch the auto deployment to Cloud Run
