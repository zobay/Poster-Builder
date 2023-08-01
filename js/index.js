const data = {
    value: ''
};

const heading = document.getElementById('heading');
const description = document.getElementById('description');

const printHeading = () => {
    const el = document.getElementById('val');
    el.innerText = data.prop;
};

const printDescription = () => {
    const el = document.getElementById('description_value');
    el.innerText = data.prop;
};

heading.addEventListener('keyup', () => {
    data.prop = heading.value;
    printHeading();
});

description.addEventListener('keyup', () => {
    data.prop = description.value;
    printDescription();
});
