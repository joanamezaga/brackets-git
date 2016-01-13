/*jshint maxlen:false */

define({
    ACTION:                             "Action",
    ADD_ENDLINE_TO_THE_END_OF_FILE:     "Add endline at the end of file",
    ADD_TO_GITIGNORE:                   "Add to .gitignore",
    ADVANCED_FEATURES_WARNING:          "This features are not recommended for basic Git users as they may cause you to lose code that has been already commited if used inproperly. Use with caution.",
    AMEND_COMMIT:                       "Amend last commit",
    AMEND_COMMIT_FORBIDDEN:             "Cannot amend commit when there are no unpushed commits",
    _ANOTHER_BRANCH:                    "another branch",
    AUTHOR:                             "Author",
    AUTHORS_OF:                         "Authors of",
    AVATAR_TYPE:                        "Avatar type",
    BASH_NOT_AVAILABLE:                 "Bash is not available or properly configured",
    BASIC_CONFIGURATION:                "Basic configuration",
    BLACK_WHITE_AVATAR:                 "Black and white avatar",
    BRACKETS_GIT_ERROR:                 "Brackets Git encountered an error\u2026",
    BRANCH_NAME:                        "Branch name",
    BUTTON_CANCEL:                      "Cancel",
    BUTTON_CHANGELOG:                   "Show changelog",
    BUTTON_CHECKOUT_COMMIT:             "Checkout",
    BUTTON_CLONE:                       "Clone",
    BUTTON_CLOSE:                       "Close",
    BUTTON_COMMIT:                      "Commit",
    BUTTON_DEFAULTS:                    "Restore defaults",
    BUTTON_FIND_CONFLICTS:              "Find conflicts\u2026",
    BUTTON_INIT:                        "Init",
    BUTTON_MERGE_ABORT:                 "Abort merge",
    BUTTON_OK:                          "OK",
    BUTTON_REBASE_ABORT:                "Abort",
    BUTTON_REBASE_CONTINUE:             "Continue rebase",
    BUTTON_REBASE_SKIP:                 "Skip",
    BUTTON_REPORT:                      "Report",
    BUTTON_RESET:                       "Reset index",
    BUTTON_RESET_HARD:                  "Reset to this commit and discard the changes that came after it. (reset --hard)",
    BUTTON_RESET_MIXED:                 "Reset to this commit and retain changes that came after it unstaged. (reset --mixed)",
    BUTTON_RESET_SOFT:                  "Reset to this commit and retain changes that came after it staged for a new commit. (reset --soft)",
    BUTTON_SAVE:                        "Save",
    CANCEL:                             "Cancel",
    CHANGELOG:                          "Changelog",
    CHANGE_USER_EMAIL:                  "Change git email",
    CHANGE_USER_NAME:                   "Change git username",
    CHECK_GIT_SETTINGS:                 "Failed to launch Git executable - fix Git settings and restart Brackets",
    CLEAN_FILE_END:                     "File cleaned",
    CLEAN_FILE_START:                   "Cleaning file",
    CLEANING_WHITESPACE_PROGRESS:       "Cleaning whitespace from files\u2026",
    CLEAR_WHITESPACE_ON_FILE_SAVE:      "Clear whitespace on file save",
    CLONE_REPOSITORY:                   "Clone repository",
    CODE_INSPECTION_PROBLEMS:           "Code inspection problems:",
    COLLAPSE_ALL:                       "Collapse all",
    COLORED_AVATAR:                     "Colored avatar",
    COMMAND_ARGUMENTS:                  "Command arguments",
    COMMIT:                             "Commit",
    COMMIT_ALL_SHORTCUT:                "Commit all files",
    COMMIT_CURRENT_SHORTCUT:            "Commit current file",
    COMMIT_MESSAGE_PLACEHOLDER:         "Enter commit message here\u2026",
    CREATE_NEW_BRANCH:                  "Create new branch\u2026",
    CREATE_NEW_GITFTP_SCOPE:            "Create new Git-FTP remote\u2026",
    CREATE_NEW_REMOTE:                  "Create new remote\u2026",
    CURRENT_TRACKING_BRANCH:            "Current tracking branch",
    _CURRENT_TRACKING_BRANCH:           "current tracking branch",
    CUSTOM_TERMINAL_COMMAND:            "Custom terminal command (sample: gnome-terminal or complete path to executable)",
    CUSTOM_TERMINAL_COMMAND_HINT:       "Sample arguments: --window --working-directory=$1<br>$1 in arguments will be replaced by current project directory.",
    DATE_FORMAT:                        "MM/DD/YYYY HH:mm:ss",
    DATE_MODE_0:                        "Formatted using local date format",
    DATE_MODE_1:                        "Relative time",
    DATE_MODE_2:                        "Intelligent mode (relative/formatted)",
    DATE_MODE_3:                        "Formatted using your own format",
    DATE_MODE_4:                        "Original Git date",
    DEBUG:                              "Debug",
    DEBUG_MODE_SETTING:                 "DEBUG mode &mdash; Leave this OFF unless you need to find a problem with the extension. All Git communication will be forwarded to Brackets console!",
    DEFAULT_GIT_TIMEOUT:                "Default Git operation timeout (in seconds)",
    DELETE_FILE:                        "Delete file",
    DELETE_LOCAL_BRANCH:                "Delete local branch",
    DELETE_LOCAL_BRANCH_NAME:           "Do you really wish to delete local branch \"{0}\"?",
    DELETE_REMOTE:                      "Delete remote",
    DELETE_REMOTE_NAME:                 "Do you really wish to delete remote \"{0}\"?",
    DELETE_SCOPE:                       "Delete Git-FTP scope",
    DELETE_SCOPE_NAME:                  "Do you really wish to delete Git-FTP scope \"{0}\"?",
    DIALOG_CHECKOUT:                    "When checking out a commit, the repo will go into a DETACHED HEAD state. You can't make any commits unless you create a branch based on this.",
    DIALOG_PULL_TITLE:                  "Pull from remote",
    DIALOG_PUSH_TITLE:                  "Push to remote",
    DIALOG_RESET_HARD:                  "You will lose all changes after this commit!",
    DIALOG_RESET_MIXED:                 "Changes after this commit will be unstaged.",
    DIALOG_RESET_SOFT:                  "Changes after this commit will be staged for a new commit.",
    DIFF:                               "Diff",
    DIFFTOOL:                           "Diff with difftool",
    DIFF_FAILED_SEE_FILES:              "Git diff failed to provide diff results. This is the list of staged files to be commited:",
    DIFF_TOO_LONG:                      "Diff too long to display",
    ENABLE_ADVANCED_FEATURES:           "Enable advanced features",
    ENABLE_GERRIT_PUSH_REF:             "Use Gerrit-compatible push ref",
    ENTER_GITFTP_SCOPE_NAME:            "Enter name of the new Git-FTP remote:",
    ENTER_GITFTP_SCOPE_URL:             "Enter FTP URL of the new Git-FTP remote specifing username and password:",
    ENTER_NEW_USER_EMAIL:               "Enter email",
    ENTER_NEW_USER_NAME:                "Enter username",
    ENTER_PASSWORD:                     "Enter password:",
    ENTER_REMOTE_GIT_URL:               "Enter Git URL of the repository you want to clone:",
    ENTER_REMOTE_NAME:                  "Enter name of the new remote:",
    ENTER_REMOTE_URL:                   "Enter URL of the new remote:",
    ENTER_USERNAME:                     "Enter username:",
    ERROR_CONNECT_NODEJS:               "Failed to connect to NodeJS. If you've just updated the extension then close all instances of Brackets and try starting again. If restart doesn't help try removing other extensions that you've installed as one of them is probably causing this problem.",
    ERROR_NOTHING_SELECTED:             "Nothing is selected!",
    ERROR_SAVE_FIRST:                   "Save the document first!",
    ERROR_TERMINAL_NOT_FOUND:           "Terminal was not found for your OS, you can define a custom Terminal command in the settings",
    EXPAND_ALL:                         "Expand all",
    EXTENDED_COMMIT_MESSAGE:            "EXTENDED",
    EXTENSION_WAS_UPDATED_TITLE:        "The extension was updated to {0}",
    FEATURES:                           "Features",
    FILE_ADDED:                         "New file",
    FILE_COPIED:                        "Copied",
    FILE_DELETED:                       "Deleted",
    FILE_IGNORED:                       "Ignored",
    FILE_MODIFIED:                      "Modified",
    FILE_RENAMED:                       "Renamed",
    FILE_STAGED:                        "Staged",
    FILE_UNMERGED:                      "Unmerged",
    FILE_UNMODIFIED:                    "Unmodified",
    FILE_UNTRACKED:                     "Untracked",
    FOR_MAC_LINUX_USERS:                "For Mac/Linux users",
    FOR_WINDOWS_USERS:                  "For Windows users",
    GETTING_STAGED_DIFF_PROGRESS:       "Getting diff of staged files\u2026",
    GITFTP_PUSH_RESPONSE:               "Git-FTP Push response",
    GITFTP_SCOPES:                      "Git-FTP remotes",
    GIT_COMMIT:                         "Git commit\u2026",
    GIT_CONFIGURATION:                  "Git configuration",
    GIT_DIFF:                           "Git diff &mdash;",
    GIT_PULL_RESPONSE:                  "Git Pull response",
    GIT_PUSH_RESPONSE:                  "Git Push response",
    GIT_REMOTES:                        "Git remotes",
    GIT_SETTINGS:                       "Git Settings\u2026",
    GOTO_NEXT_GIT_CHANGE:               "Go to next Git change",
    GOTO_PREVIOUS_GIT_CHANGE:           "Go to previous Git change",
    GUTTER_CLICK_DETAILS:               "Click for more details",
    HIDE_UNTRACKED:                     "Hide untracked",
    HISTORY:                            "History",
    HISTORY_COMMIT_BY:                  "by",
    IDENTICON:                          "Identicon (www.gravatar.com)",
    INIT_GITFTP_SCOPE:                  "Initialize Git-FTP remote",
    INIT_GITFTP_SCOPE_NAME:             "Initialize Git-FTP remote \"{0}\"?",
    LAUNCH_BASH_SHORTCUT:               "Bash/Terminal shortcut",
    LINES:                              "Lines",
    _LINES:                             "lines",
    LIST_MODIFIED_FILES:                "Modified files",
    LOADING:                            "Loading\u2026",
    MARK_MODIFIED_FILES_IN_TREE:        "Mark modified files in file tree",
    MERGE_BRANCH:                       "Merge branch",
    MERGE_MESSAGE:                      "Merge message",
    MERGE_RESULT:                       "Merge result",
    MORE_INFO:                          "More information\u2026",
    NORMALIZE_LINE_ENDINGS:             "Normalize line endings (to \\n)",
    NOTHING_TO_COMMIT:                  "Nothing to commit, working directory clean.",
    OK:                                 "OK",
    OPERATION_IN_PROGRESS_TITLE:        "Git operation in progress\u2026",
    ORIGIN_BRANCH:                      "Origin branch",
    PANEL_COMMAND:                      "Show Git panel",
    PANEL_SHORTCUT:                     "Toggle panel",
    PASSWORD:                           "Password",
    PASSWORDS:                          "Passwords",
    PATH_TO_GIT_EXECUTABLE:             "Path to Git executable",
    PATH_TO_GIT_MSYSGIT:                "Path to msysgit folder",
    PICTURE:                            "Gravatar (www.gravatar.com)",
    PULL_AVOID_MERGING:                 "Avoid manual merging",
    PULL_DEFAULT:                       "Default merge",
    PULL_FROM:                          "Pull from",
    PULL_MERGE_NOCOMMIT:                "Merge without commit",
    PULL_REBASE:                        "Use rebase",
    PULL_RESET:                         "Use soft reset",
    PULL_SHORTCUT:                      "Pull from remote repository",
    PUSH_DEFAULT:                       "Default push",
    PUSH_DELETE_BRANCH:                 "Delete remote branch",
    PUSH_SEND_TAGS:                     "Send tags",
    PUSH_FORCED:                        "Forced push",
    PUSH_SHORTCUT:                      "Push to remote repository",
    PUSH_TO:                            "Push to",
    Q_DELETE_FILE:                      "Are you sure you wish to delete the file <span class='dialog-filename'>{0}</span>?",
    Q_RESTART_BRACKETS:                 "Do you wish to restart Brackets to apply new settings?",
    Q_UNDO_CHANGES:                     "Reset changes to file <span class='dialog-filename'>{0}</span>?",
    REBASE_RESULT:                      "Rebase result",
    REFRESH_GIT:                        "Refresh Git",
    REMOVE_BOM:                         "Remove BOM from files",
    REMOVE_FROM_GITIGNORE:              "Remove from .gitignore",
    REQ_INTERNET:                       "Requires internet connection",
    RESET_LOCAL_REPO:                   "Discard all changes since last commit",
    RESET_LOCAL_REPO_CONFIRM:           "Do you wish to discard all changes done since last commit? This action can't be reverted.",
    RESTART:                            "Restart",
    SAVE_CREDENTIALS_HELP:              "You don't need to fill out username/password if your credentials are managed elsewhere. Use this only when your operation keeps timing out.",
    SAVE_CREDENTIALS_IN_URL:            "Save credentials to remote url (in plain text)",
    SAVE_PASSWORD_QUESTION:             "Save username/password?",
    SET_ORIGIN_URL:                     "Set origin URL",
    SET_THIS_BRANCH_AS_TRACKING:        "Set this branch as a new tracking branch",
    SHORTCUTS:                          "Shortcuts",
    SHORTCUTS_HINT:                     "Separate keys with dash, like this: Ctrl-Alt-G<br>You can use the english key identifiers Ctrl, Cmd (Mac), Alt and Shift.",
    SHOWN_DATE_FORMAT:                  "Format of commit dates in history",
    SHOW_BASH_TERMINAL_BUTTON:          "Show Bash/Terminal button in the panel",
    SHOW_TERMINAL_IN_TOOLBAR:           "Show Terminal icon in toolbar",
    SHOW_UNTRACKED:                     "Show untracked",
    STRIP_WHITESPACE_FROM_COMMITS:      "Strip trailing whitespace from commits",
    TARGET_BRANCH:                      "Target branch",
    TERMINAL_DISABLED:                  "Bash/Terminal console is disabled because no valid executable was found",
    TITLE_CHECKOUT:                     "Do you really wish to checkout this commit?",
    TITLE_RESET:                        "Do you really wish to reset?",
    TOOLTIP_CHECKOUT_COMMIT:            "Checkout a specific commit",
    TOOLTIP_CLONE:                      "Clone existing repository",
    TOOLTIP_CLOSE_NOT_MODIFIED:         "Close files not modified in Git [Shift-click to reopen modified files]",
    TOOLTIP_COMMIT:                     "Commit the selected files",
    TOOLTIP_FETCH:                      "Fetch and sync all",
    TOOLTIP_FIND_CONFLICTS:             "Starts a search for Git merge/rebase conflicts in the project",
    TOOLTIP_GITPUSH:                    "Git-FTP Push",
    TOOLTIP_HIDE_FILE_HISTORY:          "Hide file history",
    TOOLTIP_HIDE_HISTORY:               "Hide history",
    TOOLTIP_INIT:                       "Initialize repository",
    TOOLTIP_MERGE_ABORT:                "Abort the merge operation and reset HEAD to the last local commit",
    TOOLTIP_MORE:                       "More actions\u2026",
    TOOLTIP_OPEN_BASH:                  "Open Bash/Terminal console",
    TOOLTIP_PICK_REMOTE:                "Pick preferred remote",
    TOOLTIP_PULL:                       "Git Pull",
    TOOLTIP_PUSH:                       "Git Push",
    TOOLTIP_REBASE_ABORT:               "Abort the rebase operation and reset HEAD to the original branch",
    TOOLTIP_REBASE_CONTINUE:            "Restart the rebasing process after having resolved a merge conflict",
    TOOLTIP_REBASE_SKIP:                "Restart the rebasing process by skipping the current patch",
    TOOLTIP_REFRESH_PANEL:              "Refresh panel",
    TOOLTIP_SHOW_FILE_HISTORY:          "Show file history",
    TOOLTIP_SHOW_HISTORY:               "Show history",
    UNDO_CHANGES:                       "Discard changes",
    UNDO_LAST_LOCAL_COMMIT:             "Undo last local (not pushed) commit",
    URL:                                "URL",
    USERNAME:                           "Username",
    USER_ABORTED:                       "User aborted!",
    USER_DATE_FORMAT:                   "Own date format (<a href='http://momentjs.com/docs/#/displaying/format/'>Syntax</a>)",
    USE_CODE_INSPECTION:                "Use Code inspection",
    USE_GITFTP:                         "Use Git-FTP",
    USE_GIT_GUTTER:                     "Use Git gutter marks",
    USE_NOFF:                           "Create a merge commit even when the merge resolves as a fast-forward (--no-ff)",
    USE_REBASE:                         "Use REBASE",
    USE_VERBOSE_DIFF:                   "Show verbose output in diffs",
    USE_DIFFTOOL:                       "Use difftool for diffs",
    USING_GIT_VERSION:                  "Git version",
    VIEW_AUTHORS_FILE:                  "View authors of file",
    VIEW_AUTHORS_SELECTION:             "View authors of selection",
    VIEW_THIS_FILE:                     "View this file",
    TAG_NAME_PLACEHOLDER:               "Enter tag name here\u2026",
    TAG_NAME:                           "Tag"
});
