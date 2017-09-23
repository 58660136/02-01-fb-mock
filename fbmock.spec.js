/*function returnInt(val){
    return val
}*/

//มันเขียนฟังก์ชันให้โดยที่ไม่ต้องเขียนเอง
/*
test('Mock function should be return 1',() => {
    const mockFn = jest.fn().mockReturnValue(1)

    //const a = 1
    console.log(`Result form mockFn() = $(mockFn())`)

})
*/

function MyAuth(authService){
    this.authService = authService

    this.signInWithFacebook = (phone, password) => {
        let fbUserObject = this.authService(phone, password)
        return fbUserObject
        //return { name:'Jame', facebookId: '1234567890', email: 'jamejam7777@gmail.com'}
    }
}

/*
test('Mock function should be return 1',() => {
    //jest.fn() = PK
    const returnInt = jest.fn(1).mockReturnValue(1)
    //ทำการ mock function 
    expect(returnInt(1)).toBe(1)
    expect(returnInt).toBeCalledWith(1)

})
*/
//ใครใส่username password นี้ mock จะ return ค่านี้

test('Call signWithFacebook with valid credential shouls pass',() => {
    const facebookAuth = jest.fn('0898887777','abc55555')
    .mockReturnValue({ name:'Jame', facebookId: '123456789', email: 'jamejam7777@gmail.com'})
    //ต้องเรียกค่าที่ถูกถึงจะได้สิ่้งที่ถูก
    let app = new MyAuth(facebookAuth)
    let phone = '0898887777'
    let password = 'abc55555'
    let value = app.signInWithFacebook(phone, password)

    expect(value).toEqual({ name:'Jame', facebookId: '123456789', email: 'jamejam7777@gmail.com'})
    expect(facebookAuth).toBeCalled()
    expect(facebookAuth).toBeCalledWith('0898887777','abc55555')
})

