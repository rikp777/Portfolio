---
  id: 
  title: Algorithmics
  description:
    What are algorithmics 
  duration: 1 day
  image: /images/projects/minor/algorithm/algorithm.jpg
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
  createdAt: 2021-11-07
---



[Udacity - Computer science](https://classroom.udacity.com/courses/cs313)



my article for the cyber security minor 

# The basics for algorithms 

The simple truth is that algorithms are just ways to do things. They’re processes to solve a type of problem. These problems can be complex however, just because there are difficult algorithms doesn’t mean that all algorithms are that complex.

You can begin thinking algorithmically by breaking the problem down and building the solution up, or by breaking the problem down and building the solution up. As developers, we have a natural urge to start with the solution. However, I would recommend breaking down the problem first and then creating the solution from there.

Thinking in small steps to solve a problem takes time. But it will however help us better understand the problem. The better an algorithm is, the shorter the time is to determine that an algorithm is faster, scientists have developed the big o notation later on we go into further detail. 

So, how do you even begin to think about these problems to solve in the first place. To solve a problem you always need data. This data we call a dataset this data gives us the possibility to do an analysis. Can I solve my problem with the data as it is now or should I first prepare this data so that it meets my needs. If you have answers to these questions we can start solving our problem. To begin with, it is useful to grab a small sample of your original dataset. With this sample we are going to work out our algorithm 

Using that principle for our algorithm, if we can get it to operate correctly with one item entry and then with ten, we can probably get it to work with any number of items. You'll eventually test it with a lot more to confirm. This gradual build-up aids you in comprehending the nuances and identifying the problem's subtle traps. During this process you really get to know the data. 

The running time of an algorithm can very with...

- The size of the input
- The content structure of the input
- The type of computer we're using 
- The amount of memory the computer has 
- How the algorithm is implemented 
- The programming language used 

It often occurs that during an algorithm it is necessary to sort or search for data. For these functions several already existing algorithms / data structures have been developed. Some very well-known algorithms are:

 Searching:

- Linear search
- Binary search

Sorting:

- Insertion sort
- Selection sort
- Bubble sort
- Heapsort 
- Merge sort 
- Quick sort
- Radix Sort

Data structures elements: 

- Array n dimensional & Strings
- Boolean
- Trees 
- Tuple & Sets 
- Hashmap and hashtable
- Linked List 
- Stack and Queues 

Thankfully, you’ll probably never have to actually implement any of these algorithms as a professional developer. These days, the most efficient search and sort algorithms are provided in standard libraries that come with most languages. But still it is important for you to know how to use one and what the advantages and disadvantages are. 

## What makes a good algorithm

### Correctness

Sometimes a algothim does not give you a correct answer or the best answer because the only perfect algorithms that we know for those problems take a really, really long time. Fore example lets say we want a programm that would determine the most effiecient oute for a truck that delivers packages. staring and ending the day at a depot. It would take weeks to run to going through all the possibilites. But if we're okay with a program that would determine a route that goed but maybe not the best. Then i could run in seconds in some cases, good is good enough.

### Efficiency 	

Asymptotic analysis allows algorithms to be compared independently of a particular pogramming laungauage or handware. 

## Asymptotic notation

Let's think about the running time of an algorithm more carefully. We use a combination of two ideas. First, we determine how long the algorithm takes, in terms of the size of its input. So we think about the running time of the algorithm as a function of the size of its input. The second idea is that we focus on how fast this function grows with the input size. We call that the rate of growth of the running time. To keep things manageable, we simplify the function to distill the most important part and cast aside the less important parts.

We'll see three forms of it: **big-Θ** notation, **big-O** notation, and **big-Ω** notation.

### Big-Θ notation

When we use **big-Θ** notation, we're saying that we have an asymptotically tight bound on the running time. "Asymptotically" because it matters for only large values of **n**. "Tight bound" because we've nailed the running time to within a constant factor above and below.

### Big O notation

Big-O notation is used by programmers to compare and measure the performance of algorithms. Big O notation is one of the most fundamental tools for computer scientists to analyze the cost of an algorithm. It is a good practice for software engineers to understand in-depth as well. The big O notation gives a strong statement about the worst-case running time. We use big-Θ notation to asymptotically bound the growth of a running time to within constant factors above and below. Sometimes we want to bound from only above. Because big-O notation gives only an asymptotic upper bound, and not an asymptotically tight bound, we can make statements that at first blush seem incorrect, but are technically correct.

<a href="/images/projects/minor/algorithm/big_o_notation.jpeg" target="_blank" rel="some text">
  <img width="80%" src="/images/projects/minor/algorithm/big_o_notation.jpeg" alt="Big O noation"/>
</a>

#### O(1) has the least complexity

If you can build an algorithm that solves the problem in O(1) notation, you are likely at your best possible solution. When the complexity of a scenario exceeds O(1), we can examine it by looking for its O(1/g(n)) equivalent. For instance, O(1/n) is more difficult than O(1/n2).

#### O(log(n)) is more complex than O(1), but less complex than polynomials

Because sorting algorithms are frequently associated with divide and conquer algorithms, O(log(n)) is a desirable complexity to aim for. Because the square root function can be regarded a polynomial with an exponent of 0.5, O(log(n)) is less difficult than O(n).

#### O(nˣ) Complexity of polynomials increases as the exponent increases

For example, O(n⁵) is more complex than O(n⁴). Due to the simplicity of it.

#### O(2ⁿ) Exponentials have greater complexity than polynomials as long as the coefficients are positive multiples of n

O(2ⁿ) is more complex than O(n⁹⁹), but O(2ⁿ) is actually less complex than O(1). We generally take 2 as base for exponentials and logarithms because things tends to be binary in Computer Science, but exponents can be changed by changing the coefficients. If not specified, the base for logarithms is assumed to be 2.

you can write a book about big o notation so much and so big is the subject but for more information I would just google the topic.  

### Big-Ω (Big-Omega) notation

We might wish to declare that an algorithm takes at least a specific amount of time without specifying a maximum time. The Greek letter "omega" is used in big-Ω notation. We use big-Ω notation for **asymptotic lower bounds**, since it bounds the growth of the running time from below for large enough input sizes.

# Lets begin

This chapter will show you how to write a program that will calculate the sum of numerous numbers, or a large number of numbers. It is one of the most basic difficulties that a programmer must address, and it appears in many programs.

```c++
int main() 
{ 
    double sum = 0;
    double inputValue;
    
    System.out.println("Type in five numbers:");
    
    for (double i=1; i<=5; i++)
        {
        cin >> inputValue;
        sum = sum + inputValue;
        cout << "The current sum is: " << sum << endl;
        }
}
```







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



