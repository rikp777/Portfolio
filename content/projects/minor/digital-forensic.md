---
  id: 1
  title: digital forensics
  description:
    What is digical foresics and what processes are involved
  duration: 1 day
  image: /images/projects/minor/digital-forensics/main.jpg
  tech:
    - name: digital forensics
  category:
    - name: minor
    - name: cyber
    - name: body of knowledge
  author:
    name: Rik Peeters
    image: /images/me.jpg
    social:
      twitter: rikp777
  slug: minor_digital-forensic
---

# Digital Forensics
Digital forensics is a branch of forensic science that focuses on the recovery and investigation of material found on digital devices and related to cybercrime. Digital forensics is the process of uncovering and interpreting electronic data. The goal of the process is to preserve evidence in its most original form while conducting a structured investigation by collecting, identifying and validating the digital information to reconstruct past events. The context is usually the use of data in a court of law, although digital forensics can be used in other cases as well.

## Forensic methodologies and practices
Forensic investigations always go through set steps. 
In some cases, not all steps are necessary to capture evidence. Then simply validation and identification is enough of a dataset.
The main elements of computer forensics are listed below:

- The use of scientific method
- Collection and preservation of data
- Validation
- Identification
- Analysis and interpretation (machine learning / statistics)
- Documentation and presentation

Different law enforcement agencies can only work together effectively if they communicate clearly with each other. The investigative team must keep the whole picture in mind and be clear when referring to specific components. It is fundamental that everyone understands whether a case only needs to be prepared, extracted and identified, or whether it also needs to be analyzed.

## Preparation/Extraction
When the investigator's forensic platform is complete, he or she duplicates the forensic data provided in the request and verifies its integrity. This process assumes that law enforcement has already obtained the data through an appropriate legal process and created a forensic image.

After the investigators have verified the integrity of the data to be analyzed, they develop a plan to extract the data. They organize and refine the forensic request into questions they understand and can answer. The forensic tools that allow them to answer these questions are selected. 
Investigators generally have preliminary ideas about what to look for based on the request. 
They add these to a "Search Lead List," which is a running list of requested items. For example, 
the request may have as a guideline "search for child pornography." Investigators explicitly create a list of leads to help focus the investigation. As they develop new leads, they add them to the list, and as they exhaust the leads, they mark them as "processed" or "done."

So before I begin extracting the given I have a goal in mind. 

## Identification
Investigators shall repeat the identification process for each item on the extracted list.
If an investigator finds an item that is incriminating but beyond the scope of the original search warrant, the investigator should immediately cease all activity, notify the appropriate persons, including the requester, and await further instructions. For example, law enforcement may seize a computer for evidence of tax fraud, but the investigator may find an image of child pornography.

## Analysis 
In the analysis phase, the researchers connect all the items and paint a complete picture for the applicant. For each item on the list of relevant data, the researchers answer questions such as who, what, when, where, and how. They try to explain which user or application created, edited, received or sent each item, and how it was originally created. Researchers also explain where they found it. Most importantly, they explain why all this information is important and what it means to the case.

## Documenting and Reporting

Computer forensic investigators must keep an accurate record of all activity related to the investigation, including all methods used for testing system functionality and retrieving, copying, and storing data, as well as all actions taken to acquire, examine, and assess evidence, in addition to fully documenting information related to hardware and software specs. This not only demonstrates how the integrity of user data has been kept, but it also confirms that all parties have followed relevant policies and processes. Because the entire procedure is designed to collect facts that may be used as evidence in a court of law, an investigator's inability to accurately document his or her findings is a major red flag.



## History 

Looking back on the history of digital forensics, it's clear that law enforcement at the time had just a rudimentary understanding of how to apply digital forensic procedures. During the 1970s and 1980s, however, the forensics team was largely made up of members of federal law enforcement organizations with a background in computers. Because most paperwork is done digitally, the first area of concern for law enforcement was data storage. Seizing, keeping, and examining the documents was undeniably a time-consuming task for the authorities. In response to this, the FBI developed the Magnet Media program, the first formal digital forensics program, in 1984.

Other strategies for detecting cybercriminals who break into computer systems were developed as a result. The first honeypot trap was invented in 1986 by Cliff Stoll, a Unix System Administrator at Lawrence Berkeley National Laboratory. Due to the proliferation of child pornography on the internet, digital forensics grew in popularity.

## In action

