const homeScreen = require("../screens/home.screen");
const { login } = require("../screens/login.screen");
const loginScreen = require("../screens/login.screen");
const myStoreScreen = require("../screens/myStore.screen");
const productsScreen = require("../screens/products.screen");
const newProductScreen = require("../screens/newProduct.screeen");
const newProductScreeen = require("../screens/newProduct.screeen");

let usuario = 'gerente'
let senha = 'GD*peToHNJ1#c$sgk08EaYJQ'
let urlLoja = 'http://lojaebac.ebaconline.art.br/'

describe('Acessar o Painel de Administrador e cadastrar Produto', () => {
    it('Deve realizar Login e cadastrar Produto', async () => {
        await homeScreen.goToLogin()
        await loginScreen.setStoreAddress(urlLoja)
        await loginScreen.continue()
        await loginScreen.continueWithStoreCredentials()
        await loginScreen.login(usuario,senha)
        await loginScreen.goToTwoFactorAuth()
        await loginScreen.twoFactorLogin(senha)

        expect(await myStoreScreen.myStoreLogoIsDisplayed()).toBeTruthy()
        expect(await myStoreScreen.getStoreName()).toEqual('EBAC - Shop')

        await myStoreScreen.goToProducts()
        await productsScreen.selectTypeOfNewProduct()
        await newProductScreen.addImage()
        await newProductScreeen.enterProductTitle()
        await newProductScreeen.describeYourProduct()
        await newProductScreeen.fillPrice()
        await newProductScreeen.fillInventory()
        await newProductScreeen.addMoreDetails()
        await newProductScreeen.fillShipping()
        await newProductScreeen.publishProduct()
        await newProductScreeen.seeMoreOptions()

        expect(await newProductScreeen.getViewOnStoreOption()).toEqual('View product on store')

    });
})