const { readFile } = require('fs')
const { readfile, writeFile } = require('fs/promises')
class HeroRepository {
    constructor({ file}) {
        this.file = file
    }

    async _currentFileContent() {
        return JSON.parse(await readFile(this.file))
    }
    async find(itemId) {
        const all = await this._currentFileContent()
    }
}

module.exports = HeroRepository