# Copysmith AI eCommerce Plugin

# Plugin Structure

This plugin is straight forward. The entry point into the plugin is `copysmithai.php`. 
This file loads thrid-party php libraries, and boots up the plugin.

The `CopysmithAIPlugin.php` file regiesters all of the pages and assets with Wordpress and also
sets up the templating system.

Below is a list of what is contained in each directory.

- `templates` - All of the php based templates. It is devided up into each page and a folder for the layout realted templated.
- `src` - All of the React and JavaScripts code.
- `static` - Images and CSS/Styles

# Development

Because Wordpress is a PHP based system you will need to ensure you have PHP installed on your system.
Mac users should have PHP 7.* installed already. However you can use HomeBrew to install a new version
if you wish. 

Once PHP is installed you will need to install `Composer`. Composer is PHP's npm. You can download it 
from the following link. https://getcomposer.org/download/ This page give simple instructions for install
Composer. However this following page gives details on different install options. https://getcomposer.org/doc/00-intro.md#installation-linux-unix-macos

## Install local Dependency

You will need to install (and build) local dependency inorder to use and develop the plugin. You can run the
below commands to get installed.

```
npm install
npm run build
composer install
```
