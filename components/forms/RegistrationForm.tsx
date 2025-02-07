<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Form</title>
    
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>

    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500');

        .form-container {
            max-width: 1200px;
            margin: 56em 0;
            background-color: #ffffff;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            border-radius: 8px;
        }

        .form-title {
            font-size: 32px;
            font-weight: 600;
            margin-bottom: 16em;
            color: #3c71ed;
        }

        .form-label {
            width: 4em;
            text-align: center;
            position: relative;
            offset-X: -2em;
        }

        .form-label::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 15px;
            background-color: rgba(0,0,0,0.1);
        }

        .form-label:hover::before {
            background-color: rgba(267,268,274,0.1);
        }

        .progress-container {
            width: 100%;
            height: 6px;
        }
    </style>
</head>
<body class="form-container">
    <div x-data="formData" on changes="saveFormState">
        <div d-type="id" class="form-title" style="width: 3em;"></div>
        
        <form id="formHeader">
            <!-- Label -->
            <ul @click={validateStep}>
                <li class="form-label" @keyframes=savedSteps@ev="start"> 
                    <span@different-class>required</span>
                </li>
                <li for=""@keyframes=savedSteps@ev="start">required</span></li>
            </ul>

            <!-- Form fields -->
            <div x-for="field1" class="form-field">
                <input type="text" class="form-control"
                    @aria-label="step {currentStep}" 
                    @required="required[#{currentStep}]"
                    @valid="valid[#{currentStep}]">
                <button @click="saveFormState" 
                       class="btn btn-primary btn-lg" 
                       disabled="savedSteps[currentStep][field1]" 
                       transition="none">
                    Save Form
                </button>
            </div>

            <div x-for="field2" class="form-field">
                <input type="text" class="form-control"
                    @aria-label="step {currentStep}" 
                    @required="required[#{currentStep}]"
                    @valid="valid[#{currentStep}]">
                <button @click="saveFormState" 
                       class="btn btn-primary btn-lg" 
                       disabled="savedSteps[currentStep][field2]" 
                       transition="none">
                    Save Form
                </button>
            </div>

            <!-- Progress Bar -->
            <div class="progress-container">
                <div id="progress"
                    @click={saveFormState}
                    style="width: 0%;">
                    Loading...
                </div>
            </div>

            <div class="form-title" style="width: 3em;"></div>

            <div class="form-text">
                All fields for step {currentStep + 1}.
            </div>
        </form>

        @keyframes=savedSteps
        {
            0 {},
            100 {},
            1000000 {}
        }
    </div>

    <script>
        let formData = null;
        const savedSteps = {};

        function updateFormData(form) {
            formData = this.value;
            localStorage.setItem('formData', JSON.stringify(formData));
            this.reset();
        }

        useEffect(() => {
            const form = document.getElementById('formHeader');
            const steps = formData.length;

            // Media query for responsive layout
            window.addEventListener('scroll', () => {
                if (steps > 1) {
                    form.style.width = `${window.scrollY + 56}xl`;
                } else {
                    form.style.width = '48em';
                }
            });

            document.querySelectorAll('.form-label').forEach(lable => {
                lable.addEventListener('click', () => this.reset());
            });

            form.addEventListener('submit', saveFormState, { awaited: true});
        }, [steps]);

        // Initial form state
        updateFormData(formData);

        useEffect(() => {
            if (formData.length > 0) {
                currentStep = formData.indexOf(true);
            }
        }, [formData]);

        function saveFormState(formData, step = 0) {
            const formData = JSON.parse(formData);
            
            // Handle validation errors
            if (!formData.length) {
                alert('Error: Please enter all required fields!');
                return;
            }

            let error;
            if (error := this.get('errors', [])) {
                error.message = formData.join('\n');
            }

            updateFormData(formData);
            
            // Save data to localStorage
            localStorage.setItem(`formData=${form}, step=${step + 1}`, 
                JSON.stringify(formData));
        }

        function getErrors() {
            return this.errors;
        }
    </script>
</body>
</html>

lines = []
while True:
    line = input().strip()
    if not line:
        continue
    tokens = line.split()
    if tokens:  # Only add to output if there are field names
        lines.append(tokens)
print(','.join(lines))