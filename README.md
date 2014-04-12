# DEFCON Plugins Plugin

Displays the list of installed defcon plugins. It might one day show you which plugins to install. It probably wont allow you to install them automatically as then I'd have to worry a lot more about security.

## Prerequisits
1. [DEFCON](http://github.com/acuminous/defcon)

## Installation
1. '''cd $DEFCON_INSTALL_DIR'''
2. '''npm install defcon-plugins'''
3. '''Enable and configure 'defcon-plugins' in your DEFCON configuration file, e.g.
'''json
{
    "plugins": {
        "installed": [
            "defcon-plugins"
        ]
    }
}
'''
4. Restart defcon (you can do this via '''kill -s USRSIG2 <pid>''' if you want zero downtime)

## Configuration

There are no configuration options for this plugin
```