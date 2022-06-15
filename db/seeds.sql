USE employees_db;

INSERT INTO department(name)
VALUES ("Marketing"), 
    ("Human Resources");

INSERT INTO role (title, salary, department_id)
VALUES ("Marketing Manager", 80000, 1),
        ("Intern", 20000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sally", "Chan", 1, NULL),
        ("Anna", "Lee", 2, 1);



