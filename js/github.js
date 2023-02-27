const github = () => {


    displayButtons(view + reload);

    document.getElementById('handleView').addEventListener('click', function () {
        const date = document.getElementsByTagName('relative-time')[0].attributes.title.value;
        const commits = document.getElementsByTagName('strong')[12].innerHTML;

        const resultBtn = `<button id="handleCopy" type="button" class="btn btn-primary text-bolder mb-2 ">
        <span>${date}</span>
        <hr class='m-0'/>
        <span>Total Commits:- ${commits}</span>
        </button>`;

        displayButtons(resultBtn + view + reload);

        //to copy
        document.getElementById('handleCopy').addEventListener('click', function () {
            navigator.clipboard.writeText(date)
        })
    });



}


