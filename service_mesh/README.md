# Deploy the application with Istio

- Start minikube if it not running

```
 minikube start --driver=docker
```

- In your project, download Istio & add the istioctl client to your path

```
 curl -L https://istio.io/downloadIstio | sh -
 cd istio-1.12.0
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

- Deploy the application

```
 kubectl apply -f kubernetes-manifest.yaml
```

![DeployementResult](/img/DeployementResult.png)

- Wait that all the pods run & check the services

```
 kubectl get pod
 kubectl get services
```

Result:
![GetPod](/img/GetPodResult.png)

![GetServices](/img/GetSvcResult.png)

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
 kubectl apply -f samples/addons
 kubectl rollout status deployment/kiali -n istio-system
 istioctl dashboard kiali
```
