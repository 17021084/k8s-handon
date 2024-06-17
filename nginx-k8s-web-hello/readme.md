# Simple express web server

[infra.png](infra.png)

### Commands note

```
docker build . -t <imgs repo>/<name>

# To login to the img repository

docker login  -u dotrunghg1999
# Password:  < go to docker hub -> account settings -> security -> create a Access Tokens 
docker push dotrunghg1999/k8s-web-hello

```



### Run deployment and services by yaml. 

##### Doc
link
https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/

##### Command


```bash
# Go to inside folder
cd k8s-web-hello 
kubectl apply -f deployment.yaml

# Run services
kubectl apply -f service.yaml 

# Test on host machine
minikube service <services name>



## Delete all 
kubectl delete -f deployment.yaml -f service.yaml   
```