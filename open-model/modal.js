/**
 * TODO 1: Select the elements with the following IDs:
    * modal
    * open-modal-btn
    * close-modal-btn
    * BONUS: overlay
 */
const modal = document.querySelector('#modal')
const open_modal_btn = document.querySelector('#open-modal-btn')
const close_modal_btn = document.querySelector('#close-modal-btn')
const overlay = document.querySelector('#overlay')

/**
 * TODO 2: Create a click event Listener for the open-modal-btn that adds
 *   the class "open" to the modal
 * BONUS: Also add the class "open" to the overlay
 *
*/
open_modal_btn.addEventListener('click', () => {
    modal.classList.add('open');
    overlay.classList.add('open');
});

/**
 * TODO 3: Create a click event Listener for the close-modal-btn that removes
 *   the class "open" from the modal
 * BONUS: Also remove the class "open" to the overlay
 */

close_modal_btn.addEventListener('click', () => {
    closeModal()
})

// BONUS: Add a click event Listener to the overlay that removes the 
//  class "open" from the modal and the overlay. 
overlay.addEventListener('click', () => {
    closeModal()
})

// For efficiency, creat a function that removes both
// classses (open) of the modal and the overlay

function closeModal() {
    modal.classList.remove('open')
    overlay.classList.remove('open')
}