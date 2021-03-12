const app = Vue.createApp({
    // template: '<h1>Hello {{ firstname }}!</h1>',
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            age : 10,
            email: 'John@gmail.com',
            country: 'India',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
        async getUser() {

            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()

            console.log(results)

            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.age = results[0].dob.age
            this.email = results[0].email
            this.country = results[0].location.country
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        }
    },
})

app.mount('#app')

// mount, methods, createApp, data, async-await-api