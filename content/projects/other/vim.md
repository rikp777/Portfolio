---
  id:
  title: Vim 
  description:
    What is vim and why should you use it as a professional 
  duration: 1 whole day in total
  image: /images/projects/other/time-management.jpg
  tech:
    - name: vim
    - name: ide 
  category:
    - name: body of knowledge
  author:
    name: Rik Peeters
    image: /images/me.jpg
    social:
      twitter: rikp777
  slug: other_vim
  github: https://github.com/rikp777/.dotfiles/tree/master/nvim/.config/nvim
---

# Vim (IDE)

There's a reason why, after decades, countless developers still prefer Vim as their code editor of choice. That many people can't be wrong, right? Vim is a  free open source software. My first experience with Vim was when I accidentally entered it and could not get out. I had to google [how to exit vim](https://stackoverflow.com/questions/11828270/how-do-i-exit-the-vim-editor) to escape. I asked, *"why would anyone ever use this awful editor?"* Fast forward 4 years, this awful editor is now my primary editor. I've tried editors like *Notepad++, Atom, Intellij and VSCode*

This semester enabled me to make the switch to this environment. This did not work out last semester because there is a very intensive learning curve to learning vim. 

I think a great editor needs to have these three features:

- Extensibility
- Community
- Composability
- Intelligent code completion

Vim is what I use because it has all four of the capabilities listed above. Allow me to explain each one.

## Extensibility

If you've used VSCode, Atom, or Sublime, then you know being able to add and remove plugins easily is an indispensable feature. This functionality is also provided by vim but that's not all because vim allows you to choose your own plugin manager according to your needs. In my environment I use packer. 

## Community

In open source technology, the community is very crucial. As long as there are enough contributing developers, a vibrant community assures continual development and problem fixes. More community plugins, tutorials, and human help are all part of the equation. The Vim community is quite active. It has a reddit page, a stackexchange account, and a number of specialized twitter accounts, among other things. I personally learned a lot from the vim master ThePrimeagen on youtube and twitch.

## Composability

In addition to extensibility and community, Vim features composability, which I believe is a trait that many non-modal editors lack.

Compo..what?

Composability refers to the ability to combine a set of generic instructions to achieve more complicated tasks. In the same way that you can make complicated abstractions out of smaller abstractions in programming, you can run complex commands out of simpler ones in Vim. Vim contains movement motions and editing operators (there are also text objects, but I won't go over them here).

## Intelligent code completion

Intelligent code completion is a context-aware code completion function in various programming environments that reduces typos and other typical errors to speed up the writing process. Attempts at this are often made by using auto-completion popups while typing, querying function arguments, and query tips for syntax mistakes. Reflection is used to provide documentation and disambiguation for variable names, functions, and methods utilizing intelligent code completion and associated technologies. also for this complexity, vim has several plugins that can support you with this. 

# Learning curve

it's not a curve it's a wall, but if you break it you'll earn your geekhood!

If you use vim all day and make an effort to use it well, you’ll be editing code faster than you did in your old editor within two weeks. Learning vim is like this. At first, you do everything as simply as possible. Then you start to wonder if there are faster ways to get things done, and there are! If you chain those commands together they just work! You bump into things accidentally, or maybe you spend some time in the extensive help files.

The hardest thing is all the key combinations possible within vim. 

This can be very overwhelming but it is not at all necessary to learn all the key combinations at once with as many as 10 combinations you can use all of vim already!

Once you are in the eqos system of vim there is no going back just like apple. 

## What is Neovim?

Buttt..... let's bring neovim in to the picture 

Neovim is a community-driven open source project and a fork of the Vim text editor designed to make Vim's core developers' lives simpler. It's an upgraded Vim text editor out of the box, or to put it another way, it's a more streamlined Vim that makes integrations lot easier than Vim. Vim is already the most popular text editor and the text editor of choice for programmers. Consider Neovim to be the Vim editor of the future, aiming to remedy some of the shortcomings of its predecessor. For one thing, building plug-ins proved difficult, and Vim isn't well-suited to current systems. So, Neovim fixes the issues you were having with Vim. Neovim improves on Vim by providing a totally redesigned plug-in architecture, a better GUI ecosystem, first-class embedding support, and more.

During my introduction to neovim I found out that neovim and the community were in transition this made the learning process super convenient. This transition took place through the introduction of lua files. A lua file contains [source code](https://techterms.com/definition/sourcecode) written in Lua, a light-weight programming language designed for extending or adding functionality to software applications. The Lua scripting language [syntax](https://techterms.com/definition/syntax) is simple but supports a large number of [data types](https://techterms.com/definition/datatype) and operators. Lua is very weel integrated with Neovim, and with LuaJIT, it is much faster than vimscript. If you, like me, never really understood Vimscript and hate the language with a passion because like I told before its really difficult to integrate. 

Let's talk about lua files.

Let's take the following folder structure as an example:

``` 
📂 ~/.config/nvim
├── 📁 plugins
├── 📂 lua
│  └── 📂 setup_plugins
|  ├── 🌑 plugin_manager.lua
|  ├── 🌑 mappings.lua
│  └── 🌑 settings.lua
└── 🇻 init.lua (or) init.vim
```

nvim has no fixed folder structure but I personally find this the most logical structure for my needs. My init file is my main file as with many languages it is the starting point. From here I put references to different sub folders that all have their own domain.

In my settings I set all preferences like font type colors but also tab spacing. My plugin manager is the place where I indicate which plugins I would like to use within my environment. my mapping allows me to create different keybindings.  

There are still an awful lot of things you can make especially with the integration with lua files, but I'm not working on this at the moment. 

Below is a link pointing to my .dotfiles containing my configuration of nvim. 

[.config/nvim](https://github.com/rikp777/.dotfiles/tree/master/nvim/.config/nvim)

## How I started:

My learning process began with configuring a my own vim script. All the steps I took and notes are below.

set theme 

cd ~/.vim 		or if non existent 	mkdir ~/.vim

cd ~/.vim

mkdir colors

cd colors 

wget https://raw.githubusercontent.com/gosukiwi/vim-atom-dark/master/colors/atom-dark.vim

cd ..

git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim



.vimrc root directory 

:e ~ ./vimrc



plugins.vim

```
filetype off				


set rp+=~/.vim/bundle/Vundle.vim 						"set the runtime path to include Vundle an initialize"
call vundle#begin()


"--- --- --- --- Plugins --- --- --- ---"
Plugin 'VundleVim/Vundle.vim'
Plugin 'tpope/vim-vinegar'
Plugin 'scrooloose/nerdtree'
Plugin 'ctrlpvim/ctrlp.vim'
Plugin 'rking/ag.vim'
Plugin 'skwp/greplace.vim'


"All of your plugins must be added before the folling line"
call vundle#end()
filtetype plugin indent on 
```

vimrc

``` 
set nocompatible 										"We want the latest Vim settings/options"


so ~/.vim/plugins.vim									"Import plugins file"




syntax enable 
set backspace = indent,eol,start						"Make backspace heave like every other editor."
let mapleader = ','										"The default leader is \, but a comma is much better"
set number 												"Let's activate line numbers."


"--- --- --- --- Visuals --- --- --- ---"
colorscheme atom-dark
set t_CO = 256											"Use 256 colors. This is useful for Terminal Vim"
set guifont = Fira_Code:h16 							"Set the default font family and size"
set macligatures										"We want pretty symbols, when available"
set guioptions-=e										"We don't want Gui tabs"
set linespace = 15 										"Mavim-specific line-height"

set guioptions -=l										"Disable Gui scrollbars."
set guioptions -=L
set guioptions -=l
set guioptions -=R

hi LineNr guibg=bg
set foldcolumn = 2										"We'll fake a custom left padding for each window"
hi foldcolumn guibg = bg

hi vertsplit guifg=bg guibg=bg							"get rid of ugly split borders"

"--- --- --- --- Search --- --- --- ---"
set hlsearch
set incsearch 

"--- --- --- --- Split Management --- --- --- ---"
set splitbelow
set splitright

nmap <C-J> <C-W><C-J>
nmap <C-K> <C-W><C-K>
nmap <C-H> <C-W><C-H>
namp <C-L> <C-W><C-L>

"--- --- --- --- Mappings--- --- --- --- "
nmap <Leader>ev :tabedit $MYVIMRC<cr>					"Make it easy to edit the Vimrc file"
nmap <Leader><space> :nohlsearch<cr>					"Add simple highlight removal"
nmap <Leader>f :tag<space>



"--- --- --- --- Plugins --- --- --- ---"
" /
" / CtrlP"
" /
let g:ctrlp_custom_ignore = 'node_modules\DS_Store\|git'
let g:ctrlp_match_window = 'top,order:ttb,min:1,max:30,results:30'

nmap <D-p> :CtrlP<cr>
nmap <c-R> :CtrlPBugTag<cr>
nmap <D-e> :CtrlPMRUFiles<cr>




" /
" / NERDTree
" /
let NerdTreeHijackNetrw = 0

"Make NERDTree easier to toggle"
nmap <D-1> :NERDTreeToggle<cr>


" /
" / Greplace.vim
" /
set grepprg=ag 											"We want to use Ag for the search"


"------------Auto-Command------------"

"Automatically source the Vimrc file on save"
augroup autosourcing 
		autocmd! 
		autocmd BufWritePost .vimrc source %
augroup END



" Notes and Tips
" - Press 'zz' to instantly center the line where the cursor is located.



```

.gvimrc

``` 
"Disable the print key for Macvim"
if has("gui_macvim")
	macmenu &File.print key=<nop>
endif
```

:so %		read and implement changes in vimrc   		:so = source 	 % = current file 

vtags 

modes 

| Mode | Description                                |
| ---- | ------------------------------------------ |
| esc  | Normal mode                                |
| I    | Insert mode \| Insert new text to line     |
| V    | Visual mode \| selecting text and deleting |
|      |                                            |

| Key  | Description |
| ---- | ----------- |
| h    | left        |
| j    | up          |
| k    | down        |
| l    | right       |



|                  |           |
| ---------------- | --------- |
| :                | mode      |
|                  |           |
|                  |           |
| :e ./{directory} | edit      |
|                  |           |
|                  |           |
| pwd              | Directory |

