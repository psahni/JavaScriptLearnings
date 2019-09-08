[ About .git folder ]

 - an object can either be a commit, tree, blob or a tag.
 - Git stores complete snapshot of the file on every commit. It stores how file was looking at that commit through blob object.
-  To see the commit object: git cat-file -p <commit_id>
 
 
 * Git SnapShot
 
 You tell Git you want to save a snapshot of your project with the git commit command and it basically records a manifest of what all of the files in your project look like at that point. Then most of the commands work with those manifests to see how they differ or pull content out of them, etc.
 
 http://nfarina.com/post/9868516270/git-is-simpler




