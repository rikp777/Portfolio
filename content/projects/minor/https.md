---

  title: HTTPS
  description:
    What is https and how does it work.
  duration: 3 day
  image: /images/projects/minor/ethics/main.jpg
  tech:
    - name: web
    - name: https
  category:
  - name: minor
  - name: cyber
  - name: body of knowledge
  author:
    name: Rik Peeters
    image: /images/me.jpg
    social:
     twitter: rikp777
  slug: minor_https
  createdAt: 2022-01-20
---

# HTTPS

## Encryption 

Encryption is a technique for encrypting data so that only authorized parties may decipher it. It is the process of transforming human-readable plaintext to unintelligible text, also known as ciphertext, in technical terms. Encryption, to put it another way, takes legible data and makes it look random. Encryption necessitates the employment of a cryptographic key, which is a set of mathematical values agreed upon by both the sender and receiver of an encrypted communication.

Symmetric encryption and asymmetric encryption are the two primary types of encryption. Public key encryption is another name for asymmetric encryption.

There is just one key in symmetric encryption, and all communication parties utilize the same (secret) key for encryption and decryption. There are two keys in asymmetric, or public key, encryption: one is used for encryption, and the other is used for decryption.

The decryption key is kept secret (thus the name "private key"), while the encryption key is released publicly and can be used by anybody (hence the "public key" name). Asymmetric encryption is a key component of TLS (also known as SSL).

## Http with SSL/TLS

Https is just like http, but it has some SSL/TLS encryption on top of it all. It's what nowadays keeps your passwords, credit card details and general communication safe between you the user and the server your accessing. SSL has to two main purposes:

- Its verifies that you're indeed talking directly to the server that you want to communicate with.
- It ensures that only the server can read the data your communicating between each other.

A SSL connection between the client and the server is set up by using a handshake. This handshake has three goals. 

- It communicated to agree which encryption algorithm to use to communicate. 
- It communicates the secret key to be used for encryption.
- It verifies that the communication is made with the right server this happens both ways. 

Once the connection is established, both parties can use the agreed algorithm and keys to securely send messages to each other. During a handshake a couple of steps happen explained below. 

- The SSL/TSL client send a "client hello" message. This message with include cryptographic information such as the SSL or TLS version and a random byte string. It also includes the CipherSuites supported by the client. 
- The SSL/TSL server responds with a "server hello" message. With the information send from the client the server decides which CipherSuite version to use. Than the server sends a digital certificate to prove its identity to the client. The certificate contains data that includes the name of the owner, the domain, the certificate's public key, certificate validity dates.   
- The SSL/TSL client verifies the server's digital certificate. The client checks that it either implicitly trusts the certificate, or that it is verified and trusted by one of several Certificate Authorities (CAs) that it also implicitly trusts. The client than sends the random byte string that enables both the client and the server to compute the secret key to be used for encrypting data. The random byte string itself is encrypted with the server's public key. The encryption of the actual message data exchanged by the client and server will be done using a symmetric algorithm, the exact nature of which was already agreed during the Hello phase. A symmetric algorithm uses a single key for both encryption and decryption, in contrast to asymmetric algorithms that require a public/private key pair. Both parties need to agree on this single, symmetric key, a process that is accomplished securely using asymmetric encryption and the server’s public/private keys.
- The SSL/TSL Server send a "client certificate request". The client sends a random byte string encrypted with the private key of the client, together with the clients digital certificate, or a "no digital certificate alert". This alert is only a warning, but with some implementation the handshake fails if client authentication is mandatory. 
- The SSL/TSL client sends a request to the server a "finished" message. This request is encrypted with the secret key. 
- The SSL/TSL server also send a request to the client, also a "finished" message. 

<a href="/images/projects/minor/HTTPS.gif" target="_blank" rel="some text">
  <img width="80%" src="/images/projects/minor/HTTPS.gif" alt="https"/>
</a>

### Open Wifi monitoring traffic

The company of which you are using a connection to the internet from can watch every single byte of data you're exchanging between you and the server, but they can not read what you're sending and receiving. They can only monitor the amount off data you're sending/receiving. But there are workarounds to trick the user in using just a plain HTTP connection over a HTTPS. But most browsers nowaday will notify the user if done so. 

### Work moniting traffic 

If you're utilizing a machine that's managed by your organization. Remember that an implicitly trusted CA is at the heart of every chain of trust, and that your browser stores a list of these authorities. Your organization might utilize your computer to add their own self-signed certificate to this list of CAs. They might then intercept all of your HTTPS requests and deliver certificates purporting to represent the proper website, certified by their fake-CA and so trusted by your browser without no other validation.

## CipherSuite 

The use of SSL extends beyond simply installing the SSL certificate; server configurations are also important. The cipher suites are an important part of these server configurations.

A cipher suite is a technique for establishing a secure connection in accordance with the TLS protocol. The TLS protocol is based on a complex set of algorithms that are used to secure communication between a server and a user. An algorithm is a set of instructions for doing a task, where the input performs a set of outputs after a certain number of steps.

