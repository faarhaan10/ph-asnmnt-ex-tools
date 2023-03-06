const iPortal = () => {
    displayButtons(openModal + pressE + focus + submitMark + assimentAdd+reload + closeModal);


    const focusButton = getElement(true, 'focus');
    const modalOpen = getElement(true, 'openModal');
    const modalClose = getElement(true, 'closeModal');
    const press = getElement(true, 'pressE');
    const submitMarkSecondary = getElement(true, 'submitMark');
    const addAssignment = getElement(true, 'addAssignment');


    focusButton.addEventListener('click', function () {
        const inputMark = getElement(true, 'Mark');
        inputMark.focus(() => {
            inputMark.value = 22;
            document.dispatchEvent(new KeyboardEvent('keydown', { 'key': 3 }));

        });
        document.dispatchEvent(new KeyboardEvent('keydown', { 'key': 3 }));
    });

    //click to submit mark
    submitMarkSecondary.addEventListener('click', function () {
        const submitButtonPrimary = getElement(false, 'btn px-4 btn-primary')[0];
        submitButtonPrimary.click();
    });

    //open 1st assignment
    modalOpen.addEventListener('click', function () {
        const open = getElement(false, 'btn btn-icon btn-eye-icon btn-primary ');
        open[0].click();
    });

    //close the Modal window
    modalClose.addEventListener('click', function () {
        const close = getElement(false, 'btn btn-close');
        close[0].click();
    });

    //press E
    press.addEventListener('click', function () {
        document.dispatchEvent(new KeyboardEvent('keydown', { 'key': ']' }));
    });

    //add assignment
    addAssignment.addEventListener('click', function () { 
        const checkbox = getElement(true, 'thead-checkbox');
        const assignBtn = getElement(false, 'low-op-btn float-right btn btn-outline-primary')[0];
        checkbox.click();
        assignBtn.click();
        const okBtn = getElement(false, 'swal-button swal-button--confirm swal-button--danger')[0];
okBtn.click();
    })


}