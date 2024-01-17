# Load-balancer
## Implemented a practical load balancer
**To run it on your local system follow -**
**npm init -y**
**npm i express**
**docker build -t server-app:1.0.0 .**
**docker build -t gateway:1.0.0 .**

## Running and Testing
**Run docker container run -d -p 4001:4000 --name server-01 -e "server=one" server-app:1.0.0**
**docker container run -d -p 4002:4000 --name server-02 -e "server=two" server-app:1.0.0**
**docker container run -d -p 4003:4000 --name server-03 -e "server=three" server-app:1.0.0**
**till the no. of servers you want to redirect to**

## Now We have three instances running if you open the browser and visit 
**http://localhost:4001 , http://localhost:4002 and http://localhost:4003 you will see the following output**
<img src="https://tech-hour.com/uploads/images/1604263477440-servers.png" />

## Finally, we will run the Nginx container as a load balancer by running the following command docker container run -p 4000:80 -d gateway:1.0.0
## Now visit http://localhost:4000 and refresh the page many times each time request will redirect to a different server and this the implmentation of load balance.
