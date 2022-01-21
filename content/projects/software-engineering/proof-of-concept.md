---
  id:
  title: Proof of concept
  description:
    Prototypes 
  duration: 1 day
  image: /images/projects/minor/recaptcha.png
  tech:
    - name: prototype
  category:
    - name: body of knowledge
    - name: software-engineering
    - name: cyber
    - name: minor
  author:
    name: Rik Peeters
    image: /images/me.jpg
    social:
      twitter: rikp777
  slug: software-engineering_proof-of-concept
  createdAt: 2021-11-22
---
# Proof of concept 

## Use cases 

For my prototype I made two services in a microservice architecture.
The fist service will serve as an auth service were the user can register and login  where he then gets back a bearer token.
The second service will serve as a database acces service where I can ask for a given article id. 

- As a user I want to be able to lookup an article by the id, given authenticated.
- As a user I want to be able to register and get a verification 
- As a user I want to be able to login given I'm verified 


Both services use their own database 

An article is bases on various connections to other tables.


<table>
  <tr>
    <td>Article service</td>
    <td>Auth service</td>
    <td>Archtecture</td>
  </tr>
  <tr>
    <td>
      <a href="/images/projects/software-engineering/article.png" target="_blank" rel="some text">
        <img width="100%" src="/images/projects/software-engineering/article.png" alt="nmap"/>
      </a>
    </td>
    <td>
      <a href="/images/projects/software-engineering/authservice.png" target="_blank" rel="some text">
        <img width="100%" src="/images/projects/software-engineering/authservice.png" alt="nmap"/>
      </a>
    </td>
    <td>
      <a href="/images/projects/software-engineering/structure.png" target="_blank" rel="some text">
        <img width="100%" src="/images/projects/software-engineering/structure.png" alt="nmap"/>
      </a>
    </td>
  </tr>
</table>


both services will be running on a nginx server with the two services not knowing about each other.
However, they will both have an implementation for checking the jwt bearer token. Here, the two services share the same validation password.

## Vulnerabilities
[JWT cracking](https://blog.pentesteracademy.com/hacking-jwt-tokens-bruteforcing-weak-signing-key-jwt-cracker-5d49d34c44) and brute forcing a password are popular methods to break into a system:



<table>
  <tr>
    <td>Vulnerability</td>
    <td>Solution</td>
  </tr>
  <tr>
    <td>Brute force login when verified</td>
    <td>Debounce / save the number of incorrectly logins block on 3 for given ip / CAPTCHA </td>
  </tr>
  <tr>
    <td>Modification of bearer token and extension of rights / JWT-Cracking</td>
    <td>encrypted password</td>
  </tr>
</table>

## Links

I produced a couple proof of concepts based on project I had to develop. 
Multiple learning exercises have been added to the application for this idea. 
Because it's simply a proof of concept, a lot of features haven't been added yet. 
My application may be seen here:

Authentication & Authorization: 
- https://github.com/rikp777/RP-Flowcontrol/tree/master/authservice <br>
Api with hateoas hal: 
- https://github.com/rikp777/RP-Flowcontrol/tree/master/article <br>
Client app in Vue.js and state management: 
- https://github.com/rikp777/RP-Flowcontrol/tree/master/client <br>
