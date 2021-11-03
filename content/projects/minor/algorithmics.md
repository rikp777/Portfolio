---
  id: 
  title: Algorithmics
  description:
    What are algorithmics 
  duration: 1 day
  image: /images/projects/minor/digital-forensics/main.jpg
  tech:
    - name: math
    - name: algorithmics 
  category:
    - name: minor
    - name: body of knowledge
  author:
    name: Rik Peeters
    image: /images/me.jpg
    social:
      twitter: rikp777
  slug: minor_algorithmics 
---



[Udacity - Computer science](https://classroom.udacity.com/courses/cs313)


# The basics for algorithms 
The running time of an algorithm can very with...
- The size of the input
- The content structure of the input
- The type of computer we're using 
- The amount of memory the computer has 
- How the algorithm is implemented 
- The programming language used 

Analysing simplification algorithms: 
1. Analyse without implementing 
2. Worst possible inputs 
3. Ignore unnecessary details 

Time complexity
Independent of the computer

Most essentials components for a computer model:
- [x] Working memory
- [x] Input / Output
- [x] Programming capabilities
- [] Graphics card
- [] File system
- [] Operating system
- [] ROM
- [] Mouse
- [] Monitor

## Ram (Random Access Machine)
<div class="mermaid">
graph TD;
    Input-->Ram;
    Program-->Ram;
    Ram-->Memory;
</div>
- Simple operation takes 1 time step

- Loops count as often as they run 
- Memory access is free 0 time steps 

Example one:

```
A = 1					0 steps

b = 2 * a 		 		1 step 
```

Example two:

```
s = 5 					0 steps

while s > 0			    6 steps  
	s = s -1 		    5 steps 
```

Simple operations take 1 time step - unrealistic 

We have as much memory as we need - unrealistic 

Memory access is free - unrealistic 

A unit of memory cannot hold an arbitrarily large number - realistic a

 



## Big O notation explained 
