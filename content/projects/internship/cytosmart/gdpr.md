---
  id: 
  title: GDPR
  description:
    summary about the implementation of the GDPR-CFR legislation that I have applied within the company CytoSMART.
  duration: 1 day
  image: /images/projects/internship/cytosmart/gdpr.jfif
  tech:
    - name: gdpr
    - name: annex 11
  category:
    - name: minor
    - name: cyber
    - name: body of knowledge
    - name: software-engineering
    - name: internship
  author:
    name: Rik Peeters
    image: /images/me.jpg
    social:
      twitter: rikp777
  slug: internship_cytosmart_gdpr
---

# General Data Protection Regulation (GDPR) and Annex 11
Annex 11 is the FDA 21 CFR part 11 European equivalent.

Title 21 Part 11 is the portion of Title 21 of the Code of Federal Regulations that establishes the U.S. Electronic Records and Electronic Signatures (ERES) regulations. Part 11, as it is commonly referred to, defines the criteria under which electronic records and electronic signatures are considered reliable and equivalent to paper documents.

Internship [@CytoSMART](https://cytosmart.com)

This report is about the internship I did at CytoSMART.
CytoSMART is a young company whose aim is to offer products (equipment) for biomedical laboratories in as large a market as possible which is worldwide. This company therefore wants to take into account specific requirements and restrictions associated with sales on the international market as early as the development phase. For the development of equipment and software in the pharmaceutical industry, legislation has been created that sets criteria that a device/software must meet. This legislation is called FDA CFR 21 Part 11.

CytoSMART has hired a total of 3 trainees,  which have been divided into different parts within the processing of the CFR 21 Part 11 legislation. The components are:  the Audit trail, the electronic signatures and the approval flow/user management. My part in this project will be the application of the  ”Audit trail”part, as stated in the FDA requirements CFR 21 Part 11, to the current software. The application must have a setting so that it can function according to the standards as described in legislation CFR 21 Part 11, but this setting must also be able to be turned off. The software had to be developed to be able to switch between these settings, on and off.

The technology used for the front-end consists of Vue.js with a back-end written in C#(ASP.NET), both of which have been made uniform to this  legislation. Previously, almost nothing had been adapted to the application, so that it would not comply with these guidelines as required by CytoSMART. However, after investigation, it was found that the software still met a number of these requirements.

The audit trail is incorporated in a visual GUI dashboard that is clear and legible for the user, with various functionalities such as export to a PDF format.  It is also possible to sort on different  levels. These levels can be subdivided into:  ”Company”,  ”User”, ”Entity" and ”Action”.

The audit trail has been approved by CytoSMART and will be used in the future by various researchers for cell experiments. This was evident from the meeting that took place during the final delivery, the colleagues were also enthusiastic. In addition, the cooperation with the other trainees also went very well and we put together a lot of functionalities so that together they form a functional whole.

I would advise CytoSMART to also implement the CFR functionalities for the other devices so that they can also offer them in the US. In addition, they can of course easily usethe audit trail module that I developed, which is very generic and modular in structure.

## Research

Based on the purpose of the project, a key research question can be created. This research question is as follows:

```text 
How can I accomplish the Audit-Trail within the application, and thus have it meet the requirements of the FDA as stated in CFR b?
```

To answer the research question, I explored a few sub-topics in more detail. Important guideline in this, will be the steps that other companies in a similar path have already taken. This is because the aforementioned FDA requirements have been in place for some time. Therefore, I took a closer look at comparable companies that already have access to the market in the United States and already meet the requirements. It is therefore important to gain insight into how these companies have completed the validation process and thus obtained their approval. This therefore leads to the asking of the following questions:

A brief summary of the research topics::

- Implementation companies in the same sector
- Audit trail structure
- Efficiency database structure
- Visualization
- Form persistence
- Retention period
- Prerequisites
- Whole Flow

To clarify the research topics, a description has been made for each topic, which zooms in even further. These research topics are further explained in the Process phases of the project. Also, the research topics are elaborated in the appendix "research's document" Research. From these findings, the first process phases within CytoSMART were started. These can be read in phases.

### Technologies
The following technologies will be used to complete this project:

- Vue
- c# (CSharp)
- Rest Api - maturity-level 
- Microsoft SQL 
- ASP.NET

## Conclusion

During my internship, I built the audit trail module for CytoSMART. This was developed in the C# language with the framework ASP.NET.

The audit trail has been found to be well implemented by CytoSMART and will be used by different researchers for cell experiments in the future. This was shown in the meeting that took place at the final sprint delivery, also the colleagues were enthusiastic. In addition, the collaboration with the other interns also went very well and we tuned many functionalities together for the best integration so that together it forms a functional whole.

I would advise CytoSMART to start implementing the CFR functionalities for the other devices as well so they can start offering them in the US. In doing so, of course, they can easily use the audit trail module I developed which is very generic and modular. I would also advise to further expand the visual functionalities and the filters and I would advise to make an export function that makes it possible to use this audit trail data for example in Microsoft Excel. 

## Evaluation

The collaboration/collaboration within CytoSMART was good. Received a lot of positive feedback from the entire CytoSMART team. The services, which were rendered were found to be positive. Also colleagues and fellow trainees were very satisfied with my cooperation, communication and delivered work processes. However, dealing with colleagues/trainees of different nationalities and thus different cultural backgrounds took some getting used to in the beginning. During my internship period my enthusiasm with regard to achieving my learning goal clearly increased and resulted in a positive contribution. However, I will have to apply myself even more to a better control of Javascript. Also the commercial side will get more attention in future internships. 

During my internship period, my knowledge in the field of C# ASP.NET has improved; also in the field of front-end Vue.js with extensions like VueX. The experience, which I have gained, is very different than at the Fontys classes, because here you have to start applying the material learned at school and that is often different in practice than in theory. In practice, you have to think more along with the customer and then look for a solution specifically to the wishes of the customer. This internship at CytoSMART turned out to be very important for my future.

I experienced the internship at CytoSMART as particularly instructive, interesting but also completely new due to the terminology in medical ICT and English. The elaboration of the project plan was successful and also the processes were very instructive. The working language English was very instructive for me due to the many medical English designations in word and writing. Also, this internship was a challenge on multiple fronts and I learned not to be afraid of new processes namely medical ICT and to express them in the English language. I have experienced a lot of cooperation/commitment and feedback from the whole CytoSMART team of which I would like to thank all employees very much. I hope to find enough challenge in a new project at my next internship and to become even more professional by being involved even more in commerce. I also want to thank my first assessor for his guidance, tips and commitment. I got to know my assessor as a good supervisor, who always knew how to appreciate me on my minus but also my plus points. The Corona virus in particular had a great impact on my internship. On Mondays I could go to CytoSMART. The other days everything went online. But I could always turn to my colleagues and fellow interns online. Because of the Coronavirus, it was sometimes difficult to communicate but in the end it was a very valuable learning period. 2020 with COVID-19 was a year that we all will not soon forget. It was a special year full of challenging situations. Nevertheless, together we made the very best of it.  Together we showed decisiveness and flexibility. And we can be proud of that.

In any case, I want to continue studying and training in ICT Software, because that is where my heart and interests lie, and therefore also my motivation to continue studying in this field.
