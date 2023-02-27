const meet = () => {
    let isAdmit = false;
    displayButtons(startAdmit);

    const admit = getElement(true, 'startAdmit');
    const admitText = getElement(true, 'btn-text');

    admit.addEventListener('click', () => {
        isAdmit = !isAdmit;
        if (isAdmit) {
            admitText.innerText = '🚫';
        }
        else {
            admitText.innerText = '🟢';
        }
    })
}
