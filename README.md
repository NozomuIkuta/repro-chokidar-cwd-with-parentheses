This repository is to reproduce a bug of [paulmillr/chokidar](https://github.com/paulmillr/chokidar) (v3.5.2).

# Presumption

- macOS Big Sur (v11.6)
- Node.js (v16.3)
- chokidar (v3.5.2)

# What's Happening

If `cwd` option (or, names of ancestor directories) includes special characters of regular expression (e.g. parentheses),
chokidar can't detect changes on files that it watches.

# Steps to Reproduce

## No Parentheses in CWD Option

1. Start to watch files

    ```bash
    cd no-paren-dir && node index.js
    ```

2. Edit and save files
3. You will see `"Edited: <path>"` messages in Terminal

## Parentheses in CWD Option

1. Start to watch files

    ```bash
    cd "(paren-dir)" && node index.js
    ```

2. Edit and save files
3. You will NOT see `"Edited: <path>"` messages in Terminal

# Root Cause

While paths of watched files are escaped (i.e. `(watched-paren-dir)`), `cwd` option isn't so and is just treated as a string literal.

# Notes

chokidar depends on [micromatch/anymatch](https://github.com/micromatch/anymatch). anymatch can handle escaped string literals as shown in `anymatch/index.js` of this repository.

More accurately, anymatch internally depends on [micromatch/picomatch](https://github.com/micromatch/picomatch) so picomatch actually handles the escaped strings.
