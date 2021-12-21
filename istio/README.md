# Deploy the application with Istio

## Installation

- Start minikube if it not running

```
 minikube start --driver=docker
```

- In your project, download Istio & add the istioctl client to your path

```
 curl -L https://istio.io/downloadIstio | sh -
 cd istio-1.12.1
 export PATH=$PWD/bin:$PATH
 cd ../
```

- Install Istio to your project & add a namespace label to instruct Istio to automatically inject

```
 istioctl install --set profile=demo -y
 kubectl label namespace default istio-injection=enabled
```

Result :
![InstallIstioResult](/img/IstioInstallresult.png)

## Usage

- Deploy the application

```
 kubectl apply -f istio/kubernetes-manifest.yaml
 kubectl apply -f istio/gateway.yaml
 kubectl apply -f istio/virtual-service-all-v1.yaml
```

![DeployementResult](/img/servicesVSGate.png)

- Wait that all the pods run & check the services

```
 kubectl get pod
 kubectl get services
```

Result:

![GetPod](/img/podSvc.png)

- Determining the ingress IP and ports

```
 export INGRESS_PORT=$(kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.spec.ports[?(@.name=="http2")].nodePort}')

 export SECURE_INGRESS_PORT=$(kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.spec.ports[?(@.name=="https")].nodePort}')

 export INGRESS_HOST=$(minikube ip)

```

- Run this line in an _OTHER_ terminal

```
 minikube tunnel
```

- In the first terminal, to access to Kiali

```
 export GATEWAY_URL=$INGRESS_HOST:$INGRESS_PORT
 kubectl apply -f istio-1.12.1/samples/addons
 kubectl rollout status deployment/kiali -n istio-system
 istioctl dashboard kiali
```

- Send request on this Url to see the traffic in Kiali

```
http://192.168.49.2:30000/
```

