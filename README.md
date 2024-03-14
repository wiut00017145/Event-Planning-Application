# Event-Planning-Application
About the App:
This is an online platform for organizing events. Users can add, edit, and keep track of events, along with their specifics such the date, location, and description. 

### How to Run the App Locally

1. Clone the repository to your local machine: git clone https://github.com/wiut00017145/Event-Planning-Application.git
2. Navigate to the project directory: cd Event-Planning-Application
3. Install dependencies using npm: npm install
4. Start the application: npm start
5. Open your web browser and go to http://localhost:3000 to view the app.

### Application dependencies list

- Node.js
- Express.js
- Body-parser
- Express-validator
- Nodemon
- Pug

Links:

*GitHub* [Github-repository](https://github.com/wiut00017145/Event-Planning-Application)
Hosted Application

Event-Planning-Application/
  ├── controllers/           # Contains files for handling request logic
  ├── routes/                # Contains API and web routes
  │   ├── api/               # API routes
  │   │   ├── event/         # Event-specific API routes
  │   │   │   └── index.js   # Controller for event-related API routes
  │   │   └── index.js       # Main API routes file
  │   └── web/               # Web routes
  │       ├── home/          # Home page-related web routes
  │       │   └── index.js   # Controller for home page web routes
  │       └── index.js       # Main web routes file
  ├── data/                  # Data storage or database related files
  │   └── mock_db.json       # Mock database file
  ├── public/                # Public assets
  │   ├── js/                # JavaScript files
  │   │   └── scripts.js     # Client-side JavaScript file
  │   └── css/               # CSS files
  │       ├── add_update.css # CSS file for add and update pages
  │       └── styles.css     # Main CSS file
  ├── services/              # Business logic services
  │   └── event/             # Event-related services
  │       └── index.js       # Service logic for event-related operations
  ├── validators/            # Input validation logic
  ├── views/                 # View templates
  │   ├── head.pug           # Pug template for the head section of HTML
  │   └── home/              # Views for the home page
  │       ├── add_update.pug # Pug template for add and update pages
  │       └── index.pug      # Pug template for the home page
  ├── README.md              # Documentation file
  ├── .gitignore             # Files and directories to be ignored by Git
  ├── app.js                 # Main application file
  ├── package-lock.json      # Locked dependencies versions
  └── package.json           # Project dependencies and scripts

- Controllers: Contains files responsible for handling request logic.
- Routes: Separates API and web routes for better organization and separation of concerns.
- Data: Stores data-related files, including a mock database file.
- Public: Holds publicly accessible assets such as JavaScript and CSS files.
- Services: Contains business logic services, including event-related operations.
- Validators: Houses input validation logic to ensure data integrity and security.
- Views: Contains view templates, including files for the head section of HTML and views for the home page.
- README.md: Provides documentation for the application.
- .gitignore: Specifies files and directories to be ignored by version control.
- app.js: Serves as the main entry point for the application.
- package-lock.json: Lock file ensuring deterministic dependency resolution.
- package.json: Manifest file listing project metadata, dependencies, and scripts.       


Enjoy with application! :joy: