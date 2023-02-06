class MyStoreScreen {

    get #myStoreLogo(){
        return $('~My store')
    }

    get #myStoreName(){
        return $('id:toolbar_subtitle')
    }

    async getStoreName(){
        await this.#myStoreName.waitForExist({ timeout: 30000 })
        return await this.#myStoreName.getText()
    }

    async myStoreLogoIsDisplayed(){
        await this.#myStoreLogo.waitForExist({ timeout: 30000 })
        return await this.#myStoreLogo.isDisplayed()
    }

    get #myStoreProducts(){
        return $('id:products')
    }

    async goToProducts(){
        await this.#myStoreProducts.click()
    }
}

module.exports = new MyStoreScreen()