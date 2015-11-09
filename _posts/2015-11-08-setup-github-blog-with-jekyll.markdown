---
layout: post
title:  "Setting up a GitHub blog with Jekyll"
date:   2015-11-08 19:57:32 -0800
categories: blog
---
## Steps
1. Create a USERNAME.github.io repository in your GitHub account where USERNAME is your GitHub username (ex: ivlo11.github.io)
2. Setup you RSA pub key in Github, if you haven't done so already
3. Setup your local environment's dependencies
   1. Make sure you have xCode installed via the App Store
   2. Make sure you have xCode's Command Line Tools installed

      ```bash
      $ xcode-select --install
      ```

   3. Install Ruby Version Manager (OS X installation of Ruby is in system files and requires sudo - we don't want that. RVM installs to the home folder and allows you skip sudo)

      ```bash
      $ \curl -sSL https://get.rvm.io | bash -s stable --ruby
      $ rvm install ruby-2.2-head
      $ rvm use ruby-2.2-head
      $ ruby -v
      ```

  4. Install jekyll gem

     ```bash
     $ gem install jekyll
     ```


4. Create new jekyll blog

   ```bash
   $ cd ~/Development/
   $ jekyll new USERNAME.github.io
   $ cd USERNAME.github.io/
   ```

7. now you can run jekyll serve

   ```bash
   $ jekyll serve -w
   ```

8. configure _config.yml -  By the way I used the default kramdown markdown parser with the GitHub's flavor of markdown (GFM) 

   ```yaml
   title: Ivonne Roberts
   description: > # this means to ignore newlines until "baseurl:"
     I love new, unknown and unconquered projects. I love the feeling of 
     hacking away at something and in the end solving the puzzle, putting 
     all the pieces together and suddenly realizing, you’ve only 
     scratched the surface of how awesome the project could really be.
   baseurl: "" # the subpath of your site, e.g. /blog
   url: "http://USERNAME.github.io" # the base hostname & protocol for your site
   twitter_username: USERNAME
   github_username:  USERNAME

   # Build settings
   markdown: kramdown
   kramdown:
     input: GFM

   ```

9. You will want to modify the about.md file
10. And add (or replace the sample post) your first post in the format of `_post/YYYY-MM-DD-name-of-your-post.md` with the below at the head of your file

    ```
    ---
    layout: post
    title:  "Setting up a GitHub blog with Jekyll"
    date:   2015-11-08 19:57:32 -0800
    categories: jekyll github
    ---
    ```

11. Lastly push your new blog!

    ```
    $ git init
    $ git add .
    $ git commit -m 'Initial commit'
    $ git remote add origin git@github.com:USERNAME/USERNAME.github.io.git
    $ git pull origin master
    $ git push origin master
    ```

