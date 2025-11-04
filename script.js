  // Get the form element
        const form = document.getElementById('internshipForm');
        
        // Add submit event listener
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            event.stopPropagation();
            
            // Check if form is valid
            if (!form.checkValidity()) {
                // Add validation classes to show errors
                form.classList.add('was-validated');
                
                // Add is-invalid class to invalid fields
                const inputs = form.querySelectorAll('input, select');
                inputs.forEach(input => {
                    if (!input.validity.valid) {
                        input.classList.add('is-invalid');
                    } else {
                        input.classList.remove('is-invalid');
                    }
                });
                
                // Handle checkbox validation
                const checkbox = document.getElementById('conditions-checkbox');
                if (!checkbox.checked) {
                    checkbox.classList.add('is-invalid');
                } else {
                    checkbox.classList.remove('is-invalid');
                }
            } else {
                // Form is valid, you can submit it here
                alert('Form submitted successfully!');
                form.reset();
                form.classList.remove('was-validated');
            }
        });
        
        // Add real-time validation on input
        const inputs = form.querySelectorAll('input, select');
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                if (form.classList.contains('was-validated')) {
                    if (this.validity.valid) {
                        this.classList.remove('is-invalid');
                    } else {
                        this.classList.add('is-invalid');
                    }
                }
            });
        });
        
        // Handle checkbox real-time validation
        const checkbox = document.getElementById('conditions-checkbox');
        checkbox.addEventListener('change', function() {
            if (form.classList.contains('was-validated')) {
                if (this.checked) {
                    this.classList.remove('is-invalid');
                } else {
                    this.classList.add('is-invalid');
                }
            }
        });