A cipher suite describes how data is sent and processed between a server and a client. A cipher suite includes, for example,

- ECDHE RSA is a key exchange algorithm that specifies how authentication takes place during the SSL handshake.
- AES 128 GCM, for example, is an encryption algorithm that specifies how the unencrypted data is sent.
- a cryptographic hashing algorithm, such as SHA-256, for encrypting unencrypted data.

# Encryption algorithms?

Some important element of a encryption standart it should be open scource so that there's no reliance on security through obscurity and to make sure that there's no backdoor weaknesses that are built into the encryption to be maliciously taken advantage of.

## Commonly used symmetric encryption algorithms include:

- AES
- 3-DES
- SNOW

Commonly used asymmetric encryption algorithms include:

- RSA
- Elliptic curve cryptography

## AES - Advanced Encryption Standard

Brief history created in 1997 because the gov had to create a newer more secure encryption algorithm. 15 people submitted their secure algorithm, one year later 1999 they had only 5 algorithms left after selection. In 2000 Rijndael was chosen as the AES. The name based on the two creaters Joan Daemen and Vincent Rijmen. 

### How does AESwork

AES is a 128 bit symmetric block cipher, that means it takes 128 bits of message and it encrypts it into 128 bits of ciphertext with some key. That key can either be 128, 192 or 256 bits, this gives varying amounts of security because the larger the key the higher the incryption. But large keys also mean larger encryption and descryption times. To put this in perspective you could have 10 million computers that are all geussing 10 trillion different keys per second and it would still take them 107 billion years to guess every possible combination. So 128 bit is already pretty secure. 

<a href="/images/projects/minor/process.png" target="_blank" rel="some text">
  <img width="80%" src="/images/projects/minor/process.png" alt="aes"/>
</a>

#### Block devision

What AES does when it ecrypts data it converts your data in hex or binary. This because either one if farily easy write and read. The data is than split into 128 bit blocks that have four rows and four columns and each entry is going to be two of thos hex characters which each represents one byte so a block is 16 bytes in total or 128bits. There're eight bits in a byte and 16 x 8 = 128)

If you message was "I want to get a good for this semester hihi"

Block one:

| I    | n    | o    | t    |
| ---- | ---- | ---- | ---- |
|      | t    |      |      |
| w    |      | g    | a    |
| a    | t    | e    |      |

Block two:

| g    |      |      | s    |
| ---- | ---- | ---- | ---- |
| o    | f    | t    |      |
| o    | o    | h    | s    |
| d    | r    | i    | e    |

Block three:

| m    | e    | i    |      |
| ---- | ---- | ---- | ---- |
| e    | r    | h    |      |
| s    |      | i    |      |
| t    | h    |      |      |

#### Key expansion

