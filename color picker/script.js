const dynamicInputs = document.querySelectorAll('input.input-color-picker');

dynamicInputs.forEach((item) => {
    item.addEventListener('input', (e) => {
        const cssPropName = `--primary-${e.target.getAttribute('data-id')}`;
        const root = document.querySelector(':root');
        root.style.setProperty(cssPropName, e.target.value);
    });
});