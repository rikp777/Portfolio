---
  id:
  title: Privacy in software applications
  description: Privacy for the user while developing software
  duration: 1 whole day
  image: /images/projects/minor/osint/main.png
  tech:
    - name: software-engineering
    - name: privacy
  category:
    - name: minor
    - name: cyber
    - name: body of knowledge
  author:
    name: Rik Peeters
    image: /images/me.jpg
    social:
      twitter: rikp777
  slug: minor_privacy
  createdAt: 2021-12-07
---

# Methodologies and practices of secure development 

## Privacy by design 

When using the Privacy by Design principle, privacy is considered from the beginning of the design of an information system. The emphasis on privacy is maintained throughout the system's lifespan. The goal is to improve personal data security. This can already be accomplished by considering the necessity of storage: which data are truly required and which are not? Data must be considered throughout its entire life cycle, including storage, modification, and deletion. Organizational aspects, in addition to technical aspects, play a role.

Privacy by Design is often mentioned in the same breath as Privacy by Default. They are related concepts; Privacy by Default refers to the default settings of a program, website, service or device.
Privacy by Default and Privacy by Design are enshrined as concepts in Article 25 of the Algemene Verordening Gegevensbescherming (AVG).

### Proactive not Reactive; Preventative not Remedial

The Privacy by Design approach is characterized by proactive rather than reactive measures. It anticipates and prevents privacy invasive events before they happen. PbD does not wait for privacy risks to materialize, nor does it offer remedies for resolving privacy infractions once they have occurred − it aims to prevent them from occurring. In short, Privacy by Design comes before-the-fact, not after.

### Privacy as the Default

We can all be certain of one thing − the default rules! Privacy by Design seeks to deliver the maximum degree of privacy by ensuring that personal data are automatically protected in any given IT system or business practice. If an individual does nothing, their privacy still remains intact. No action is required on the part of the individual to protect their privacy − it is built into the system, by default.

### Privacy Embedded into Design

Privacy by Design is embedded into the design and architecture of IT systems and business practices. It is not bolted on as an add-on, after the fact. The result is that privacy becomes an essential component of the core functionality being delivered. Privacy is integral to the system, without diminishing functionality

### Full Functionality – Positive-Sum, not Zero-Sum

Privacy by Design seeks to accommodate all legitimate interests and objectives in a positive-sum “winwin” manner, not through a dated, zero-sum approach, where unnecessary trade-offs are made. Privacy by Design avoids the pretence of false dichotomies, such as privacy vs. security, demonstrating that it is possible, and far more desirable, to have both.

### End-to-End Security – Lifecycle Protection

Privacy by Design, having been embedded into the system prior to the first element of information being collected, extends securely throughout the entire lifecycle of the data involved — strong security measures are essential to privacy, from start to finish. This ensures that all data are securely retained, and then securely destroyed at the end of the process, in a timely fashion. Thus, Privacy by Design ensures cradle to grave, secure lifecycle management of information, end-to-end.

### Visibility and Transparency

Privacy by Design seeks to assure all stakeholders that whatever the business practice or technology involved, it is in fact, operating according to the stated promises and objectives, subject to independent verification. Its component parts and operations remain visible and transparent, to both users and providers alike. Remember, trust but verify!

### Respect for User Privacy

Above all, Privacy by Design requires architects and operators to keep the interests of the individual uppermost by offering such measures as strong privacy defaults, appropriate notice, and empowering user-friendly options. Keep it user-centric!

### Certification mechanism 

The Personal Data Authority or a national accreditation body may accredit a certification body, to provide certificate showing that a controller or processor is operating in compliance with the AVG. This makes it clear to the user that his data is being handled securely. 

## Security by design 

Security should be a top priority for your developers as they implement your product's requirements at every stage of the software development life cycle (SDLC). We'll look at how to construct a secure SDLC in this article, so you can catch errors in requirements before they become security issues in production.

Software Development Lifecycle (SDLC) describes how software applications are built. It usually contains the following phases: 

