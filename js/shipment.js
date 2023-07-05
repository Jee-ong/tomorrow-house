const shipmentButton = document.querySelector('.product-shipment .icon-button')

function showFullSection() {
  const section = this.parentNode.parentNode
  section.classList.add('is-open')
}

shipmentButton.addEventListener('click', showFullSection)
