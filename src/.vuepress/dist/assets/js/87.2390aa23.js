(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{470:function(e,t,r){"use strict";r.r(t);var a=r(45),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"github"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#github"}},[e._v("#")]),e._v(" GitHub")]),e._v(" "),r("h2",{attrs:{id:"what-is-github"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what-is-github"}},[e._v("#")]),e._v(" What is GitHub")]),e._v(" "),r("p",[e._v("While git is a software, GitHub is a platform to host your git repositories.")]),e._v(" "),r("hr"),e._v(" "),r("h2",{attrs:{id:"remote-repositories"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#remote-repositories"}},[e._v("#")]),e._v(" Remote Repositories")]),e._v(" "),r("h3",{attrs:{id:"git-teamwork"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#git-teamwork"}},[e._v("#")]),e._v(" GIT TEAMWORK")]),e._v(" "),r("blockquote",[r("p",[e._v("hies sind noch ein paar sachen doppelt")])]),e._v(" "),r("p",[e._v("by using "),r("em",[e._v("remotes")]),e._v(". A remote is a shared Git repository that allows multiple collaborators to work on the same Git project.  In order to get your own replica you’ll need to "),r("em",[e._v("clone")]),e._v(" it with:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("git clone remote_location clone_name\n")])])]),r("p",[e._v("->is your "),r("em",[e._v("local")]),e._v(" copy of the Git project. If you commit changes to the project here, they are still only local.")]),e._v(" "),r("p",[e._v("One thing that Git does behind the scenes when you clone is give the remote address the name "),r("em",[e._v("origin")]),e._v(", so that you can refer to it. In this case, the cloned original remote is "),r("em",[e._v("origin")]),e._v(".")]),e._v(" "),r("p",[e._v("You can see a list of a Git project’s remotes with the command:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("git remote -v\n")])])]),r("ul",[r("li",[e._v("​\t\tGit lists the name of the remote, origin, as well as its location.")]),e._v(" "),r("li",[e._v("​\t\tGit automatically names this remote origin, because it refers to the remote repository of origin. However, it is possible to safely change its name.")]),e._v(" "),r("li",[e._v("​\t\tThe remote is listed twice: once for (fetch) and once for (push).")])]),e._v(" "),r("hr"),e._v(" "),r("p",[e._v("A git repository is a project, or the root folder of your project. (created with "),r("code",[e._v("git init")]),e._v(")")]),e._v(" "),r("h3",{attrs:{id:"what-is-a-remote"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-remote"}},[e._v("#")]),e._v(" What is a remote?")]),e._v(" "),r("p",[e._v("A "),r("em",[e._v("remote")]),e._v(" is a Git repository that lives "),r("em",[e._v("outside")]),e._v(" your Git project folder.")]),e._v(" "),r("p",[e._v("Remote is your server where you store your git repository.  Remotes can live on the web, on a shared network or even in a separate folder on your local computer.With that, you synchronize your local repository that is on your laptop.")]),e._v(" "),r("h3",{attrs:{id:"git-clone"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#git-clone"}},[e._v("#")]),e._v(" "),r("code",[e._v("git clone")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("git clone <url of a remote repository>\n")])])]),r("p",[e._v("Clone repository - create a copy of a remote repository")]),e._v(" "),r("h3",{attrs:{id:"add-origin"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#add-origin"}},[e._v("#")]),e._v(" "),r("code",[e._v("add origin")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("git remote add origin <url to your GitHub repository>\n")])])]),r("p",[e._v("Create a remote copy of your repository:")]),e._v(" "),r("ol",[r("li",[e._v("Create an empty new repository on GitHub")]),e._v(" "),r("li",[e._v("Upload your local repository to this new GitHub repository")])]),e._v(" "),r("h3",{attrs:{id:"show"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#show"}},[e._v("#")]),e._v(" "),r("code",[e._v("show")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("git remote showgit remote show\n")])])]),r("p",[e._v("To see if you have a remote, and what its alias is.")]),e._v(" "),r("ul",[r("li",[e._v("Remotes have a name,also called an alias, and a URL(the link to the remote)")]),e._v(" "),r("li",[e._v("This shows origin. This is the name or alias for our remote server. That’s the default name that every remote repository gets")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("`git remote show origin`\n")])])]),r("p",[e._v("To see what the URL of the remote is")]),e._v(" "),r("hr"),e._v(" "),r("h2",{attrs:{id:"push-pull-fetch"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#push-pull-fetch"}},[e._v("#")]),e._v(" Push, Pull, Fetch")]),e._v(" "),r("h3",{attrs:{id:"push"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#push"}},[e._v("#")]),e._v(" push")]),e._v(" "),r("p",[r("code",[e._v("git push")]),e._v(" - push local, committed changes to your remote repository")]),e._v(" "),r("p",[r("code",[e._v("git push -u origin <branch name>")]),e._v(" - If your branch is new, you need to add something to upload it")]),e._v(" "),r("h3",{attrs:{id:"fetch"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fetch"}},[e._v("#")]),e._v(" fetch")]),e._v(" "),r("p",[r("code",[e._v("git fetch")]),e._v(" - To see if there are changes that someone else pushed to remote")]),e._v(" "),r("h3",{attrs:{id:"pull"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pull"}},[e._v("#")]),e._v(" pull")]),e._v(" "),r("p",[r("code",[e._v("git pull")]),e._v(" - To pull these changes to your local repository")]),e._v(" "),r("hr"),e._v(" "),r("h2",{attrs:{id:"pull-requests"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pull-requests"}},[e._v("#")]),e._v(" Pull Requests")]),e._v(" "),r("p",[e._v("A pull request is a request to merge a branch back to master (or back into the original branch where you branched it from)")]),e._v(" "),r("p",[e._v("The easiest way to create a Pull Request is to do so from the GitHub website")]),e._v(" "),r("p",[e._v("Pull Requests are a good way to have your team mates look at your code before it is merged and do a code review.")]),e._v(" "),r("h4",{attrs:{id:"workflow"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#workflow"}},[e._v("#")]),e._v(" Workflow:")]),e._v(" "),r("p",[r("em",[e._v("On Github:")])]),e._v(" "),r("ol",[r("li",[e._v('Click  "Create pull request"')]),e._v(" "),r("li",[e._v("Check your changes below. Check for mistakes. If you find any, push them again")]),e._v(" "),r("li",[e._v("Give the PR a meaningful title and a description if it is a larger change")]),e._v(" "),r("li",[e._v("Create the pull request")]),e._v(" "),r("li",[e._v("Choose someone to give you a code review")]),e._v(" "),r("li",[e._v("If they request changes, change the code and push again")]),e._v(" "),r("li",[e._v('If they approve, click "Squash and merge" (if there are conflicts, solve them directly in Github if possible)')]),e._v(" "),r("li",[e._v('After merging, click "Delete branch" to delete the merged branch')])]),e._v(" "),r("p",[r("em",[e._v("Locally")])]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Go to the master/main branch")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("git checkout main\n")])])])]),e._v(" "),r("li",[r("p",[e._v("Get the new commits of the merged branch")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("git pull\n")])])])]),e._v(" "),r("li",[r("p",[e._v("Delete the old branch")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("git branch -d *oldBranch*\n")])])])])]),e._v(" "),r("hr"),e._v(" "),r("h3",{attrs:{id:"git-workflow"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#git-workflow"}},[e._v("#")]),e._v(" Git workflow")]),e._v(" "),r("p",[e._v("The workflow for Git collaborations typically follows this order:")]),e._v(" "),r("ul",[r("li",[e._v("Fetch and merge changes from the remote")]),e._v(" "),r("li",[e._v("Create a branch to work on a new project feature")]),e._v(" "),r("li",[e._v("Develop the feature on your branch and commit your work")]),e._v(" "),r("li",[e._v("Fetch and merge from the remote again (in case new commits were made while you were working)")]),e._v(" "),r("li",[r("em",[e._v("Push")]),e._v(" your branch up to the remote for review")])]),e._v(" "),r("p",[e._v("Steps 1 and 4 are a safeguard against "),r("em",[e._v("merge conflicts")]),e._v(", which occur when two branches contain file changes that cannot be merged with the git merge command")]),e._v(" "),r("p",[e._v("We also learned the following commands")]),e._v(" "),r("ul",[r("li",[e._v("​\t\tgit clone: Creates a local copy of a remote.")]),e._v(" "),r("li",[e._v("​\t\tgit remote -v: Lists a Git project’s remotes.")]),e._v(" "),r("li",[e._v("​\t\tgit fetch: Fetches work from the remote into the local copy.")]),e._v(" "),r("li",[e._v("​\t\tgit merge origin/master: Merges origin/master into your local branch.")]),e._v(" "),r("li",[e._v("​\t\tgit push origin <branch_name>: Pushes a local branch to the origin remote.")])]),e._v(" "),r("hr"),e._v(" "),r("h2",{attrs:{id:"solve-conflicts"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#solve-conflicts"}},[e._v("#")]),e._v(" Solve Conflicts")]),e._v(" "),r("p",[e._v("There might be a situation where both your team mate and you changed the same file, and now you want to merge both changes into master -> conflict")]),e._v(" "),r("p",[e._v("-> look at the Coding-School Handout, or "),r("a",{attrs:{href:"https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1)]),e._v(" "),r("hr"),e._v(" "),r("h2",{attrs:{id:"rebase"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rebase"}},[e._v("#")]),e._v(" Rebase")]),e._v(" "),r("p",[e._v("Following situation: Your branch has changes, but master also has changes. You don't want to merge master into your branch, but you want your branch to build on the newest commits on master.")]),e._v(" "),r("p",[e._v("Rebasing is a difficult thing. It can be a valuable skill knowing how to use rebase, but if you have little experience, it is ok to not know the details.")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://git-scm.com/book/en/v2/Git-Branching-Rebasing",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rebasing"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("[Rewriting History](")])]),e._v(" "),r("hr"),e._v(" "),r("blockquote",[r("p",[e._v("ab hier codecademy")])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://thoughtbot.com/upcase/mastering-git",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("mastering git:")]),r("OutboundLink")],1)]),e._v(" "),r("hr"),e._v(" "),r("h2",{attrs:{id:"github-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#github-2"}},[e._v("#")]),e._v(" GitHub")]),e._v(" "),r("p",[r("em",[e._v("GitHub")]),e._v(" is popular hosting service for Git repositories.GitHub allows you to store your local Git repositories in the cloud. With GitHub, you can backup your personal files, share your code, and collaborate with others.")]),e._v(" "),r("p",[e._v("profile-page")]),e._v(" "),r("p",[e._v("in repositories > new  -  creates a new  repo")]),e._v(" "),r("p",[e._v("ititialize with readme etc. only if starting from scratch, otherwise there can be merge problems... -> better initialise without files!!")]),e._v(" "),r("p",[e._v("readme")]),e._v(" "),r("p",[e._v("gitignore")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("git remote -v \n")])])]),r("p",[e._v("-> shows remote")]),e._v(" "),r("hr"),e._v(" "),r("h3",{attrs:{id:"git-hub"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#git-hub"}},[e._v("#")]),e._v(" git hub")]),e._v(" "),r("ol",[r("li",[e._v("neues repo erzeugen")]),e._v(" "),r("li",[e._v("git remote add origin -> erzeugtes repo dem arbeitsfolder zuweisen")]),e._v(" "),r("li",[e._v("git push - u origin master -> inhalt des folders hochpushen")])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://guides.github.com/introduction/flow/",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("https://guides.github.com/introduction/flow/")]),r("OutboundLink")],1)]),e._v(" "),r("hr"),e._v(" "),r("h3",{attrs:{id:"pull-request"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pull-request"}},[e._v("#")]),e._v(" Pull Request")]),e._v(" "),r("p",[r("em",[e._v("Pull Requests initiate discussion about your commits. Because they're tightly integrated with the underlying Git repository, anyone can see exactly what changes would be merged if they accept your request.")])]),e._v(" "),r("p",[r("em",[e._v("By using GitHub's @mention system in your Pull Request message, you can ask for feedback")])]),e._v(" "),r("p",[r("em",[e._v("If you're using a Fork & Pull Model, Pull Requests provide a way to notify project maintainers about the changes you'd like them to consider. If you're using a Shared Repository Model, Pull Requests help start code review and conversation about proposed changes before they're merged into the main branch.")])]),e._v(" "),r("p",[r("em",[e._v("Pull Request comments are written in Markdown, so you can embed images and emoji, use pre-formatted text blocks, and other lightweight formatting.")])]),e._v(" "),r("hr"),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.youtube.com/playlist?list=PLg7s6cbtAD15G8lNyoaYDuKZSKyJrgwB-",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("Video serie: get up and running")]),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://lab.github.com/",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("GitHub Learning Lab")]),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://guides.github.com/",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("GitHub Guides")]),r("OutboundLink")],1)]),e._v(" "),r("hr"),e._v(" "),r("h2",{attrs:{id:"gitignore"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gitignore"}},[e._v("#")]),e._v(" .gitignore")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.pluralsight.com/guides/how-to-use-gitignore-file",target:"_blank",rel:"noopener noreferrer"}},[e._v("how-to-use-gitignore"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/github/gitignore",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github collection of .gitignore-templates"),r("OutboundLink")],1)]),e._v(" "),r("hr"),e._v(" "),r("h2",{attrs:{id:"change-from-password-to-ssh"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#change-from-password-to-ssh"}},[e._v("#")]),e._v(" Change from Password to SSH")]),e._v(" "),r("p",[e._v("check the current remote URL:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("$ git remote -v\n")])])]),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("git remote set-url origin ***@vs-ssh.visualstudio.com:v3/***/PROJ/PROJ\n")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);