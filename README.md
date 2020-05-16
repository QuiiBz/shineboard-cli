<p align="center"><img src="https://i.imgur.com/4TU5pl8.png" width="200"></p>

<p align="center"></p>

# ShineBoard CLI
## The CLI for ShineBoard - A Beautiful way to share code

ShineBoard is a open-source platform to make sharing code easier. Wasted by all the .txt files you downloaded and the poor hastebin codes ? Switch now to ShineBoard :
* Type `shine help` to get started
* To upload very quicly, run `shine add <file>`
* You can also choose to specify a name for this paste with the flag `--name` (or `-n`) 
* If you which, you can force the language with `--language` (or `-l`) 

Alternatively, you can use the [web application](https://github.com/ShineBoard/shineboard) to create paste from the web.

## Installing
With NPM :
* Run `npm install -g @shineboard/cli` in your terminal

With Yarn :
* Run `yarn global add @shineboard/cli` in your terminal

## Contributing

Since it's just a Node.js app, you may already know how to do this :
* Fork this repository, then clone it to your device
* Install JS dependencies with :
  * NPM : `npm install`
  * Yarn : `yarn`
* Run `node src/index.js` to try the CLI without linking it
* You can run `npm link` (or `yarn link`) to get the `shine` CLI running locally. Make sure to type `npm unlink` (or `yarn unlink`) to remove symlink created before. 

## License

ShineBoard CLI is licensed under the [Apache license](http://www.apache.org/licenses/LICENSE-2.0).

