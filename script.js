document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.sidebar-nav .nav-link');
    const contentSections = document.querySelectorAll('.content-section');
    const jobForm = document.getElementById('post-job-form');
    const formMessage = document.getElementById('form-message');

    // --- Sidebar Navigation Logic ---
    function setActiveSection(targetId) {
        // Remove active class from all links and sections
        navLinks.forEach(link => link.classList.remove('active'));
        contentSections.forEach(section => section.classList.remove('active'));

        // Add active class to the clicked link and corresponding section
        const activeLink = document.querySelector(`.nav-link[data-target="${targetId}"]`);
        const activeSection = document.getElementById(targetId);

        if (activeLink) {
            activeLink.classList.add('active');
        }
        if (activeSection) {
            activeSection.classList.add('active');
             // Update header title based on active section (optional)
            const header = document.querySelector('.main-header h1');
             if(header && activeLink) {
                 header.textContent = activeLink.textContent; // Set header to link text
             }
        } else {
             // Default to dashboard if target not found
             document.querySelector('.nav-link[data-target="dashboard-content"]').classList.add('active');
             document.getElementById('dashboard-content').classList.add('active');
              const header = document.querySelector('.main-header h1');
               if(header) header.textContent = "Dashboard Overview";
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            const targetId = this.getAttribute('data-target');
            setActiveSection(targetId);
        });
    });

    // Set initial active section (e.g., Dashboard)
    setActiveSection('dashboard-content');


    // --- Job Posting Form Logic (Simulation) ---
    if (jobForm) {
        jobForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent actual form submission

            // Clear previous messages
            formMessage.textContent = '';
            formMessage.className = 'form-feedback'; // Reset classes

            // Simulate form processing (e.g., validation, sending data)
            console.log("Form submitted. Simulating processing...");

            // Basic check (in a real app, you'd have more robust validation)
            const title = document.getElementById('job-title').value;
            const description = document.getElementById('job-description').value;
            const category = document.getElementById('job-category').value;
             const budget = document.getElementById('job-budget').value;

            if (!title || !description || !category || !budget) {
                 formMessage.textContent = 'Please fill out all required fields.';
                 formMessage.classList.add('error');
                 return; // Stop processing
            }

            // Simulate success after a short delay
            setTimeout(() => {
                console.log('Job data (simulated):', {
                    title: title,
                    description: description,
                     category: category,
                     budget: budget,
                    skills: document.getElementById('job-skills').value,
                    projectType: document.querySelector('input[name="projectType"]:checked').value
                });

                formMessage.textContent = 'Job posted successfully! (Simulation)';
                formMessage.classList.add('success');

                // Optionally, reset the form
                jobForm.reset();

                // Optionally, navigate the user back to the 'My Jobs' section
                 // setActiveSection('my-jobs-content');

                 // Hide the message after a few seconds
                setTimeout(() => {
                     formMessage.textContent = '';
                     formMessage.className = 'form-feedback';
                 }, 4000); // Hide after 4 seconds

            }, 1000); // Simulate network delay (1 second)
        });
    }

     // Add simple interaction for other elements if needed
     const notificationButton = document.querySelector('.notification-btn');
     if(notificationButton) {
         notificationButton.addEventListener('click', () => {
            alert('Notification area clicked! (Not implemented)');
        });
     }

     console.log("Complex example script loaded.");

}); // End DOMContentLoaded
