describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio'); // Зайти на сайт
         cy.get('#mail').type('german@dolnikov.ru');// Ввел верный логин
         cy.get('#pass').type('iLoveqastudio1');// Ввел верный пароль
         cy.get('#loginButton').click();// Нажал войти
         cy.get('#messageHeader').should('be.visible');// Текст виден пользователю
         cy.get('#messageHeader').contains('Авторизация прошла успешно');// Проверяю что после авторизации вижу текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');// Есть крестик и он виден пользователю
     })
     it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio'); // Зайти на сайт
        cy.get('#forgotEmailButton').click(); // Нажал забыли пароль
        cy.get('#mailForgot').type('lavata@yandex.ru'); // Ввел логин для восстановления
        cy.get('#restoreEmailButton').click(); // Нажал отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');// Проверяю что после отправки вижу текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
    })
     it('Верный логин и неверный пароль', function () {
         cy.visit('https://login.qa.studio'); // Зайти на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // Ввел верный логин
         cy.get('#pass').type('iLoveqastudio777'); // Ввел неверный пароль
         cy.get('#loginButton').click(); // Нажал Войти
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю что после авторизации вижу текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
     })
     it('Не верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio'); // Зайти на сайт
        cy.get('#mail').type('lavata@yandex.ru'); // Ввел не верный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввел верный пароль
        cy.get('#loginButton').click(); // Нажал Войти
        cy.get('#messageHeader').should('be.visible');// Текст виден пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю что после авторизации вижу текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
    })
     it('Валидация на наличие @', function () {
         cy.visit('https://login.qa.studio'); // Зайти на сайт
         cy.get('#mail').type('germandolnikov.ru'); // Ввел  логин без символа @
         cy.get('#pass').type('iLoveqastudio1'); // Ввел верный пароль
         cy.get('#loginButton').click(); // Нажал Войти
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю что после авторизации вижу текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
     })
     it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio'); // Зайти на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввел логин не строчными буквами
        cy.get('#pass').type('iLoveqastudio1'); // Ввел верный пароль
        cy.get('#loginButton').click(); // Нажал Войти
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю что после авторизации вижу текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
    })
 })