let devItemContainer = document.querySelector(".developer__item__container");
let devAddForm = document.querySelector("form.devAddForm");
let skillsSelect = document.querySelector('.devAddForm select[name="devSkill"]');
let isChecked = document.querySelector("#generateData:checked");
let lsDevArr = ls.getItem("lsDevArr") ? ls.getItem("lsDevArr") : [];


// Generate Form Data if generate checkbox checked
function formInputValueGenerate() {

    const formData = {
        devName: [
            "Muhammad Sumon",
            "Arif Ahmed",
            "Asik Rahman",
            "Imran Mahmud",
            "Rimon Hossen",
            "Omar Faruk",
            "Hasan Mahmud",
            "Huzaifa Rahman",
            "Asraf Ahmed",
            "Asid Khan",
            "Muhammad Faruk",
        ],
        devTitle: [
            "Mern Stack Dev",
            "Python Dev",
            "Php Dev",
            "Wordpress Dev",
            "GO Dev",
            "Full Stack Dev",
            "Javascript Dev",
            "Kotlin Dev",
            "Flutter Dev",
        ],
        devImg: [
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",

            "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

            "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

            "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

            "https://images.unsplash.com/photo-1507081323647-4d250478b919?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

            "https://images.unsplash.com/photo-1520341280432-4749d4d7bcf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",

            "https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

        ],
        devLocation: [
            "Mirpur",
            "Mohammadpur",
            "Shamoli",
            "Banani",
            "Lalmatia",
            "Dhanmondi",
            "Bosila",
            "America",
            "Russia",
            "Koria",
            "Turkey",
        ],
        devAge: Math.floor(Math.random() * (55 - 15 + 1) + 15),
        devIncome: Math.floor(Math.random() * (8445 - 863 + 1) + 863),
    }

    devName.value = formData.devName[Math.floor(Math.random() * formData.devName.length)];
    devImg.value = formData.devImg[Math.floor(Math.random() * formData.devImg.length)];
    devLocation.value = formData.devLocation[Math.floor(Math.random() * formData.devLocation
        .length)];
    devAge.value = formData.devAge;
    devIncome.value = formData.devIncome;
    skillsSelect.querySelectorAll("option").forEach(data => {
        let skillArr = skillsSelect.querySelectorAll("option");
        data.hasAttribute("selected") ? data.removeAttribute("selected") : null;
        skillArr[Math.floor(Math.random() * skillArr.length)].setAttribute("selected", "");
    })

}
document.querySelector("#generateData").addEventListener("change", function () {
    isChecked = this.value;
    document.querySelector("#generateData:checked") ? formInputValueGenerate() : null;
})
document.querySelector("#generateData:checked") ? formInputValueGenerate() : null;


// Show All Dev
function showdevs() {

    let devList = '';
    lsDevArr.map(singleDevInfo => {
        let {
            devName: name,
            devSkill: title,
            devImg: image,
            devIncome: income,
            devLocation: location,
            devAge: age,
            id
        } = singleDevInfo;

        devList += `

        <div class="developer__item">
        <div class="position-relative">
            <img src="assets/images/img__bg.png" alt="pattern">
            <img src="${image}">
            <img src="assets/images/img_bottom_shape.png" alt="img__bottom__shape">
        </div>
        <h2 class="developer__name">${name}</h2>
        <button class="devItemRemove" inu="${id}" onclick="devRemove('${id}')"><i
                class="border rounded fas fa-times"></i></button>
        <button class="devEdit" inu="${id}" onclick="devEdit('${id}')"><i
                class="border rounded fas fa-edit"></i></button>
        <div class="developer__desc">
            <div>
                <p class="developer__desc__item title">${title}</p>
                <p class="developer__desc__item age">${age} Year Old</p>
            </div>
            <div>

                <p class="developer__desc__item location">${location}</p>
                <p class="developer__desc__item income">${shortAnything.incomeSort(income,"$")}/Year</p>
            </div>

        </div>
        </div>

        `
    })

    devItemContainer.innerHTML = devList;

}
showdevs();

// Add Dev after form submit
devAddForm.onsubmit = (e) => {
    e.preventDefault();

    let devformObj = new FormData(devAddForm);
    let formData = Object.fromEntries(devformObj.entries());
    formData.id = generate.numberWithAlpha(6);
    lsDevArr.unshift(formData);
    ls.setItem("lsDevArr", lsDevArr);

    // Updata Dev List
    showdevs();

    // Generate Form Data on submit
    (document.querySelector("#generateData:checked") ? formInputValueGenerate() : null);
}

