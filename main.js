new Vue ({
    el: '#app',
    data: {
        test: 'hello world',

        stars: ['Leonardo Di Caprio', 'Mø', 'Arnold Schwarzenegger'],

        starsWithAge: [
            { name:'Leonardo', age:45 },
            { name:'Leonardo', age:72 },
            { name:'Mø', age:'?' }
        ],

        veganRecipies: [
            {
             name: 'Oatmeal' ,
             ingredient1: 'Water' ,
             ingredient2: 'Salt' 
            },
            {
            name: 'Carrot salat',
            ingredient1: 'carrot',
            ingredient2: 'apples'
            },
            {
            name: 'Avocado on bread',
            ingredient1: 'Avocado',
            ingredient2: 'Bread'
            }
        ],
        veganRecipies2: [
            {
             name: 'Oatmeal' ,
             ingredientsArray: ['Water', 'Salt'] 
            },
            {
            name: 'Carrot salat',
            ingredientsArray: ['Water', 'Salt']
            },
            {
            name: 'Avocado on bread',
            ingredientsArray: ['Water', 'Salt']
            }
        ]

    }
});