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

The technology used for the front-end consists of Vue.js with a back-end written in C#(ASP.NET), both of which have been made uniform to this  legislation. Previously,almost nothing had been adapted to the application,  so that it would not comply with these guidelines as required by CytoSMART. However, after investigation, it was found that the software still met a number of these requirements.

The audit trail is incorporated in a visual GUI dashboard that is clear and legible for the user, with various functionalities such as export to a PDF format.  It is also possible to  sort  on  different  levels. These levels can be subdivided into:  ”Company”,  ”User”, ”Entity" and ”Action”.

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
