---
  id:
  title: Dotfiles
  description:
    Why it is important to keep your .dotfiles safe.
  duration: 1 whole day in total
  image: /images/projects/other/dotfiles.png
  tech:
    - name: linux
    - name: .dotfiles
  category:
    - name: body of knowledge
  author:
    name: Rik Peeters
    image: /images/me.jpg
    social:
      twitter: rikp777
  slug: other_dotfiles
  github: https://github.com/rikp777/.dotfiles
  createdAt: 2021-12-07
---

# .dotfiles

Dotfiles are plain text configuration files on Unix-y systems for things like our shell, `~/.zshrc`, our editor in `~/.vimrc`, and many others. They are called "dotfiles" as they typically are named with a leading `.` making them hidden files on your system, although this is not a strict requirement.

Since these files are all plain text, we can gather them together in a git repository and use that to track the changes you make over time.

Ideally, you store your personal files not on your machine only. If you have your files on either local drives (e.g. USB drive, NAS) or in the cloud (Dropbox, Google Docs, iCloud, etc., etc.), you save yourself from the risks of machine theft, damage, or hardware failure.

Now your documents, photos, etc. are kind of safe. Still, if you ever have to setup a system, you need to install every single application again. I can’t count the times I needed to find the application’s download page, download, install. Next. Next. Again. You forgot one. One more.

So, how awesome is it that we can automate all this? You may not realize it, but most system tools, applications and settings can be installed in an automated fashion. I don’t know about you, but this is like music to my ears!

Today, I could literally throw my laptop out of the window, buy a new one, and be up and running in a matter of minutes.

It’s pretty simple to get started. You need to organize your dotfiles in some directory. You could do this practically anywhere, like a USB drive or something. Since version control is great, a hosted git repository like GitHub is a great option to store your dotfiles.

# GitHub ❤ `~/`

Why would I want my dotfiles on GitHub?

- **Backup** **restore**, and **sync** the prefs and settings for your toolbox. Your dotfiles might be the most important files on your machine.
- **Learn** from the community. Discover new tools for your toolbox and new tricks for the ones you already use.
- **Share** what you’ve learned with the rest of us.

## Structure

Below is the structure of my dotfiles repo. It’s also what we’ll use in our walk-through below.

```
📂 .

├── 📁 git
|  ├── 🌑 .gitconfig
│  └── 🌑 .gitignore_gobal
├── 📂 nvim
│  └── 📂 .config
└── 🌑 install.sh
```

by default no such directory exist within your system so you will have to create one your own in you root directory. ```mkdir .dotfiles```

when created you can move your configuration files to the folder you just created but be warned you need to follow the folder struture above so for every configuration you want to store you need to make a directory with its name. But because you now moved your files your settings will not be in the right directory anymore so all programs that use those settings are broken. But now we are going to restore those links. This we are going to do by GNU Stow.

### About GNU Stow

GNU Stow describes itself as a "symlink farm manager", but in practical terms it's just a prgram that can mirror the structure of one directory into another by creating symbolic links back to the original files 

This is extremely useful when you have a directory full of configuration files that is managed by Git and you want to send all of those configuration files to where they belong in you home directory. 

GNU Stow walks the file and directory hiearch of the directory passes as the first aparameter to the stow command and creates symbolic links to those files in the equivalent location in the target directory. 

The important thing to be ware of here is that our dotfiles directory must have the same layout as where the files would be placed under the home directory. This means you will need to have quivalent subdirectory structure in you dotfiles folder so that all symoblic lniks get created in the right place. 
