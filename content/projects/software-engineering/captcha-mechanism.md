---
  id:
  title: Captcha Mechanism
  description:
     What are they and how are they used 
  duration: 1 day
  image: /images/projects/other/time-management.jpg
  tech:
    - name: captcha
  category:
    - name: body of knowledge
    - name: Software engineering
    - name: cyber
    - name: minor
  author:
    name: Rik Peeters
    image: /images/me.jpg
    social:
      twitter: rikp777
  slug: software-engineering_captcha-mechanism
---

# Captcha Mechanism 

What exactly is a captcha? Why does the owner of the site want you to fill in such a captcha? The answer is actually quite simple: you have to prove that you are a human being!

Scripts, which we also call bots or robots, are constantly scouring the Internet. Some of them provide information about a website to a search engine. But there are also bots that look for forms and fill them automatically with all kinds of garbage.

To prevent this robot/bot from simply clicking the submit button, a captcha is placed in the middle. This must first be completed correctly before the form can be submitted.

Some examples of when to use a Captcha:

- **Maintaining poll accuracy**
- **Limiting registration for services**
- **Preventing ticket inflation**
- **Preventing false comments**

CAPTCHA stands for: 

"Completely Automated Public Turing test to tell Computers and Humans Apart."

## Types

There are several captchas that can be implemented now a day such as:

### reCAPTCHA v3

reCAPTCHA v3 allows you to verify if an interaction is legitimate without any user interaction. It is a pure JavaScript API returning a score, giving you the ability to take action in the context of your site: for instance requiring additional factors of authentication, sending a post to moderation, or throttling bots that may be scraping content.

### reCAPTCHA (v2)

#### Visible 

The "I'm not a robot" Checkbox requires the user to click a checkbox indicating the user is not a robot. This will either pass the user immediately (with No CAPTCHA) or challenge them to validate whether or not they are human. This is the simplest option to integrate with and only requires two lines of HTML to render the checkbox.

#### Invisible 

The invisible reCAPTCHA badge does not require the user to click on a checkbox, instead it is invoked directly when the user clicks on an existing button on your site or can be invoked via a JavaScript API call. The integration requires a JavaScript callback when reCAPTCHA verification is complete. By default only the most suspicious traffic will be prompted to solve a captcha. To alter this behavior edit your site security preference under advanced settings.

### Visual captchas (v1)

In many cases the captchas are based on text, number combinations and characters that are difficult to recognize. A capcha is build a way that one user will never get the same captcha twice. There are also captchas that ask the user questions there are multiple types of question but most of them are based on image recognition. For example click all taxi's in the box below. Some characteristics are:

- Letters and numbers are usually not nicely juxtaposed, but scattered across the screen.
- The characters are not nicely straight, but rotated.
- Different fonts (typefaces) are used.
- A background image or different colors are used; almost never 1 color.

v1 is not supported anymore since 2018 despite that many site still have this implementation. This implementation of captchas also ranked as most irritating among people. That's why there are new versions today that thoroughly address this problem.

## Implementation 

The first step is the simplest. Go to the [reCAPTCHA homepage ](https://www.google.com/recaptcha/intro/index.html)and click on the *Get reCAPTCHA* button at the top of the screen. On the next screen, you’ll find a prompt to enter a label and domain for your site, so you can identify it among your reCAPTCHA properties.

Populate both fields, click on *Register*, and you’re done. On the next screen, you’ll receive both a *Site Key* and a *Secret Key*.



#### Front-end

To use reCaptcha I followed the documentation steps, but with the help of a package from yarn to vue, **vue-recaptcha**, which provides me with a basically ready component, just implement it and capture the event from validation you can see more about it

##### Instalation

yarn add vue-recaptcha-v3
yarn add axios

In my **app.js** where I store my environment variables I will set the site key and url of my api, which in this case will be running on localhost

```javascript
import Vue from 'vue'
import { VueReCaptcha } from 'vue-recaptcha-v3'

Vue.use(VueReCaptcha, { siteKey: '<site key>' })

new Vue({
  methods: {
    async recaptcha() {
      // (optional) Wait until recaptcha has been loaded.
      await this.$recaptchaLoaded()

      // Execute reCAPTCHA with action "login".
      const token = await this.$recaptcha('login')

      // Do stuff with the received token.
      console.log(token) // Will print the token
    }
  },
  template: '<button @click="recaptcha">Execute recaptcha</button>'
})
```

Each reCAPTCHA user response token is valid for two minutes, and can only be verified *once* to prevent replay attacks. If you need a new token, you can re-run the reCAPTCHA verification.

After you get the response token, you need to verify it within two minutes with reCAPTCHA using the following API to ensure the token is valid.

##### API Request

URL: https://www.google.com/recaptcha/api/siteverify 				METHOD: POST

| OST Parameter | Description                                                  |
| :------------ | :----------------------------------------------------------- |
| secret        | Required. The shared key between your site and reCAPTCHA.    |
| response      | Required. The user response token provided by the reCAPTCHA client-side integration on your site. |
| remoteip      | Optional. The user's IP address.                             |

##### API Response 

The response is a JSON object:

```json
{
  "success": true|false,
  "challenge_ts": timestamp,  // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
  "hostname": string,         // the hostname of the site where the reCAPTCHA was solved
  "error-codes": [...]        // optional
}
```



Despite being under constant attack, CAPTCHAs remain a [wildly popular](https://trends.builtwith.com/widgets/captcha) method of protection for websites. They’re definitely not the [only defense](http://www.creativebloq.com/web-design/website-security-tips-protect-your-site-7122853) you can implement, but they are one of the simplest and most efficient.

# Evaluation 

I have come to know a lot about captcha for example i did not know that there were already newer versions available that eliminates the need to manually enter characters. This makes it much easier for the user and prevents Irritations especially with me personally. Overall I found it a very interesting topic.