Key expansion involves taking the initial key and using it to come up with a series of other keys for each round of the encryption process. These new 128-bit round keys are derived with[ Rijndael’s key schedule](http://www.samiam.org/key-schedule.html), which is essentially a simple and fast way to produce new key ciphers. If the initial key was “I want some beer”

| I    | n    | o    | b    |
| ---- | ---- | ---- | ---- |
|      | t    | m    | e    |
| w    |      | e    | e    |
| a    | s    |      | r    |

Then each of the new keys might look something like this once Rijndael’s key schedule has been used:

| 14   | 29   | 1h   | s5   |
| ---- | ---- | ---- | ---- |
| h9   | 9f   | st   | 9f   |
| gt   | 2h   | hq   | 73   |
| ks   | dj   | df   | hb   |

Although they look like random characters (and the above example is just made up) each of these keys is derived from a structured process when AES encryption is actually applied.

#### Add round key

In this step, because it is the first round, our initial key is added to the block of our message:

| I    | n    | o    | t    |
| ---- | ---- | ---- | ---- |
|      | t    |      |      |
| w    |      | g    | a    |
| a    | t    | e    |      |

combined with 

| I    | n    | o    | b    |
| ---- | ---- | ---- | ---- |
|      | t    | m    | e    |
| w    |      | e    | e    |
| a    | s    |      | r    |

This is done with an XOR cipher, which is an additive encryption algorithm. While it looks like you can’t actually add these things together, be aware that it is actually done in binary. The characters are just a stand-in to try and make things easier to understand. Let’s say that this mathematical operation gives us a result of:

| h3   | dj   | zu   | s5   |
| ---- | ---- | ---- | ---- |
| s8   | 7d   | 15   | 2k   |
| dj   | 4b   | d2   | 2s   |
| 74   | el   | k1   | hd   |

#### Substitute bytes

 Each byte is replaced according to a specified table in this stage. This is similar to the example at the beginning of the article, when the statement was coded by changing each letter in the alphabet to the one following it (hello becomes ifmmp). Provides confusion.

This system is a little more sophisticated and does not always follow a logical pattern. Instead, the algorithm can consult a known table. Let's suppose that after this step, the preset table yields:

| as   | ls   | sl   | l2   |
| ---- | ---- | ---- | ---- |
| d2   | 0s   | 1k   | ao   |
| l1   | d2   | dn   | lf   |
| 54   | 6l   | 19   | mn   |

A bytes become B bytes trough S 

The Byte Substitution layer consists of 16 S-Boxes with the following properties: 

The S-Boxes are 

- identical 
- the only nonlinear elements of AES, i.e., ByteSub(Ai) + ByteSub(Aj) ≠ ByteSub(Ai + Aj), for i,j = 0,…,15 
- bijective, i.e., there exists a one-to-one mapping of input and output bytes ⇒ S-Box can be uniquely reversed

In software implementations, the S-Box is usually realized as a lookup table

Example s-box table:

<a href="/images/projects/minor/s-box-table.png" target="_blank" rel="some text">
  <img width="80%" src="/images/projects/minor/s-box-table.png" alt="aes"/>
</a>

#### Shift rows

Shift rows is a simple term, and this step is pretty much what you'd anticipate. The second row has been shifted one place to the left, the third row has been shifted two spaces to the left, and the fourth row has been shifted three spaces to the left. This gives us the following:

| as   | ls   | sl   | l2   |
| ---- | ---- | ---- | ---- |
| 0s   | 1k   | ao   | d2   |
| dn   | lf   | l1   | d2   |
| mn   | 19   | 6l   | 54   |

first row stays: 
second row shifts: one 
thirth row shifts: two 
fourth row shifts: three



#### Mix columns

This stage is a little more difficult to describe. Let's simply pretend that each column has a mathematical equation applied to it to further dilute it, to strip out much of the arithmetic and simplify things. Let's imagine the operation yields the following result:

| dk   | l3   | d8   | 23   |
| ---- | ---- | ---- | ---- |
| al   | d2   | so   | d1   |
| cn   | kd   | 4m   | n3   |
| 32   | g9   | kw   | hr   |

Matrix multiplication: lets say we have:

| 2    | 3    | 1    | 1    |      | c0   |
| ---- | ---- | ---- | ---- | ---- | ---- |
| 1    | 3    | 3    | 1    |      | c1   |
| 1    | 2    | 2    | 3    |      | c2   |
| 3    | 1    | 1    | 2    |      | c3   |

row 1 * c0 + row 2 * c1 + row 3 * c2 + row 4 + c3 = 

Reordering bytes trough mixcolboxes 

#### Add round key (again)

Remember how we produced those circular keys at the beginning with our initial key and Rijndael's key schedule? This is where we begin to employ them. We add the first round key we obtained to the result of our mixed columns

But that not all it doesn't  stop there. At the start it was mentioned that there are different sizes that can be applied. Either 128, 192 or 256 bits. When we use a 128 bits key. The encryption will use nine round after each other. When a 192 bit key is used this will be eleven rounds. Wen a 256 bit key is used there will be 14 rounds. 

**To make things clearer, the entire AES encryption process goes:**

*Key expansion*

*Add round key*

*Byte substitution* (provides confusion)

*Shift rows*  (provides diffusion)

*Mix columns* (provides diffusion)

*Add round key*      

*x 9, 11 or 14 times, depending on whether the key is 128, 192 or 256-bit*

*Byte substitution*

*Shift rows*

*Add round key*

After the data has gone through this complicated procedure, my initial "I want to get a good for this semester hihi" becomes "38kwo3jgnsuwfhc6pncxl35vs"

### Decrypting AES

If we start with our encrypted result of **“38kwo3jgnsuwfhc6pncxl35vs”** and **apply the inverse of each encryption step**, it starts with the inverse round key, then the inverse shift rows, and the inverse byte substitution, before going into the inverse of the 9, 11 or 14 rounds. **It looks like this:**

“38kwo3jgnsuwfhc6pncxl35vs”

*Inverse add round key*

*Inverse shift rows*

*Inverse byte substitution*

*Inverse add round key*

*Inverse mix columns*

*Inverse shift rows*

*Inverse byte substitution*     

*x 9, 11 or 14 times, depending on whether the key is 128,192 or 256-bit* 

*Inverse add round key*

After this decryption process, we end up with our original message again: **“I want to get a good for this semester hihi”**

```
function AESencrypt(plaintext, key) {
  
  blocks := divideIntoBlocks(plaintext);
  roundKeys = getRoundKeys(key)
  for (block in blocks) {
    //first round
    addRoundKey(roundKeys[0], block);
    //intermediate rounds
    for (8, 10 or 12 rounds) {
      subBytes(block);
      shiftRows(block);
      mixColumns(block);
      addRoundKey(roundKeys[..], block);
    }
    //last round
    subBytes(block);
    shiftRows(block);
    addRoundKey(roundKeys[numRounds - 1], block);
  }
  ciphertext := reassemble(blocks);
  return ciphertext;
}
```

<a href="/images/projects/minor/rounds.png" target="_blank" rel="some text">
  <img width="80%" src="/images/projects/minor/rounds.png" alt="aes"/>
</a>

<a href="/images/projects/minor/funtion_for_rounds.png" target="_blank" rel="some text">
  <img width="80%" src="/images/projects/minor/function_for_rounds.png" alt="aes"/>
</a>

 
