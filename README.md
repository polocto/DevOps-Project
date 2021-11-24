# Project
>[DevOps Assignment](https://github.com/adaltas/ece-devops-2021-fall/blob/master/PROJECT.md)

This project let us apply what we have learn since the begining of the year

## Screenshots
### CI/CD
![Github Action](./img/githubAction.png)
![Heroku Integration](./img/heroku.png)


## Instructions
### Install
- Clone repository
```sh
# https
git clone https://github.com/polocto/Project-SI.git
```
```sh
# ssh
git clone git@github.com:polocto/Project-SI.git
```
```sh
# github CLI
gh repo clone polocto/Project-SI
```
- [Install dependencies for userapi](./userapi/README.md#installation)

- [Install Docker](https://www.docker.com/get-started)

- [Install Minikube](https://minikube.sigs.k8s.io/docs/start/) for Kubernetes


### Usage
- [Start userapi](./userapi/README.md#usage)

- Build docker image

```sh
docker build -t projet-devops .
```

- Using Docker Compose

```sh
docker-compose up
```

- Kubernertes

```sh
cd k8s
minikube start
kubectl apply -f pv.yaml
kubectl apply -f pv-claim.yaml
kubectl apply -f redis.yaml
kubectl apply -f config-map.yaml
kubectl apply -f deployment.yaml
minikube service projet-devops-service
cd ..
```

You will need to wait until all pods are running befor you get to see the page.
See pods advancement use the following command.

```sh
kubectl get pod --watch
```

To quit `crtl+C`

Once every pods are running, refresh the page.


### Test
- [Test userapi](./userapi/README.md#testing)

## Platforms & Tools
- [Github Action](https://github.com/polocto/Project-SI/actions)
- [Heroku](https://dashboard.heroku.com/apps)
- Vagrant *(centos/7)*
- [Docker Hub](https://hub.docker.com)

## Bonus

## Credits
Paul SADE & Mathis CAMARD

## License
None
