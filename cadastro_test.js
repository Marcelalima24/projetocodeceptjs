Feature('cadastro');

Scenario('Cadastro com sucesso',  ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/');
    I.click('Cadastro')
    I.waitForText('Cadastro', 10)
    I.fillField('#user', 'Marcela')
    I.fillField('#email', 'teste@auto.com')
    I.fillField('#password', '123456')
    I.click('#btnRegister')
    I.waitForText('Cadastro realizado',3)

}).tag('@cadastrosucesso')

Scenario('Cadastro sem nome',  ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/');
    I.click('Cadastro')
    I.waitForText('Cadastro', 10)
    I.fillField('#email', 'teste@auto.com')
    I.fillField('#password', '123456')
    I.click('#btnRegister')
    I.waitForText('O campo nome deve ser prenchido',3)

}).tag('@cadastrosemnome')

Scenario('Cadastro sem email',  ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/');
    I.click('Cadastro')
    I.waitForText('Cadastro', 10)
    I.fillField('#user', 'Marcela')
    I.fillField('#password', '123456')
    I.click('#btnRegister')
    I.waitForText('O campo e-mail deve ser prenchido corretamente',4)

}).tag('@cadastrosememail')


Scenario('Cadastro sem senha',  ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/');
    I.click('Cadastro')
    I.waitForText('Cadastro', 10)
    I.fillField('#user', 'Marcela')
    I.fillField('#email', 'teste@auto.com')
    I.click('#btnRegister')
    I.waitForText('O campo senha deve ter pelo menos 6 dígitos',4)

}).tag('@cadastrosemsenha')


