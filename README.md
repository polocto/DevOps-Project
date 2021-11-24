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
- Install docker on ubuntu
```sh
sudo apt install docker.io
sudo apt install docker-compose
```

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
