type": "function"
      "required": true
      "hint": "Please enter a required email address and password."
    },
    {
      "name": "Login"
      "type": "function"
      "called_from": "Register"
    }
  ],
  "components": [
    {
      "name": "RegisterForm"
      "type": "component"
      "parent": "*"
      "exportable": true
      "description": "A multi-step registration form with floating labels and animations."
    },
    {
      "name": "EmailInput"
      "type": "input"
      "class": "email-input"
      "required": true
      "label": "Email Address"
      "min": "10 characters"
      "max": "256 characters"
    },
    {
      "name": "PasswordInput"
      "type": "input"
      "class": "password-input"
      "label": "Password"
      "min": "8 characters"
      "max": "256 characters"
    },
    {
      "name": "Filename"
      "type": "input"
      "class": "filename-input"
      "label": "Filename"
      "min": "10 characters"
      "max": "256 characters"
    }
  ],
  "styles": [
    {
      "external }: {
        "src": ""
      },
      "rel": "stylesheet",
      "comment": "This is a sample content block. In a real scenario, this would be embedded in an HTML file."
    },
    {
      "name": "animate-spin",
      "type": "animate",
      "class": "animate-spin",
      " delay": "-1s/30"
    }
  ],
  "utils": [
    {
      "name": "save-to- localStorage"
      "type": "function"
      "parent": "RegisterForm"
      "called_from": "use SaveTolocalStorage"
    },
    {
      "name": "use SaveTo(localStorage)"
      "type": "function"
      "export": true
      "called_from": "save_to localStorage"
    }
  ],
  "js": [
    "(data = ['user@example.com', 'password']).map((_, i) => (i === 0 || i === 1) ? { type: 'input', value: data[i], onChange: e => e.target.value === data[i] } : { type: 'hidden', value: data[i]} ).sort((a, b) => a.type === 'hidden' ? -1 : 1).forEach(function (input) { input.type = 'hidden'; input.value = 'user@example.com'; if (input.type === 'hidden') input.value = 'user@example.com'); );"
    ],
    " CSS": [
      "body {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: #f8f9fa;
        font-family: 'Arial', sans-serif;
        overflow: hidden;
      }
      .progress-container {
        position: absolute;
        top: 20px;
        right: 20px;
        background-color: white;
        height: 100%;
        border-radius: 50%;
        box-shadow: 0 0 20px rgba(0,0,0,0.1);
      }
      .form-title {
        font-size: 24px;
        margin-bottom: 20px;
        color: #333;
        text-align: center;
      }
      .input-field {
        width: 100%;
        padding: 8px;
        margin-right: 10px;
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 4px;
        transition: all 0.3s ease;
      }
      .input-field:focus {
        outline: none;
        border-color: rgba(255,255,255,0.18);
        box-shadow: 0 0 5px rgba(255,255,255,0.2);
      }
      .input-field:focus .hidden {
        outline: none;
        border-color: #666;
        box-shadow: 0 0 10px rgba(0,0,0,0.2);
      }
    ].progress-container, .form-title {
      display: block;
    } .form-label {
      position: fixed;
      bottom: 20px;
      left: 30%;
      width: 100%;
      padding: 8px;
      border-bottom: 1px solid #eee;
      z-index: 1;
    } .form-label i {
      margin-right: 8px;
    } .form-label input {
      opacity: 0;
      pointer-events: none;
      transition: all 0.3s ease;
    }
  ], "externals": ["https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"], "lang": "es", "version": "1"
  ]
}