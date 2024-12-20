const subjects = {
    'CSE': {
        '1': [
            'Physics',
            'Science of Living Systems',
            'Environmental Science',
            'Differential Equations and Linear Algebra',
            'Engineering Elective',
            'Science Elective',
        ],
        '2': [
            'Transforms and Numerical Methods',
            'Chemistry',
            'English',
            'Basic Electronics',
            'Basic Electrical Engineering',
            'HASS Elective',
        ],
        '3': [ 
            'Scientific and Technical Writing',
            'Probability and Statistics',
            'Industry 4.0 Technologies',
            'Data Structures',
            'Digital Systems Design',
            'Automata Theory and Formal Languages',
        ],
        '4': [ 
            'Discrete Mathematics',
            'Operating Systems',
            'Object Oriented Programming using Java',
            'Database Management Systems',
            'Computer Organization and Architecture',
            'Hass Elective OB|ED|IEC',
        ],
        '5': [
            'Computer Networks',
            'Design & Analysis of Algorithms',
            'High-Performance Computing',
            'Software Engineering',
            'Departmental Elective-1',
            'Departmental Elective-2'
        ],
        '6': [
            'Computer Design',
            'Cloud Computing',
            'Software Project Management (SPM)',
            'Departmental Elective-4',
            'Departmental Elective-5',
            'Open Elective-1'
        ]
    },
    'CSSE': {},
    'CSCE': {},
    'IT': {}
};

// Copy subjects for CSE Semester 1 and 2 to CSSE, CSCE, and IT
['CSSE', 'CSCE', 'IT'].forEach(branch => {
    subjects[branch]['1'] = subjects['CSE']['1'];
    subjects[branch]['2'] = subjects['CSE']['2'];
});

// Load saved branch and semester from localStorage (if available)
const savedBranch = localStorage.getItem('selectedBranch');
const savedSemester = localStorage.getItem('selectedSemester');

if (savedBranch) {
    document.getElementById('branch').value = savedBranch;
}
if (savedSemester) {
    document.getElementById('semester').value = savedSemester;
}

document.getElementById('submit-btn').addEventListener('click', () => {
    const branch = document.getElementById('branch').value;
    const semester = document.getElementById('semester').value;
    
    // Save selected branch and semester to localStorage
    localStorage.setItem('selectedBranch', branch);
    localStorage.setItem('selectedSemester', semester);
    
    const subjectsList = document.getElementById('subjects-list');
    const subjectsTitle = document.getElementById('subjects-title');

    // Clear previous subjects
    subjectsList.innerHTML = '';
    
    if (branch && semester && subjects[branch] && subjects[branch][semester]) {
        const semesterSubjects = subjects[branch][semester];
        semesterSubjects.forEach(subject => {
            const button = document.createElement('button');
            button.textContent = subject;
            button.classList.add('subject-button');

            // Add navigation logic for specific subjects
            button.addEventListener('click', () => {
                if ((branch === 'CSE' || branch === 'CSSE' || branch === 'CSCE' || branch === 'IT' ) && semester === '1') {
                    switch(subject) {
                        case 'Physics':
                            window.location.href = 'physics.html';
                            break;
                        case 'Science of Living Systems':
                            window.location.href = 'sls.html';
                            break;
                        case 'Environmental Science':
                            window.location.href = 'evs.html';
                            break;
                        case 'Differential Equations and Linear Algebra':
                            window.location.href = 'differential_equations_and_linear_algebra.html';
                            break;
                        default:
                            alert(`${subject} page not created yet!`);
                    }
                } else if ((branch === 'CSE' || branch === 'CSSE' || branch === 'CSCE' || branch === 'IT' ) && semester === '2') {
                    switch(subject) {
                        case 'Transforms and Numerical Methods':
                            window.location.href = 'tm.html';
                            break;
                        case 'Chemistry':
                            window.location.href = 'chemistry.html';
                            break;
                        case 'English':
                            window.location.href = 'english.html';
                            break;
                        case 'Basic Electronics':
                            window.location.href = 'betc.html';
                            break;
                        case 'Basic Electrical Engineering':
                            window.location.href = 'bee.html';
                            break;
                        default:
                            alert(`${subject} page not created yet!`);
                    }
                } else if (branch === 'CSE' && semester === '3') {
                    switch(subject) {
                        case 'Scientific and Technical Writing':
                            window.location.href = 'stw.html';
                            break;
                        case 'Probability and Statistics':
                            window.location.href = 'ps.html';
                            break;
                        case 'Industry 4.0 Technologies':
                            window.location.href = 'ind.html';
                            break;
                        case 'Digital Systems Design':
                            window.location.href = 'dsd.html';
                            break;
                        case 'Automata Theory and Formal Languages':
                            window.location.href = 'afl.html';
                            break;
                        case 'Data Structures':
                            window.location.href = 'ds.html';
                            break;
                        default:
                            alert(`${subject} page not created yet!`);
                    }
                }  else if (branch === 'CSE' && semester === '4') {
                    switch(subject) {
                        case 'Discrete Mathematics':
                            window.location.href = 'dm.html';
                            break;
                        case 'Object Oriented Programming using Java':
                            window.location.href = 'oops.html';
                            break;
                        case 'Operating Systems':
                            window.location.href = 'os.html';
                            break;
                        case 'Database Management Systems':
                            window.location.href = 'dbms.html';
                            break;
                        case 'Computer Organization and Architecture':
                            window.location.href = 'coa.html';
                            break;
                        case 'Hass Elective OB|ED|IEC':
                                window.location.href = 'elective.html';
                                break;
                        default:
                            alert(`${subject} page not created yet!`);
                    }
                } else {
                    alert(`${subject} page not created yet!`);
                }
            });

            subjectsList.appendChild(button);
        });
        subjectsTitle.style.display = 'block';
        document.getElementById('submit-btn').textContent = 'Change Selection'; // Change button text
    } else {
        subjectsList.innerHTML = '<button class="subject-button">No subjects available for this selection.</button>';
        subjectsTitle.style.display = 'block';
    }
});