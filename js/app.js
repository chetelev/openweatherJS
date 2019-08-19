const hamburgerDropdown = document.querySelector('#hamburgerIcon');
const hamburgerList = document.querySelector('#nav-sidebar-closed')
const closeHamburger = document.querySelector('#closeHamburger')

hamburgerDropdown.addEventListener('click', function () {
    hamburgerList.id = 'nav-sidebar-open';
})
closeHamburger.addEventListener('click', function () {
    hamburgerList.id = 'nav-sidebar-closed';
})


// TODO 1.add animation to hamburger / 2. shadow border to languages box / 3. language box scrollbar design /4.