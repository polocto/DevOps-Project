# Project

> [DevOps Assignment](https://github.com/adaltas/ece-devops-2021-fall/blob/master/PROJECT.md)

This project let us apply what we have learn since the begining of the year

## Screenshots

- [Results report with screen shots](/REPORT.md)

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

- [Install Vagrant](iac/README.md#prerequisite)

- [Install Docker](https://www.docker.com/get-started)

- [Install Minikube](https://minikube.sigs.k8s.io/docs/start/) for Kubernetes

- [Install istio](./istio/README.md#Installation)

- [Install Prometheus & Grafana for the monitoring](./monitoring/README.md#Installation)

### Usage

- [Start userapi](./userapi/README.md#usage)

- [Use Vagrant](iac/README.md#usage)

- Build Docker image

```sh
docker build -t projet-devops .
```

- Using Docker Compose

```sh
docker-compose up
```

Server on http://localhost:5000

- [Use a Kubernertes cluster](./k8s/README.md#usage)

- [Use Istio service meshing](./istio/README.md#Usage)

- [Use monitoring](./monitoring/README.md#Usage)

### Test

- [Test userapi](./userapi/README.md#testing)

## Platforms & Tools

- [Node.js](https://nodejs.org/en/)
- [Github Action](https://github.com/polocto/Project-SI/actions)
- [Heroku](https://project-dev-ops.herokuapp.com/)
- [Vagrant _(ubuntu/trusty64)_](https://www.vagrantup.com/)
    - [Ansible](https://docs.ansible.com/ansible/latest/index.html)
- [Docker Hub](https://hub.docker.com)
- [Kubernetes](https://kubernetes.io/)
- [Istio](https://istio.io/)
    - [Kiali](https://kiali.io/)
    - Prometheus


## Bonus

- Web App
    - CRUD
    - Storage in redis database
    - Develop more [test](/userapi/test) (22 in total)
- CI/CD
    - [Build and Push docker image on docker hub](/.github/workflows/main.yaml)
- Kubernetes
    - Used [configmap](/k8s/config-map.yaml) to configure the add deployment

## Credits

Paul SADE & Mathis CAMARD

## License

None
