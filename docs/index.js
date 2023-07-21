const dropdownBtn = document.querySelectorAll('.dropdown-btn');
const dropdown = document.querySelectorAll('.dropdown');

function closeDropdownMenu(){
    dropdown.forEach((drop)=>{
        drop.classList.add('hidden');
    })
}

dropdownBtn.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        const dataSetValue = e.currentTarget.dataset.dropdown;
        const dataSetElement = document.getElementById(dataSetValue);
        dataSetElement.classList.toggle('hidden');
        dropdown.forEach((drop)=>{
            if(drop.id !== btn.dataset['dropdown']){
                drop.classList.add('hidden');
            }
        });
        e.stopPropagation(
            btn.setAttribute('aria-expanded', btn.getAttribute('aria-expanded') === 'false' ? 'true' : 'false')
        );
    });
});

document.documentElement.addEventListener('click', ()=>{
    closeDropdownMenu();
});

document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape'){
        closeDropdownMenu();
    }
})