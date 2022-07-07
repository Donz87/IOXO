
const forms = () => {
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        textarea = document.querySelectorAll('textarea');


    const message = {
        loading: 'Loading...',
        success: 'Thank You! <br> We will contact you soon',
        failure: 'Something went wrong...'
    };
    const postData = async(url, data) => {
        document.querySelector('.status').innerHTML = message.loading;
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach(input => {
            input.value = '';
        })
    }
    const clearTextarea = () => {
        textarea.forEach(item => {
            item.value = '';
        })
    }

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);
            postData('./server.php', formData)
                .then(res => {
                    statusMessage.innerHTML = message.success;
                })
                .catch(() => statusMessage.innerHTML = message.failure)
                .finally(() => {
                    clearInputs();
                    clearTextarea();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 2000);
                });
        });
    });

}

export default forms;