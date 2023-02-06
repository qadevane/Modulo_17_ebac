class newProductScreen {

    get #cardImage(){
        return $('id:addImageContainer')
    }

    get #chooseTypeOfUpload(){
        return $('id:textWPMediaLibrary')
    }

    get #chooseImage(){
        return $('(//android.widget.ImageView[@content-desc="Product image"])[1]')
    }

    get #doneButton(){
        return $('id:menu_done')
    }

    get #turnBackButton(){
        return $('~Navigate up')
    }

    async addImage(){
        await this.#cardImage.click()
        await this.#chooseTypeOfUpload.waitForExist({ timeout: 5000 })
        await this.#chooseTypeOfUpload.click()
        await this.#chooseImage.waitForExist({ timeout: 5000 })
        await this.#chooseImage.click()
        await this.#doneButton.waitForExist({ timeout: 5000 })
        await this.#doneButton.click()
        await this.#turnBackButton.waitForExist({ timeout: 5000 })
        await this.#turnBackButton.click()
    }

    get #titleProduct(){
        return $('id:editText')
    }

    async enterProductTitle(){
        await this.#titleProduct.waitForExist({ timeout: 5000 })
        await this.#titleProduct.setValue('Produto Teste')
    }

    get #productDescription(){
        return $('android=new UiSelector().text("Describe your product")')
    }

    get #fieldDescription(){
        return $('id:visualEditor')
    }

    async describeYourProduct(){
        await this.#productDescription.waitForExist({ timeout: 5000 })
        await this.#productDescription.click()
        await this.#fieldDescription.waitForExist({ timeout: 5000 })
        await this.#fieldDescription.setValue('New Product.')
        await this.#turnBackButton.waitForExist({ timeout: 5000 })
        await this.#turnBackButton.click()
    }

    get #addPrice(){
        return $('android= new UiSelector().text("Add price")')
    }

    get #regularPrice(){
        return $('//android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.EditText')
    }

    get #salePrice(){
        return $('//android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.EditText')
    }
    
    async fillPrice(){
        await this.#addPrice.click()
        await this.#regularPrice.waitForExist({ timeout: 5000 })
        await this.#regularPrice.setValue('100')
        await this.#salePrice.setValue('80.50')
        await this.#turnBackButton.waitForExist({ timeout: 5000 })
        await this.#turnBackButton.click()
    }
    
    get #inventory(){
        return $('android= new UiSelector().text("Inventory")')
    }

    get #sku(){
        return $('id:edit_text')
    }

    get #switchStock(){
        return $('id:manageStock_switch')
    }

    get #quantity(){
        return $('//android.widget.LinearLayout[2]/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.EditText')
    }

    async fillInventory(){
        await this.#inventory.waitForExist({ timeout: 5000 })
        await this.#inventory.click()
        let sku = `${Math.floor(Math.random() * 100000)}`

        await this.#sku.waitForExist({ timeout: 5000 })
        await this.#sku.setValue('P' + sku)
        await this.#switchStock.click()
        await this.#quantity.setValue('1000')
        await this.#turnBackButton.waitForExist({ timeout: 5000 })
        await this.#turnBackButton.click()
    }

    get #moreDetails(){
        return $('id:productDetail_addMoreButton')
    }

    async addMoreDetails(){
        await this.#moreDetails.waitForExist({ timeout: 5000 })
        await this.#moreDetails.click()
    }

    get #shipping(){
        return $('android= new UiSelector().text("Shipping")')
    }

    get #weight(){
        return $('//android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.EditText')
    }

    get #length(){
        return $('//android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.EditText')
    }

    get #width(){
        return $('//android.widget.LinearLayout[3]/android.widget.FrameLayout/android.widget.EditText')
    }

    get #height(){
        return $('//android.widget.LinearLayout[4]/android.widget.FrameLayout/android.widget.EditText')
    }

    async fillShipping(){
        await this.#shipping.waitForExist({ timeout: 5000 })
        await this.#shipping.click()
        await this.#weight.waitForExist({ timeout: 5000 })
        await this.#weight.setValue('10')
        await this.#length.setValue('15')
        await this.#width.setValue('20')
        await this.#height.setValue('25')
        await this.#turnBackButton.waitForExist({ timeout: 5000 })
        await this.#turnBackButton.click()
    }

    get #publishButton(){
        return $('id:menu_done')
    }

    async publishProduct(){
        await this.#publishButton.waitForExist({ timeout: 5000 })
        await this.#publishButton.click()
    }

    get #menuButton(){
        return $('~More options')
    }

    async seeMoreOptions(){
        await this.#menuButton.waitForExist({ timeout: 10000 })
        await this.#menuButton.click()     
    }

    get #viewOnStoreOption(){
        return $('//android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.RelativeLayout/android.widget.TextView')
    }

    async getViewOnStoreOption(){
        await this.#viewOnStoreOption.waitForExist({ timeout: 5000 })
        return await this.#viewOnStoreOption.getText()   
    }
}

module.exports = new newProductScreen()