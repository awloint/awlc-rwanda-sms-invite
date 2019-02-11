'use strict'
document.addEventListener('DOMContentLoaded', e => {
  let date = new Date()
  const year = date.getFullYear()

  let yearContent = document.querySelector('#year')

  yearContent.innerHTML = year

  const form = document.querySelector('form')

  // Capitalize the first letter of Middle Name
  document.querySelector('#friendName').onchange = e => {
    var val = document.querySelector('#friendName').value
    RegExp = /\b[a-z]/g

    val = val.charAt(0).toUpperCase() + val.substr(1)
  }

  form.addEventListener('submit', e => {
    let forms = document.getElementsByClassName('needs-validation')
    let validation = Array.prototype.filter.call(forms, function (form) {
      if (form.checkValidity() === false) {
        e.preventDefault()
        e.stopPropagation()
      }
      form.classList.add('was-validated')
    })

    //   const formdata = new FormData(form)
    if (form.checkValidity() === true) {
      e.preventDefault()

      document.querySelector('button').classList.remove('btn-danger')
      document.querySelector('button').classList.add('btn-primary')
      document.querySelector('button').innerHTML =
        'Loading <span class="spinner"></span><i class="fa fa-spinner fa-spin"></i></span>'

      const formdata = new FormData(form)

      // initiate a fetch call
      fetch('processor.php', {
        method: 'post',
        body: formdata
      })
        .then(response => {
          return response.json()
        })
        .then(data => {
          if (data === 'success') {
            swal('Invite Sent', 'Your invite was sent successfully!', 'success')
            //   setTimeout(function () {
            //       window.location = 'https://hopebehindbarsafrica.org/'
            //   }, 3000)
          }
        })
        .catch(error => {
          console.log('The Request Faild', error)
        })
    }
  })
})
