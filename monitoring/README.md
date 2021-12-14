# Installation

Prometheus :

```
kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.12/samples/addons/prometheus.yaml
```

Grafana :

```
kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.12/samples/addons/grafana.yaml
```

# Usage

- Follow the steps of istio first

## Use Prometheus :

```
kubectl port-forward svc/prometheus -n istio-system 9090
```

- Go to 127.0.0.1/9090

![Run&Build](/img/Run&BuildInfo.png)

Status :

![Status](/img/Status.png)

Targets :

![Targets](/img/TargetsProm.png)

Services discovery :

![Services discovery](/img/SvcDiscovery.png)

## Use Grafana :

```
kubectl port-forward svc/grafana -n istio-system 3000
```

- Go to 127.0.0.1/3000

Control panel :

![istioControlPanel](/img/istioControlPanel.png)

Performance panel :

![istioPerformance](/img/istioPerformance.png)

Alert :

![Alertpannel](/img/Alertpannel.png)

![TestRuleAlert](/img/TestRuleAlert.png)

![AlertNotCre](/img/AlertNotCre.png)

![ChannelCreation](/img/ChannelCreation.png)
