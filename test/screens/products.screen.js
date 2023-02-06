class productsScreen {
    get #addProduct(){
        return $('id:addProductButton')
    }

    get #chooseTypeOfProduct(){
        return $('android=new UiSelector().text("Simple physical product")')
    }

    async selectTypeOfNewProduct(){
        await this.#addProduct.click()
        await this.#chooseTypeOfProduct.waitForExist({ timeout: 15000 })
        await this.#chooseTypeOfProduct.click()
    }
}

module.exports = new productsScreen()