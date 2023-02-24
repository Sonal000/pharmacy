
const userLoging=document.querySelector('.user-logging');
const overlay=document.querySelector('.overlay');
const userLog=document.querySelectorAll('.user-log');


const openLog = function () {
 // e.preventDefault();
 userLoging.classList.remove('section-hidden');
 console.log('hii');
 overlay.classList.remove('hidden');
};

const closeLog = function () {
 userLoging.classList.add('section-hidden');
 overlay.classList.add('hidden');
};

userLog.forEach(btn =>btn.addEventListener('click',openLog));




for (let i = 0; i < openLog.length; i++)
openLog[i].addEventListener('click', openLog);

// openLog.addEventListener('click', closeLog);
overlay.addEventListener('click', closeLog);

document.addEventListener('keydown', function (e) {
 if (e.key === 'Escape' && !userLoging.classList.contains('section-hidden')) {
   closeModal();
 }
});
