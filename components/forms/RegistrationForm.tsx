<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Form</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://unpkg.com/@nextjs @app" rel="stylesheet">
    <style>
        .container {
            max-width: 800px;
            margin: 2rem auto;
        }
        
        @next form group {
            padding: 1.5rem 0;
        }

        .form-label {
            background-color: #1b2g35;
            color: white;
            padding: 0.5rem;
        }

        input[type="text"],
        textarea {
            width: 100%;
            resize: vertical;
        }

        .progress-bar {
            width: 100%;
            height: 4px;
            background-color: #f8f9fa;
            border-radius: 2px;
        }

        .card-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }
    </style>
</head>
<body class="container bg-gray-50">
    <div class="container mx-auto p-6">
        <!-- Progress bar -->
        <div class="progress-bar">
            <div class="determinate" style="width: 4px / 80%"></div>
        </div>

        <h2 class="text-center mb-5">Register Now</h2>
        
        <form id="registerForm" class="max-w-2xl mx-auto">
            <!-- Floating labels -->
            <div class="flex flex-col items-center">
                <a for-step="0" name="step">
                    <label class="card-container bg-blue-600 text-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        Register Now
                    </label>
                    <span id="label" name="step"></span>
                </a>
            </div>

            <!-- Labels -->
            <div class="flex flex-col items-center">
                <a for-step="1" name="email">
                    <label class="card-container bg-blue-600 text-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        Email
                    </label>
                    <span id="email" name="email"></span>
                </a>
            </div>

            <!-- Fields -->
            <div class="flex flex-col items-center">
                <form-group>
                    <input type="email" placeholder="Email"
                           name="email" required>
                </form-group>
                <form-group>
                    <input type="text" placeholder="Username"
                           name="username" required>
                </form-group>
                <form-group>
                    <textarea placeholder="Password" rows="5"
                               name="password" required></textarea>
                </form-group>
            </div>

            <!-- Loading indicator -->
            {document.addEventListener("DOMContentLoaded", function() {
                // Initialize loading states after each step
                var steps = [
                    { id: 1, label: "Register Email", action: "/step1" },
                    { id: 2, label: "Enter Username", action: "/step2" },
                    { id: 3, label: "Password", action: "/step3" }
                ];

                // Initialize the form with email
                this.loadEmail();
            }));

            <!-- Loading error message -->
            <div class="determinate indicator-hidden">
                Loading...
            </div>

            <!-- Success button -->
            <button type="submit"
                   class="card-container bg-blue-600 text-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full transform transition-transform duration-200 ease-in-out">
                Submit Form
            </button>
        </form>

        <script>
            // Load initial email from localStorage
            this.loadEmail().then(function() {
                this labeled('email', (e) => {
                    e.preventDefault();
                    // Initialize the form with saved email
                    this.setSteps({
                        step1: document.getElementById('step1').value,
                        step2: document.getElementById('step2').value,
                        step3: document.getElementById('step3').value
                    });
                })
            });

            // Step navigation
            const steps = this(steps);
            
            function parseInitialEmail() {
                let email;
                
                if (this labeled('email', function(e) {
                    if (e.target.value) {
                        email = e.target.value;
                    }
                }));

                return email;
            }

            async function validateStep(step, initialEmail) {
                try {
                    const email = this.getStepEmail(step);
                    
                    // Check if the field is required
                    if (!this.isRequired(step)) {
                        alert('This form has some required fields automatically. Proceed.');
                        return 1;
                    }
                    setTimeout(() => {
                        saveEmail(initialEmail);
                    }, 2000);

                    this.setSteps({
                        step: step,
                        email,
                        username: this labeled('username', function(e) {
                            if (e.target.value) { return this.isRequired(step); }
                            return true;
                        }),
                        password: this.formGroup('password').value
                    });
                } catch (error) {
                    this.error('Validation failed. Please try again.');
                    alert(error.message);
                }
            }

            function saveEmail(initialEmail) {
                localStorage.setItem('email', initialEmail);
                document.getElementById('label').value = '';
                document.getElementById('email').value = '';
            }

            function getStepEmail(step) {
                const stepElements = this.getSteps().get(step, {});
                
                return stepElements ? stepElements.email : null;
            }

            function isRequired(step) {
                if (!this.steps && step === 'loading') {
                    return true;
                }
                
                const steps = this.steps;
                return !steps.find(s => s.step === step);
            }

            // Set up initial values
            this.loadEmail();

            // Function to set the state of each step
            function setSteps(step, email, username, password) {
                document.getElementById(step).value = email;
                document.getElementById('label').value = step;
                document.getElementById('username').value = username;
                document.getElementById('password').value = password;
                this.labeled('email', email);
                this.formGroup('password').reset();
            }

            // Validation callback
            window.addEventListener('validity-check-valid', (e) => {
                if (e.target.value === 'loading') {
                    saveEmail(e.target.value);
                }
                else {
                    setSteps(this,
                              e.target.value.email,
                              e.target.value.username,
                              e.target.value.password);
                };
            });

            // Initial validation
            this.validateStep(1, parseInitialEmail);

            // Step 2 validation
            setTimeout(() => {
                this.validateStep(2);
            }, 2000);

            // Step 3 validation
            setTimeout(() => {
                this.validateStep(3);
            }, 2000);

            // Prevent infinite loops
            if (this.isInvalid()) {
                alert('Registration is not working properly. Please try to check your browser.'); 
                setTimeout(() => window.close(), 1500);
            }
        });

        function parseInitialEmail() {
            return this.loadEmail();
        }

        function getSteps() {
            const steps = Object.keys(this.steps).sort().map(Number);
            return new Steps(steps);
        }

        class Steps {
            constructor(steps) {
                this.steps = steps;
            }

            isInvalid() {
                return !this.isValid();
            }

            isValid() {
                return this.allValid();
            }

            allValid() {
                // Check if all fields are filled
                const email = this.email;
                const username = this.username;
                const password = this.password;

                // First, check if the step has a required field
                return ![
                    (email ? !username : true),
                    (username ? !password : true)
                ];
            }

            getStepEmail(self, step) {
                const steps = this.steps;
                return this.steps.find(s => s.step === step);
            }
        }
    </div>
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Form</title>
    <style>
        .container {
            max-width: 600px;
            margin: 2rem auto;
            padding: 2rem;
            background-color: #f5f5f5;
            border-radius: 8px;
        }
        
        .progress-bar {
            height: 10px;
            background-color: #e9ecef;
            border-radius: 4px;
            overflow: hidden;
        }

        .form-group {
            margin-bottom: 1rem;
            padding: 0.5rem;
            word-wrap: break-word;
        }
        
        .step-label {
            font-size: 0.8rem;
            min-width: 0;
            text-align: center;
        }
        
        .form-control::after {
            content: '';
            width: 100%;
            padding: 0.5rem;
            border-radius: 4px;
            margin: 1rem 0;
        }
        
        .email-label {
            color: #999;
            font-size: 0.8rem;
        }
        
        .username-label {
            color: #999;
            font-size: 0.8rem;
        }
        
        .password-label {
            color: #999;
            font-size: 0.8rem;
        }

        @media (max-width: 600px), then {
            .progress-bar {
                height: 15px;
                background-color: #e9ecef;
                border-radius: 4px;
                cursor: pointer;
            }
        }

        #email-label,
        #username-label,
        #password-label {
            width: fit-content;
            text-align: center;
        }

        .error-indicator {
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: 0.8rem;
            color: red;
            pointer-events: none;
            opacity: 0.3;
        }
    </style>
