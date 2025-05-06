Feature('login');

Scenario('Login com sucesso',  ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/');
    I.click('Login')
    I.waitForText('Login', 10)
    I.fillField('#user', 'teste@auto.com')
    I.fillField('#password', '123456')
    I.click('#btnLogin')
    I.waitForText('Login realizado',3)

}).tag('@sucesso')

Scenario('Tentando Logar digitando apenas o e-mail',  ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login', 10)
    I.fillField('#user', 'teste@auto.com')
    I.fillField('#password', '')
    I.click('#btnLogin')
    I.waitForText('Senha inválida',3)

}).tag('@senhainvalida')

Scenario('Tentando logar sem digitar e-mail e senha',  ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login', 10)
    I.fillField('#user', '')
    I.fillField('#password', '')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido',10)

}).tag('vazio')

Scenario(' Tentando Logar digitando apenas a senha',  ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login', 10)
    I.fillField('#user', '')
    I.fillField('#password', '123456')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido',10)

}).tag('@sememail')