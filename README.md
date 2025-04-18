# 🚚 Last Mile Delivery Microservices (NestJS)

This is a simple microservices-based system built using **NestJS**. It simulates a last-mile logistics scenario with multiple services communicating over **TCP** and **REST APIs**.

---

## 📦 Services Overview

| Service          | Port   | Type          | Description                              |
|------------------|--------|---------------|------------------------------------------|
| Logging Service  | 3002   | REST + TCP Client | Logs and fetches rider coordinates      |
| Rider Service    | 3001   | TCP Microservice | Provides rider info via TCP requests    |
| Last Mile Service| 3000   | REST (Empty)   | Entry point (currently scaffolded)      |

---

Simulation: 
Logging service will be the one that will log the ride and fetch the coordinates of the rider. We can log coordinates of a rider in the db every n number of minutes.
Getting information about a rider will be done via TCP request to the rider service.

Rider service will be one where riders can login/signup/etc. Anything related to a ride will be implemented in this service.
