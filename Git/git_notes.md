* About Version Control
--------------------------
-  Record changes
-  Revert back to previous states if any issues comes up
-  Recovering lost files
-  Compare changes
-  Manage changes

* CVS
-----------------------------
- Distributed system, people can check out files from the central server.

* Disadvantage of CVS
-----------------------------
- Code kept at single machine, so if somehow machine goes down, you lost the history of files, changes.
- Can not commit local
- Difficult to collaborate
- whenever you have the entire history of the project in a single place, you risk losing everything.

* Distributed Version Control Systems
--------------------------------------------------

- Evry client has a full mirror of the repository
- If any server dies, any of the client repo. can be copied back to server.
- Changes history are managed at local client too.
- Easy to set up different type of workflows.
- Easy to collborate

* Getting Started With Git
-------------------------------------------------
- Other systems tend to store data as changes to a base version of each file.
- Git stores data as snapshots of the project over time.
- Every time you commit, or save the state of your project in Git, it basically takes a picture of what all your files look like at that moment and stores a reference to that snapshot. To be efficient, if files have not changed, Git doesn’t store the file again—just a link to the previous identical file it has already stored.

-You have the entire history of the project right there on your local disk, most operations seem almost instantaneous, without any network support

- For example, to browse the history of the project, Git doesn’t need to go out to the server to get the history and display it for you—it simply reads it directly from your local database. This means you see the project history almost instantly. 

If you want to see the changes introduced between the current version of a file and the file a month ago, 
Git can look up the file a month ago and do a local difference calculation, instead of having to either ask a remote server to do it or 
pull an older version of the file from the remote server to do it locally. 'There is no concept of client and server'

- Uses checksum to store files:The mechanism that Git uses for this checksumming is called a SHA-1 hash. 
This is a 40-character string composed of hexadecimal characters (0–9 and a–f) and calculated based on the contents of a file or directory structure in Git.

- If we do any action in git, then we can undo it.
- Whenever we do anything or perform some action; git adds some data to the database.
- So we can not erase any data from git, after we commit data.

* Three States in Git
-------------------------------------------------
- There are 3 states
  1. Committed
  2. Modified: You have changed the file but have not committed it to your database yet. ( It is only about tracked file )
  3. Staged:   You have marked a modified file in its current version to go into your next commit snapshot.
     Untracked files are those which are neither present in the last snapshot nor staged.

* Settings of Git
	- git config --list    # List all config settings
	- git config user.name # To check any key value

* Help Command
  git help config
  git help <verb>

* Git Basics ( chapter 2)
-------------------------------------------------
 - Git receives a copy of nearly all data that the server has. Every version of every file for the history of the project is pulled down when you run git clone.
 - $ git clone git://github.com/schacon/grit.git mygrit - That command does the same thing as the previous one, but the target directory is called mygrit.
 - Git has a number of different transfer protocols you can use.
 - To Start tracking and staging the files- Do 'git add .'
 - * Read about a interesting case where a file is both unstaged and staged.
 - git diff: To see what you’ve changed but not yet staged, type git diff with no other arguments. ( changes you have made that you have not yet staged )
 - git diff --cached: To see what you have staged so far.
 - diff between changes that are staged and that are not unstaged

* Git Objects ( Chapter 9 )
-------------------------------------------------

-  The objects directory stores all the content for your database, the refs directory stores pointers into commit objects in that data (branches), 
the HEAD file points to the branch you currently have checked out, and the index file is where Git stores your staging area information. 

- Every thing is stored in key value pairs.

- .git/objects: It stores the file system that git manages, a database.

- Git places only four types of objects in the object store: the blobs, trees, commits, and
	tags.

- The 2 digit is the first 2 digits from the 40 digit hash and remaining 38 digits is filename

- git cat-file -p <full_SHA>

- commit-object

* File management and the index ( Chapter 5 )
-------------------------------------------------



