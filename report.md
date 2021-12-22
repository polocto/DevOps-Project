# Report / screenshots

## CI/CD

- [Github action](https://github.com/polocto/Project-SI/actions), if test valid deploy on heroku and dockerhub
![Github Action](/img/ci-cd-github-action.png)
- [Image on dockerhub](https://hub.docker.com/repository/docker/polocto/projet-devops)
![Docker Deployment](/img/ci-cd-image-docker.png)
- [Deployment on heroku](https://dashboard.heroku.com/apps)
![Heroku Deployment](/img/heroku.png)

## Vagrant result:

![Vagrant Ansible](/img/vagrantAnsible.png)
- We can see that every thing runs and is well installed with healthcheck result provide at the bottom of the screen shot

![Vagrant result run in browser](/img/vagrantConnectionRedis.png)

- We can see that it is well connected to redis and that there is no user serg in the database

## Istio result:

![KialiOverview](/img/kialiOverw.png)
- here we can see the two namespace of the project. The namespace of our application and its microservices named default and the namespace of the istio-system services.

![KialiApp](/img/App.png)
- here we have the two applications of our project named project-devops & redis-deployment. We can also see the health of the applications.

![KialiGraph](/img/graph.png)
- Here we have the routing graph of our applications with kiali. We can see the routing with the two virtual services and the request shiffting. The firsts link between unknown and v1/v2 is http connexion and between v1/v2 and redis deployment is TCP connexion.

- Here we have some informations from kiali tool in the workloads, services and istio-config of our application and there health status:

![KialiWorkload](/img/Wkld.png)
![kialiSvc](/img/Svc.png)
![kialiIstioConf](/img/istioConfig.png)

## Monitoring result:

### Prometheus

- Here we have some informations displaid by prometheus on our application.

![Run&Build](/img/Run&BuildInfo.png)

Status :

![Status](/img/Status.png)

Targets :

![Targets](/img/TargetsProm.png)

Services discovery :

![Services discovery](/img/SvcDiscovery.png)

### Grafana :

Control panel :

![istioControlPanel](/img/istioControlPanel.png)

Performance panel :

![istioPerformance](/img/istioPerformance.png)

Alert :

- here we see how to create an alert and trigger it with grafana by sending an e-mail

![Alertpannel](/img/Alertpannel.png)

![TestRuleAlert](/img/TestRuleAlert.png)

![AlertNotCre](/img/AlertNotCre.png)

![ChannelCreation](/img/ChannelCreation.png)
