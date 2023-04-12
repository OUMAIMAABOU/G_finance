const supertest = require('supertest')
const app = require('../server')


// test unit for login 
describe("test for login function", () => {
    //when email and password is missing
    describe("when email and password is missing", () => {
        test('without email and password', async () => {
            const response = await supertest(app).post('/Gfinance').send({
                query: `mutation{
                login(email:"", password: "") {
                    login {
                        email
                        password
                    }
                }
            }`
            })
            expect(response.body.errors[0].message).toBe('Please enter all fields')
        })
    })

    // //incorrect password
    describe("incorrect password ", () => {
        test('incorrect password ', async () => {
            const response = await supertest(app).post('/Gfinance').send({
                query: `mutation{
                login(email:"chaimaetoumy5@gmail.com", password: "azerty") {
                    user {
                        email
                        password
                    }
                }
            }`
            })
            expect(response.body.errors[0].message).toBe('Invalid password')
        })
    })

    //email not verified
    describe("email not verified", () => {
        test('email not verified', async () => {
            const response = await supertest(app).post('/Gfinance').send({
                query: `mutation{
                login(email:"youcode2022@gmail.com", password: "test") {
                    user {
                        email
                        password
                    }
                }
            }`
            })
            expect(response.body.errors[0].message).toBe('Please verify your email')
        })
    })

    //user not exist
    describe("user not exist ", () => {
        test('user not exist ', async () => {
            const response = await supertest(app).post('/Gfinance').send({
                query: `mutation{
                login(email:"test@gmail.com", password: "abc") {
                    user {
                        email
                        password
                    }
                }
            }`
            })
            expect(response.body.errors[0].message).toBe('User not exist')
        })
    })

})



//test unit for forgot password
describe("test for forgot password function", () => {
    describe("when email is missing", () => {
        test('when email is missing', async () => {
            const response = await supertest(app).post('/Gfinance').send({
                query: `mutation{
                foregetPassword(email:"") {
                    email
                }
            }`
            })
            expect(response.body.errors[0].message).toBe('email is required')
        })
    })
    describe("when email is not exist", () => {
        test('when email is not exist', async () => {
            const response = await supertest(app).post('/Gfinance').send({
                query: `mutation{
                foregetPassword(email:"khadijaa@gmail.com") {
                    email
                }
            }`
            })
            expect(response.body.errors[0].message).toBe('User not exist')
        })
    })
})

//test unit for reset password
describe("test for reset password function", () => {
    describe("when password is missing", () => {
        test('when password is missing', async () => {
            const response = await supertest(app).post('/graphql').send({
                query: `mutation{
                resetPassword(
                    password:"",
                    token:"342112a6573a2e08a0d0068315916d538ebf84edf512861b5d57e9b852b2e336d5ffaea893cc3087a7bf4681e8c06f7a5d1e64e48e811bffd8c29ed8f9de4566"
                    )
                {
                    password
            }
            }`
            })
            expect(response.body.errors[0].message).toBe('Password is required')
        })
    })
})