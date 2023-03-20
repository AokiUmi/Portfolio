const modal1 = document.querySelector('#portfolioModal1'); // Replace 'your-modal-id' with the ID of your modal <div> element
const video1 = modal.querySelector('#demo'); // Get the video element inside the modal


const observer1 = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
        if (mutation.attributeName === 'style') { // Check if the 'style' attribute was modified
            const styles = mutation.target.style;
            const wasHidden = styles.display === 'none';
            if (wasHidden) {
                video1.pause(); // Pause the video if the modal is now hidden
            }
        }
    }
});

observer1.observe(modal1, {
    attributes: true
}); // Start observing changes to the modal's attributes