As you can imagine, ethics are also very important within this profession. You have to work independently without prejudice. For this, you must therefore obtain a certificate to ensure your ethical conduct. Having a degree in criminal justice, psychology, engineering, biology or any other field with no certificates does not mean you’ll never get a job.

### Certifications

Some well-known forensic certifications include the following:

- CISA – Certified Information Systems Auditor
- CISSP – Certified Information Systems Security Professional
- CCE – Certified Computer Examiner
- CFCE – Certified Forensic Computer Examiner
- GIAC – Global Information Assurance Certification
  - GIAC Certified Forensic Analyst (GCFA)
  - GIAC Advanced Smartphone Forensics (GASF)
  - GIAC Certified Forensic Examiner (GCFE)
  - GIAC Network Forensic Analyst (GNFA)
  - GIAC Reverse Engineering Malware (GREM)
  - GIAC Security Essentials (GSEC)

Forensic Software Vendor Training and Certificates can also be beneficial.  Some examples include:

- ACE – AccessData Certified Examiner
- BelkaCE – Belkasoft
- EnCE – EnCase Certified Engineer
- Cellebrite
  - Cellebrite Certified Operator (CCO)
  - Cellebrite Certified Physical Analyst (CCPA)
  - Cellebrite Certified Mobile Examiner (CCME)
- XRY – XRY Certification
- X-PERT – X-Ways Professional in Evidence Recovery Techniques
- BlackBag Technologies
  - Certified Blacklight Examiner (CBE)
  - Certified Mobilyze Operator (CMO)
  - Mac and iOS Certified Forensic Examiner (MICFE)

Other certificates you may also consider, that provide a more general computer foundation are:

- CompTIA A+
- CompTIA Network+
- CompTIA Security+

Certification courses are typically short courses, often less than 10 classes.

Each certification course has their own requirements and can include professional time spent in a forensics related field.

It’s best to research each certification you’re planning to take to ensure you meet the requirements before deciding to take it.

### Tooling

In the 1990s, digital investigations were conducted utilizing live analysis, and it was usual practice to review digital media using the device in question. With the growing use of devices capable of storing massive volumes of data, live analysis became inefficient. Digital forensic tools were eventually developed to examine data on a device without causing it any harm. Digital forensic tools are currently divided into three categories: open source digital forensic tools, hardware digital forensic tools, and others. Most common tooling today are the following

- Sleuth Kit (+Autopsy)
  - Sleuth Kit (+Autopsy) is a Windows-based utility program that simplifies computer forensic analysis. You may use this tool to inspect your hard disk and smartphone.
- CAINE
  - CAINE is an Ubuntu-based program that provides a graphical interface to a complete forensic environment. As a module, this tool can be integrated into current software solutions. It creates a chronology from RAM on its own.
- PALADIN
  - CAINE is an Ubuntu-based program that provides a graphical interface to a complete forensic environment. As a module, this tool can be integrated into current software solutions. It creates a chronology from RAM on its own.
- EnCase
  - Encase is an application that helps you to recover evidence from hard drives. It allows you to conduct an in-depth analysis of files to collect proof like documents, pictures, etc.
- Wireshark
  - Wireshark is a tool that analyzes a network packet. It can be used to for network testing and troubleshooting. This tool helps you to check different traffic going through your computer system.
- ProDiscover Forensic
  - ProDiscover Forensic is a computer security program that helps you to find all of the data on a hard drive. It can safeguard evidence and generate high-quality reports for use in judicial proceedings. EXIF (Exchangeable Image File Format) information can be extracted from JPEG files with this utility.

But for each solution, you can also find lots of scripts online that were created for specific purposes and made public by the analyst for others to use in their research as well 

Here are the main types of digital forensic tools:

- Disk Forensic Tools
  - SSD
  - Hard drive 
- Network Forensic Tools
- Wireless Forensic Tools
- Database Forensic Tools
- Malware Forensic Tools
- Email Forensic Tools
- Memory Forensic Tools
- Mobile Phone Forensic Tools

As you can see, there are a whole bunch of subdomains that forensic analysis can be done on. Each domain has its own tooling to achieve the desired result. 

***
Resource: 
- [computer forensics digital forensic analysis methodology](https://www.crime-scene-investigator.net/computer-forensics-digital-forensic-analysis-methodology.html)

- [online.norwich.edu](https://online.norwich.edu/academic-programs/resources/5-steps-for-conducting-computer-forensics-investigations)
- [encouncil.org](https://www.eccouncil.org/what-is-digital-forensics/)

