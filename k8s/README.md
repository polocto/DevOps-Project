# Kubernetes

Explication de ce qu'est kubernetes

## Setup
1. [Install Minikube](https://minikube.sigs.k8s.io/docs/start/)

2. Start **Minikube** with:
```sh
minikube start
```

3. Verify that everything is OK with:
```sh
minikube status
```

For more uses of minikube run:
```
minikube --help
```

4. Clone the current Git repository and go to `k8s/` folder.

## Usage
1. Create the different kubernetes components with:
```sh
kubectl apply -f pv.yaml
kubectl apply -f pv-claim.yaml
kubectl apply -f redis.yaml
kubectl apply -f config-map.yaml
kubectl apply -f deployment.yaml
```
Wait until **all pods are running**. You can run this command to see the evolution: 
```sh
kubectl get pod --watch
```
To quit `crtl+C`

2. Launch your app through minikub
```sh
minikube service projet-devops-service
```

3. Look [userapi](../userapi/README.md) for more information about the app

# Authors
Paul SADE & Mathis CAMARD