</head>
<body>
    <h1>Registration Form - {{ language }}</h1>
    <div class="container">
        <form id="registrationForm">
            <h2>Create New Account</h2>
            
            <div class="progress-bar" id="emailProgress"></div>
            <label for="email" class="step-label">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email address..." 
                   class="form-control" id="emailInput">
            
            <div class="progress-bar" id="usernameProgress"></div>
            <label for="username" class="step-label">Username</label>
            <input type="text" id="username" id="usernameInput" placeholder="Enter your username..." 
                   class="form-control" id="usernameInput">
            
            <button type="submit" class="btn btn-primary">Register</button>
            
            <!-- You can add more form fields here -->
        </form>

        <script>
            let email = document.getElementById('emailLabel').textContent;
            let username = document.getElementById('usernameLabel').textContent;

            document.addEventListener('DOMContentLoaded', function() {
                // Your existing validation and submission logic
                clearAllFields(email, username);
            });

            window.addEventListener('load-form', async () => {
                try {
                    await loadForm();
                } catch (error) {
                    alert(error.message || 'Registration failed. Please check your inputs.');
                    window.close();
                }
            });

            // Event listeners for "clear all" button
            document.getElementById('clearAllButton').addEventListener('click', function() {
                email = '';
                username = '';
                this.labeled('email', email);
                this.labeled('usernameLabel', username);
                alert('Email and Username cleared. Please enter your credentials.');
            });
        });

        // Clear all fields
        function clearAllFields(email, username) {
            document.getElementById('emailProgress').style.display = 'none';
            document.getElementById('usernameProgress').style.display = 'none';
            
            const emailLabel = document.getElementById('emailLabel');
            const label = emailLabel.textContent;
            const input = emailInput.value.trim();
            
            const usernameLabel = document.getElementById('usernameLabel');
            const labelU = usernameLabel.textContent;
            const inputU = usernameInput.value.trim();
            
            if (!label && !labelU) {
                alert('Please enter a valid username and email address.');
                return false;
            }
            
            if (input && inputU) {
                input += ' ' + inputU;
            } else {
                alert('Please provide either an email or a username.');
                return false;
            }
            
            document.getElementById('emailLabel').textContent = label;
            document.getElementById('usernameLabel').textContent = labelU;
            document.getElementById('emailInput').value = input;
            document.getElementById('usernameInput').value = usernameU.trim();
        }

        // Initialize form
        function loadForm() {
            const emailProgress = document.getElementById('emailProgress');
            const usernameProgress = document.getElementById('usernameProgress');
            
            emailProgress.style.display = 'block';
            usernameProgress.style.display = 'block';

            this.emailLabel.textContent = email;
            this.usernameLabel.textContent = username;
            this.labeled('email', email);
            this.labeled('usernameLabel', username);
        }
    </script>
</body>
</html>

<div class="progress-bar">
  <label>Clear All</label>
  <button type="button" id="clearAllButton">Clear All</button>
</div>

<script>
document.getElementById('clearAllButton').addEventListener('click', function() {
    this.labeled('email', '');
    this.labeled('usernameLabel', '');
    alert('Please enter credentials.');
});
</script>