// Remove or Delete Dev
function devRemove(id) {

    lsDevArr.map(singleDevInfo => {

        if (singleDevInfo.id == id) {

            var index = lsDevArr.indexOf(singleDevInfo);
            if (index !== -1) {
                lsDevArr.splice(index, 1);
            }

            ls.setItem("lsDevArr", lsDevArr);

            document.querySelector(".teamMember__container").classList.remove("editMode");
            showdevs();
        }
    })

}

// Edit Dev Info
function devEdit(id) {

    let clickedDevCard = document.querySelector(`button[inu='${id}'`);
    let editForm = document.querySelector(".editDevInfoForm");

    // Remove Border from all dev info without selected dev info
    document.querySelectorAll(".developer__item").forEach(devItem => {
        devItem.style.border = "none ";
    });
    clickedDevCard.parentElement.style.border = "1px solid rgb(41, 141, 10)";

    // Get Data From Dev Card & Assign it to Dev Edit Form
    lsDevArr.map(singleDevInfo => {
        if (singleDevInfo.id == id) {

            let {
                devName: name,
                devSkill: title,
                devImg: image,
                devIncome: income,
                devLocation: location,
                devAge: age,
                id
            } = singleDevInfo;

            // Active Dev Info Edit Form
            document.querySelector(".teamMember__container").classList.add("editMode");
            editForm.innerHTML = `
                                 <div class="border p-2">
                                     <label class="text-center w-100">Edit Devs Info</label>
                                 </div>

                                 <input required value="${name}" id="devName" name="devName" class="w-100 p-2 my-2"
                                     placeholder="Developer Name" type="text">

                                 <select class="form-select" name="devSkills" id="devTitle" required>

                                     <option class="user-select-none" value="" disabled="">Select Devs Skill</option>

                                     <option value="Php Developer">Php Dev</option>

                                     <option value="Python Developer">Python Dev</option>

                                     <option value="C# Developer">C# Dev</option>

                                     <option value="JS Developer" >JS Dev</option>

                                     <option value="Java Developer">Java Dev</option>

                                 </select>

                                 <input required value="${image}" id="devImg" name="devImg" class="w-100 p-2 my-2" placeholder="Developer image"
                                     type="text">

                                 <input value="${location}" required id="devLocation" name="devLocation" class="w-100 p-2 my-2"
                                     placeholder="Developer Location" type="text">

                                 <input value="${age}" required id="devAge" name="devAge" class="w-100 p-2 my-2" placeholder="Developer Age"
                                     type="number">

                                 <input value="${income}" required id="devIncome" name="devIncome" class="w-100 p-2 my-2"
                                     placeholder="Developer Income Ex- 4200$" type="text">

                                 <input class="w-100 p-2 my-2 btn btn-success" value="Save Changes" type="submit">
                                 <a href="" class="cancelEdidDev" style="margin: auto;display: block;text-align: center;text-decoration: underline;">Cancel</a>
                     `;

            // Get & Set Dev Title
            editForm.querySelectorAll(`select option`).forEach(devtitle => {
                if (devtitle.getAttribute("value") == `${title}`) {
                    devtitle.setAttribute("selected", "");
                }
            });

        }
    })

    // Save Dev Info
    editForm.onsubmit = function (e) {

        e.preventDefault();

        lsDevArr.map(singleDevInfo => {
            if (singleDevInfo.id == id) {

                let formObj = new FormData(editForm);
                let formData = Object.fromEntries(formObj.entries());

                let {
                    devName: name,
                    devSkills: title,
                    devImg: image,
                    devIncome: income,
                    devLocation: location,
                    devAge: age
                } = formData;

                singleDevInfo.devName = name;
                singleDevInfo.devSkill = title;
                singleDevInfo.devImg = image;
                singleDevInfo.devIncome = income;
                singleDevInfo.devLocation = location;
                singleDevInfo.devAge = age;

                ls.setItem("lsDevArr", lsDevArr);

                // Instant Update Dev Card
                showdevs();

                document.querySelector(".teamMember__container").classList.remove("editMode");

            }
        })
    }

    // Cancel Developer Info Edit
    document.querySelector(".cancelEdidDev").onclick = (e) =>{
        e.preventDefault();
        document.querySelector(".teamMember__container").classList.remove("editMode");
        document.querySelectorAll(".developer__item").forEach(devItem => {
            devItem.style.border = "none ";
        });
    }

}