const bmi_info = document.getElementById(" bmi_info");
        const btnid = document.getElementById("btnid");
        btnid.addEventListener("click", getBmi_info);
        const
            bmi_info_one = document.getElementById("bmi_info_one");
        const
            btnid_one = document.getElementById("btnid_one");
        btnid_one.addEventListener("click", getBmi_info_one);
        const bmi_info_two = document.getElementById("bmi_info_two");
        const
            btnid_two = document.getElementById("btnid_two");
        btnid_two.addEventListener("click", getBmi_info_two);
        const bmi_info_three = document.getElementById("bmi_info_three");
        const
            btnid_three = document.getElementById("btnid_three");
        btnid_three.addEventListener("click",
            getBmi_info_three);
        const bmi_info_four = document.getElementById("bmi_info_four");
        const
            btnid_four = document.getElementById("btnid_four");
        btnid_four.addEventListener("click",
            getBmi_info_four);
        const bmi_info_five = document.getElementById("bmi_info_five");
        const
            btnid_five = document.getElementById("btnid_five");
        btnid_five.addEventListener("click",
            getBmi_info_five);
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
                'X-RapidAPI-Key': 'a3af189df7mshc499487c96fcfb1p189f80jsndc2516bb2953'
            }
        };

        function getBmi_info() {
            fetch('https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken%20soup', options)
                .then(response => response.json())
                .then(response => {
                    const div = document.getElementById("bmi_info") // NEW!
                    div.innerText = JSON.stringify(response)

                })
                .catch(err => console.error(err));
        }

        const option_one = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'food-nutrition-information.p.rapidapi.com',
                'X-RapidAPI-Key': 'a3af189df7mshc499487c96fcfb1p189f80jsndc2516bb2953'
            }
        };

        function getBmi_info_one() {
            fetch('https://food-nutrition-information.p.rapidapi.com/food/1497465', option_one)
                .then(response => response.json())

                .then(response => {
                    const div = document.getElementById("bmi_info_one") // NEW!
                    div.innerText = JSON.stringify(response)

                })
                .catch(err => console.error(err));
        }


        const option_recipe_auto = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
                'X-RapidAPI-Key': 'a3af189df7mshc499487c96fcfb1p189f80jsndc2516bb2953'
            }
        };

        function getBmi_info_two() {
            fetch('https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken%20soup', option_recipe_auto)
                .then(response => response.json())
                .then(response => {
                    const div = document.getElementById("bmi_info_two") // NEW!
                    div.innerText = JSON.stringify(response)

                })
                .catch(err => console.error(err));
        }

        function getBmi_info_three() {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
                    'X-RapidAPI-Key': 'a3af189df7mshc499487c96fcfb1p189f80jsndc2516bb2953'
                }
            };

            fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes', options)
                .then(response => response.json())
                .then(response => {
                    const div = document.getElementById("bmi_info_three") // NEW!
                    div.innerText = JSON.stringify(response)

                })
                .catch(err => console.error(err));

        }

        function getBmi_info_four() {

            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
                    'X-RapidAPI-Key': 'a3af189df7mshc499487c96fcfb1p189f80jsndc2516bb2953'
                }
            };

            fetch('https://tasty.p.rapidapi.com/recipes/get-more-info?id=8138', options)
                .then(response => response.json())
                .then(response => {
                    const div = document.getElementById("bmi_info_four") // NEW!
                    div.innerText = JSON.stringify(response)

                })
                .catch(err => console.error(err));
        }

        function getBmi_info_five() {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Host': 'calorieninjas.p.rapidapi.com',
                    'X-RapidAPI-Key': 'a3af189df7mshc499487c96fcfb1p189f80jsndc2516bb2953'
                }
            };

            fetch('https://calorieninjas.p.rapidapi.com/v1/nutrition?query=tomato', options)
                .then(response => response.json())
                .then(response => {
                    const div = document.getElementById("bmi_info_five") // NEW!
                    div.innerText = JSON.stringify(response)

                })
                .catch(err => console.error(err));

        }