---
  title: OSINT
  description: OSINT
  duration: 2 weeks
  image: /images/projects/minor/osint/main.png
  tech:
    - name: OSINT
    - name: CTF
  category: 
    - name: minor
    - name: cyber
    - name: body of knowledge 
  author:
    name: Rik Peeters
    image: /images/me.jpg
    social: 
      twitter: rikp777
  slug: minor_OSINT
  createdAt: 2021-12-07
---

# OSINT

During this semester, we as a group have the project topic OSINT. 

OSIN stands for Open Source Intelligence and includes the method of collecting information and intelligence through public sources.

At Fontys, government trainees and students have to learn what OSINT entails. To keep this subject interesting, a fun and interactive way to demonstrate OSINT must be found. One way to accomplish this is a CTF related to OSINT. CTF stands for "Capture the flag" this is a fun and interactive way to accomplish this.  

This topic gives more insight what OSINT is and what applications it has this seems to me personally very interesting therefore I would like to learn more about this. 

OSINT belongs to the field of Cyber. 

For the project we are going to set up a CTF framework. This framework makes it possible to achieve goals in a fun way with team members. 
This framework will incorporate all the challenges that our team has developed this semester. I am going to meet this learning goal by creating fun challenges and working out ethics. All challenges can be found in the CTF challenge platform. To create this platform we as a group used the open source framework CTFd. CTFd is a Capture The Flag framework focusing on ease of use and customizability. It comes with everything you need to run a CTF and it's easy to customize with plugins and themes. Within this plaftorm I created most of the challenges. These challenges vary from very easy to very difficult. because it seemed to me personally very nice to keep a standard theme I proposed this to the group. They agreed to this. Therefore, we chose the theme alien invasion. This also has the advantage that with this we are always politically correct because we do not use names.

# Article (How to set up a ctf challenge )

In a CTF, the goal is to solve different tasks (challenges) of different categories. Often by solving the challenges you can gain access to a server, where you can then find a certain text, which is called flag. Hence the name 'capture the flag'. You can then upload this flag as proof that you have passed the challenge. This will earn you points for yourself or your team.

But making a challenge is a profession and there are several elements to consider for a successful platform. Below I highlight a few of these elements these are drawn up on personal experience.  

## Theme 

To be politically correct and not make biased judgments, it is helpful to keep a theme in your challenges. A nice theme could be alien invasion. You can hang a nice story on this with some humor that makes the user feel completely in his element. In doing so, you exclude any racism and other issues that may come to the surface.  

## Fact checking 

When you develop a ctf challenge it is important to make sure that what you have created actually works and is true. For example, in a challenge for the group project I had made a challenge the question read as follows:

```  
It’s 12:44pm. You get an SMS from our red team manager - “Hey dude, we have a situation... Call me fast!”

You fasten your hoodie and dial the number as you step out of bed and into the city's sleepy lights. – "Hello there. So, according to a crime-stoppers report, a passerby witnessed an alien attempting to implant awareness into a... Yes, this is going to sound weird... horse. I said something along the lines of 'a giant robot fled quickly' but I can't recall what it was. On his trip to Neuse River middle school, he reported he was only 400 meters beyond the Buffaloe express C. Store station in Raleigh NC. It's off to the side of the road. Find the robot and the house that it was closest to. We can issue an All-Points Bulletin once you've completed that."
```

In my question I had made up a robot that was on the run in the question it said that the robot was last seen 400 meters away from a store. Only when the challenge was tested by our test team the robot was not found. The reason why was that the robot had already fled 480 meters away and this was not taken into account. Therefore, the question was too unclear and will be tested before it is used in production. 

## Gamification 

Conveying Osint in a way that is both instructive and interactive. With this we bring the concept of gamification to the foreground. 

Simply put, **gamification is the incorporation of game design elements into product** in this case we are gameifying OSINT with a ctf platform. 

Addictive games keep users engaged by getting them to complete tasks that resonate with their goals and intrinsic motivations. Gamification applies this same strategy to non-game products by figuring out the things that trigger users to take action and rewarding them with features like point systems, badges, or even just simple progress indicators. The result is a product that motivates users and keeps them coming back for more and combined with an education element it is for most people the best way to learn. Gamification can be a powerful strategy, but there's a delicate balance between engagement and frustration. Instead of focusing on their users' needs, some teams get caught up in the novelty of gaming, losing sight of the true purpose of their product. The result is an experience that has all the obvious game elements like a simple point counter, badges, and leaderboards, but overlooks the [game mechanics](https://en.wikipedia.org/wiki/Game_mechanics)—the core of successful gamification—making the experience feel trivial and gimmicky.

Gamification is becoming a ubiquitous part of product design. Done correctly, it can be an effective way to keep your users engaged and make accomplishing *necessary tasks* more enjoyable. When done poorly, gamification can be distracting and gimmicky. 

## Flag syntax 

What certainly must be taken into account is the syntax of your flag, you must think of the date and what format it should take for example day-month-year. It sounds very simple but even this is not sufficient so it is best to write both so "16-12-2021" = "day-month-year". Another example is the notation of coordinates here with you clearly indicate which notation is valid and how much you may round off on the comma for example. 

## Conclusion 

There are a lot of elements to consider when developing a ctf challenge, both in terms of motivation for the user, but also in terms of the correct design of your questions and the syntax. But with these things in mind, it is definitely possible to develop a nice flatform with complex challenges.







