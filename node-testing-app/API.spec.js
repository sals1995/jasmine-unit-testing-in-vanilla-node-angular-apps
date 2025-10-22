
describe("lab testing:", () => {

    describe("users routes:", () => {
        it("GET /user/id should respond with the correct user with the id requested",  () => { })
        it("GET /user/id with invalid id should respond with status 404 and the message",  () => { })

    })


    describe("todos routes:", () => {
      
        it("DELETE  /todo/id (with token): should delete the todo with that id",  () => { })
        it("DELETE  /todo/id (without token): should respond with 401 and not delete the todo with that id",  () => { })

    })



})