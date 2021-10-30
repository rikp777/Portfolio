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
---

# Vim 

There's a reason why, after decades, countless developers still prefer Vim as their code editor of choice. That many people can't be wrong, right? 



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

