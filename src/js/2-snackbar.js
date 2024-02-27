// console.log('snackbar');
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const delayInput = document.getElementsByName('delay')[0];
    const stateInput = document.querySelector('input[name="state"]:checked');
    const delay = parseInt(delayInput.value, 10);

    const promise = new Promise((resolve, reject) => {
        if (stateInput.value === 'fulfilled') {
            setTimeout(() => resolve(delay), delay);
        } else {
            setTimeout(() => reject(delay), delay);
        }
    });

    promise.then(
        (result) => {
            iziToast.show({
                titleColor: '#fff',
                messageColor: '#fff',
                message: `✅ Fulfilled promise in ${delay}ms`,
                closeOnEscape: true,
                position: 'topRight',
                backgroundColor: '#59a10d',
            });
        },
        (result) => {
            iziToast.show({
                titleColor: '#fff',
                messageColor: '#fff',
                message: `❌ Rejected promise in ${delay}ms`,
                closeOnEscape: true,
                position: 'topRight',
                backgroundColor: '#ef4040',
            });
        }
    );
});