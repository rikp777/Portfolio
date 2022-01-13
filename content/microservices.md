





**Personal information** 

|                  |             |
| ---------------- | ----------- |
| Graduation route | S           |
| Student number:  | 409059      |
| Name             | Rik Peeters |

**Organization Details** 

|              |                                          |
| ------------ | ---------------------------------------- |
| Name         | Energy Essentials                        |
| Address      | Sint Maartenslaan 26, 6221 AX Maastricht |
| Phone number | 085 303 0080                             |
| Website      | https://vertex.energyessentials.nl/      |

**Company mentor**

|                  |                                                              |
| ---------------- | ------------------------------------------------------------ |
| Name             | Ralph Jansen                                                 |
| Department       | Software Engineering                                         |
| Position         | Senior developer                                             |
| Background study | Zuyd Hogeschool \| University of Applied Sciences            |
| Linked-in        | https://www.linkedin.com/in/ralph-jansen-58547716/           |
| Phone number     | +31 6 /                                                      |
| Email            | [Ralph.jansen@energyessentials.nl](mailto:Ralph.jansen@energyessentials.nl) |

**Looptijd**

|                 |                 |
| --------------- | --------------- |
| Start date      | 7 February 2022 |
| End date        | 8 July 2022     |
| ASAM Assignment | No              |

*This internship site meets all the requirements according to the block book, which has been established by the Fontys.*

# Project

## Context
To understand the essence of this project I have to explain certain concepts first: 

Monolithic architecture: everything is composed into one piece which means that components of the program are interconnected and they depent on eachother. Between components within the monolithic architecture the communication is synchronised. For example the first component needs to communicate something to the second component. This interaction needs to be finished before the second component can interacted with the third component (otherwise it will get blocked). So if one component fails, the whole architecture fails. 

Such an architecture makes it difficult to be updated every once in a while since you maybe need to change another component as well for it to work properly, since an update can cause for example such an interaction problem. 

Micro service architecture: everything is composed into small pieces. That means they are independent of one another. They serve only the functionality they are designed for. Micro services do not have to be hosted in one location. So it is obviously way more scalable than a monolithic structure. Micro services are asynchronous. To not confuse you even more I will state the example above a little different: if the third component needs to do something, it doesn't have to wait for the first component to finish its interaction with the second component. Thus they are indepent, they do not get blocked when a communication/interaction is not finished yet. 

Currently Energy Essentials has a software called Vertex which consists out of monolithic architecture. With a structure like domain driven design CQRS even coursing aggregate root. 

## Problem and opportunity analysis 

Energy Essentials wants to change the architecture of their Vertex software which is currently monolithic to cloud native architecture, also known as micro services. Their main reason to want to change the current architecture is to make the software solution more scalable. They need to change the way components interact with one another. At the moment they communicate in a synchronized matter (monolithic) but that needs to be changed into asynchronized (micro services). This transition poses different challenges. For example a micro service architecture needs a gateway that knows about all the instances which are the actual micro services. A gateway gives you as a client access to the software by redirecting you to the right service and instance, it is basically the entry point into the system. There are different frameworks for a gateway solution so my job in this project is to find the one that fits the best for this problem. To find the right one I need to do some research first.  

There are also some things to take into consideration when you want to change a software to a microservice architecture:

- security
- robustness resiliency testing
- debugging
- versioning




## Purpose of the project

The purpose of  this project became pretty clear when I visited the company for the first time in person. Yorick and Justin introduced me to their idea for my internship. They want to change their current architecture which is monolithic to a cloud native one. Their reason to do this is because cloud native is way more flexible, scalable, resilient and less prone to problems. Monolithic architecture is a little bit out dated and does not fit their current solution any longer so they would prefer a cloud native architecture. An architecture like this is better for a bigger company and ofcourse, Energy Essentials is a lot bigger now than when they started. 

To help me understand the assignment of this internship they had to explain the functionalities and architecture of the current software which is called Vertex. The main purpose is to change the current Vertex architecture (monolithic) into cloud native architecture. As stated above being cloud native has multiple advantages. If, for example, one of the modules fail for whatever reason the other modules will still keep working which means high availability for their users/customers. 

My part of the project will be mainly focused on the connections between the cloud native modules with usage of a so called message bus. For Vertex Energy Essentails wishes to make use of the message bus Kafka. Currently they use direct calls. With Kafka these direct calles are replaced by a storage which will be updated based on events (event-driven).  The structure in which the data will be saved is JSON.

## Research

To bring this project to a good end I have to do some research first. I need to get a clear view about what to do and how to achieve this. Therefore it is important learn more about microservice architecture and what is involved in a transition to a microservice like architecture. Lately, many companies are changing their architecture to microservice so I think looking at how other companies achieved this transition will give me pretty good idea about how I can make this change for Energy Essentials. 

### Research questions 

***How to convert monolithic architecture to the cloud native solution Vertex?*** *

Which cloud native solution is the best for Energy Essentials? 

What is the difference between cloud native and microservice? 

How to make the transition from synchronous to asychronous? 

What did other companies do to achieve the same goal? (look for relevant examples)



*this means everything involved in the transition to convert from monolith to microservice architecture

# Organization 

## Description 

[Energy Essentials](https://www.energyessentials.nl/) develops a software called Vertex for the energy/utilities market. Vertex is some kind of automation-platform which benefits the core businesses of the energy market. It develops tools, processes, statistical models, reports and full scale applications that efficiently supports the energy market businesses. 

## Team members  

The team consists of different departments that can provide expert support in multiple areas. If I would need support in, for example, the front-end, I could take my problems to this department. Also when I want technical information about a certain topic I can go to an expert within the company for this. All employees have graduated from both HBO or University in their specialization, and some have expanded their focus in several directions. Also, there is attentive observation of what I as a trainee am doing and they help where necessary.

## Guidance/Support

Within Energy Essentials Ralph Jansen is going to be my supervisor for this internship. He finished one study* that is ICT related which makes him a compatible supervisor. He meets the criterion given by the Fontys ICT exam board. He will be guiding me in person for a minimun of two hours a week but he will be on location as well for a minimun of 4 days a week if in any case I run into some issues, than he is there to help me out. Ralph will also be the contact person for Fontys, his information can be found at the beginning of the document. 

*Zuyd Hogeschool | University of Applied Sciences 

# Personal Development Goals 

Because my personal development is also very important, during my internship I will work on a number of personal learning goals in order to work on my professionalism. Below is a brief description of the learning objectives I want to work on.

- Improve my English. I want to see if I can write this internship report without problems since it is a little bit of a challenge for me to write it fully in English. 

- Writing in a professional matter is difficult for me so I want to improve this. I find it difficult to get my ideas on paper. Maybe this is due to my dyslexia but nevertheless I want to improve this skill because this is important for any further studies. 

- Applying techniques that I have learned during my studies at Fontys on situations in the real business world. I want to get hands-on experience with the things I learned during my studies since this is also really important once I finish my studies so I will be confident enough in my quality of work. 

- Accepting flaws within an architectural design. Sometimes when I need to work on software I get frustrated by the way it is built even if it does not interfere with what I need to work on within the software. I always have the urge to rewrite the whole architecture but this is not needed since the software works for the given solution. 