### Requirements 

The requirements for new features are gathered from many stakeholders during this early stage. It's critical to identify any security concerns when gathering functional requirements for the new release.

### Design

This phase turns in-scope requirements into a plan for how the application should be implemented. Functional requirements define what should happen, whereas security requirements indicate what should not happen.

### Development 

When it comes to putting the idea into action and making it a reality, the focus frequently shifts to ensuring that the code is well-written from a security standpoint. Secure coding guidelines are usually created, as are code reviews to ensure that these guidelines have been followed appropriately. These code reviews can be done manually or automatically using tools like static application security testing (SAST).

### Verification 

The Verification step involves a thorough testing cycle to ensure that applications meet the original design and requirements. This is also an excellent opportunity to implement automated security testing, which can be done using a variety of technologies. Unless these tests pass, the application will not be deployed. To control verification and release, this phase frequently involves automated techniques like as CI/CD pipelines.

### Maintenance and evolution 

The story doesn't finish when the app is launched. In reality, security flaws that slipped through the holes in the application may be discovered decades after it has been deployed. These flaws can be detected in the code that developers authored, but they're also becoming more common in the underlying open-source components that make up an application. As a result, the number of "zero-days" vulnerabilities that were previously undiscovered but were discovered in production by the application's maintainers increases.

## Secure Development Lifecycle (SDL)

In its simplest form, the SDL is a process that standardizes security best practices across a range of products and/or applications. It captures industry-standard security activities, packaging them so they may be easily implemented. The software development lifecycle consists of several phases, which I will explain in more detail below.

### The problems the SDL solves

The lack of a standard approach to securing products causes problems. For one thing, vulnerabilities run rampant in shipped products. The triage and response needed to deal with this are major resource sinks. As a result, developers spend too much time fixing code they wrote in the past and not enough focusing on the future.

The second problem is that developers tend to repeat the same security mistakes, each time expecting a different response (which is the definition of insanity). The third issue is that problems are found at release or after deployment, beyond the reasonable time when the problems could be mitigated in an inexpensive manner.

Finally, without a security standard customers have no assurance that a given product is secure. A single product considered for purchase may be one of the good ones, or it might be terrible from a security perspective. Without an SDL, there is no product security parity across the company. And without a standard process, some product teams ignore security altogether.

**Benefits of SDL**

The most important reasons to adopt SDL practices are:

1. Higher security: In SDL, continuous monitoring for vulnerabilities results in better application quality and mitigation of business risks.
2. Cost reduction: In SDL, early attention to flaws significantly reduces the effort required to detect and fix them.
3. Regulatory compliance: SDL encourages a conscientious attitude toward security-related laws and regulations. Ignoring them may result in fines and penalties, even if no sensitive data is lost.
4. Development teams get continuous training in secure coding practices.
5. Security approaches become more consistent across teams.
6. Customers trust the team more, because they see that special attention is paid to their security.
7. Internal security improves when SDL is applied to in-house software tools.

## In practice

Commonly, secure programming improvement lifecycle measures are separated into the accompanying stages:

###	Concept and planning

This stage is used to define the application concept and analyze its suitability. This includes creating a task plan, writing project requirements, and assigning HR.

### Architecture and design

This stage is used to plan an item that fits the requirements. This includes displaying the application's structure and usage scenarios, as well as identifying external components that can help speed up development. A plan report is the result of this stage.

### Implementation

This is the point at which a true application is created. Composing the application code, debugging it, and producing stable forms suitable for testing are all part of this process.

### Testing and bug fixing

This stage is used to identify and correct application errors. This includes running automated and manual tests, identifying problems, and resolving them.

### Release and maintenance

An application goes live at this time, with multiple samples running in a variety of scenarios. Finally, new forms and fixes become available, and some clients opt to redesign while others stick with the more established options.

### End of life

The term "end of life" refers to when a product's developer stops supporting it. Applications that store sensitive data may be subject to strict end-of-life guidelines.
